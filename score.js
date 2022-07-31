function TotalScore(grade){
if(grade >=70 && grade <=100){
    result = "YOUR SCORE IS A"
}
else if (grade >=68 && grade <70){
result ="YOUR SCORE IS A"
}
else if (grade >=58 && grade <60){
    result="YOUR SCORE IS B"
}
else if (grade >=50 && grade <60){
    result="YOUR SCORE IS B"
}
else if (grade >=48 && grade <50){
    result="YOUR SCORE IS C"
}
else if (grade >=40 && grade <50){
    result="YOUR SCORE IS C"
}
else if (grade >=38 && grade <40){
    result="YOUR SCORE IS D"
}
else if (grade >=0 && grade <40){
    result="YOUR SCORE IS F"
}
else {
    result="Invalid score"
}
console.log(result)
}

function score(ca,ca2,exam){
    if (ca,ca2 >=0 && ca,ca2 <=20){
    return ca + ca2 + exam
}
else if(exam>=0 && exam<=100){
    return ca+ca2+exam
} 
else (ca,ca2 <0 && ca,ca2 >20)
    console.log("PLEASE INPUT RIGHT VALUE")
}



TotalScore(score(18,20,30))
TotalScore(score(15,19,29))
TotalScore(score(17,20,40))
TotalScore(score(11,14,11))
TotalScore(score(20,10,5))






















