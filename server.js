const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 0822

app.use(cors())

const idol = {
    'jennie': {
        'age': 27,
        'birthName': 'Jennie Kim',
        'birthLocation': 'Seoul, South Korea',
        'birthday': 'January, 16, 1996',
        'position': 'Lead Vocals'
    },
    'lisa':{
        'age': 26,
        'birthName': 'Lalisa Manobal',
        'birthLocation': 'Satuek District, Thailand',
        'birthday': 'March 27, 1997',
        'position': 'Main Dancer'
    },

'jisoo':{
    'age': 28,
    'birthName': 'Kim Ji-soo',
    'birthLocation': 'Sanbon-dong, Gunpo-si, South Korea',
    'birthday': 'January 16, 1996',
    'position': 'Vocals'
},

'rose':{
    'age': 26,
    'birthName': 'Roseanne Park',
    'birthLocation': ' Auckland, New Zealand', 
    'birthday': ' February 11, 1997',
    'position': 'Main Vocals'
},

    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'birthday': 'unknown',
    'position': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})
app.get('/styles.css', (request, response)=>{
    response.sendFile(__dirname + '/styles.css')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})


app.get('/api/:name',(request,response)=>{
    const kpopName = request.params.name.toLowerCase()

    if( idol[kpopName] ){
        response.json(idol[kpopName])
    }else{
        response.json(idol['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
