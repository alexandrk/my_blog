$(function(){

	$('.nav').on('click', '.btn-secondary', function(event){

		if ( $(this).data('view-type') === "list-view" ){
			$('.posts').children('.panel').addClass('x100percent');
		}
		else
		{
			$('.posts').children('.panel').removeClass('x100percent');
		}

		event.preventDefault();

	});

});