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

}




var obj=document.getElementById("xiala");

obj.onscroll=function(){

    var scrollT=obj.scrollTop;//距上的距离
    var scrollH=obj.scrollHeight;//总高度
    var clientH=obj.clientHeight;//显示总高度707px

    if( scrollH ==scrollT + clientH ){

        setTimeout("frush()",1000);
    }
}

function frush(){

    var newObj=document.createElement("ul");
    for( var i=0;i<8;i++){
        var li=document.createElement("li");
        li.innerHTML="div";
    }
}