import './EnergyDisplay.css'

function EnergyDisplay({ energy, maxEnergy, resources, army }) {
  const armyColors = {
    Vulcanis: '#ff6b6b',
    Glacies: '#43e97b',
    Silva: '#f9d423',
    Aether: '#4facfe',
    Mechanos: '#6c5ce7'
  }

  return (
    <div className="energy-display">
      <div className="energy-bars">
        <div className="energy-bar">
          <span>Energia:</span>
          <div className="energy-container">
            {[...Array(maxEnergy)].map((_, i) => (
              <div
                key={i}
                className={`energy-cell ${i < energy ? 'filled' : 'empty'}`}
              />
            ))}
          </div>
        </div>
        <div className="resources">
          <span>💰 Recursos: {resources}</span>
        </div>
      </div>
      <div className="army-info">
        <div className="army-badge" style={{ backgroundColor: armyColors[army] }}>
          {army}
        </div>
        <div className="army-bonus">
          <span>🎁 Bónus Passivo:</span>
          {army === 'Vulcanis' && 'Gera +1 recurso por turno'}
          {army === 'Glacies' && 'Máximo de energia +1'}
          {army === 'Silva' && 'Saúde +1 por turno'}
          {army === 'Aether' && 'Recupera +1 energia por turno'}
          {army === 'Mechanos' && 'Gera +2 recursos por turno'}
        </div>
      </div>
    </div>
  )
}

export default EnergyDisplay