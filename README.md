# MyBooks

Uma aplicação de página única (SPA), para criar sua lista de livros preferidos.

A página web é de minha autoria e foi inspirada em outras aplicações já existentes, adaptando seus designs e recursos. A aplicação foi desenvolvida utilizando tecnologias como TypeScript, Next.js, Firebase, TailwindCSS.

<!-- ## Índice

- [Screenshots](#screenshots)
- [Objetivos](#objetivos)
- [Minha caminhada](#minha-caminhada)
  - [Propriedades e Tecnologias](#propriedades-e-tecnologias)
  - [Meu aprendizado](#meu-aprendizado)
- [Rodando o projeto](#rodando-o-projeto)
- [Autor](#autor)

</br>

## Screenshots

![#](./public/desktop-view.png)

</br>

## Objetivos

O principal objetivo deste projeto foi elaborar uma SPA do meu portfólio com uma página administrativa, conectado a uma API.

Os usuários têm a capacidade de:
- Como cliente, é possível visualizar a pagina e navegar entre as opções do menu.
- Como administrador, estão disponíveis, além da página inicial, outras duas: a de login e a administrativa. A primeira destina-se ao processo de autenticação e a segunda permite a edição das informações exibidas na página inicial.

> OBS - Apenas o criador do projeto possui acesso à página administrativa.

</br>

## Minha caminhada

- [x] Protótipo do design
- [x] Estrutura de rotas front-end
- [x] Estrutura de rotas back-end
- [x] Conexão e seviços da API
- [x] Modelo de objetos
- [x] Controle de rotas público/privada
- [x] Aplicação do design

</br>

## Propriedades e Tecnologias

- TypeScript
- Next.js
- Mongoose
- MongoDB
- CSS
- TailwindCSS
- Framer Motion
- Figma

</br>

## Meu aprendizado

Ao me deparar com o banco de dados MongoDB pela primeira vez, aprendi sobre o aspecto de modelagem de objetos elaborado pelo Mongoose.

Após estabelecer a conexão com o banco de dados, é necessário criar um esquema para cada objeto:

```tsx
import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
    mainText: String,
    description: String,
},
{ timestamps: true });

const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default Home;
```

Ao definir cada esquema, é necessário criar e exportar o modelo correspondente. Dessa forma, tudo está pronto para ser aplicado em cada rota.

```tsx
import connectToDatabase from "@/database";
import Home from "@/models/Home";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const saveData = await Home.create(extractData);

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong! Please try again",
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something goes wrong! Please try again",
        });
    }
}
```

Veja mais detalhes na documentação oficial [aqui](https://mongoosejs.com/docs/guide.html)
</br>

## Rodando o projeto

![#](./public/desktop.gif)

### Acesse a aplicação via web [aqui!](https://portifolio-pedroalima.vercel.app/)

#### Ou instale na sua máquina. Para conferir a versão final, é só realizar os seguintes passos:

### 1 - Clonando o Projeto:
Navegue até o diretório onde deseja clonar o projeto. Abra o terminal com o GitBash e execute o comando:

```bash
git clone URL_DO_REPOSITORIO
```
Substitua URL_DO_REPOSITORIO pela URL do repositório deste projeto.

#### 2 - Instalando Dependências:
Navegue até a pasta clonada do projeto e execute o comando no terminal:

```bash
npm install
```
ou
```bash
yarn install
```

#### 3 - Executando o Projeto:
Ainda na pasta do projeto, execute o comando no terminal:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento Next.

</br> -->

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)