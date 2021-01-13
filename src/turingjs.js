
$(function () {
   
    var e = document.getElementById("machines")
    option = e.value;
    
            console.log(option);
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
        var calc = prompt('Adj meg egy imput szalagot (pl.: 4!):');
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
                alert('Rossz input!');
            }
        }
    });
});