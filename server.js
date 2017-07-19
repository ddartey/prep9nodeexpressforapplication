var express=require('express')
var loggor=require("morgan")
var bodyParser=require("body-parser")

//Create a neew instance of an express app
var app=express()

//Ste
app.set("view engine","ejs") // behind the scenes requires ejs

app.use(express.static('views'))
//tell app where to find v
app.set('views',__dirname+"/views")
app.get('/',function(request, response) {
    response.render('home.ejs')
})
app.get('/',function(request, response) {
    response.render('profile.ejs')
})


app.get('/',function(request,response){
    console.log(request)
})

var port=procces.env.PORT
app.listen(port,function({
    console.log('App running on ${port} hamsters.)
}))