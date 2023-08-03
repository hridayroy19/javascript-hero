


function getAvarage (asserment1, asserment2, asserment3){
    const totale= asserment1 + asserment2 + asserment3;
    const avarage = totale / 3;
    return avarage;
}

const asserment1Marks = 50;
const asserment2Marks = 60;
const asserment3Marks = 58;

var myAvarage = getAvarage( asserment1Marks, asserment2Marks, asserment3Marks);
console.log('amr total mark er avarage :', myAvarage);