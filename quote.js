$(document).ready(function(){
		var quoteSource=[
		{
			quote:"Polyester cockwomble"
	    },
	    {
	    	quote:"Weapons-grade plum"
	    },
	    {
	    	quote:"Tit"
	    },
	    {
	    	quote:"Spoon"
	    },
	    {
	    	quote:"Toupeed fucktrumpet"
	    },
	    {
	    	quote:"Floppy-haired nonce"
	    },
	    {
	    	quote:"Leather-faced shit tobogganist"
	    },
	    {
	    	quote:"Orange-dipped turdgoblin"
	    },
	    {
	    	quote:"Weasel-headed fucknugget"
	    },
	    {
	    	quote:"Mangled apricot hellbeast"
	    },	    
	    {
	    	quote:"Tiny-fingered Cheeto-faced ferret-wearing shitgibbon"
	    },	    
	    {
	    	quote:"Sentient enema"
	    },	    
	    {
	    	quote:"Witless fucking cocksplat"
	    },	    
	    {
	    	quote:"Absolute fucking doughnut"
	    },
	   	{
	    	quote:"Fuck-knuckle"
	    },
	  	{
	    	quote:"Bloviating flesh bag"
	    },
	   	{
	    	quote:"Bipedal wank splatter"
	    },
	    {
	    	quote:"Custard flavored jobby"
	    },
	    {
	    	quote:"Wankpuffin"
	    },
	    {
	    	quote:"Ignorant fuckmuppet"
	    },
	    {
	    	quote:"Incompressible jizztrumpet"
	    },
	    {
	    	quote:"Thick chucklefuck"
	    }
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber+1].quote;
			//console.log(newQuoteText);
      var timeAnimation = 100;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

