
$(async function () {

	try {
		if(localStorage.getItem("jsonSelect") != null){
		
		
		toLoadMachine = await fetchToServer("appendToDiv",localStorage.getItem("jsonSelect"))
			
		toLoadMachine = JSON.parse(toLoadMachine)

		var turing = new Turing(toLoadMachine, localStorage.getItem("first"), localStorage.getItem("last"));
		
		turing.tape = localStorage.getItem("tape").split(",")
		turing.calc = localStorage.getItem("final")
		turing.reset();
	}
	else{var turing = new Turing("", "", "");
	turing.tape = ['n','i', 'n','cs', ' ', 'a', 'd','a','t',]
	turing.reset();
		
	}
		
	} catch (error) {
		var turing = new Turing("", "", "");
		turing.tape = ['n','i', 'n','cs', ' ', 'a', 'd','a','t',]
		turing.reset();
	}
	
			 
    

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