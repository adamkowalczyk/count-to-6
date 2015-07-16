var foot = {
		kick: function () {
			this.yelp = "Ouch!";
			setImmediate( () => console.log(this.yelp) );
		}
	};

foot.kick();

// finally, common sense this. I have a feeling it might lead to complacency outside of arrow functions, unless es6 fixes the whole js 'this' mess