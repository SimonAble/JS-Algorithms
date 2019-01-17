//<<---------- Setting and Swapping ---------->>

function setAndSwap(myNum, myName) {
    this.myNum = myNum;
    this.myName = myName;
    console.log("Num start: ", myNum, "Name start: ", myName);

    var temp = myNum;
    myNum = myName;
    myName = temp;
    console.log("Num start: ", myNum, "Name start: ", myName);
    console.log("------>> Terminated <<------");
}

setAndSwap(42, "Simon");

//<<---------- Print and Count ---------->>

function printAndCount(start, end) {

    for(var i=start; i<=end; i++) {
        if(i%5==0) {
            console.log(i);
        }
    }
    console.log("------>> Terminated <<------");
}

printAndCount(512,4096);


//<<---------- Print -52 to 1066 ---------->>

function p52to1066() {
    for(var i=-52; i<1067; i++) {
        console.log(i);
    }
    console.log("------>> Terminated <<------");
}

p52to1066();


//<<---------- Multiples ---------->>

function mult(myMult, start, end) {
    console.log("<<------------ Multiples of ", myMult ," ------------>>")
    for(var i=start; i <= end; i++) {
        if(i%myMult == 0) {
            console.log(i);
        }
    }
    console.log("------>> Terminated Multiples <<------")
}

mult(6,0,60);
mult(3,0,60);


//<<---------- Don't Worry Be Happy ---------->>

function beCheerful(message, repeatNum) {
    for(var i=0; i<repeatNum; i++) {
        console.log(message);
    }
}

beCheerful("I hope you have an amazing day!", 10);


//<<---------- Counting, the Dojo Way ---------->>

function dojoCount(start,end) {
    for(var i=start; i<=end; i++) {
        if(i % 10 == 0 && i % 5 == 0) {
            console.log(i);
            console.log("Coding Dojo");
        }
        else if(i % 5 == 0) {
            console.log(i);
            console.log("Dojo");
        }
    }
}

dojoCount(0,100);



//<<---------- What Do You Know? ---------->>

function whatUKnow(message) {
    console.log("This is what I know!")
    console.log(message);
}

whatUKnow("A heck of a lot of javascript!!");

//<<---------- Print Int With While ---------->>

function printInts(start, end) {
    console.log("Printing integers from: ", start ," to: ", end );
    var i = start;
    while(i <= end ) {
        console.log(i);
        i++;
    }
}

printInts(2000, 5280);


//<<---------- Whoa that suckers huge ---------->>

function addInts(numOne, numTwo) {
    var total = 0;
    var check = numOne + numTwo;
    console.log(check);
    if(check === 0) {
        console.log("No need for math, the sum is 0");
    }
    else if(numOne <= numTwo) {
        console.log("Num one less than num two");
        for( var i=numOne; i<=numTwo; i++) {
            console.log("i equals: ", i);
            total += i;
            console.log(total);
        }
        console.log("The total is: ", total);
    }
    else if(numOne >= numTwo) {
        console.log("Num two less than num one");
        for( var i = numTwo; i<=numOne; i++) {
            console.log("i equals: ", i);
            total += i;
            console.log(total);
        }
        console.log("The total is: ", total);
    }
}

addInts(-9, 10);


//<<---------- Countdown ---------->>

function countdown(myNum) {
    myArr = [];
    for(var i=myNum; i>=0; i--) {
        myArr.push(i);
    }
    console.log(myArr);
}

countdown(10);