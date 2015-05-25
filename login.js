/**
 * Created by liuhzz on 2015/5/25.
 */
var submit = document.querySelector("#check");

var regs = {
    username : /[a-z|A-Z|0-9]*/,
    password : /\d{6}/,
    phoneNumber : /1[3|5|7|8][0-9]{9}/
};

(function submitHandle(submiter,reg) {

    addEvent(submiter,'click',check);

    var flag = true;

    function check(e){
        var inputs = document.querySelectorAll("input");
        Array.prototype.slice.call(inputs).forEach(function(input){
            switch(input.name){
                case 'username':
                    if(!input.value || !reg.username.test(input.value)){
                        flag = false;
                        alert("请输入正确的姓名格式");
                    }
                    break;
                case 'password':
                    if(!input.value || !reg.password.test(input.value)){
                        flag = false;
                        alert("请输入正确的密码长度");
                    }
                    break;
                case 'phoneNumber':
                    if(!input.value || !reg.phoneNumber.test(input.value)){
                        flag = false;
                        alert("请输入正确的电话号码格式");
                    }
                    break;
            }

            if(!flag ){
                e.preventDefault();
                e.cancelBubble = true;
                e.stopPropagation();
                return false;
            }

            return true;
        })
    }


    function addEvent(ele,type,handle){
        if(ele.addEventListener){
            ele.addEventListener(type,handle,false);
        }else{
            ele.attachEvent('on'+type,handle.call(ele,handle));
        }
    }

})(submit,regs)






