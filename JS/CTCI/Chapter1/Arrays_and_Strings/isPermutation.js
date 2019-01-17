
function isPermutation(string1, string2) {

    var arr1=[];
    var arr2=[];

    //Check if strings are not the same length
    if(string1.length != string2.length) {
        console.log("These two string are not permutations!");
        return false;
    }

    //Loop and push to arrays
    for(var i=0; i<string1.length; i++) {
        arr1.push(string1[i].toLowerCase());
        arr2.push(string2[i].toLowerCase());
    }

    //While loop to check for permutations
    var x = 0;
    while(arr1.length != 0) {
        var length1 = arr1.length;
        
        for(var y=0; y<arr2.length; y++) {
            if(arr1[x] === arr2[y]) {
                arr1.shift();
                arr2.splice(y,1);
            }
        }

        var length2 = arr1.length;
        if(length1 == length2) {
            console.log("This is NOT a permutation!!");
            return false;
        }
        else{
            length1-=1;
        }
    }
    console.log("This is a permutation!!");
    return true;
}

isPermutation("Hello", "eloha"); //returns false
isPermutation("Hello", "loleH"); //returns true
isPermutation("Programer", "aegmorprr"); //returns true
isPermutation("programmer", "programmers"); //returns false