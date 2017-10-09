/**
 * Created by zhangjinsi on 2017/9/12.
 */
KindEditor.ready(function(K) {
    K.create('textarea[name=content]',{
        width:'800px',
        height:'200px',
        uploadJson: '/admin/upload/kindeditor'
    });
});