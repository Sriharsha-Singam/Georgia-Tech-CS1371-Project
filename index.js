$(document).ready(function(){
    document.getElementById("input").style.visibility = 'hidden';
    $("#calc").click(function(){
        var grade = grades();
        grade = grade*100;
        grade = Math.round(grade);
        grade = grade/100
//        alert(grade);
        document.getElementById("input").innerHTML = "Your Final Exam Grade Should Be: "+grade.toString();
        document.getElementById("input").style.visibility = 'visible';
    });
});

function grades(){
    
    var final = document.getElementById("finalScore").value;
    
    var testW = document.getElementById("testW").value;
    var hwW = document.getElementById("hwW").value;
    var quizW = document.getElementById("quizW").value;
    var classW = document.getElementById("classpW").value;
    var ftestW = document.getElementById("ftestW").value;
//    if (sum([testW,hwW,quizW,classW,ftestW]) > 100){
//        sendError();
//        return;
//    }
    var testS = document.getElementById("testS").value;
    var hwS = document.getElementById("hwS").value;
    var quizS = document.getElementById("quizS").value;
    var classS = document.getElementById("classS").value;
    var ecS = document.getElementById("ecS").value;

    var testSA = testS.split(',');
    var hwSA = hwS.split(',');
    var quizSA = quizS.split(',');
    var classSA = classS.split(',');
    var ecSA = ecS.split(',');
    
    var testA = avg(testSA);
    var hwA = avg(hwSA);
    var quizA = avg(quizSA);
    var classA = avg(classSA);
    var ecA = sum(ecSA);

    var test = (testA*testW)/100;
    var hw = (hwA*hwW)/100;
    var quiz = (quizA*quizW)/100;
    var classP = (classA*classW)/100;
    var ec = ecA;
    
    var final = final - (test + hw + quiz + classP + ec);
    
    var final = final/(parseInt(ftestW)/100);
    console.log(final);
    return final
}
function sendError(){
    alert("Oops Your Weights Add Up To Above 100%");
    return;
}
function avg(arr){
    var num = 0;
    for (i = 0; i < arr.length; i++) { 
        num = num + parseInt(arr[i]);
        console.log((arr[i]));
    }
    num = num/arr.length;
    console.log(num);
    return num;
}
function sum(arr){
    var num = 0;
    for (i = 0; i < arr.length; i++) { 
        num = num + parseInt(arr[i]);
        console.log((arr[i]));
    }

    return num;
}
$(function() {
  $("#listSelect").on("change",function() {
      var listSelect = this.value;
    if (listSelect=="--Pick An Option--") return; 
    var url = "http://cs1371.gatech.edu/getClassInfo/?class="+listSelect;
    var val = JSON.parse(gettingHttp(url));
    setWeight(val);
  }); 
});
function setWeight(val){
    document.getElementById("testW").value = val.test;
    document.getElementById("hwW").value = val.homework;
    document.getElementById("quizW").value = val.quiz;
    document.getElementById("classpW").value = val.class_participation;
    document.getElementById("ftestW").value = val.final_exam;
}
function gettingHttp(url)
{
    var xml = new XMLHttpRequest();
    xml.open( "GET", url, false ); 
    xml.send( null );
    return xml.responseText;
}
