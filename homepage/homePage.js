/**
 * Created by WIN10 on 2018/6/24.
 */
function $(id){     //$(id)是document.getElementById(id)的简写,定义了这个方法以后调用的时候就可以直接用$(id).innnerHTML 或者$(id).innerText
    return document.getElementById(id);
}
/*隐藏视屏播放*/
var introduction=document.getElementsByClassName("introduction")[0];
var closeBtn=document.getElementsByClassName("closeBtn")[0];
introduction.onclick=function(){
    $("popBox").style.display="block";
    $("boxModel").style.display="block"
}
closeBtn.onclick=function(){
    $("popBox").style.display="none";
    $("boxModel").style.display="none"
}
var li=document.getElementById("li");
var game=document.getElementById("game");
var xiala1=document.getElementsByClassName("xiala1")[0];
var xiala2=document.getElementsByClassName("xiala2")[0];
var hide=document.getElementById("ow-site");
var delay=document.querySelectorAll(".delay");
var flag=true;
li.onclick=function(){
    if (flag){
        xiala1.style.display="block";
    }else{
        xiala1.style.display="none";
    }
    flag=!flag;
}
game.onclick=function(){
    if (flag){
        xiala2.style.display="block";
        hide.onmouseover=function(){
            $("hidesub").style.width = 98 + "px";
            $("hidesub").style.opacity = 1;
        }
        hide.onmouseout=function(){
            $("hidesub").style.width=0+"px";
            $("hidesub").style.opacity = 0;
        }
    }else{
        xiala2.style.display="none";
    }
    flag=!flag;
};
/*function $(id){
 return document.getElementById(id);
 }
 var LtopTitleLi=document.querySelectorAll("#LtopTitle li");
 var xialaDiv=document.getElementById("xiala1");
 var flag=true;
 for (let i=1;i<5;i++){
 LtopTitleLi[i].onclick=function(){
 if (flag){
 $("xiala"+(i+1)).style.display="block";
 }else {
 $("xiala"+(i+1)).style.display="none";
 }
 flag=!flag;
 }
 }*/
$("hidesub").onmouseover=function(){
    $("hidesub").style.width = 98 + "px";
    $("hidesub").style.opacity = 1;
}
$("hidesub").onmouseout=function(){
    $("hidesub").style.width = 0 + "px";
    $("hidesub").style.opacity = 0;
}
pass.onclick=function(){
    if (flag){
        xiala3.style.display="block";
    }else{
        xiala3.style.display="none";
    }
    flag=!flag;
}
/*导航栏固定*/
var realTop=$("floatTitleS").getBoundingClientRect().top;//屏幕滚动事件
//getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
window.onscroll=function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    //当滚动条滚动的距离超过了div据上边框的距离，那么就说明div要被遮盖了
    if(t>=realTop){
        //这个时候就不要再往上移动，直接固定位置，据上为0
        $("floatTitleS").style.position="fixed";
        $("floatTitleS").style.width="100%";
        $("floatTitleS").style.top="0px";
        $("floatTitleS").style.margin="0px";
    }else{
        //否则，说明div据上还有距离，那么就取消固定布局，直接设大小
        $("floatTitleS").style.position="position";
        $("floatTitleS").style.top=(realTop-t)+"px";
        $("floatTitleS").style.width="97%";
        $("floatTitleS").style.marginLeft="20px"
    }
}

/*悬浮窗隐藏窗口1*/
var nav_menu1=document.getElementsByClassName("nav-menu1")[0];
var nav_menu2=document.getElementsByClassName("nav-menu2")[0];
var arrow1=document.getElementsByClassName("arrow1")[0];
var arrow2=document.getElementsByClassName("arrow2")[0];
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

/*人物图片轮换*/
var lis=document.querySelectorAll(".typehero li");
var spotlightwordsS=document.querySelectorAll(".spotlightwordsS");
var heros=document.querySelectorAll(".heros");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        heros[i].style.display="block";
        spotlightwordsS[i].style.display="block";
        heros[i].onmouseover=function(){
            heros[i].style.display="block";
            spotlightwordsS[i].style.display="block";
        }
        spotlightwordsS[i].onmouseover=function(){
            heros[i].style.display="block";
            spotlightwordsS[i].style.display="block";
        }
    }
    lis[i].onmouseout=function(){
        heros[i].style.display="none";
        spotlightwordsS[i].style.display="none";
    }
}
//function show(num){
//    var lis=document.querySelectorAll(".typehero li");
//    var spotlightwordsS=document.querySelectorAll(".spotlightwordsS");
//    var heros=document.querySelectorAll(".heros");
//    for(let i=0;i<lis.length;i++){
//        heros[i].style.display="none";
//        spotlightwordsS[i].style.display="none";
//        if (i==(num-1)){
//            heros[i].style.display="block";
//            spotlightwordsS[i].style.display="block";
//        }
//    }
//}








