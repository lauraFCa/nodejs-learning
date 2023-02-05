# Para utilizar o express

1. Instalação:
   ```
   npm install express
   ```
2. Importação:
   ```
   import express from 'express'
   ```
3. Para usar com ECMA:  
   Imports para poder usar o _\_\_dirname_ no ECMAScript  
    Erro dado anteriormente: `__dirname is not defined in ES module scope`

   ```
   import path from 'path'
   import { fileURLToPath } from 'url'

   const __dirname = path.dirname(fileURLToPath(import.meta.url))
   ```
4. Para usar arquivos estáticos como CSS:
    ```
    app.use(express.static(__dirname+"/public"))
    ```

## Utilização simples

```
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
var app = express()
var port = 3000
app.use(express.static(__dirname+"/public"))

app.set("view engine", "ejs")
app.set("views", "")

app.get('/', (req, res) => {
    res.render('pagina')
})

app.listen(port, function () {
    console.log(`http://localhost:${port}/`)
})
```
