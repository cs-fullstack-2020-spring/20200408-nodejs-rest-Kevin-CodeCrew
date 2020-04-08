// Point of entry
let express = require('express');
let app = express();

// Setup listener for requests
const port = 2112;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// ### Exercise 0
// Setup a single endpoint that will accept GET requests at /greeting/[DYNAMIC NAME] and respond with greeting message using the name passed in ex. Hello there Kevin!
app.get('/greeting/:somename', (req, res) =>{
    res.send(`Howdy there ${req.params.somename}`);
})

// REST GET - Read in CRUD
app.get('/student/:id', (req,res) => {
    let jsonStudent = {
        id: req.params.id,
        name: "Bob",
        email: "bozo@MediaList.com"
    };
    // return the student record
    res.send(jsonStudent);
})

// REST DELETE - Delete in CRUD
app.delete('/student/:id', (req,res) => {
    // we normally would really delete it
    let jsonStudent = {
        id: req.params.id,
        name: "Dave",
        email: "bozo@MediaList.com",
        status: "DELETED"
    };
    // return the student record
    res.send(jsonStudent);
});

// REST CREATE - Create in CRUD
app.post('/student/:id', (req,res) => {
    console.log(req.body.name);
    res.send(req.body);
});
