var DemoBar = require("DemoBar");
cc.Class({
    extends: cc.Component,

    properties: {
        foodType:'',
    },

    // use this for initialization
    onLoad: function () {
        console.log(this.foodType);

        var _self = this.node;
        this.node.on('mousedown', function (event) {
            var location = event.getLocation();//获取坐标位置
            console.log(location);
            var move = function (event) {
                _self.position = event.getLocation();
                _self.x =_self.x-480;
                _self.y =_self.y-320;
            };
            _self.on('mousemove',move,_self);
            var up = function(event){
                _self.off('mousemove',move,_self);
                _self.off('mouseup',up,_self);
                console.log("close");
            };
            _self.on('mouseup',up,_self);
        }, this);
    },
    start: function(){
        this.bar = DemoBar.instance;
        this.bar.controller.foodtype = "1";
        cc.log(this.bar.controller.foodtype);
    },
    update: function (dt) {

        },
});
