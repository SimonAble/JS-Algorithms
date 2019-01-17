
function isUnique(myString) {
    console.log("\n<<-------Running isUnique------->>")
    console.log("Evaluating: ", myString);

    for(var i=0; i < myString.length; i++) {
        console.log("Comparing: ", myString[i]);
        for(var x=i+1; x < myString.length; x++) {
            console.log("With: ", myString[x]);
            if(myString[i] === myString[x]) {
                console.log("We have a match!");
                console.log(myString[i], " is equal to, ", myString[x]);
                return false;
            }
        }
    }

    console.log("No problems here!");
    return true;
}

isUnique("ubiquitous");
isUnique("fancy");