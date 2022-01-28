# :earth_americas: Hackwatchers

Noname es un smart contract bajo el Near protocol, el cual permite a desarrolladores, hackers y expertos en ciberseguridad crear reportes para apoyar a proyectos dentro del ecosistema near que tengan posibles problemas de ciberseguridad en sus productos. Este smart contract permite:

- Crear reportes de vulnerabilidades.
- Conseguir informacion un reporte.
- Conseguir lista de reportes.
- Donar a un creador de el reporte por su contribucion(el desarrollador decidira una cantidad para que pueda solucionar ese problema si es que el usuario lo requiera).
- Eliminar un reporte.


# :gear: Instalación

Para la instalación local de este projecto:

## Pre - requisitos

- Asegúrese de haber instalado Node.js ≥ 12 (recomendamos usar nvm).

- Asegúrese de haber instalado yarn: npm install -g yarn.

- Instalar dependencias: yarn install.

- Crear un test near account NEAR test account.

- Instalar el NEAR CLI globally: near-cli es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain.

# :key: Configurar NEAR CLI

Configura tu near-cli para autorizar tu cuenta de prueba creada recientemente:

```html
    near login
```

# :page_facing_up:	 Clonar el repositorio

```html
    git clone https://github.com/CypherHippie/NCDL1-Demo-equipo8.git
```

```html
    cd NCDL1-Demo-equipo8
```

# :hammer_and_wrench: Build del proyecto y despliegue en development mode.

Instalar las dependencias necesarias con npm.


```html
    npm install
```

Hacer el build y deployment en development mode.


```html
    yarn devdeploy
```


## Comando para crear un reporte:

```html
    near call <your deployed contract> createReport "{\"categorie\": \"string\", \"objectives\": \"string\", \"location\":\"string\", \"goal\": number}" --account-id <your test account>
```

## Comando para conseguir informacion de un reporte:

```html
    near call <your deployed contract> getReport "{\"id\": number}" --account-id <your test account>
```

## Comando para conseguir lista de reportes:

```html
    near call <your deployed contract> getReports "{}" --account-id <your test account>
```

## Comando para hacer donacion al reporte por su contribucion:

```html
    near call <your deployed contract> donate "{\"reportID\": number, \"cuantity\": number}" --account-id <your test account>
```

## Comando para eliminar un reporte:

```html
    near call <your deployed contract> deleteReport "{\"id\": number}" --account-id <your test account>
```


# :world_map: Explora el codigo:

noname smart contract file system.

```bash
├── assembly
│   ├── __tests__
│   │   ├── as-pect.d.ts                            # As-pect unit testing headers for type hints
│   │   └── main.spec.ts                            # Unit test for the contract
│   ├── as_types.d.ts                               # AssemblyScript headers for type hint
│   ├── index.ts                                    # Contains the smart contract code
│   ├── models.ts                                   # Contains models accesible to the smart contract
│   │   └── Campaing.ts                             # Contains report model.
│   └── tsconfig.json                               # Typescript configuration file
├── neardev
│   ├── dev-account                                 # In this file the provisional deploy smart contract account is saved
│   └── dev-account.env                             # In this file the provisional deploy smart contract account is saved like a environment variable                             
├── out
│   └── main.wasm                                   # Compiled smart contract code using to deploy
├── as-pect.config.js                               # Configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                                   # Configuration file for Assemblyscript compiler
├── package-lock.json                               # Project manifest lock version
├── package.json                                    # Node.js project manifest (scripts and dependencies)
├── README.md                                       # This file
└── yarn.lock                                       # Project manifest lock version
```


# Gracias por visitar nuestro proyecto. :wave:

Aqui les dejamos nuestro diseño - []


## License

MIT License

Copyright (c) [2021]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
