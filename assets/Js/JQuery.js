$(document).ready(function(){
    $('.counter').each(function(){
        var $this = $(this);
        var countTo = $this.attr('data-count');
        $({countNum: $this.text()}).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            compelete: function(){
                $this.text(this.countNum)
            }
        })
    })
})