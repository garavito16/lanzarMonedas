function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
/*
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    //cuantas veces se tomo para que de heads
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );

//Esto se ejecuta después de que se complete la función FiveHead aSync
console.log( "This is run after the fiveHeadsSync function completes" );
*/


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        //cuantas veces se tomo para que de heads
        if(headsCount === 5) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject(`5 consecutive "heads" were not reached`);
        }
        
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );