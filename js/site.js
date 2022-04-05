//get string from form reverse button clicked
function getRevString(){
document.getElementById("alert").classList.add("invisible")

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    displayrevString(revString);

}

//get string from form scramble button hit
function getScramString(){
    document.getElementById("alert").classList.add("invisible")
    
        let userString = document.getElementById("userString").value;
        let scramString = scrambleString(userString);
    
        displayScramString(scramString);
    
    }

//reverse string
function reverseString(userString){
    let revString =[];

    //reverse string using for loop
    for (let index = (userString.length - 1); index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString;
}

//scramble string
function scrambleString(userString){
    let scramString = userString.split('').sort(function(){return 0.5-Math.random()}).join('');
    return scramString      
}

//displayresult of reversed string
function displayrevString(reverseString){
document.getElementById("msg").innerHTML = `Your string reversed is: ${reverseString}`;
document.getElementById("alert").classList.remove("invisible");
}

//display result of scrambled string
function displayScramString(scrambleString){
document.getElementById("msg").innerHTML = `Your string scrambled is: ${scrambleString}`;
document.getElementById("alert").classList.remove("invisible");

}
