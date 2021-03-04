function addpara1(){
    
    var para1="";
    for(i=1;i<=5;i++){
        para1=para1+document.getElementById("para1text"+i).value+"&nbsp";
        console.log(para1)
    }
    para1="<h4>"+para1+"</h4>";
    console.log(para1);
    document.getElementById("para1").innerHTML=para1;

}
function addpara2(){
    paraarray=[];
    for(i=1;i<=5;i++){
       paraarray.push(document.getElementById("para2text"+i).value);
       console.log(paraarray);
    }
    paraarray=`<h4>${paraarray.join(".")}</h4>`;
    document.getElementById("para2").innerHTML=paraarray;
}