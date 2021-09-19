const express = require("express");
const router = express.Router();

let animalArray = [
    { id: 1, animalName: "dog" },
    { id: 2, animalName: "cat" },
    { id: 3, animalName: "hamster" },
];


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

module.exports = router;
