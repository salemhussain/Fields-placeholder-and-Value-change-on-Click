jQuery(document).ready(function($){
			var $searchField = $('.geodir-listing-search .snear');
			 $searchField.removeAttr('onblur');
	 	    $searchField.removeAttr('onfocus');
			
			$( ".search-options label input" ).change(function() {
				var newval = $( this ).val();
				if( newval == 'telehealth'){
					$searchField.attr('placeholder' , 'Telehealth');
					$searchField.prop('readonly', true);
					newval == "telehealth";
				}else if(newval == 'helper'){
					$searchField.attr('placeholder' , 'Enter Zip or City');
					$searchField.prop('readonly', false);
				}	

	});
		var $searchField = $('.geodir-listing-search .snear');
		var old_value = $searchField.val();
		$( ".search-options label input" ).on('click' , function(){
			var newval = $( this ).val();
			// var $searchField = $('.geodir-listing-search .snear');
		//	alert(old_value);
			if(newval == 'telehealth'){
				 $searchField.val("");
			}else{
				 $searchField.val(old_value);
			}
			
			
		})
		
	});
  
  // phone field update on select country and phone mask.
  
   $( "select#geodir_countrycustom" ).change(function() {
                // Check input( $( this ).val() ) for validity here
                // alert($( this ).val());
                var newval = $( this ).val();
                if( newval == "United States"){ 
                 		jQuery('#geodir_contact').removeAttr("disabled");
						$("#geodir_contact").mask("(999) 999-9999");
						jQuery('#geodir_contact').attr('placeholder', '(999) 999-9999');
						// jQuery('#geodir_contact').attr('pattern', '(999) 999-9999');
						jQuery('#geodir_contact_row span.geodir_message_note').text('Phone Formate Is (999) 999-9999');
						
                }else if(newval == "Worldwide"){
						jQuery('#geodir_contact').prop('pattern', 'false');
						jQuery('#geodir_contact').attr('disabled', 'true');
						jQuery('#geodir_contact').attr('placeholder', '');
						jQuery('#geodir_contact_row span.geodir_message_note').text('Please Select Country Above to Add Phone Number.');
                }else if(newval == "Norway"){
						jQuery('#geodir_contact')
						$("#geodir_contact").mask("(999) 999-9999");
						jQuery('#geodir_contact').attr('placeholder', '(999) 999-9999');
						// jQuery('#geodir_contact').attr('pattern', '[0-9]{3}-[0-9]{3}-[0-9]{4}');
						jQuery('#geodir_contact_row span.geodir_message_note').text('Phone Formate Is (999) 999-9999');
				}else if(newval == "Germany"){
						jQuery('#geodir_contact').removeAttr("disabled");
						$("#geodir_contact").mask("999 9999 999");
						jQuery('#geodir_contact').attr('placeholder', '999 9999 999');
                		// jQuery('#geodir_contact').attr('pattern', '[0-9]{3} [0-9]{4} [0-9]{3}');
						jQuery('#geodir_contact_row span.geodir_message_note').text('Phone Formate Is 999 9999 999');
				}else if(newval == "United Kingdom"){
						jQuery('#geodir_contact').removeAttr("disabled");
						$("#geodir_contact").mask("9999 999999");
						jQuery('#geodir_contact').attr('placeholder', '9999 999999');
                		// jQuery('#geodir_contact').attr('pattern', '[0-9]{2} [0-9]{5}');
						jQuery('#geodir_contact_row span.geodir_message_note').text('Phone Formate Is 99 99999');

				}


        });
