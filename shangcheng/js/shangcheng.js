function showjt(){
        var jti=document.getElementById("jt");
        jti.style.display="block";
}
function showjts(){
    var jti=document.getElementById("jt");
    jti.style.display="none";
}
window.onload=function(){
    var oPrev=document.getElementById("leftjt");
    var oNext=document.getElementById("rightjt");
    var oImg1=document.getElementById("img1");
    var arrUrl=["images/1.jpg","images/2.jpg","images/3.jpg"];
    var num = 0;
    var myInterval=setInterval(function autoPlay(){
        oImg1.src=arrUrl[num];
        num++;
        if(num == arrUrl.length){
            num=0;
        }
        oImg1.src=arrUrl[num];
    },4000);
    oImg1.src=arrUrl[num];
    oNext.onclick=function(){
        num++;
        if(num == arrUrl.length){
            num=0;
        }
        oImg1.src=arrUrl[num];
    };
    oPrev.onclick=function(){
        num--;
        if(num == -1){
            num=arrUrl.length-1;
        }
        oImg1.src=arrUrl[num];
    }
};


