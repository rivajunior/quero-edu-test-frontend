# Quero Bolsa - Teste Frontend

## Configuração do projeto

```shell
yarn install
```

### Compilação para desenvolvimento

```shell
yarn serve
```

### Compila e minifica para produção

```shell
yarn build
```

Foram feitas otimizações para o build de produção, como a verificação de lint durante o build, tanto
com eslint, como stylint. Além de fazer a compressão gzip e brotli

### Lint

```shell
yarn lint
```

#### Eslint

Para o lint de scripts estou utilizando o eslint sem o ser pelo vue-cli porque o vue-cli não tem
compatibilidade com o eslint >= v7.

A configuração de regras do eslint utilizada é personaliza, baseada no airbnb, porém mais focada
ainda em estilo e padronização de código seguindo boas conversões e práticas.

#### Stylelint

O lint de estilos estilos está sendo feito com pelo stylint com a configuração criada pelo
bootstrap. Tendo sido alterada apenas a regra `selector-class-pattern`. Pois o projeto foi todo
desenvolvido utilizando css module e a conveção de nomes de classes escolhida, foi o camelCase.

### Versioning

Para um melhor gerenciamento do versionamento, implementei um propt para montagem de mensagens de
commit com a ferramenta *commitizen* e uma automatização de verificação de mensagens de commits
*commitlint*, para tentar garantir que a mensagem de commit esteja no padrão especificado pelas
configurações personalizadas das regras do `@commitlint/config-conventional` e
`cz-conventional-changelog`

#### Hooks

A verificação de mensagens de commit já passa por alguns githooks como o `prepare-commit-msg` e
`commit-msg`, mas além deles, ainda foi implentado o `pre-commit` para tentar garantir que os
arquivos estão seguindo as regras de lint. Para isso foi utilizado o *husky* e o *lint-staged*

#### Cross-platform

O git foi configurado atravez do .gitattributes para que todos os arquivos sigam a convenção de
enlines do Unix (`LF` === `\n`). Assim devs de multiambientes podem trabalhar no mesmo repositório
sem haver diff no git por causa de quebras de linha.

## A11y

Pensando em acessibilidade, o layout não foi seguido 100%. Algumas combinações de cores não seguiam
as diretrizes de acessibilidade para contraste.

Foi utilizado um algorítmo de `color-contrast` para determinar quando utilizar uma cor clara ou
escura no texto, dependendo da cor de fundo.

Para a o visual ficasse mais agradável, poderia ser negociado com o designer para mudar por tons de
maior contraste. Pois acessibilidade deve ser vir antes de UI.

Se houvesse mais tempo, o modal poderia ser trabalhado para uma melhor acessibilidade e usabilidade.
Mas atualmente está devendo quanto a isso.

## Deploy

O deploy está sendo feito usando [Vercel](https://vercel.com/), configurado por integração no
GitHub.

Domínio da aplicação: <https://quero-edu-test-frontend-4b1e7mtot.vercel.app>
