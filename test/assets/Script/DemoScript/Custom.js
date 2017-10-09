cc.Class({
    extends: cc.Component,

    properties: {
        cname:{
            default:""
        },
        want:'',
    },

    // use this for initialization
    onLoad: function () {
          
    },

    foodreturn:function(){
        cc.log("食物被吃");
    },//设计一下food节点位置的返回
    changeScore:function(){
        this.score=score+10;
    },
    //这里为对话框button回调，实际中改成碰撞回调，当食物碰撞到客户时（进入客户碰撞体内），
    //触发碰撞回调（food值通过鼠标点选的对象获取）
    demoEat:function(_food){
        cc.log("顾客正在吃食物");
        if(this.contains(this.want,_food)){
            cc.log("客户吃了 " + _food);
            //如果复合条件，则改变分数，显示离开动画
            if(this.controller){
                this.controller.customOut();//相当于this.bar
                this.controller.changeScore();
            }
        }else{
            this.foodreturn();
        }
    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this.demoEat(this.want);
    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    },
    contains:function (arr, obj) {
        cc.log(arr);
        cc.log("函数经过调用");
        if(this.want = obj){
            return true;
        }
        /*var i = wantfood.length;
        while (i--) {  
            if (arr[i] === obj) {  
                return true;  
            }  
        }  */
        return false;  
    }, 

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
