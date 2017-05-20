$('.modalSelected').click(function(){
	var path = '/product/rendermodal/' + $(this).attr('id');
	console.log("THIS HERE",this);
	$.get(path).then(function(res){
	console.log("THIS NOW", res);

		$('#product-modal').html(res);
		$('#product-modal').modal('show');
	})
});


