function Bmicalc(){
    let w= document.getElementById('weight').value;
    let h= document.getElementById('height').value;
    
    /* var w= parseInt(w_txt.value);
    var h= parseInt(h_txt.value); */
    h=h/100;


var errMsg="";
if (w<=0){
    errMsg=errMsg+"*weight cannot be negative\n";
}
if (h<=0){
    errMsg=errMsg+"* Height cannot be negative\n"
}
if (errMsg !=""){
    alert(errMsg);
}else{
    let BMI=((w)/(h*h));
    let resultMsg="";
    if(BMI<18.5){
        resultMsg="Your BMI is "+BMI.toFixed(2)+" Underweight";
    }else if(BMI==18.5 || BMI<=24.9){
        resultMsg="Your BMI is "+BMI.toFixed(2)+" Normal weight";

    }else if(BMI==25 || BMI <=29.9){
        resultMsg="Your BMI is "+BMI.toFixed(2)+" Overweight";
    }else if(BMI>30){
        resultMsg="Your BMI is "+BMI.toFixed(2)+" Obese";
    }
   alert(resultMsg); 
}
}

function backgroundcolor(x){
    let body= document.getElementById("body");
    body.style.backgroundColor=x.value;

}