function urlify(myString) {
    console.log("Converting: ", myString);

    var urlString = "";

    for(var i=0; i < myString.length-1; i++) {
        if(myString[i] == " " && myString[i+1] != " ") {
            urlString += "%20";
        }
        else if (myString[i] == " " && myString[i+1] == " ") {
            continue;
        }
        else {
            urlString += myString[i];
        }
    }
    console.log(urlString);
}

urlify("Hello  My name is Simon        ");
urlify(" Hi there    , what's shaking!?")