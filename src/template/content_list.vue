<template id="tem">
    <div id="app">
        <h1 id="title">hello world!</h1>
    </div>
</template>
<script type="text/javascript">
    var tem =document.getElementById("tem");//获取template标签
    console.log(tem);
    console.log(tem.innerHTML);  //
    var title = tem.content.getElementById("title"); //在template标签内部内容，必须要用.content属性才可以访问到
    console.log(title);
</script>
