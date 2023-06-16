simplyCountdown('#cuenta', {
	year: 2023, // required
	month: 7, // required
	day: 29, // required
	hours: 7, // Default is 0 [0-23] integer
	minutes: 00, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: true, //Use UTC as default
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		return; 
	}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'simply-section', //section css class
	amountClass: 'simply-amount', // amount css class
	wordClass: 'simply-word', // word css class
	zeroPad: false,
	countUp: false
});

function play() {
	// var audio = new Audio('music/Como_el_ciervo.mp3');
	var au=document.getElementById("mus");
	var btn=document.getElementById("rep_mus");

	if(au.paused)
	{
		au.play();
		btn.innerHTML = '<img src="img/play.png" height ="40" width="40"/>'

	}
	else
	{
		var playPromise = au.play();
 
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
	  btn.innerHTML = '<img src="img/pausa.png" height ="40" width="40"/>'
      au.pause();
    })
    .catch(error => {
		console.log(error);
      // Auto-play was prevented
      // Show paused UI.
    });
  }

	}
	
}


	
  