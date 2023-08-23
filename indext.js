Questions = [["How many legs does a spider have?"],
["What is the name of the toy cowboy in Toy Story?"],
["What is the color of an emerald?"],
["What’s the name of a place you go to see lots of animals?"],
["If you freeze water, what do you get?"],
["How many planets are in our solar system?"],
["What does caterpillar turn into?"],
["What is the color of a school bus?"],
["Which planet in our Solar System is known for having a ring?"]]
Answers = [["12","15","8","4"],
["Woody","Alex","Bob","Jack"],
["Blue","Red","Yellow","Green"],
["Cinema","Zoo","Museum","Cafe Shop"],
["Ice","Rock","Leaf","Fire"],
["10","13","6","8"],
["Worm","Butterfly","Bird","Fish"],
["Red","Blue","Yellow","Black"],
["Earth","Saturn","Mars","Jupiter"]]
var Correct= [1,2,0,3,1,0,3,1,2,1]
let count = 0
let score = 0
let myAnswer = 0


document.getElementById("Submit").disabled = true
FirstQuestion()

function FirstQuestion(){
    document.getElementById("question").innerHTML = "How many teeth does a dog have?"
    document.getElementById(0).innerHTML = "12 teeth"
    document.getElementById(1).innerHTML = "28 teeth"
    document.getElementById(2).innerHTML = "53 teeth" 
    document.getElementById(3).innerHTML = "34 teeth"
   
}

function NextQuestion(){
    document.getElementById("Submit").disabled = true
    if (count<9){
        document.getElementById("question").innerHTML= Questions[count]
        for (let i=0 ;i<4; i++){
            document.getElementById(i).innerHTML = Answers[count][i]
        } 
        document.getElementById("n0").checked= false
        document.getElementById("n1").checked= false
        document.getElementById("n2").checked= false
        document.getElementById("n3").checked= false
    }
    else {
        document.getElementById("result").innerHTML= "your score in this exam is: " + score
    }
    count+=1
}

function answer(x){
    document.getElementById("Submit").disabled = false
    myAnswer =x
}

function IfCorrect(){
    if (myAnswer==Correct[count]){
        score+=1
        NextQuestion()
    }
    else{
        NextQuestion()
    }

}