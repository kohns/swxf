/**
 * Created by Administrator on 2018/6/30 0030.
 */

function show(id){

    if(id.style.display=="block"){
        id.style.display="none";
    }
    else {
        id.style.display="block";
    }
}

window.onload=function(){
    var shouhang=document.getElementById("yingxiong1")
    var sp=document.getElementById("spans1");
    var sp1=document.getElementById("spans2");
    var sp2=document.getElementById("spans3");
    var xia=document.getElementById("xiala1");
    var xia1=document.getElementById("Xinwen1-d");
    var xia2=document.getElementById("Xinwen1-w");

    var yx1=document.getElementById("yx");
    var hd2=document.getElementById("hd");
    var xia3=document.getElementById("nav-menu1");
    var xia4=document.getElementById("nav-menu3");

    sp.onclick=function(){
        show(xia);
        return false;
    }
    sp1.onclick=function(){
        show(xia1);
        return false;
    }
    sp2.onclick=function(){
        show(xia2);
        return false;
    }
    yx1.onclick=function(){
        show(xia3);
        return false;
    }
    hd2.onclick=function(){
        show(xia4);
        return false;
    }

    var lis1=document.getElementById("li1");
    var lis2=document.getElementById("li2");
    var lis3=document.getElementById("li3");
    var lis4=document.getElementById("li4");
    var lis5=document.getElementById("li5");

    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var div3=document.getElementById("div3");
    var div4=document.getElementById("div4");
    var div5=document.getElementById("div5");

    lis1.onclick=function() {
        show(div1);
        return false;
    }
    lis2.onclick=function() {
        show(div2);
        return false;

    }
    lis3.onclick=function() {
        show(div3);
        return false;
    }
    lis4.onclick=function() {
        show(div4);
        return false;
    }
    lis5.onclick=function() {
        show(div5);
        return false;
    }
}










