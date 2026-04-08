import { useDrag } from 'react-dnd'
import './PlayerHand.css'

function PlayerHand({ hand, onPlayCard, onUseAbility, selectedCard, dragCard }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: () => null,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className="player-hand">
      <h2>📚 Mão de Cartas - {hand.length}/7</h2>
      <div className="hand-grid">
        {hand.map((card) => (
          <div
            key={card.id}
            className={`hand-card ${selectedCard?.id === card.id ? 'selected' : ''}`}
            onClick={() => onPlayCard(card)}
            ref={drag}
          >
            <div className="card">
              <div className="card-header">
                <span className="card-name">{card.name}</span>
                <span className={`card-army army-${card.army}`}>{card.army}</span>
              </div>
              <div className="card-type-badge">
                {card.type === 'Transporte' && '🚛'}
                {card.type === 'Comando' && '🎯'}
                {card.type === 'Combate' && '⚔️'}
                {card.type === 'Exploração' && '🔍'}
                {card.type === 'Construção' && '🏗️'}
              </div>
              <div className="card-stats">
                <span>🔥 {card.attack}</span>
                <span>⚡ {card.defense}</span>
              </div>
              <div className="card-cost">Custo: {card.cost} ⚡</div>
              <div className="card-ability-preview">
                {card.ability.split(' ').slice(0, 3).join(' ')}...
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="hand-instructions">
        {dragCard ? '🎯 Cartas podem ser arrastadas para jogar' : 'Clique numa carta para jogar no tabuleiro'}
      </p>
    </div>
  )
}

export default PlayerHand