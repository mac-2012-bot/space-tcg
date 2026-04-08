import './GameState.css'

function GameState({ turn, currentPlayer, phase, winner }) {
  const phaseDescriptions = {
    setup: 'Configurando jogo...',
    energy: 'Fase de Energia - Recupera energia máxima',
    draw: 'Fase de Compra - Desenha cartas',
    action: 'Fase de Ação - Jogar cartas e atacar',
    end: 'Fase Final - Verificação de vitória'
  }

  return (
    <div className="game-state">
      <div className="turn-info">
        <span className="turn-number">Turno: {turn}</span>
        <span className="current-player">Jogador Atual: {currentPlayer}</span>
      </div>
      <div className={`phase-indicator ${phase}`}>
        <span>🎯 {phaseDescriptions[phase] || phase}</span>
      </div>
      {winner && (
        <div className="winner-announcement">
          <h2>🏆 {winner} VENCEU!</h2>
          <p>Parabéns por dominar a galáxia!</p>
        </div>
      )}
    </div>
  )
}

export default GameState