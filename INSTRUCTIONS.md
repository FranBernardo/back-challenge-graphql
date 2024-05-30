## Setup instructions

### Clone repository
```
git clone https://github.com/dantas-dev/back-challenge-graphql.git
```

### Project setup

```
npm install
```

### Adicionar o dados do banco de dado local
```
const sequelize = new Sequelize("DATEBASE", "USER_NAME", "PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

```

#### Compiles and hot-reloads for development

```
npm run dev
```

 ## technologies used

- GraphQL (como linguagem de consulta)
- Nodejs (linguagem que tenho mais famialidade)
- TypeScript (para fazer as tipagens)
- Sequelize (com ORM)
- Mysql (bancos de dados relacional)
- Apollo Server (biblioteca para o lado do servidor)

## Improvements
Criar mais validações de e-mail e adicionar uma rota para buscar projeto ou usuário.

## If I had more time
Criaria mais rotas, adicionaria mais informações no usuário como senha entre outros dados, e caso adicionasse a senha faria validações do criptografa antes de armazenar.
