
$(async function () {

	
    //var e = document.getElementById("machines")
    option = "2"
    //console.log(machines(option))
			
			try {
				if(document.getElementById("jsonSelect").value != ""){
					toLoadMachine = await fetchToServer("appendToDiv",document.getElementById("jsonSelect").value)
					console.log("asd")
				}
				toLoadMachine = JSON.parse(toLoadMachine)	
				var turing = new Turing(toLoadMachine, document.getElementById("first").value, document.getElementById("last").value);
				console.log("try")
				if (err) throw err;

				turing.tape = document.getElementById("tape").value
				turing.calc = document.getElementById("final").value
				turing.reset();
				
			} catch (err) {
				var turing = new Turing(machines(option), mapGetter().get(option+"from"), mapGetter().get(option+"to"));
				console.log("catch")

				turing.tape = ['r', 'o', 's', 's', 'z', ' ', 'b','e', 'm', 'e', 'n', 'e', 't']
				turing.calc = "error";
				turing.reset();
			}
    //var turing = new Turing(machines(option), mapGetter().get(option+"from"), mapGetter().get(option+"to"));
    

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
        
        
				r = document.getElementById("jsonSelect").value
				
  				if(r.includes("example1")){
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
			}
            if(r.includes("example2")){
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
			}

			if(r.includes("example3")){
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
			}
       
    });
});