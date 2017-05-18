$('.modalSelected').click(function(){
	var path = '/product/rendermodal/' + $(this).attr('id');
	console.log(path)
	$.get(path).then(function(res){
		$('#product-modal').html(res);
		$('#product-modal').modal('show');
	})
})

