# 💰 Fintech Dashboard

Um dashboard de vendas desenvolvido com React, TypeScript e Vite, baseado no curso da Origamid. Este projeto apresenta uma interface moderna para visualização e análise de dados de vendas com gráficos interativos e filtros por período.

## 🚀 Deploy

- **Aplicação Online**: [fintech-orcin-sigma.vercel.app](https://fintech-orcin-sigma.vercel.app/)
- **Repositório**: [github.com/IsaqueTADS/fintech](https://github.com/IsaqueTADS/fintech)

## ✨ Funcionalidades

### 📊 Dashboard de Resumo

- **Visualização de Vendas**: Total de vendas realizadas
- **Recebidos**: Valor total de vendas com status "pago"
- **Processando**: Valor de vendas em processamento
- **Gráfico Interativo**: Linha temporal mostrando vendas por status (pago, processando, falha)

### 📈 Página de Vendas

- **Lista Completa**: Todas as vendas com filtros por período
- **Detalhes da Venda**: ID, nome do cliente e valor formatado
- **Navegação**: Links para detalhes individuais de cada venda

### 🔍 Página de Detalhes

- **Venda Individual**: Visualização detalhada de uma venda específica
- **Informações Completas**: Status, forma de pagamento, parcelas e data

### 🎛️ Filtros e Controles

- **Seleção de Período**: Filtro por data de início e fim
- **Atualização Automática**: Dados são recarregados automaticamente ao alterar filtros
- **Interface Responsiva**: Adaptável para desktop, tablet e mobile

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca principal para interface
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **React Router DOM 7.9.4** - Roteamento da aplicação

### Visualização de Dados

- **Recharts 3.3.0** - Gráficos interativos e responsivos

### Desenvolvimento

- **ESLint** - Linting e formatação de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── DateInput.tsx   # Input de data
│   ├── DateRange.tsx   # Seletor de período
│   ├── GraficoVendas.tsx # Gráfico de vendas
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── Loading.tsx     # Componente de carregamento
│   ├── MesBtn.tsx      # Botão de mês
│   ├── Meses.tsx       # Seletor de meses
│   ├── Sidenav.tsx     # Navegação lateral
│   └── VendaItem.tsx   # Item individual de venda
├── context/            # Gerenciamento de estado
│   └── DataContext.tsx # Contexto global de dados
├── hooks/              # Hooks customizados
│   └── useFetch.tsx    # Hook para requisições HTTP
├── helpers/            # Funções auxiliares
│   └── formatCurrency.ts # Formatação de moeda
├── pages/              # Páginas da aplicação
│   ├── Resumo.tsx      # Dashboard principal
│   ├── Vendas.tsx      # Lista de vendas
│   └── Venda.tsx       # Detalhes da venda
├── assets/             # Recursos estáticos
│   ├── fintech.svg     # Logo da aplicação
│   ├── FintechSVG.tsx  # Componente SVG
│   └── icons/          # Ícones da aplicação
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── Style.css           # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/IsaqueTADS/fintech.git

# Entre no diretório
cd fintech

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

## 🎨 Design e Interface

### Paleta de Cores

- **Primária**: `#463220` (Marrom escuro)
- **Secundária**: `#66593c` (Marrom médio)
- **Clara**: `#eceadd` (Bege claro)
- **Fundo**: `#f7f8f5` (Branco acinzentado)
- **Branco**: `#ffffff`

### Características Visuais

- **Layout Grid**: Sistema de grid responsivo
- **Tipografia**: Sans-serif moderna e legível
- **Espaçamento**: Sistema consistente de gaps e margens
- **Responsividade**: Adaptação para diferentes tamanhos de tela

## 📊 API e Dados

A aplicação consome dados da API da Origamid:

- **Endpoint**: `https://data.origamid.dev/vendas/`
- **Parâmetros**: `inicio` e `final` (datas no formato YYYY-MM-DD)
- **Formato**: JSON com array de vendas

### Estrutura dos Dados

```typescript
interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
}
```

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado

- **Context API**: Estado global compartilhado
- **Hooks Customizados**: `useFetch` para requisições HTTP
- **Estado Local**: Filtros de data e carregamento

### Performance

- **Lazy Loading**: Carregamento sob demanda
- **Abort Controller**: Cancelamento de requisições
- **Memoização**: Otimização de re-renderizações

### Responsividade

- **Mobile First**: Design adaptável
- **Breakpoints**: 1000px e 700px
- **Grid Responsivo**: Layout flexível

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido como parte do aprendizado em:

- **React com TypeScript**: Desenvolvimento de interfaces modernas
- **Gerenciamento de Estado**: Context API e hooks customizados
- **Visualização de Dados**: Gráficos interativos com Recharts
- **Roteamento**: Navegação entre páginas
- **Responsividade**: Design adaptável para diferentes dispositivos

## 📚 Baseado no Curso

Este projeto foi desenvolvido seguindo o curso **React com TypeScript** da [Origamid](https://www.origamid.com/), uma das principais plataformas de ensino de desenvolvimento web no Brasil.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar feedback

## 📄 Licença

Este projeto é de uso educacional e foi desenvolvido para fins de aprendizado.
