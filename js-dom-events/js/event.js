console.log("this is script flie");

const pinkButton =document.getElementById('make-pink');
pinkButton.addEventListener("click", makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}

const makeGreenButton =document.getElementById('make-green')
    makeGreenButton.addEventListener("click", function makeGreen(){
        document.body.style.backgroundColor="green";
    })

    // option 4 final ///
    document.getElementById('golden-rod').addEventListener('click' , function (){
        document.body.style.backgroundColor='goldenrod';
    })
   