function pyTheoremAB(avar, bvar) {
    console.log("running Pythagorean Theorem")
    console.log("A = ", avar, " B = ", bvar);

    var csqr = (avar * avar) + (bvar * bvar);
    var c = Math.sqrt(csqr);
    console.log("C = ", c);
}

function pyTheoremAC(avar, cvar) {
    console.log("running Pythagorean Theorem")
    console.log("A = ", avar, " c = ", cvar);

    var bsqr = (cvar * cvar) - (avar * avar);
    var b = Math.sqrt(bsqr);
    console.log("B = ", b);
}

function pyTheoremBC() {
    console.log("running Pythagorean Theorem")
}

pyTheoremAB(20, 35);
pyTheoremAC(20, 40.311288741492746);
pyTheoremAC(35, 40.311288741492746);

