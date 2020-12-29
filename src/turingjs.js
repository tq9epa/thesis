$(function () {
    // Steps
    var steps = {};
    
    //s1
    steps['s1:1'] = {state: 's2', value: 'X', move: 'right'};
    
    //s2
    steps['s2:1'] = {state: 's2', value: '1', move: 'right'};
    steps['s2:*'] = {state: 's2', value: '*', move: 'right'};
    steps['s2:='] = {state: 's3', value: '=', move: 'right'};
    
    //s3
   steps['s3:1'] = {state: 's3', value: '1', move: 'right'};
   steps['s3:Y'] = {state: 's5', value: '1', move: 'right'};
   steps['s3:']  = {state: 's4', value: '1', move: 'right'};
   
   //s4
   steps['s4:']  = {state: 's6', value: 'Y', move: 'left'};
   
   //s5
   steps['s5:']  = {state: 's6', value: 'Y', move: 'left'};
   
   //s6
   steps['s6:1']  = {state: 's6', value: '1', move: 'left'};
   steps['s6:=']  = {state: 's7', value: '=', move: 'left'};
   
   //s7
   steps['s7:1']  = {state: 's7', value: '1', move: 'left'};
   steps['s7:*']  = {state: 's7', value: '*', move: 'left'};
   steps['s7:X']  = {state: 's8', value: 'X', move: 'right'};
   
   //s8
   steps['s8:*']  = {state: 's10', value: '*', move: 'right'};
   steps['s8:1']  = {state: 's2', value: 'X', move: 'right'};
   steps['s8:=']  = {state: 's9', value: '=', move: 'right'};
   
   //s10
   steps['s10:1']  = {state: 's26', value: 'X', move: 'right'};
   steps['s10:*']  = {state: 's25', value: '*', move: 'right'};
   
   //s11
   steps['s11:1']  = {state: 's11', value: '1', move: 'right'};
   steps['s11:*']  = {state: 's11', value: '*', move: 'right'};
   steps['s11:=']  = {state: 's12', value: '=', move: 'right'};
   
   //s12
   steps['s12:C']  = {state: 's12', value: 'C', move: 'right'};
   steps['s12:1']  = {state: 's13', value: 'C', move: 'right'};
   steps['s12:Y']  = {state: 's18', value: 'Y', move: 'left'};
   
   //s13
   steps['s13:1']  = {state: 's13', value: '1', move: 'right'};
   steps['s13:Y']  = {state: 's14', value: 'Y', move: 'right'};
   
   //s14
   steps['s14:1']  = {state: 's14', value: '1', move: 'right'};
   steps['s14:Y']  = {state: 's16', value: '1', move: 'right'};
   steps['s14:']  = {state: 's15', value: '1', move: 'right'};
   
   //s15
   steps['s15:']  = {state: 's17', value: 'Y', move: 'left'};
   
   //s16
   steps['s16:']  = {state: 's17', value: 'Y', move: 'left'};
   
   //s17
   steps['s17:1']  = {state: 's17', value: '1', move: 'left'};
   steps['s17:Y']  = {state: 's17', value: 'Y', move: 'left'};
   steps['s17:C']  = {state: 's12', value: 'C', move: 'right'};
   
   //18
   steps['s18:C']  = {state: 's18', value: '1', move: 'left'};
   steps['s18:=']  = {state: 's19', value: '=', move: 'left'};
   
   //19
   steps['s19:1']  = {state: 's19', value: '1', move: 'left'};
   steps['s19:*']  = {state: 's19', value: '*', move: 'left'};
   steps['s19:X']  = {state: 's20', value: 'X', move: 'right'};
   
   //20
   steps['s20:1']  = {state: 's21', value: 'X', move: 'right'};
   
   //s21
   steps['s21:*']  = {state: 's22', value: '*', move: 'right'};
   steps['s21:1']  = {state: 's11', value: '1', move: 'right'};
   
   //s22
   steps['s22:1']  = {state: 's22', value: '1', move: 'right'};
   steps['s22:*']  = {state: 's22', value: '*', move: 'right'};
   steps['s22:=']  = {state: 's22', value: '=', move: 'right'};
   steps['s22:Y']  = {state: 's23', value: '1', move: 'right'};
   
   //s23
   steps['s23:1']  = {state: 's23', value: '1', move: 'right'};
   steps['s23:Y']  = {state: 's24', value: '', move: 'left'};
   
   //s24
   steps['s24:1']  = {state: 's25', value: 'Y', move: 'left'};
   
   //s25
   steps['s25:1']  = {state: 's25', value: '1', move: 'left'};
   steps['s25:=']  = {state: 's25', value: '=', move: 'left'};
   steps['s25:*']  = {state: 's25', value: '*', move: 'left'};
   steps['s25:X']  = {state: 's27', value: 'X', move: 'right'};
  
   //s26
   steps['s26:=']  = {state: 's9', value: '=', move: 'right'};
   steps['s26:1']  = {state: 's11', value: '1', move: 'right'};
   steps['s26:*']  = {state: 's11', value: '*', move: 'right'};
   
   //s27
    steps['s27:*']  = {state: 's10', value: '*', move: 'right'};
var turing = new Turing(steps, 's1', 's9');
			turing.tape = ['a', 'a', 'b', 'b'];
			turing.calc = '3! =';
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
				var calc = prompt('Please type in new calculation (e.g. 4!):');
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
						alert('Sorry, invalid input!');
					}
				}
			});
		});