import { useState } from 'react'
import './GameBoard.css'

function GameBoard({ board, onAttack, currentPlayer, opponent }) {
  const [selectedAttacker, setSelectedAttacker] = useState(null)

  const handleAttack = (attackerId) => {
    if (selectedAttacker === attackerId) {
      setSelectedAttacker(null)
    } else {
      setSelectedAttacker(attackerId)
    }
  }

  const handleTarget = (targetId) => {
    if (selectedAttacker) {
      onAttack(selectedAttacker, targetId)
      setSelectedAttacker(null)
    }
  }

  return (
    <div className="game-board">
      <h2>🛡️ Tabuleiro de {currentPlayer.name}</h2>
      <div className="board-grid">
        {board.map((card) => (
          <div
            key={card.id}
            className={`card-slot ${selectedAttacker === card.id ? 'selected' : ''}`}
            onClick={() => handleAttack(card.id)}
          >
            <div className="card">
              <div className="card-header">
                <span className="card-name">{card.name}</span>
                <span className="card-type">{card.type}</span>
              </div>
              <div className="card-stats">
                <span>🔥 {card.attack}</span>
                <span>⚡ {card.defense}</span>
                <span>❤️ {card.health || 5}</span>
              </div>
              <div className="card-ability">
                {card.ability}
              </div>
              <div className="card-cost">Custo: {card.cost} ⚡</div>
            </div>
          </div>
        ))}
      </div>

      <h2>🛡️ Tabuleiro do Oponente</h2>
      <div className="board-grid">
        {opponent?.board.map((card) => (
          <div
            key={card.id}
            className={`card-slot ${selectedAttacker ? 'targetable' : ''}`}
            onClick={() => handleTarget(card.id)}
          >
            <div className="card">
              <div className="card-header">
                <span className="card-name">{card.name}</span>
                <span className="card-type">{card.type}</span>
              </div>
              <div className="card-stats">
                <span>🔥 {card.attack}</span>
                <span>⚡ {card.defense}</span>
                <span>❤️ {card.health || 5}</span>
              </div>
              <div className="card-cost">Custo: {card.cost} ⚡</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameBoard