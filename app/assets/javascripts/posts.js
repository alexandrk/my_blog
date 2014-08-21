$(function(){

	$('.nav').on('click', '.btn-secondary', function(){

		if ( $(this).data('view-type') === "list-view" ){
			$('.posts').children('.panel').addClass('x100percent');
		}
		else
		{
			$('.posts').children('.panel').removeClass('x100percent');
		}

	});

});