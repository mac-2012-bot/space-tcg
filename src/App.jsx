import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard.jsx'
import PlayerHand from './components/PlayerHand.jsx'
import EnergyDisplay from './components/EnergyDisplay.jsx'
import GameState from './components/GameState.jsx'
import CardLibrary from './components/CardLibrary.jsx'
import cardsData from '../cards_metadata.json'
import './App.css'

function App() {
  const [gameState, setGameState] = useState({
    players: [
      {
        id: 1,
        name: 'Player 1',
        army: 'Vulcanis',
        hand: [],
        board: [],
        cemetery: [],
        energy: 3,
        maxEnergy: 5,
        resources: 0,
        health: 20
      },
      {
        id: 2,
        name: 'Player 2',
        army: 'Glacies',
        hand: [],
        board: [],
        cemetery: [],
        energy: 3,
        maxEnergy: 5,
        resources: 0,
        health: 20
      }
    ],
    currentPlayer: 1,
    turn: 1,
    gamePhase: 'setup', // setup, energy, draw, action, end
    winner: null,
    selectedCard: null,
    dragCard: null
  })

  const [gameMode, setGameMode] = useState('local') // local, online

  // Initialize game
  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const newPlayers = gameState.players.map(player => {
      const armyCards = cardsData.filter(card => card.army === player.army)
      const startingDeck = getStartingDeck(armyCards)
      const startingHand = drawStartingHand(startingDeck)
      const remainingDeck = startingDeck.filter(card => !startingHand.includes(card))
      
      return {
        ...player,
        deck: remainingDeck,
        hand: startingHand,
        board: []
      }
    })

    setGameState(prev => ({
      ...prev,
      players: newPlayers,
      gamePhase: 'energy'
    }))
  }

  const getStartingDeck = (armyCards) => {
    // Create a balanced starting deck for each army
    const transports = armyCards.filter(card => card.type === 'Transporte')
    const commands = armyCards.filter(card => card.type === 'Comando')
    const combats = armyCards.filter(card => card.type === 'Combate')
    const explorations = armyCards.filter(card => card.type === 'Exploração')
    const constructions = armyCards.filter(card => card.type === 'Construção')

    // Mix cards from different types
    const deck = []
    
    // Add 3-4 cards of each type
    transports.slice(0, 3).forEach(card => deck.push(card))
    commands.slice(0, 3).forEach(card => deck.push(card))
    combats.slice(0, 3).forEach(card => deck.push(card))
    explorations.slice(0, 2).forEach(card => deck.push(card))
    constructions.slice(0, 2).forEach(card => deck.push(card))

    return shuffleDeck(deck)
  }

  const drawStartingHand = (deck) => {
    return deck.slice(0, 5) // Draw 5 cards initially
  }

  const shuffleDeck = (deck) => {
    return [...deck].sort(() => Math.random() - 0.5)
  }

  const drawCard = () => {
    const currentPlayer = gameState.players.find(p => p.id === gameState.currentPlayer)
    if (currentPlayer.deck.length === 0) {
      // Reshuffle cemetery if deck is empty
      if (currentPlayer.cemetery.length > 0) {
        const newDeck = shuffleDeck([...currentPlayer.cemetery])
        setGameState(prev => ({
          ...prev,
          players: prev.players.map(p => 
            p.id === currentPlayer.id ? { ...p, deck: newDeck, cemetery: [] } : p
          )
        }))
      } else {
        // Game over - no cards left
        return
      }
    }

    const card = currentPlayer.deck[0]
    const newDeck = currentPlayer.deck.slice(1)

    setGameState(prev => ({
      ...prev,
      players: prev.players.map(p => 
        p.id === currentPlayer.id 
          ? { ...p, hand: [...p.hand, card], deck: newDeck } 
          : p
      )
    }))
  }

  const playCard = (card) => {
    const currentPlayer = gameState.players.find(p => p.id === gameState.currentPlayer)
    
    // Check if player has enough energy
    if (currentPlayer.energy < card.cost) {
      alert('Not enough energy!')
      return
    }

    // Remove card from hand
    const newHand = currentPlayer.hand.filter(c => c.id !== card.id)
    
    // Add card to board
    const newBoard = [...currentPlayer.board, card]

    // Deduct energy
    setGameState(prev => ({
      ...prev,
      players: prev.players.map(p => 
        p.id === currentPlayer.id 
          ? { ...p, 
              hand: newHand,
              board: newBoard,
              energy: p.energy - card.cost } 
          : p
      )
    }))
  }

  const endTurn = () => {
    const currentPlayer = gameState.players.find(p => p.id === gameState.currentPlayer)
    const nextPlayer = gameState.players.find(p => p.id !== gameState.currentPlayer)

    // Apply army passive bonus
    const newCurrentPlayer = applyArmyBonus(currentPlayer)
    const newNextPlayer = applyArmyBonus(nextPlayer)

    // Reset energy
    setGameState(prev => ({
      ...prev,
      players: [
        newCurrentPlayer,
        newNextPlayer
      ],
      currentPlayer: nextPlayer.id,
      turn: prev.turn + 1,
      gamePhase: 'energy',
      energy: newNextPlayer.maxEnergy,
      selectedCard: null
    }))
  }

  const applyArmyBonus = (player) => {
    const armyBonus = {
      Vulcanis: () => ({ ...player, resources: player.resources + 1 }),
      Glacies: () => ({ ...player, maxEnergy: player.maxEnergy + 1 }),
      Silva: () => ({ ...player, health: player.health + 1 }),
      Aether: () => ({ ...player, energy: Math.min(player.energy + 1, player.maxEnergy) }),
      Mechanos: () => ({ ...player, resources: player.resources + 2 })
    }
    
    return armyBonus[player.army]?.() || player
  }

  const attack = (attackerId, targetId) => {
    const attacker = gameState.players.find(p => p.id === gameState.currentPlayer).board.find(c => c.id === attackerId)
    const target = gameState.players.find(p => p.id !== gameState.currentPlayer).board.find(c => c.id === targetId)

    if (!attacker || !target) return

    // Calculate damage
    const damage = Math.max(0, attacker.attack - target.defense)
    const newHealth = target.health - damage

    // Update target
    const targetPlayer = gameState.players.find(p => p.id !== gameState.currentPlayer)
    const newTargetBoard = targetPlayer.board.map(c => 
      c.id === targetId ? { ...c, health: newHealth } : c
    )

    // Check if target died
    if (newHealth <= 0) {
      // Move to cemetery
      const newCemetery = [...targetPlayer.cemetery, { ...target, health: 0 }]
      const newBoard = newTargetBoard.filter(c => c.id !== targetId)

      setGameState(prev => ({
        ...prev,
        players: prev.players.map(p => 
          p.id === targetPlayer.id 
            ? { ...p, board: newBoard, cemetery: newCemetery } 
            : p
        )
      }))
    } else {
      setGameState(prev => ({
        ...prev,
        players: prev.players.map(p => 
          p.id === targetPlayer.id 
            ? { ...p, board: newTargetBoard } 
            : p
        )
      }))
    }
  }

  const useSpecialAbility = (card) => {
    // Implement special abilities based on card type
    const abilities = {
      Transporte: () => {
        // Generate resources
        setGameState(prev => ({
          ...prev,
          players: prev.players.map(p => 
            p.id === gameState.currentPlayer 
              ? { ...p, resources: p.resources + 2 } 
              : p
          )
        }))
      },
      Comando: () => {
        // Buff other cards
        setGameState(prev => ({
          ...prev,
          players: prev.players.map(p => 
            p.id === gameState.currentPlayer 
              ? { ...p, board: p.board.map(c => ({ ...c, attack: c.attack + 1 })) } 
              : p
          )
        }))
      },
      Combate: () => {
        // Focused attack
        setGameState(prev => ({
          ...prev,
          selectedCard: card
        }))
      },
      Exploração: () => {
        // Draw extra card
        drawCard()
      },
      Construção: () => {
        // Heal damaged cards
        setGameState(prev => ({
          ...prev,
          players: prev.players.map(p => 
            p.id === gameState.currentPlayer 
              ? { ...p, board: p.board.map(c => ({ ...c, health: Math.min(c.health + 2, 5) })) } 
              : p
          )
        }))
      }
    }

    abilities[card.type]?.()
  }

  const { currentPlayer: currentPlayerId, gamePhase, players } = gameState
  const currentPlayer = players.find(p => p.id === currentPlayerId)

  return (
    <div className="app-container">
      <h1>🚀 SPACE TCG - Conflito Galáctico</h1>
      <div className="game-mode">
        <button className={gameMode === 'local' ? 'active' : ''} onClick={() => setGameMode('local')}>Local Game</button>
        <button className={gameMode === 'online' ? 'active' : ''} onClick={() => setGameMode('online')}>Online Game</button>
      </div>

      <GameState
        turn={gameState.turn}
        currentPlayer={currentPlayer.name}
        phase={gamePhase}
        winner={gameState.winner}
      />

      <EnergyDisplay
        energy={currentPlayer.energy}
        maxEnergy={currentPlayer.maxEnergy}
        resources={currentPlayer.resources}
        army={currentPlayer.army}
      />

      <PlayerHand
        hand={currentPlayer.hand}
        onPlayCard={playCard}
        onUseAbility={useSpecialAbility}
        selectedCard={gameState.selectedCard}
        dragCard={gameState.dragCard}
      />

      <GameBoard
        board={currentPlayer.board}
        onAttack={attack}
        currentPlayer={currentPlayer}
        opponent={players.find(p => p.id !== currentPlayerId)}
      />

      <CardLibrary cards={cardsData} />
    </div>
  )
}

export default App