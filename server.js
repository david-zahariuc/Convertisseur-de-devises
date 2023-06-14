const express = require('express');
let bodyParser = require('body-parser');
const app = express();
const importApi = require("./api-convert");

app.set("view engine", "ejs");


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("convert",{ data: 0 });
})

app.post("/convert", (request, response) => {
    let deviseDepart = request.body.deviseFrom;
    console.log(deviseDepart);
    let deviseFinale = request.body.deviseTo;
    console.log(deviseFinale);
    let montant = request.body.montant;

    importApi.callApiConvert(deviseDepart,deviseFinale,montant)
    .then((data)=>{
        response.render("convert",{ data:data})
    }).catch((error)=>{
        response.render("convert", {data:0})
    })
})

app.listen(8585, () => { console.log("Server connected") })