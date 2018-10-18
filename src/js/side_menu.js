/**
 * Created by abdou on 18/10/18.
 */
define(['text!../template/side_menu.html'],function (side_menu) {
    var sidemenu = {
        template:side_menu,
        data:function () {
            return {
                menulist:['home','about','contact']
            }
        }
    }
    return sidemenu
})