(function($){

	$.fn.extend({  
	 
    pintRSSt: function(options) {
      var defaults = {
        boardRSS: 'http://pinterest.com/tacobell/doritos-locos-tacos.rss',
        items: 5,
        container: 'li'
      }
           
      var options =  $.extend(defaults, options);

      return this.each(function() {
        var o = options;
        		obj = $(this);
        		wrapper = o.container;
			  $.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&callback=?&q='+encodeURIComponent(o.boardRSS)+'', function(data){
			    $.each(data.responseData.feed.entries, function(i, item){
				    var description = item.content;
				    $(obj).append('<'+wrapper+' class="pinterest-post">'+description+'</'+wrapper+'>');
				    return i<o.items-1;
			    }); 
		    	$(''+wrapper+'.pinterest-post a').each(function(){
			    	var src = $(this).attr('href');
				    $(this).attr('href', 'http://pinterest.com'+src);
					});
				});   
      });
      
    }
    
  });
  
})(jQuery);