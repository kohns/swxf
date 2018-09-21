/**
 * Created by Administrator on 2018/7/7 0007.
 */
function $(id){

    if(id.style.display=="block"){
        id.style.display="none";
    }
    else {
        id.style.display="block";
    }
}

window.onload=function(){
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
        $(xia);
        return false;
    }
    sp1.onclick=function(){
        $(xia1);
        return false;
    }
    sp2.onclick=function(){
        $(xia2);
        return false;
    }

    yx1.onclick=function(){
        $(xia3);
        return false;
    }
    hd2.onclick=function(){
        $(xia4);
        return false;
    }

}