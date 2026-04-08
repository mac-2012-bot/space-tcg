import './CardLibrary.css'

function CardLibrary({ cards }) {
  return (
    <div className="card-library">
      <h2>📖 Biblioteca de Cartas</h2>
      <p>Ver todas as cartas disponíveis no jogo</p>
      
      <div className="library-grid">
        {cards.map((card) => (
          <div key={card.id} className="library-card">
            <div className="card-header">
              <span className="card-name">{card.name}</span>
              <span className={`card-army army-${card.army}`}>{card.army}</span>
            </div>
            <div className="card-type-badge">
              {card.type === 'Transporte' && '🚛 Transporte'}
              {card.type === 'Comando' && '🎯 Comando'}
              {card.type === 'Combate' && '⚔️ Combate'}
              {card.type === 'Exploração' && '🔍 Exploração'}
              {card.type === 'Construção' && '🏗️ Construção'}
            </div>
            <div className="card-details">
              <div className="card-stat">Custo: {card.cost} ⚡</div>
              <div className="card-stat">Ataque: {card.attack} 🔥</div>
              <div className="card-stat">Defesa: {card.defense} ⚡</div>
              <div className="card-stat">Saúde: {card.health || 5} ❤️</div>
            </div>
            <div className="card-ability">
              {card.ability}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardLibrary