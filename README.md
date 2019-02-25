### case
    ```javascript
    var newLoading = new ___Loading___({
        size: 20, // loading大小 默认20
        length: 6, // 由几个vertices组成默认12个
        style: { // 定义样式 {overlay: 覆盖层, content: 内容区, vertices: 组成节点}
            overlay: {
                backgroundColor: 'rgba(0,0,0,0.2)'
            },
            content: {
                backgroundColor: 'rgba(0,0,0,0)'
            },
            // vertices: {
            //     // backgroundColor: 'rgba(100, 100, 100, 0.2)'
            //     height: '3em',
            //     width: '1em',
            //     borderRadius: '1em'
            // }
        }
    });

    var btn = document.getElementById('example');
    var btnshow = document.getElementById('exampleshow');

    btn.onclick = function(){
        newLoading.show();
        newLoading.show();
        newLoading.show();
        newLoading.show();
        newLoading.show();
    }

    btnshow.onclick = function(){
        newLoading.show();
    };
```
