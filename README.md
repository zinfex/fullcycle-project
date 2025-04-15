# Gateway de Pagamentos

## 📋 Sobre o Projeto

Este projeto foi desenvolvido durante a Imersão Full Stack & Full Cycle, onde construímos um Gateway de Pagamento completo utilizando arquitetura de microsserviços.

O objetivo é demonstrar a construção de um sistema distribuído moderno, com separação de responsabilidades e comunicação assíncrona.

## 🚀 Ordem de Execução dos Serviços

Para executar o projeto completo, os serviços devem ser iniciados na seguinte ordem:

1. **API Gateway (Go)** - Deve ser executado primeiro pois configura a rede Docker
2. **Frontend (Next.js)** - Interface de usuário que se comunica com a API Gateway

## ⚙️ Pré-requisitos Gerais

Para executar todos os componentes do projeto, você precisará ter instalado:

- Docker
- Docker Compose
- Git

## 📊 Regras de Negócio Importantes

- Transações acima de R$ 10.000 são automaticamente enviadas para análise e ficam com status "pendente"
- Transações menores são processadas imediatamente
- A interface mostra status diferenciados por cores:
  - 🟢 Verde (aprovado)
  - 🟡 Amarelo (pendente)
  - 🔴 Vermelho (rejeitado)

## 🏗️ Componentes do Sistema

### Frontend (Next.js)

- Interface do usuário para gerenciamento de contas e processamento de pagamentos
- Desenvolvido com Next.js para garantir performance e boa experiência do usuário

### Gateway (Go)

- Sistema principal de processamento de pagamentos
- Gerencia contas, transações e coordena o fluxo de pagamentos
- Publica eventos de transação no Kafka para análise de fraude
