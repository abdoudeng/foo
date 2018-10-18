requirejs.config({
    paths:{
        "text":"js/requirejs-plugin/text"
    }
});

require(['./js/vue','./js/content_list','./js/side_menu','./js/nav_above'],function (Vue,content_list,side_menu,nav_above) {

    var app = new Vue({
        el:'#main',
        data:function () {
            return {
                message:'hello world'
            }
        },
        components:{
            'content_list':content_list,
            'side_menu':side_menu,
            'nav_above':nav_above
        }
    })
})