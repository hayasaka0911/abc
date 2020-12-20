// aタグ無効
$(function(){
	$('.question-qa-q a').click(function(){
		return false;
	})
});

// アコーディオン
$(function(){
    $(".question-qa-q a").click(function() {
    $(this).next(".question-qa-q p").slideToggle(150);
    $(this).toggleClass("open");
    });
    });