const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/control_escolar');

const alumnoSchema = new mongoose.model("alumno", {
    'nip': {
        "type": Number,
        "required": true,
    },
    'nombre': {
        "type": String,
        "required": true
    },
    'grado': {
        "type": String,
        "required": false
    },
    'grupo':{
        "type": String,
        "required": false
    }
});

app.get('/healthcheck', (req, res) => {
    console.log("Recurso raíz solicitado por get");
    res.send('/');
});

app.get('/api/alumnos', async (req, res) => {
    try{
        const alumnos = await alumnoSchema.find();
        console.log(alumnos);
        res.json(alumnos);
    } catch(err){
        res.status(500).json({"error": err});
    }
});

app.get('/api/alumno/:id', async (req, res) => {
    const nip_alumno = req.params.id;
    try{
        const alumno = await alumnoSchema.find({nip: nip_alumno});
        if(alumno.length < 1){
            res.status(401).send("Alumno no encontrado");
        }
        console.log(alumno);
        res.json(alumno);
    } catch(err){
        res.status(500).json({"error": err});
    }
});

app.delete('/api/alumno', (req, res)=>{
    res.send(``);
});

app.post('/api/alumno', (req, res)=>{
    res.json({});
});

app.put('/api/alumno', (req, res)=>{
    res.status(400).send(``);  
});


app.listen(PORT, () => {
    console.log(`Servidor express corriendo en el puerto ${PORT} y conectado a MongoDB`);
});