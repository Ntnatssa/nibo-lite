# 🏦 Finance Dashboard - Nibo Lite

Um dashboard de gestão financeira pessoal moderno, desenvolvido para demonstrar práticas avançadas de desenvolvimento front-end. A aplicação permite o controle de entradas e saídas com atualizações reativas e interface limpa.

## 🚀 Funcionalidades
- **Painel de Controle**: Cards de resumo com Saldo Total, Receitas e Despesas.
- **Lançamentos reativos**: Formulário para adição de novas transações com atualização instantânea.
- **Histórico detalhado**: Listagem organizada de movimentações financeiras.
- **Cálculos em Tempo Real**: Recálculo automático de balanço utilizando reatividade granular.

## 🛠️ Tecnologias e Conceitos Aplicados
- **Angular 18+**: Uso das funcionalidades mais recentes do framework.
- **Signals (Gerenciamento de Estado)**: Implementação de `signal` e `computed` para uma aplicação ultra-veloz e reativa.
- **Standalone Components**: Arquitetura moderna que elimina a necessidade de módulos complexos.
- **TypeScript**: Tipagem estática para maior segurança e manutenção do código.
- **Clean Code**: Separação clara de responsabilidades entre lógica (TS) e apresentação (HTML/CSS).

## 📂 Estrutura do Projeto
O projeto foi estruturado seguindo padrões de componentização:
- `SummaryCard`: Componente reutilizável para exibição de métricas.
- `TransactionForm`: Gerenciamento de entradas de dados e validação simples.
- `TransactionList`: Exibição dinâmica de dados recebidos via Data Binding.

## 💻 Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/nibo-lite.git](https://github.com/SEU_USUARIO/nibo-lite.git)

2. Instale as dependências:
   ```bash
   npm install
   
3. Inicie o servidor:
   ```bash
   ng serve

### 💡 Dica Extra:
Ao mudar o README para esta versão, o projeto passa a ser um **exemplo de competência técnica** que serve para qualquer empresa. Se o recrutador específico te perguntar sobre ele, você menciona que usou esse projeto para colocar em prática o que há de mais novo no Angular.

Para atualizar no GitHub, o processo é o mesmo:
1. Salve o arquivo.
2. No terminal:
   ```bash
   git add README.md
   git commit -m "docs: improve project description"
   git push origin main