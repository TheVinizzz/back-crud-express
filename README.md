Backend da aplicação

### Para iniciar o projeto

> Voce precisa ter em sua maquina: [nodejs](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/en/docs/install), [docker](https://www.docker.com/get-started)

- Crie um container do banco postgres
```console
docker run -p 15432:5432 --name vinidb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=vinidb -d postgres:10.5-alpine
```

Inslate as dependências do projeto
```console
yarn
```

Inicie as migrations
```console
yarn typeorm migration:run
```

Inicie o projeto em modo desenvolvimento
```console
yarn dev
```
