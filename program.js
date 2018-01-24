process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
	// tutaj treść tego co ma się wykonac w moemncie odczytania wejscia.
	//metoda .read() ma za zadanie odczytac co uzyt
	//podal na wejsciu
	var input = process.stdin.read();
	if(input !==null) {
		var instruction = input.toString().trim();
		if( instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else {
			process.stderr.write('Wrong instruction!\n');
		}
	}
	console.log (process.versions);
	console.log (process.env)
});


