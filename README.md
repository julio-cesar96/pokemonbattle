# Pokémon Battle

Este REAME.md fornece uma visão geral do projeto **Pokémon Battle**, detalhando sua estrutura, tecnologias utilizadas e instruções para execução e desenvolvimento.

## Visão Geral

O projeto **Pokémon Battle** é uma aplicação web que simula batalhas entre Pokémon, utilizando a [PokéAPI](https://pokeapi.co/) para obter dados dos Pokémon. A interface permite que os usuários selecionem diferentes Pokémon e iniciem batalhas simuladas, exibindo resultados baseados nas estatísticas dos Pokémon escolhidos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build rápida para projetos front-end modernos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **Jest**: Framework de testes em JavaScript.
- **Testing Library**: Conjunto de utilitários para testes de componentes React.

## Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é organizada da seguinte forma:

```
pokemonbattle/
├── public/
├── src/
│   ├── components/
│   │   ├── Battle/
│   │   ├── Input/
│   │   └── PokemonCard/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- `public/`: Contém arquivos públicos estáticos.
- `src/`: Diretório principal do código-fonte.
  - `components/`: Contém componentes reutilizáveis da interface.
    - `Battle/`: Componente responsável pela lógica e interface da batalha.
    - `Input/`: Componente de entrada de dados (input).
    - `PokemonCard/`: Componente para exibir informações de um Pokémon.
  - `hooks/`: Contém hooks personalizados, incluindo chamadas à PokéAPI.
  - `pages/`: Contém as páginas da aplicação.
  - `services/`: Contém serviços para interação com APIs externas.
  - `App.tsx`: Componente raiz da aplicação.
  - `main.tsx`: Ponto de entrada da aplicação.
- Arquivos de configuração:
  - `.gitignore`: Especifica arquivos e pastas a serem ignorados pelo Git.
  - `eslint.config.js`: Configuração do ESLint para linting do código.
  - `jest.config.ts`: Configuração do Jest para testes.
  - `tailwind.config.js`: Configuração do Tailwind CSS.
  - `tsconfig*.json`: Arquivos de configuração do TypeScript.
  - `vite.config.ts`: Configuração do Vite.

## Configuração e Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/julio-cesar96/pokemonbattle.git
   cd pokemonbattle
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria uma versão de produção da aplicação.
- `test`: Executa os testes utilizando Jest.
- `lint`: Executa o linter para verificar problemas no código.

## Testes

O projeto utiliza o Jest e o Testing Library para testes unitários e de integração. Os testes ainda serão desenvolvidos e estarão localizados próximos aos componentes correspondentes, seguindo a convenção `*.test.tsx`.

Para executar os testes:

```bash
npm run test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

