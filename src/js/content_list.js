/**
 * Created by abdou on 18/10/17.
 */
define(['text!../template/content_list.html'],function (content_list) {
    var vm = {
        name:'content_list',
        template:content_list,
        data:function () {
            return {
                contentlist:'content inside'
            }
        }

    }
    return vm

})
