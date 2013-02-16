Test = {};
describe('A DataPageModel with test data',function(){
	
	beforeEach(function(){
		Test.PageModel = new App.Data.PageModel({testitem:"test"});
	})
	
	it('should contain the test data',function(){
		
		expect(Test.PageModel.get('testitem')).toEqual('test');
	})
})

describe('A Page Array containin demo data',function(){
	beforeEach(function(){	
		Test.TestData = [{"title":"Work","description":"menu","xoffset":"0px","zoom":"300px","id":45,"type":"page","slug":"work","url":"http://localhost/work/","status":"publish","title_plain":"Work","content":"<p>In ethical veniam gluten-free sustainable. Twee laboris banksy, sustainable scenester cray accusamus typewriter art party anim flexitarian freegan vero vegan. Assumenda kale chips echo park, mustache whatever ethnic do laboris cillum pork belly. Master cleanse reprehenderit iphone ex sunt eiusmod. Iphone jean shorts gastropub, small batch cray forage pop-up nesciunt yr VHS selvage bicycle rights leggings DIY. Aliquip cliche anim, carles vice helvetica fugiat elit. Reprehenderit excepteur viral irony dolor.</p>\n<p>Whatever laborum brunch williamsburg 8-bit, laboris wes anderson kogi tofu reprehenderit consequat assumenda salvia. In eu pickled letterpress, carles semiotics proident cosby sweater wes anderson quis eiusmod. Ea hella sartorial nisi, adipisicing sunt dolore. Exercitation labore single-origin coffee forage. Adipisicing elit minim freegan non ex, vice quinoa flexitarian sint ennui. Nostrud cliche mustache incididunt, pitchfork skateboard sunt officia nesciunt whatever farm-to-table. Laboris vero commodo, craft beer portland godard nulla truffaut aliqua gastropub gluten-free mollit.</p>\n<p>Culpa photo booth sustainable butcher, you probably haven&#8217;t heard of them american apparel biodiesel art party cray chambray odd future tempor semiotics gastropub cliche. Dolor pitchfork laboris est consectetur, hoodie pickled whatever sriracha craft beer esse sapiente retro minim. Gentrify terry richardson exercitation, street art direct trade magna leggings odio vero elit. Dolor PBR deserunt, voluptate VHS delectus whatever commodo mcsweeney&#8217;s vero pitchfork laboris labore accusamus lomo. Incididunt stumptown qui reprehenderit mustache ethnic. Wolf umami salvia, gentrify sapiente bespoke squid. Mollit leggings minim assumenda, gluten-free aute chillwave.</p>\n<p>Vinyl aliquip aesthetic, nostrud fingerstache incididunt lomo narwhal DIY. Keytar tattooed laboris, artisan organic freegan hoodie stumptown banksy mumblecore mlkshk craft beer nesciunt. Anim aesthetic helvetica adipisicing pour-over yr, portland craft beer eu proident photo booth sriracha bicycle rights. Sartorial yr portland vice cosby sweater. Williamsburg bushwick nesciunt pinterest, ethnic delectus accusamus lo-fi master cleanse pickled scenester biodiesel. Squid kogi hoodie twee. Laborum pinterest excepteur odd future sed, pour-over craft beer truffaut proident officia mumblecore master cleanse magna next level.</p>\n","excerpt":"In ethical veniam gluten-free sustainable. Twee laboris banksy, sustainable scenester cray accusamus typewriter art party anim flexitarian freegan vero vegan. Assumenda kale chips echo park, mustache whatever ethnic do laboris cillum pork belly. Master cleanse reprehenderit iphone ex sunt eiusmod. Iphone jean shorts gastropub, small batch cray forage pop-up nesciunt yr VHS selvage bicycle rights [...]","date":"2012-05-25 03:01:02","modified":"2012-05-30 20:05:04","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["menu"]},"children":[]},{"title":"About","description":"menu","xoffset":"0px","zoom":"300px","id":47,"type":"page","slug":"about","url":"http://localhost/about/","status":"publish","title_plain":"About","content":"<p>This is about Kate</p>\n<p>In ethical veniam gluten-free sustainable. Twee laboris banksy, sustainable scenester cray accusamus typewriter art party anim flexitarian freegan vero vegan. Assumenda kale chips echo park, mustache whatever ethnic do laboris cillum pork belly. Master cleanse reprehenderit iphone ex sunt eiusmod. Iphone jean shorts gastropub, small batch cray forage pop-up nesciunt yr VHS selvage bicycle rights leggings DIY. Aliquip cliche anim, carles vice helvetica fugiat elit. Reprehenderit excepteur viral irony dolor.</p>\n<p>Whatever laborum brunch williamsburg 8-bit, laboris wes anderson kogi tofu reprehenderit consequat assumenda salvia. In eu pickled letterpress, carles semiotics proident cosby sweater wes anderson quis eiusmod. Ea hella sartorial nisi, adipisicing sunt dolore. Exercitation labore single-origin coffee forage. Adipisicing elit minim freegan non ex, vice quinoa flexitarian sint ennui. Nostrud cliche mustache incididunt, pitchfork skateboard sunt officia nesciunt whatever farm-to-table. Laboris vero commodo, craft beer portland godard nulla truffaut aliqua gastropub gluten-free mollit.</p>\n<p>Culpa photo booth sustainable butcher, you probably haven&#8217;t heard of them american apparel biodiesel art party cray chambray odd future tempor semiotics gastropub cliche. Dolor pitchfork laboris est consectetur, hoodie pickled whatever sriracha craft beer esse sapiente retro minim. Gentrify terry richardson exercitation, street art direct trade magna leggings odio vero elit. Dolor PBR deserunt, voluptate VHS delectus whatever commodo mcsweeney&#8217;s vero pitchfork laboris labore accusamus lomo. Incididunt stumptown qui reprehenderit mustache ethnic. Wolf umami salvia, gentrify sapiente bespoke squid. Mollit leggings minim assumenda, gluten-free aute chillwave.</p>\n<p>Vinyl aliquip aesthetic, nostrud fingerstache incididunt lomo narwhal DIY. Keytar tattooed laboris, artisan organic freegan hoodie stumptown banksy mumblecore mlkshk craft beer nesciunt. Anim aesthetic helvetica adipisicing pour-over yr, portland craft beer eu proident photo booth sriracha bicycle rights. Sartorial yr portland vice cosby sweater. Williamsburg bushwick nesciunt pinterest, ethnic delectus accusamus lo-fi master cleanse pickled scenester biodiesel. Squid kogi hoodie twee. Laborum pinterest excepteur odd future sed, pour-over craft beer truffaut proident officia mumblecore master cleanse magna next level.</p>\n","excerpt":"This is about Kate In ethical veniam gluten-free sustainable. Twee laboris banksy, sustainable scenester cray accusamus typewriter art party anim flexitarian freegan vero vegan. Assumenda kale chips echo park, mustache whatever ethnic do laboris cillum pork belly. Master cleanse reprehenderit iphone ex sunt eiusmod. Iphone jean shorts gastropub, small batch cray forage pop-up nesciunt yr [...]","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:03:25","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["menu"]},"children":[]},{"title":"Contact Kate","description":"menu","xoffset":"0px","zoom":"300px","id":49,"type":"page","slug":"contact-kate","url":"http://localhost/contact-kate/","status":"publish","title_plain":"Contact Kate","content":"<p>Contact Kate here</p>\n<p>Production Office:<br />\nIpsum Events<br />\nFairmont Tower Suite 723,<br />\nSheik Zayed Road<br />\nP. O. Box 65736,<br />\nDubai<br />\nUnited Arab Emirates<br />\nTelephone: +971 4 312 4393<br />\nFax: +971 4 312 4394<br />\nEmail: info@ipsumevents.com</p>\n<p>Registered Office:<br />\nIpsum FZC<br />\nP.O.Box 16111,<br />\nRAK Free Trade Zone,<br />\nRas Al Khaimah,<br />\nUnited Arab Emirates</p>\n","excerpt":"Contact Kate here Production Office: Ipsum Events Fairmont Tower Suite 723, Sheik Zayed Road P. O. Box 65736, Dubai United Arab Emirates Telephone: +971 4 312 4393 Fax: +971 4 312 4394 Email: info@ipsumevents.com Registered Office: Ipsum FZC P.O.Box 16111, RAK Free Trade Zone, Ras Al Khaimah, United Arab Emirates","date":"2012-05-25 03:01:02","modified":"2012-05-30 20:04:34","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["menu"]},"children":[]},{"title":"Kate El-Bizri","description":"undefined","xoffset":"0px","zoom":"300px","id":75,"type":"page","slug":"kate-el-bizri","url":"http://localhost/","status":"publish","title_plain":"Kate El-Bizri","content":"<p>The front page text goes here. Lorem Ipsum, my nigga.</p>\n","excerpt":"The front page text goes here. Lorem Ipsum, my nigga.","date":"2012-05-25 03:01:02","modified":"2012-07-03 04:10:54","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{},"children":[]},{"title":"Wine List","description":"gallery","xoffset":"0px","zoom":"300px","id":14,"type":"page","slug":"bottles","url":"http://localhost/bottles/","status":"publish","title_plain":"Wine List","content":"<p>Tadaa!</p>\n","excerpt":"Tadaa!","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:28:26","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["gallery"]},"children":[{"title":"Educated Guess","description":"Educated Guess. Client: Roots Run Deep","xoffset":"0px","zoom":"300px","id":12,"type":"page","slug":"a-second-page","url":"http://localhost/bottles/a-second-page/","status":"publish","title_plain":"Educated Guess","content":"<h1>client</h1>\n<p>roots run deep winery</p>\n<h1>brand</h1>\n<p>educated guess</p>\n<h1>varietals</h1>\n<p>cabernet sauvignon, pinot noir, chardonnay</p>\n<p>\nThe term “Educated Guess” immediately made me think of research and education, which for me meant copious notes filling every page, every chalkboard, every space I could find. I applied this idea of notetaking to the wine maker studying enology; the chemical equations are derived from the chemistry of wine, sulfite production, etc. This concept hits home with a simple mathematic equation featuring the appellation and year to equal the varietal, and is finished off with a metal bar suggesting the railing of a chalkboard.\n</p>\n<h1>calligraphy</h1>\n<p>self<br />\n<br/><br />\n<em>This wine was featured in the SFMOMA exhibit: How Wine Became Modern: Design &amp; Wine 1976 to Now, December 2010 through April 2011.</em></p>\n","excerpt":"client roots run deep winery brand educated guess varietals cabernet sauvignon, pinot noir, chardonnay The term “Educated Guess” immediately made me think of research and education, which for me meant copious notes filling every page, every chalkboard, every space I could find. I applied this idea of notetaking to the wine maker studying enology; the [...]","date":"2012-05-25 03:01:02","modified":"2012-09-08 02:01:12","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[{"id":134,"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1.jpg","slug":"bottle1","title":"bottle1","description":"","caption":"","parent":12,"mime_type":"image/jpeg","images":{"full":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1.jpg","width":191,"height":706},"thumbnail":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1-150x150.jpg","width":150,"height":150},"medium":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1-81x300.jpg","width":81,"height":300},"large":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1.jpg","width":191,"height":706}}},{"id":135,"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle11.jpg","slug":"bottle1-2","title":"closeup","description":"","caption":"","parent":12,"mime_type":"image/jpeg","images":{"full":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle11.jpg","width":191,"height":706},"thumbnail":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle11-150x150.jpg","width":150,"height":150},"medium":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle11-81x300.jpg","width":81,"height":300},"large":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle11.jpg","width":191,"height":706}}}],"comment_count":0,"comment_status":"open","thumbnail":"http://192.168.0.35/wp-content/uploads/2012/05/bottle1-150x150.jpg","custom_fields":{"description":["Educated Guess. Client: Roots Run Deep"]},"children":[]},{"title":"Hypothesis","description":"This is another bottle of wine.","xoffset":"0px","zoom":"300px","id":26,"type":"page","slug":"bottle2","url":"http://localhost/bottles/bottle2/","status":"publish","title_plain":"Hypothesis","content":"<p>Client: Roots Run Deep Winery</p>\n<p>The next step after Educated Guess was to design Hypothesis. They had to follow a similar familial feel, but not be exactly the same: siblings, not twins. A hypothesis is a conclusion based upon specific observations; temperature, humidity, soil type – all of these separate observations come together to form the wine maker’s hypothesis of how the wine will be. To bring the design closer to the Educated Guess identity, the mathematical equation concept was brought back for the appellation, year and varietal.</p>\n","excerpt":"Client: Roots Run Deep Winery The next step after Educated Guess was to design Hypothesis. They had to follow a similar familial feel, but not be exactly the same: siblings, not twins. A hypothesis is a conclusion based upon specific observations; temperature, humidity, soil type – all of these separate observations come together to form [...]","date":"2012-05-25 03:01:02","modified":"2012-08-23 22:23:27","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[{"id":27,"url":"http://localhost/wp-content/uploads/2012/05/bottle2.jpg","slug":"bottle2","title":"bottle2","description":"","caption":"","parent":26,"mime_type":"image/jpeg","images":{"full":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle2.jpg","width":191,"height":706},"thumbnail":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle2-150x150.jpg","width":150,"height":150},"medium":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle2-81x300.jpg","width":81,"height":300},"large":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle2.jpg","width":191,"height":706}}}],"comment_count":0,"comment_status":"open","thumbnail":"http://192.168.0.35/wp-content/uploads/2012/05/bottle2-150x150.jpg","custom_fields":{"description":["This is another bottle of wine."]},"children":[]},{"title":"bottle3","description":"This is YET another bottle of wine.","xoffset":"0px","zoom":"300px","id":29,"type":"page","slug":"bottle3","url":"http://localhost/bottles/bottle3/","status":"publish","title_plain":"bottle3","content":"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n<p>Clive dunn fu manchu stiff upper lip goose off-piste.</p>\n<p>Class definer luxurious colonel mustard villain, toothbrush give him what-for class definer gentleman godlike villain colonel mustard tache luxurious.</p>\n<p>Albert einstein waiter terry thomas brad pitt smashing good fun tony stark cardinal richelieu, driving gloves tony stark handlebar waiter cardinal richelieu cigars terry thomas brad pitt albert einstein smashing good fun, brad pitt success louis xiii driving gloves cigars albert einstein handlebar cappuccino catcher albert einstein cardinal richelieu tony stark Refined gentlemen quis smashing good fun lorreto del mar waiter terry thomas kaiser bill. Trimmed sweat irrigator, ned flanders chevron tudor philosopher tricky sneezes?</p>\n<p>Doctor strange holiday waiter ned flanders dick van dyke off-piste. Clive dunn freestyle luxurious middle eastern despot hairy kid at school des lynam en time-warped cabbie, toothbrush freestyle hairy kid at school middle eastern despot waxy gurn villain grooming clive dunn des lynam hulk hogan big daft brush luxurious en time-warped cabbi</p>\n","excerpt":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Clive dunn fu manchu stiff upper lip goose off-piste. Class definer luxurious colonel mustard villain, toothbrush give him what-for class definer gentleman godlike villain colonel mustard tache luxurious. Albert einstein waiter terry thomas brad pitt smashing [...]","date":"2012-05-25 03:01:02","modified":"2012-05-30 18:40:31","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[{"id":30,"url":"http://localhost/wp-content/uploads/2012/05/bottle3.jpg","slug":"bottle3","title":"bottle3","description":"","caption":"","parent":29,"mime_type":"image/jpeg","images":{"full":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle3.jpg","width":191,"height":706},"thumbnail":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle3-150x150.jpg","width":150,"height":150},"medium":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle3-81x300.jpg","width":81,"height":300},"large":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/bottle3.jpg","width":191,"height":706}}}],"comment_count":0,"comment_status":"open","thumbnail":"http://192.168.0.35/wp-content/uploads/2012/05/bottle3-150x150.jpg","custom_fields":{"description":["This is YET another bottle of wine."]},"children":[]}]},{"title":"Beverages","description":"gallery","xoffset":"0px","zoom":"300px","id":60,"type":"page","slug":"beverages","url":"http://localhost/beverages/","status":"publish","title_plain":"Beverages","content":"","excerpt":"","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:28:40","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["gallery"]},"children":[{"title":"See, it works for all the menu items","description":"undefined","xoffset":"0px","zoom":"300px","id":72,"type":"page","slug":"see-it-works-for-all-the-menu-items","url":"http://localhost/beverages/see-it-works-for-all-the-menu-items/","status":"publish","title_plain":"See, it works for all the menu items","content":"","excerpt":"","date":"2012-05-25 03:01:02","modified":"2012-05-31 22:04:56","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[{"id":129,"url":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch.jpg","slug":"telephone-ch","title":"telephone-ch","description":"","caption":"","parent":72,"mime_type":"image/jpeg","images":{"full":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch.jpg","width":200,"height":200},"thumbnail":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch-150x150.jpg","width":150,"height":150},"medium":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch.jpg","width":200,"height":200},"large":{"url":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch.jpg","width":200,"height":200}}}],"comment_count":0,"comment_status":"open","thumbnail":"http://192.168.0.35/wp-content/uploads/2012/05/telephone-ch-150x150.jpg","custom_fields":{},"children":[]}]},{"title":"Appetizers","description":"gallery","xoffset":"0px","zoom":"300px","id":62,"type":"page","slug":"appetizers","url":"http://localhost/appetizers/","status":"publish","title_plain":"Appetizers","content":"","excerpt":"","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:29:00","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["gallery"]},"children":[]},{"title":"Entrees","description":"undefined","xoffset":"0px","zoom":"300px","id":67,"type":"page","slug":"entrees","url":"http://localhost/entrees/","status":"publish","title_plain":"Entrees","content":"","excerpt":"","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:30:02","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{},"children":[]},{"title":"Desserts","description":"gallery","xoffset":"0px","zoom":"300px","id":69,"type":"page","slug":"desserts","url":"http://localhost/desserts/","status":"publish","title_plain":"Desserts","content":"","excerpt":"","date":"2012-05-25 03:01:02","modified":"2012-06-14 05:30:14","categories":[],"tags":[],"author":{"id":1,"slug":"admin","name":"admin","first_name":"","last_name":"","nickname":"admin","url":"","description":""},"comments":[],"attachments":[],"comment_count":0,"comment_status":"open","custom_fields":{"description":["gallery"]},"children":[]}];
		Test.Data = new App.Data.PageCollection(Test.TestData);
	});
		
	it('should contain as many models as the test data is long',function(){
		
		expect(Test.Data.length).toEqual(Test.TestData.length);
	});

	describe('the product model called a-second-page',function(){
		beforeEach(function(){
			Test.Data.PageIndex =  new App.Data.PageCollection(Test.Data.returnmodels());
			Test.Model = Test.Data.PageIndex.where({slug:"a-second-page"})[0];
		})

		it('should have a slug attribute of "a-second-page"',function(){
			expect(Test.Model.get('slug')).toEqual('a-second-page');
		})
		

	})	
	xdescribe('A GalleryView containing the Model bottles ',function(){
		beforeEach(function(){
			GalleryView = new App.KateDesign.GalleryView(Data.where({slug:"bottles"})[0]);
		})
		
	});
	
});

/*
describe('outer test',function(){

			beforeEach(function(){
				console.log("Before Each Outer")
			})
			
			afterEach(function(){
				console.log("After Each Outer")
			});
	
			it('should be true 1',function(){
				console.log('test 1');
			 expect(true).toBeTruthy();
			});
		
			it('so should this 2',function(){
				console.log('test 2');
				
			 expect(true).toBeTruthy();
			});


	describe('inner test',function(){
			
			beforeEach(function(){
				console.log("Before Each Inner")
			})
			
			afterEach(function(){
				console.log("After Each Inner")
			});
	
			it('should be true 3',function(){
							console.log('test 3');

			 expect(true).toBeTruthy();
			});
		
			it('so should this 4',function(){
							console.log('test 4');
	
			 expect(true).toBeTruthy();
			});
		
	});
});
*/