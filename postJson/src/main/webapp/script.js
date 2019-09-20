$(function (e) {
    $('#btn').click(function () {
        var $idPost = $('#postid').val();
        $.ajax({
            url : 'http://jsonplaceholder.typicode.com/posts',
            type : 'GET',
            data : {
                userId : $idPost
            },
            success : function(data){
                console.log(JSON.stringify(data));
                $.each(data,function (key,value) {
                    $('#post').append($('<h3>',{
                        text : value.title
                    }),$('<p>',{
                        text : value.body
                    }),$('<input>',{
                        type : 'button',
                        value : "Comment",
                        class : "comment",
                        id : value.id
                    }))
                })
            }
        })
    })

    $(document).on('click','.comment',function () {
        $.ajax({
            url : 'http://jsonplaceholder.typicode.com/comments',
            type : 'GET',
            data : {
                postId : $(this).attr('id')
            },
            success : function (data) {
                console.log(JSON.stringify(data));
                $.each(data,function (key,value) {
                    $('#post').append($('<p>',{
                        text : value.body
                    }),$('<p>',{
                        text : value.email
                    }))
                })
            }
        })
    })
})