// riadh chelbi (xreead) all rights are reserved

'use strict';

$(document).ready(function(){
	$('.menu-toglle').click(function(){
		if ($('.nav').css('display') === 'none'){
			$('.nav').show(300, function(){
				$('#toglle').removeClass();
				$('#toglle').addClass('svg-inline--fa fa-times fa-w-11')
			});
		} else {
			$('.nav').hide(300, function(){
				$('#toglle').removeClass();
				$('#toglle').addClass('svg-inline--fa fa-bars fa-w-14')
			});
		};
	});
});


