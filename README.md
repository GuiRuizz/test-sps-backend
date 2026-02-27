# API Node.js – Gestão de Usuários

Esta é uma API RESTful desenvolvida em **Node.js** com **Express**, **JWT Authentication** e **versionamento de rotas** (`/v1`).  
Ela permite gerenciar usuários com operações de CRUD e autenticação via login.

---

## 📑 Sumário

- [⚡ Funcionalidades](#-funcionalidades)
- [📈 Boas Práticas Aplicadas](#-boas-práticas-aplicadas)
- [🗂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Tecnologias](#-tecnologias)
- [⚙️ Configuração](#-tecnologias)
- [▶️ Executando a Aplicação](#️-executando-a-aplicação)
- [🧪 Executando os testes unitários](#-executando-os-testes-unitários)
- [🔗 Rotas da API](#-rotas-da-api)
- [🔄 Versionamento](#-versionamento)
- [👨‍💻 Autor](#-autor)
- [📜 Licença](#-licença)

---

## ⚡ Funcionalidades

- Autenticação de usuários via JWT
- CRUD de usuários:
  - Listar usuários
  - Criar usuário
  - Atualizar usuário
  - Deletar usuário
- Rotas versionadas (`/v1`)
- Proteção de rotas privadas com middleware de autenticação
- Estrutura modular de controllers e rotas
- Testes com Jest e Supertest

---

## 📈 Boas Práticas Aplicadas

- Separação de responsabilidades (Controllers, Middleware, Routes)
- Middleware de autenticação
- Versionamento de API
- Testes automatizados
- Uso de variáveis de ambiente

---

## 🗂 Estrutura do Projeto

src/  
├─ tests/    
|  ├─ auth.test.js    
│  └─ user.test.js    
├─ controllers/    
│  ├─ authController.js    
│  └─ userController.js    
├─ middleware/    
│  └─ auth.js    
├─ view/    
│  └─ userView.js    
├─ app.js    
├─ database.js    
├─ index.js    
└─ routes.js    

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [Supertest](https://www.npmjs.com/package/supertest) para testes
- [Jest](https://jestjs.io/) para testes unitários
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)

---

## ⚙️ Configuração

1. Clone o repositório:

    ```bash
    git clone git@github.com:GuiRuizz/test-sps-backend.git
    cd test-sps-backend
    ```

2. Instale as dependências

    ```bash
    yarn install
    ```

3. Crie um arquivo .env ulizando o env copy e coloque suas credenciais:

    ```bash
    JWT_SECRET=ColoqueSeuSegredoAqui(se esivesse em produção)
    PORT=3000
    ```

---

## ▶️ Executando a Aplicação

### Ambiente de desenvolvimento

``` bash
yarn dev
```

Servidor rodando em:

<http://localhost:3000>

---

## 🧪 Executando os testes unitários

```bash
yarn test
```

### Exemplo de teste bem-sucedido

```bash
yarn run v1.22.22
$ jest
 PASS  src/__tests__/auth.test.js
 PASS  src/__tests__/user.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        3.398 s
Ran all test suites.
Done in 5.62s.
```

### Exemplo de teste malsucedido

```bash
Test Suites: 2 failed, 2 total
Tests:       3 failed, 1 passed, 4 total
Snapshots:   0 total
Time:        10.803 s
Ran all test suites.
error Command failed with exit code 1.

```

---

## 🔗 Rotas da API

### 🔐 Autenticação

| Método | Endpoint            | Protegida | Descrição                     |
|--------|---------------------|-----------|-------------------------------|
| POST   | /v1/auth/login      | ❌ Não    | Realiza login e retorna JWT   |

---

### 👤 Usuários

| Método | Endpoint           | Protegida | Descrição                |
|--------|--------------------|-----------|--------------------------|
| GET    | /v1/users          | ✅ Sim    | Lista todos os usuários  |
| POST   | /v1/users          | ✅ Sim    | Cria um novo usuário     |
| PUT    | /v1/users/:id      | ✅ Sim    | Atualiza um usuário      |
| DELETE | /v1/users/:id      | ✅ Sim    | Remove um usuário        |

---

### 🔑 Autenticação nas Rotas Protegidas

Enviar no header:

Authorization: Bearer {token}

---

### 🔄 Versionamento

A API utiliza versionamento via URL:

```bash
/v1/
```

Exemplo:

```bash
POST /v1/auth/login\
GET /v1/users
```

Caso seja necessário quebrar compatibilidade futura, será criada a
versão:

```bash
/v2/
```

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Enrique Ruiz Sassi Gonçalves**

---

## 📜 Licença

Este projeto está sob a licença MIT.
