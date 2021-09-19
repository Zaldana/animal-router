const express = require("express");
const router = express.Router();

let animalArray = [
    { id: 1, animalName: "dog" },
    { id: 2, animalName: "cat" },
    { id: 3, animalName: "hamster" },
];

//animalName query, full array if nothing queried, error msg if no query match.
router.get("/", function (req, res) {

    let foundAnimal = null;

    if (Object.keys(req.query).length === 0) {
        
        res.json(animalArray);

    } else {
        
        animalArray.forEach((animal) => {

            if (animal.animalName === req.query.animal) {
                foundAnimal = animal;
            }
        });

        if (!foundAnimal) {

            return res.send("Animal not found, please check your spelling");
        
        } else {
        
            return res.json({ foundAnimal });
        
        }
    }
});

//animalArry.id param get
router.get("/get-animal-by-params-id/:id", function (req, res) {

    let foundAnimal;

    animalArray.forEach((animal) => {

        if (animal.id === +req.params.id) {
            foundAnimal = animal;
        }
    });

    res.json({ foundAnimal, id: req.params.id });
});

//animalArry.name param get
router.get("/get-animal-by-params-name/:name", function (req, res) {

    let foundAnimal;

    animalArray.forEach((animal) => {

        if (animal.animalName === req.params.name.toLowerCase()) {
            foundAnimal = animal;
        }
    });

    res.json({ foundAnimal, name: req.params.name });
});

//Add key value pair to animalArray
router.post("/", function (req, res) {
    console.log(req.body.values)

    let duplicateId = false;
    let duplicateName = false;

    animalArray.forEach((animal) => {

        if (animal.id === req.body.id) {
            duplicateId = true;
        } if (animal.animalName === req.body.animalName) {
            duplicateName = true;
        }
    
    });


    if (JSON.stringify(req.body) === '{}') {

        return res.send("Sorry, no empty data");

    } if (duplicateId === true) {

        return res.send("Duplicate id");

    } if (duplicateName === true) {

        return res.send("Duplicate animalName");

    } else {

        animalArray.push(req.body);
        res.json({ animal: animalArray });
    }
});



module.exports = router;
