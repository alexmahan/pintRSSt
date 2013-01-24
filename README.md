pintRSSt
========

Pinterest doesn't have an API. So it's kinda hard to get/display posts from a particular board.

This dumb thing runs a Pinterest board RSS feed through Google's feed API, turns it into JSON and displays a certain number of posts from that board.

How to use it:  
1. Include jQuery  
2. Include pintrsst.js  
3. In your document ready, initialize the plugin as follows. You have a few options:  

    $(document).ready(function() {
        $('#pinterest').pintRSSt({
            // RSS feed for the board
        	boardRSS: 'http://pinterest.com/tacobell/doritos-locos-tacos.rss',
        	// number of pins
        	items: 7,
        	// container element for each pin, default is li
        	container: 'li'
        });
    });
