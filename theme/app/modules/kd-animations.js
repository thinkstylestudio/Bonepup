App.module("KateDesign", function(KateDesign){

KateDesign.vanisher = function(view){
					console.log('vanish triggered');

				view.$el.stop(true).animate({opacity:0.0},750, function(){
					view.close();
					console.log('vanished view closed');
					//App.vent.trigger('KD:viewready',model);

				});
				

}

})
