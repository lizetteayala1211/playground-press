
$(document).ready(function(){

$("#marketplace-button-container:nth-child(1)").click(function(){
	$("#marketplace-button-container:nth-child(2)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").removeClass('activated');
	$("#marketplace-button-container:nth-child(1)").addClass('activated');
	$("#press-image-container").addClass('one');
	$("#press-image-container").removeClass('two');
	$("#press-image-container").removeClass('three');
	$("#press-image-container").removeClass('four');
	$("#press-image-container").removeClass('five');
	$("#press-image-container").removeClass('six');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(1)").show();
});

$("#marketplace-button-container:nth-child(2)").click(function(){
	$("#marketplace-button-container:nth-child(1)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").removeClass('activated');
	$("#marketplace-button-container:nth-child(2)").addClass('activated');
	$("#press-image-container").addClass('two');
	$("#press-image-container").removeClass('one');
	$("#press-image-container").removeClass('three');
	$("#press-image-container").removeClass('four');
	$("#press-image-container").removeClass('five');
	$("#press-image-container").removeClass('six');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(2)").show();
});

$("#marketplace-button-container:nth-child(3)").click(function(){
	$("#marketplace-button-container:nth-child(1)").removeClass('activated');
	$("#marketplace-button-container:nth-child(2)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").addClass('activated');
	$("#press-image-container").addClass('three');
	$("#press-image-container").removeClass('one');
	$("#press-image-container").removeClass('two');
	$("#press-image-container").removeClass('four');
	$("#press-image-container").removeClass('five');
	$("#press-image-container").removeClass('six');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(3)").show();
});

$("#marketplace-button-container:nth-child(4)").click(function(){
	$("#marketplace-button-container:nth-child(1)").removeClass('activated');
	$("#marketplace-button-container:nth-child(2)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").addClass('activated');
	$("#press-image-container").addClass('four');
	$("#press-image-container").removeClass('one');
	$("#press-image-container").removeClass('two');
	$("#press-image-container").removeClass('three');
	$("#press-image-container").removeClass('five');
	$("#press-image-container").removeClass('six');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(4)").show();
});

$("#marketplace-button-container:nth-child(5)").click(function(){
	$("#marketplace-button-container:nth-child(1)").removeClass('activated');
	$("#marketplace-button-container:nth-child(2)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").addClass('activated');
	$("#press-image-container").addClass('five');
	$("#press-image-container").removeClass('one');
	$("#press-image-container").removeClass('two');
	$("#press-image-container").removeClass('three');
	$("#press-image-container").removeClass('four');
	$("#press-image-container").removeClass('six');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(5)").show();
});

$("#marketplace-button-container:nth-child(6)").click(function(){
	$("#marketplace-button-container:nth-child(1)").removeClass('activated');
	$("#marketplace-button-container:nth-child(2)").removeClass('activated');
	$("#marketplace-button-container:nth-child(3)").removeClass('activated');
	$("#marketplace-button-container:nth-child(4)").removeClass('activated');
	$("#marketplace-button-container:nth-child(5)").removeClass('activated');
	$("#marketplace-button-container:nth-child(6)").addClass('activated');
	$("#press-image-container").addClass('six');
	$("#press-image-container").removeClass('one');
	$("#press-image-container").removeClass('two');
	$("#press-image-container").removeClass('three');
	$("#press-image-container").removeClass('four');
	$("#press-image-container").removeClass('five');
	$('#press-copy-container').children().hide();
	$("#press-copy:nth-child(6)").show();
});

});


