const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const alumnos = [{
        nip: 1,
        nombre: "Juan Escutia",
        grado: "Primero",
        grupo: "A"
    },
    {
        nip: 2,
        nombre: "Vicente Suarez",
        grado: "Primero",
        grupo: "A"
    },
    {
        nip: 3,
        nombre: "Agustín Melgar",
        grado: "Segundo",
        grupo: "A"
    },
    {
        nip: 4,
        nombre: "Fernando Montes de Oca",
        grado: "Primero",
        grupo: "B"
    },
]

app.get('/healthcheck', (req, res) => {
    console.log("Recurso raíz solicitado por get");
    res.send('/');
});

app.get('/api/alumnos', (req, res) => {
    res.json(alumnos);
});

app.get('/api/alumno/:id', (req, res) => {
    const id_alumno = req.params.id;
    console.log(`El id del alumno es ${id_alumno}`)
    const alumno = alumnos.filter((al) =>
        al.nip == id_alumno
    );
    console.log(alumno);
    if (alumno.length < 1)
        res.status(404).send("Alumno no encontrado");
    res.json(alumno);
});

app.delete('/api/alumno', (req, res)=>{
    const nip_alumno = req.body.nip;
    alumnos.forEach((al, i)=>{
        if(al.nip == nip_alumno){
            alumnos.splice(i, 1);
            res.send(`Alumno ${nip_alumno} eliminado`);
        }   
    });
    res.send(`El nip ${nip_alumno} no existe`);
});

app.post('/api/alumno', (req, res)=>{
    const nombre = req.body.nombre;
    if(alumnos.filter((al)=>al.nombre == nombre).length >= 1){
        console.log(`El alumno ${nombre} ya existe `);
        res.status(400).send(`El alumno ${nombre} ya existe`);
    }
    const nuevoAlumno = {
        nip: alumnos.length + 1,
        nombre: nombre,
        grado: req.body.grado,
        grupo: req.body.grupo
    }
    alumnos.push(nuevoAlumno);
    res.json(nuevoAlumno);
});

app.put('/api/alumno', (req, res)=>{
    const nombre = req.body.nombre;
    const grupo = req.body.grupo;
    const grado = req.body.grado;
    const nip_alumno = req.body.nip;
    alumnos.forEach((al, i)=>{
        if(al.nip == nip_alumno){
            al.nombre = nombre;
            al.grupo = grupo;
            al.grado = grado;
            res.json(al);
        } 
    });
    res.status(400).send(`El nip ${nip_alumno} no existe`);  
});


app.listen(PORT, () => {
    console.log(`Servidor express corriendo en el puerto ${PORT}`);
});