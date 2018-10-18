/**
 * Created by abdou on 18/10/18.
 */
define(['text!../template/nav_above.html'],function (nav_above) {
    var navabove = {
        template:nav_above,
        data:function () {
            return {
                headlist:['navigator1','navigator2','navigator3']
            }
        }
    }
    return navabove
    })