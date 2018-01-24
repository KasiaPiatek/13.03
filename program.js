/*process.stdin.setEncoding('utf-8');


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
*/

process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {

var input = process.stdin.read();
if (input !==null) {
var instruction = input.toString().trim();
switch(instruction) {
	case '/exit':
		process.stdout.write('Quitting app!\n');
		process.exit();
	break;
	case '/lang':
		process.stderr.write('Language\n');
		console.log(process.env.lang);
	break;
	case '/version.node':
		process.stdout.write('Node Current Version\n');
		console.log(process.versions.node);
	break;
	default:
		process.stderr.write('Wrong instruction!\n');
}}}
);


