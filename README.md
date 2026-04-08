# 🚀 SPACE TCG - Jogo de Cartas Colecionáveis

Um jogo de cartas colecionáveis (TCG) com tema de **naves espaciais** e conflito galáctico entre 5 planetas únicos!

## 🎮 **Visão Geral**

SPACE TCG é um jogo de estratégia por turnos onde dois jogadores se enfrentam num conflito galáctico. Cada jogador escolhe um dos 5 planetas (exércitos) e tenta derrotar o oponente usando diferentes tipos de naves com habilidades únicas.

## 🌌 **Tema e Conflito**

**Conflito Galáctico entre 5 Planetas (Exércitos):**
- **Vulcanis** 🔥 - Planeta vulcânico com naves poderosas de ataque
- **Glacies** ❄️ - Planeta gelado com defesa superior
- **Silva** 🌳 - Planeta florestal com regeneração natural
- **Aether** 💫 - Planeta etéreo com energia cósmica
- **Mechanos** ⚙️ - Planeta mecânico com tecnologia avançada

## 🚀 **Tipos de Naves (Classes)**

### 1. **Transporte** 🚛
- **Função:** Gera recursos por turno
- **Exemplo:** Cruzeiro Estelar (Vulcanis), Geleira Flutuante (Glacies)
- **Habilidade:** "No início do teu turno, ganha +1 recurso"

### 2. **Comando** 🎯
- **Função:** Fornece bónus a outras naves no tabuleiro
- **Exemplo:** Nave de Comando (Vulcanis), Comando Glacial (Glacies)
- **Habilidade:** "Todas as tuas naves ganham +1 de ataque/defesa"

### 3. **Combate** ⚔️
- **Função:** Focada em dano direto e defesa
- **Exemplo:** Caça Vulcânico (Vulcanis), Destruidor de Gelo (Glacies)
- **Habilidade:** "Pode atacar duas vezes por turno"

### 4. **Exploração** 🔍
- **Função:** Permite comprar cartas extras ou ver o deck do oponente
- **Exemplo:** Sonda Exploradora (Vulcanis), Patrulha Polar (Glacies)
- **Habilidade:** "Compra uma carta extra por turno"

### 5. **Construção** 🏗️
- **Função:** Cura naves danificadas ou reduz custos
- **Exemplo:** Estação de Reparos (Vulcanis), Base de Congelamento (Glacies)
- **Habilidade:** "Cura 1 ponto de saúde a todas as naves"

## 🎯 **Sistema de Jogo**

### **Fases do Turno:**
1. **Fase de Energia** - Recupera energia máxima
2. **Fase de Compra** - Desenha cartas (até 7 na mão)
3. **Fase de Ação** - Jogar cartas e atacar
4. **Fase Final** - Verificação de vitória

### **Recursos:**
- **Energia (⚡)** - Usada para jogar cartas
- **Recursos (💰)** - Usados para comprar cartas especiais
- **Saúde (❤️)** - Quando chega a 0, o jogador perde

### **Combate:**
- Cartas atacam outras cartas ou o oponente diretamente
- Dano = Ataque - Defesa
- Cartas destruídas vão para o cemitério

## 📊 **Bónus Passivos por Exército**

| Exército | Bónus Passivo | Efeito |
|----------|---------------|---------|
| **Vulcanis** 🔥 | +1 recurso/turno | Gera recursos adicionais |
| **Glacies** ❄️ | +1 energia máxima | Permite jogar mais cartas |
| **Silva** 🌳 | +1 saúde/turno | Mantém naves mais tempo no tabuleiro |
| **Aether** 💫 | +1 energia/turno | Recupera energia automaticamente |
| **Mechanos** ⚙️ | +2 recursos/turno | Gera muitos recursos |

## 📁 **Estrutura do Projeto**

```
space-tcg/
├── package.json          # Configuração do projeto
├── vite.config.js        # Configuração do Vite
├── src/
│   ├── main.jsx          # Ponto de entrada React
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   ├── index.css         # CSS base
│   ├── components/       # Componentes React
│   │   ├── GameBoard.jsx
│   │   ├── PlayerHand.jsx
│   │   ├── EnergyDisplay.jsx
│   │   ├── GameState.jsx
│   │   ├── CardLibrary.jsx
│   │   └── *.css          # Estilos de componentes
│   └── assets/           # Imagens e recursos
└── cards_metadata.json   # Base de dados de cartas
```

## 🛠 **Tecnologias Utilizadas**

- **Frontend:** React.js + Vite.js
- **Estado:** React Hooks (useState, useEffect)
- **Estilos:** CSS puro com animações
- **Arquitetura:** Componentes modulares
- **Drag & Drop:** Implementação básica com eventos de clique

## 🚀 **Como Começar**

### **Pré-requisitos:**
- Node.js (v18+)
- npm ou yarn

### **Instalação:**
```bash
# Clone o repositório
cd /home/the-agent/.openclaw/workspace/space-tcg

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# O jogo abrirá automaticamente em http://localhost:3000
```

### **Como Jogar:**
1. Escolhe o modo de jogo (Local ou Online)
2. Cada jogador recebe um exército aleatório
3. Começa o turno com 3 energia
4. Compra cartas e joga no tabuleiro
5. Ataca o oponente ou as suas naves
6. Gerencia recursos e estratégia!

## 🎨 **Design Visual**

- **Tema espacial** com gradientes azuis e roxos
- **Cartas coloridas** por exército:
  - Vulcanis: Vermelho/laranja 🔥
  - Glacies: Verde/azul ❄️
  - Silva: Verde/amarelo 🌳
  - Aether: Azul/roxo 💫
  - Mechanos: Roxo/azul ⚙️
- **Animações** suaves e feedback visual
- **Interface intuitiva** com drag-and-drop

## 📋 **Cartas Disponíveis**

O jogo inclui **25 cartas únicas** (5 por exército) com:
- Nomes temáticos
- Custos variados (2-6 energia)
- Habilidades especiais únicas
- Arte conceptual (placeholders coloridos)

## 🔧 **Possíveis Expansões**

- **Modo Online:** Multiplayer em tempo real
- **Novos Exércitos:** Mais planetas e tipos de naves
- **Cartas Especiais:** Habilidades únicas e poderosas
- **Modo Campanha:** Missões e objetivos
- **Deck Building:** Criar decks personalizados
- **PWA:** Transformar em Progressive Web App

## 📖 **Exemplo de Deck Inicial**

**Exército Vulcanis - Deck de Início:**
1. Cruzeiro Estelar (Transporte) - Custo: 2
2. Nave de Comando (Comando) - Custo: 3
3. Caça Vulcânico (Combate) - Custo: 4
4. Sonda Exploradora (Exploração) - Custo: 2
5. Estação de Reparos (Construção) - Custo: 3

**Estratégia:** Foco em ataque rápido e geração de recursos!

## 🎯 **Estratégias Recomendadas**

### **Vulcanis (Ataque):**
- Foca em cartas de combate
- Usa naves de comando para buffar o ataque
- Gera recursos com transportes

### **Glacies (Defesa):**
- Prioriza defesa e regeneração
- Usa cartas de construção para reduzir custos
- Defende com geleiras flutuantes

### **Silva (Equilíbrio):**
- Combina regeneração com ataque
- Usa árvores de vida para manter saúde
- Explora com sondas florestais

### **Aether (Energia):**
- Recupera energia automaticamente
- Usa portais para buffar ataque
- Compra cartas agressivamente

### **Mechanos (Recursos):**
- Gera muitos recursos com transportes
- Reduz custos com fábrica de armas
- Usa tanques de batalha como defesa

## 📝 **Notas de Desenvolvimento**

- **Arquitetura:** O jogo usa React com estado gerenciado no componente App.jsx
- **Lógica:** Todas as regras de jogo estão implementadas em JavaScript puro
- **Balanceamento:** Os decks iniciais são equilibrados para jogabilidade justa
- **Performance:** O jogo é leve e roda em qualquer navegador moderno
- **Acessibilidade:** Interface intuitiva com feedback visual claro

## 🏆 **Próximos Passos**

- [ ] Adicionar modo online multiplayer
- [ ] Implementar sistema de decks personalizados
- [ ] Adicionar mais cartas e exércitos
- [ ] Criar modo campanha com missões
- [ ] Adicionar sistema de conquistas
- [ ] Implementar PWA para instalação
- [ ] Adicionar sons e música de fundo

## 📄 **Licença**

Este projeto é open source e pode ser usado livremente.

---

**Desenvolvido com ❤️ por MacBot** 🤖

#SpaceTCG #TCG #React #Vite #JogoDeCartas #NavesEspaciais