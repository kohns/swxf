/**
 * Created by WIN10 on 2018/7/2.
 */
/**
 * Created by WIN10 on 2018/6/24.
 */
function $(id){     //$(id)是document.getElementById(id)的简写,定义了这个方法以后调用的时候就可以直接用$(id).innnerHTML 或者$(id).innerText
    return document.getElementById(id);
}
var myaccount=document.getElementsByClassName("myaccount")[0];
var arrow1=document.getElementsByClassName("arrow1")[0];
var flag=true;
myaccount.onclick=function(){
    if (flag){
        $("xiala3").style.display="block"
        arrow1.style.transform="rotate(180deg)";
    }else {
        $("xiala3").style.display="none";
        arrow1.style.transform="rotate(0deg)";
    }
    flag = !flag
}
/*导航栏固定*/
var navigation=document.getElementsByClassName("navigation")[0];
var realTop=navigation.getBoundingClientRect().top;//屏幕滚动事件
//getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
window.onscroll=function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    //当滚动条滚动的距离超过了div据上边框的距离，那么就说明div要被遮盖了
    if (t>=realTop){
        navigation.style.display="fixed";
        navigation.style.top="0px";
    }else{
        navigation.style.display="position";
        navigation.style.top="40px";
        /*navigation.style.top=(realTop-t)+"px";*/
    }
};
/*导航栏隐藏下拉列表*/
var subnav_containers=document.querySelectorAll(".subnav-containers");
for ( let i=0;i<subnav_containers.length;i++){
    $("menu"+(i+1)).onclick=function(){
        if (flag){
            $("list"+(i+1)).style.display="block";
        }else {
            $("list"+(i+1)).style.display="none";
        }
        flag=!flag;
    }
}
