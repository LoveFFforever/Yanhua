$(function() {
    $('#yes').click(function(event) {
        modal('希望宝宝会喜欢哦。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('不行，你得看！', A);
    });
});

function A() {
    modal('我爱你！', B);
}

function B() {
    modal('好久不见，真的好想你', C);
}

function C() {
    modal('借此机会，表表心意，嘿嘿', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('你是我的人！', G);
}

function G() {
    modal('我会很努力很努力的', H);
}

function H() {
    modal('为了我们的以后，我们的长长久久', I);
}

function I() {
    modal('爱你，么么哒！', J)
}

function J() {
    modal('现在，开始看烟花吧！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
