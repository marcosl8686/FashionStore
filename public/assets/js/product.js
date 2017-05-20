var items = 5;
$(document).ready(function(){
  if (items != 0) {
    $(".shoppingbasket").append("<div class=\"basketitems\">" + items + "</div>")
  }
});

$('.modalSelected').click(function(){
	var path = '/product/rendermodal/' + $(this).attr('id');
	console.log("THIS HERE",this);
	$.get(path).then(function(res){
	console.log("THIS NOW", res);

		$('#product-modal').html(res);
		$('#product-modal').modal('show');
	})
});


