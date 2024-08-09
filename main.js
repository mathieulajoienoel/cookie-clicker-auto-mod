Game.registerMod("mln-clicker",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here

		l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;top:2px;right:2px;display:block;color:red;" class="mln-clicker--button" id="mlnClicker">Start</a>');

		this.active = false;
		this.interval = undefined;
		let MOD=this;

		AddEvent(l('mlnClicker'),'click',function(){
			// Toggle Clicker
			if(MOD.active){
				clearInterval(MOD.interval);
				MOD.interval = null;
				Game.Notify(`MLN clicker stopped`,'',[16,5]);
			} else {
				MOD.interval = setInterval(MOD.loop, 1);
				Game.Notify(`MLN clicker started`,'',[16,5]);
			}
			MOD.active = !MOD.active;
		});

		Game.Notify(`MLN clicker loaded`,'',[16,5]);
	},
	loop: function(){
		// Click the cookie
		Game.ClickCookie();
		// Click the golden cookies
		Game.shimmers.forEach(function(shimmer) {
			if (!shimmer.wrath && (shimmer.type == "golden" || shimmer.type == 'reindeer')) { shimmer.pop() }
		})
	}
	//save:function(){
	//	//use this to store persistent data associated with your mod
	//},
	//load:function(str){
	//	//do stuff with the string data you saved previously
	//},
});