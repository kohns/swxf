function showtp(){
    var ssd=document.getElementById("head");
    var sow=document.getElementById("shadow");
    ssd.style.display="block";
    sow.style.display="block";
}

function $(id){     //$(id)是document.getElementById(id)的简写,定义了这个方法以后调用的时候就可以直接用$(id).innnerHTML 或者$(id).innerText
    return document.getElementById(id);
}
var realTop=$("sod").getBoundingClientRect().top;//屏幕滚动事件
//getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
window.onscroll=function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    //当滚动条滚动的距离超过了div据上边框的距离，那么就说明div要被遮盖了
    if(t>=realTop){
        //这个时候就不要再往上移动，直接固定位置，据上为0
        $("sod").style.position="fixed";
        $("sod").style.width="100%";
        $("sod").style.top="0px";
        $("sod").style.zIndex="998";
    }else{
        //否则，说明div据上还有距离，那么就取消固定布局，直接设大小
        $("sod").style.position="position";
        $("sod").style.top=(realTop-t)+"px";
        $("sod").style.width="98%";
    }
}

var nav_menu1=document.getElementsByClassName("nav-menu1")[0];
var nav_menu2=document.getElementsByClassName("nav-menu2")[0];
var arrow1=document.getElementsByClassName("arrow1")[0];
var arrow2=document.getElementsByClassName("arrow2")[0];
var flag=true;
$("play").onclick=function(){
    if (flag){
        nav_menu1.style.display="block";
        arrow1.style.transform="rotate(180deg)";
        $("play").style.backgroundColor="#414B61";
    }else {
        nav_menu1.style.display="none";
        arrow1.style.transform="rotate(0deg)";
        $("play").style.backgroundColor=" #29354A";
    }
    flag=!flag;
}
$("act").onclick=function(){
    if (flag){
        nav_menu2.style.display="block";
        arrow2.style.transform="rotate(180deg)";
    }else {
        nav_menu2.style.display="none";
        arrow2.style.transform="rotate(0deg)";
    }
    flag=!flag;
}
var Pass=document.getElementById("pass");
var xiala3=document.getElementsByClassName("xialas")[0];
var flag=true;
Pass.onclick=function(){
    if (flag){
        xiala3.style.display="block";
        xiala3.style.zIndex="999"
    }else{
        xiala3.style.display="none";
    }
    flag=!flag;
}