		  $(document).ready(function(){
			$('#text').fadeIn(700).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(1000);
			var number = 0;
            $('div').click(function(){
			    $(this).css('visibility','hidden');
				number++;
				if (number === 12) {
			      $('#done').css('visibility','visible');
		        }
            });
           
          });

