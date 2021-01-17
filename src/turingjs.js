
$(function () {

	/*var sd = JSON.parse($('textarea#thetextarea').val())
	console.log(sd)
	
	if(sd)
	console.log(JSON.parse($('textarea#thetextarea').val()))
*/
    var e = document.getElementById("machines")
    option = e.value;
    
			console.log(option);
			getConfig()
    var turing = new Turing(machines(option), mapGetter().get(option+"from"), mapGetter().get(option+"to"));
    turing.tape = mapGetter().get(option+"tape");
    turing.calc = mapGetter().get(option+"calc");
    turing.reset();

    $('#run').click(function () {
        turing.run();
    });

    $('#step').click(function () {
        turing.step();
    });

    $('#reset').click(function () {
        turing.reset();
    });

    $('#calc').click(function () {
        
        switch (option) {
            case "1":
                var calc = prompt('Adj meg egy imput szalagot (e.g. 4!):');
				if (calc) {
					var match = calc.match(/([0-9]+)(!)/i);
					if (match) {
						var first = parseInt(match[1]);
						var tape = [];
						var i = 0;
						for(k=first; k>=1; k--) {
							for(j=0; j<k; j++) {
								tape[i++] = '1';
							}
							if(k!=1) {
								tape[i++]='*';
							}
						}
						
						
						tape[i++] = '=';
						turing.tape = tape;
						turing.calc = first + '!' + ' =';
						turing.reset();
					} else {
						alert('Valami nem jó!');
					}
				}
                break;
            case "2":
                var calc = prompt('Adj meg egy imput szalagot (e.g. 4!):');
				if (calc) {
					var match = calc.match(/([0-9]+)(!)/i);
					if (match) {
						var first = parseInt(match[1]);
						var tape = [];
						var i = 0;
						if(first==0) {
							tape[i++] = '0';
						} else {
							for (j=0; j<first; j++) {
								tape[i++] = '1';
							}
						}

						tape[i++] = '!';
						tape[i++] = '=';
						turing.tape = tape;
						turing.calc = first + '!' + ' =';
						turing.reset();
					} else {
						alert('Valami nem jó!');
					}
				}
                break;
            case "3":
                var calc = prompt('Adj meg egy imput szalagot(e.g. 3 * 2):');
				if (calc) {
					var match = calc.match(/([0-9]+)[ ]*\*[ ]*([0-9]+)/i);
					if (match) {
						var first = parseInt(match[1]), second = parseInt(match[2]);
						var tape = [];
						var i = 0;
						if (0 == first) {
							tape[i++] = '0';
						} else {
							for ( ; i < first; i++) {
								tape[i] = '1';
							}
						}
						tape[i++] = '*';
						if (0 == second) {
							tape[i++] = '0';
						} else {
							for (var end = second + i; i < end; i++) {
								tape[i] = '1';
							}
						}
						tape[i++] = '=';
						turing.tape = tape;
						turing.calc = first + ' * ' + second + ' =';
						turing.reset();
					} else {
						alert('Valami nem jó!');
					}
				}
                break;
            
            }
       
    });
});