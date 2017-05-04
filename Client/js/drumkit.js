export var drumkit={

	boom:0,
	clap:0,
	snare:0,
	tom:0,
	crash:0,
	hihat:0,
	openhat:0,
	kick:0,
	ride:0,

	boomSound:0,
	clapSound:0,
	snareSound:0,
	tomSound:0,
	crashSound:0,
	hihatSound:0,
	openhatSound:0,
	kickSound:0,
	rideSound:0,


	init:function(){
		drumkit.boom=document.querySelector('.a');
		drumkit.clap=document.querySelector('.s');
		drumkit.snare=document.querySelector('.d');
		drumkit.tom=document.querySelector('.f');
		drumkit.crash=document.querySelector('.g');
		drumkit.hihat=document.querySelector('.h');
		drumkit.openhat=document.querySelector('.j');
		drumkit.kick=document.querySelector('.k');
		drumkit.ride=document.querySelector('.l');

		drumkit.boomSound=document.getElementById('boom-sound');
		drumkit.clapSound=document.getElementById('clap-sound');
		drumkit.snareSound=document.getElementById('snare-sound');
		drumkit.tomSound=document.getElementById('tom-sound');
		drumkit.crashSound=document.getElementById('crash-sound');
		drumkit.hihatSound=document.getElementById('hihat-sound');
		drumkit.openhatSound=document.getElementById('openhat-sound');
		drumkit.kickSound=document.getElementById('kick-sound');
		drumkit.rideSound=document.getElementById('ride-sound');

		console.log(drumkit.boomSound);
	},

	keyDown: function(e){

     	switch(e.keyCode){

 			case 65:
			drumkit.boomSound.currentTime=0;
			drumkit.boomSound.play();
			var key = document.querySelector('.a');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
 			break;

			case 83:
			drumkit.clapSound.currentTime=0;
			drumkit.clapSound.play();
			var key = document.querySelector('.s');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 68:
			drumkit.snareSound.currentTime=0;
			drumkit.snareSound.play();
			var key = document.querySelector('.d');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 70:
			drumkit.tomSound.currentTime=0;
			drumkit.tomSound.play();
			var key = document.querySelector('.f');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 71:
			drumkit.crashSound.currentTime=0;
			drumkit.crashSound.play();
			var key = document.querySelector('.g');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 72:
			drumkit.hihatSound.currentTime=0;
			drumkit.hihatSound.play();
			var key = document.querySelector('.h');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 74:
			drumkit.openhatSound.currentTime=0;
			drumkit.openhatSound.play();
			var key = document.querySelector('.j');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 75:
			drumkit.kickSound.currentTime=0;
			drumkit.kickSound.play();
			var key = document.querySelector('.k');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;

			case 76:
			drumkit.rideSound.currentTime=0;
			drumkit.rideSound.play();
			var key = document.querySelector('.l');
			key.className += ' active';
			key.addEventListener('transitionend',drumkit.removeTransition);
			break;
		}

},

removeTransition:function(e){
if(e.propertyName === 'transform') {
		this.classList.remove('active');
	}
},


};
