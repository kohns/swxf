/**
 * Created by Administrator on 2018/7/7 0007.
 */
function userCheck(){
    var userstr=document.getElementById("email").value;//通过调用getElementById（）方法查找元素
    if(userstr.length==0){
        alert("用户名不能为空，请重新输入！！！");
        return false;
    }
    return true;	//最好跟个true
}
function passwordCheck(){
    var password=document.myform.pwd.value;//通过document层次关系获取元素
    if(password.length==0){
        alert("密码不能为空，请重新输入！！！");
        document.myform.password.focus();
        return false;
    }
    if(password.length<6){
        alert("密码小于6位，请重新输入！！！");
        return false;
    }
    return true;
}
function check(){
    if(userCheck()&&passwordCheck()){
        return true;
    }
    else{return false;}
}

