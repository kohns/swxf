/**
 * Created by WIN10 on 2018/7/7.
 */
function $(id){     //$(id)是document.getElementById(id)的简写,定义了这个方法以后调用的时候就可以直接用$(id).innnerHTML 或者$(id).innerText
    return document.getElementById(id);
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
/*var lis=document.querySelectorAll("#floatContext li");
 for (let i=1;i<10;i++){
 lis[i].onclick=function(){
 if (flag){
 $("nav_menu"+i).style.display="block";
 }else {
 $("nav_menu"+i).style.display="none";
 }
 flag=!flag;
 }
 }*/
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
/*评论区隐藏登录模块*/
var comment_actions=document.querySelectorAll(".comment-actions");
var commentContent=document.querySelectorAll(".commentContent");
var commentContent_1=document.querySelectorAll(".commentContent-1");
for (let i=0;i<commentContent.length;i++){
    commentContent[i].onmouseover=function(){
        comment_actions[i].style.display="block";
    }
    commentContent[i].onmouseout=function(){
        comment_actions[i].style.display="none";
    }
}
for (let i=0;i<commentContent_1.length;i++){
    commentContent_1[i].onmouseover=function(){
        comment_actions[i+1].style.display="block";
    }
    commentContent_1[i].onmouseout=function(){
        comment_actions[i+1].style.display="none";
    }
}
/*输入页面后，页面跳转*/
//var page_input=document.getElementsByClassName("page-input")[0];
//var submit=document.getElementsByClassName("submit")[0];
//    submit.onclick=function(){
//        window.location.href = "result.html?keywords=" + page_input.value;
//    }
var nums=document.querySelectorAll(".num");
nums.onclick=function(){

}