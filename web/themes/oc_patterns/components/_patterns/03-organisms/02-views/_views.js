(function ($) {

/* BOOKS SEARCH PAGE
----------------------- */

Drupal.behaviors.booksSearch = {
  attach: function (context, settings) {
    $(".view.seuss-books-search", context).once('bookLibrary').each(function(){  
    	
		//hide results for an empty query
		$(document).ready(function(){			
			if($('.exposed-terms').children().length == 0){
				$('.term-filters').remove();
			}
		});

		//open categories list
		$('.custom-toggle').click(function(){
			if($(this).is('.active')){
				$(this).next('.hidden-filter').slideUp(200).attr('aria-expanded', 'false').end().removeClass('active');
			}else{
				$('.custom-toggle.active').next('.hidden-filter').slideUp(200).attr('aria-expanded', 'false').end().removeClass('active');
				$(this).next('.hidden-filter').slideDown(200).attr('aria-expanded', 'true').end().addClass('active');
			}
		});

		//when a topic is checked or unchecked
		$('#edit-field-category input').each(function(){
			var urlCurrent = window.location.href;

			if($(this).is(':checked')){
				var termId = $(this).val();
				var urlString = 'field_category%5B' + termId + '%5D=' + termId;
				var term = $(this).next();
				term.click(function(){
					var newPath = urlCurrent.replace(urlString, '');
					window.location.replace(newPath);
				});
			}else{
				//check if url contains a query already
				if(urlCurrent.indexOf("?") > -1){
					var termId = $(this).val();
					var urlString = '&field_category%5B' + termId + '%5D=' + termId;
					var term = $(this).next();
   				term.click(function(){
   					var newPath = urlCurrent + urlString;
   					window.location.replace(newPath)
   				});
				}else{
					var termId = $(this).val();
					var urlString = '?field_category%5B' + termId + '%5D=' + termId;
					var term = $(this).next();
   				term.click(function(){
   					var newPath = urlCurrent + urlString;
   					window.location.replace(newPath)
   				});
				}
			}
		});
		//check what is filtered by and create a list or add to existing list
		$('#edit-field-category input:checked').each(function(){
			var term = $(this).next().text();
			$('.exposed-terms').append('<span>' + term + '</span>');
		});


   });//end view.books-search
  }
};//end books search


/* MOBILE FILTER TOGGLES FOR BOOKS LANDING
------------------------ */
Drupal.behaviors.mobileDropWrapper = {
	attach: function (context, settings) {
		$("#views-exposed-form-books-search-books-landing-search-mobile", context).once('mobileFilterExpander').each(function(){ 
			$('.toggles-header a').click(function(e){
				e.preventDefault();
				if($(this).closest('.toggles-header.open').length){
					$('.mobile-dropwrapper').slideUp(300).attr('aria-expanded', 'false');
					$('.toggles-header').removeClass('open');
				}else{
					$('.mobile-dropwrapper').slideDown(300).attr('aria-expanded', 'true');
					$('.toggles-header').addClass('open');
				}
			});
		});//end view.posts by author
	}
};//end profiles scripts


/* PROFILES SCRIPTS
------------------------ */
Drupal.behaviors.profiles = {
	attach: function (context, settings) {
		$(".profiles.posts-by-author", context).once('profilesExpander').each(function(){ 
			$('.expander', this).click(function(){
  	 			if($('.posts-by-author .view-content.active').length){
            	$('.posts-by-author .view-content').slideUp(500).removeClass('active').attr('aria-expanded', "false");;
            	$(this).text('+').removeClass('expanded');
  	 			}else{
  	 				$('.view-content.active').slideUp(500).removeClass('active').attr('aria-expanded', 'false');
  	 				$('.expander').text('+').removeClass('expanded');
  	 				$('.posts-by-author .view-content').addClass('active').attr('aria-expanded', "true").slideDown(500);
  	 				$(this).text('–').addClass('expanded');
  	 			}
  	 		});	
		});//end view.posts by author

		$(".profiles.author-reports", context).once('reportsExpander').each(function(){ 
			$('.expander', this).click(function(){
  	 			if($('.author-reports .view-content.active').length){
            	$('.author-reports .view-content').slideUp(500).removeClass('active').attr('aria-expanded', "false");;
            	$(this).text('+').removeClass('expanded');
  	 			}else{
  	 				$('.view-content.active').slideUp(500).removeClass('active').attr('aria-expanded', 'false');
  	 				$('.expander').text('+').removeClass('expanded');
  	 				$('.author-reports .view-content').addClass('active').attr('aria-expanded', "true").slideDown(500);
  	 				$(this).text('–').addClass('expanded');
  	 			}
  	 		});	
		});//end view.posts by author
	}
};//end profiles scripts



})(jQuery);