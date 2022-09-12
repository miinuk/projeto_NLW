import express from 'express'

const app = express()
//rota ads que esta na porta localhost:3333
//request pra buscar informaçoes 
//response pra mandar informaçoes
app.get ('/ads',(request,response)=>{
    //rota
    return response.json([
        {id: 1 , name:'Anuncio 1'},
        {id: 2 , name:'Anuncio 2'},
        {id: 3 , name:'Anuncio 3'}
    ])

})
//escolher a porta
app.listen(3333)

//node src/server.mjs para startar
// em scripts/build no json foi alterado para tsc para que o node entenda 
//typescript