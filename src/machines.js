
function machines(asd){

 

switch (asd) {
    case "1":
		//console.log(machines1())
        return machines1()
    case "2":
		//console.log(machines2())
        return machines2()
    case "3":
		//console.log(machines3())
        return machines3()
    default:
        console.log("error")
        break;
}

}

function machines1(){
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
    
            return steps
}

function machines2(){
 // Steps
 var steps = {};

 // s1: 
 steps['s1:1'] = {state: 's2', value: 'X', move: 'right'};
 steps['s1:!'] = {state: 's4', value: '!', move: 'right'};
 steps['s1:0'] = {state: 's19', value: '0', move: 'right'};

 // s2: move to end 
 steps['s2:1'] = {state: 's2', value: '1', move: 'right'};
 steps['s2:!'] = {state: 's2', value: '!', move: 'right'};
 steps['s2:='] = {state: 's2', value: '=', move: 'right'};
 steps['s2:']  = {state: 's3', value: '1', move: 'left'};

 // s3: seek X
 steps['s3:!'] = {state: 's3', value: '!', move: 'left'};
 steps['s3:='] = {state: 's3', value: '=', move: 'left'};
 steps['s3:1'] = {state: 's3', value: '1', move: 'left'};
 steps['s3:X'] = {state: 's1', value: 'X', move: 'right'};

 // s4: move to end 
 steps['s4:1'] = {state: 's4', value: '1', move: 'right'};
 steps['s4:!'] = {state: 's4', value: '!', move: 'right'};
 steps['s4:='] = {state: 's4', value: '=', move: 'right'};
 steps['s4:']  = {state: 's5', value: '*', move: 'left'};

 // s5: first X
 steps['s5:X'] = {state: 's5', value: 'X', move: 'left'};
 steps['s5:1'] = {state: 's5', value: '1', move: 'left'};
 steps['s5:!'] = {state: 's5', value: '!', move: 'left'};
 steps['s5:='] = {state: 's5', value: '=', move: 'left'};
 steps['s5:'] = {state: 's6', value: '', move: 'right'};
 steps['s5:Z'] = {state: 's7', value: 'Z', move: 'right'};

 // s6: replace fist X
 steps['s6:X'] = {state: 's13', value: 'Y', move: 'right'};

 // s13: replace second X
 steps['s13:X'] = {state: 's7', value: 'Y', move: 'right'};
 steps['s13:!'] = {state: 's16', value: '!', move: 'right'};

 // s7: 
 steps['s7:X'] = {state: 's8', value: 'Z', move: 'right'};
 steps['s7:!'] = {state: 's14', value: '!', move: 'right'};

 // s8: 
 steps['s8:X'] = {state: 's8', value: 'X', move: 'right'};
 steps['s8:1'] = {state: 's8', value: '1', move: 'right'};
 steps['s8:!'] = {state: 's9', value: '!', move: 'right'};

 // s9:
 steps['s9:='] = {state: 's9', value: '=', move: 'right'};
 steps['s9:1'] = {state: 's10', value: 'X', move: 'right'};
 steps['s9:*'] = {state: 's12', value: '*', move: 'left'};

 // s10:
 steps['s10:1'] = {state: 's10', value: '1', move: 'right'};
 steps['s10:*'] = {state: 's10', value: '*', move: 'right'};
 steps['s10:'] = {state: 's11', value: '1', move: 'left'};

 // s11:
 steps['s11:1'] = {state: 's11', value: '1', move: 'left'};
 steps['s11:*'] = {state: 's11', value: '*', move: 'left'};
 steps['s11:X'] = {state: 's9', value: 'X', move: 'right'};

 // s12:
 steps['s12:X'] = {state: 's12', value: '1', move: 'left'};
 steps['s12:='] = {state: 's5', value: '=', move: 'left'};

 // s14:
 steps['s14:='] = {state: 's14', value: '=', move: 'right'};
 steps['s14:1'] = {state: 's14', value: '1', move: 'right'};
 steps['s14:*'] = {state: 's14', value: '1', move: 'right'};
 steps['s14:'] = {state: 's19', value: '', move: 'left'};

 // s19:
 steps['s19:1'] = {state: 's15', value: '', move: 'left'};

 // s15:
 steps['s15:1'] = {state: 's15', value: '1', move: 'left'};
 steps['s15:='] = {state: 's15', value: '=', move: 'left'};
 steps['s15:!'] = {state: 's15', value: '!', move: 'left'};
 steps['s15:Z'] = {state: 's15', value: 'X', move: 'left'};
 steps['s15:Y'] = {state: 's16', value: 'Y', move: 'right'};

 // s16: move to end 
 steps['s16:1'] = {state: 's16', value: '1', move: 'right'};
 steps['s16:!'] = {state: 's16', value: '!', move: 'right'};
 steps['s16:='] = {state: 's16', value: '=', move: 'right'};
 steps['s16:X'] = {state: 's16', value: 'X', move: 'right'};
 steps['s16:']  = {state: 's17', value: '*', move: 'left'};
 steps['s16:*']  = {state: 's99', value: '', move: 'left'};

 // s17: first X
 steps['s17:X'] = {state: 's17', value: 'X', move: 'left'};
 steps['s17:1'] = {state: 's17', value: '1', move: 'left'};
 steps['s17:!'] = {state: 's17', value: '!', move: 'left'};
 steps['s17:='] = {state: 's17', value: '=', move: 'left'};
 steps['s17:Y'] = {state: 's18', value: 'Y', move: 'right'};

 // s18: replace Y
 steps['s18:X'] = {state: 's7', value: 'Y', move: 'right'};
 steps['s18:!'] = {state: 's16', value: '!', move: 'right'};
 
 //s19
 steps['s19:!'] = {state: 's19', value: '!', move: 'right'};
 steps['s19:='] = {state: 's19', value: '=', move: 'right'};
 steps['s19:'] = {state: 's99', value: '1', move: 'left'};

 return steps
}


function machines3(){

     // Steps
			var steps = {};

	        // s1: 
	        steps['s1:1'] = {state: 's2', value: 'X', move: 'right'};
	        steps['s1:*'] = {state: 's8', value: '*', move: 'right'};

	        // s2: move to right until * and goto s3 
	        steps['s2:1'] = {state: 's2', value: '1', move: 'right'};
	        steps['s2:*'] = {state: 's3', value: '*', move: 'right'};

	        // s3: replace 1 with Y and goto s4
	        steps['s3:1'] = {state: 's4', value: 'Y', move: 'right'};
	        steps['s3:='] = {state: 's6', value: '=', move: 'left'};

	        // s4: write 1 into empty place and goto s5
	        steps['s4:1'] = {state: 's4', value: '1', move: 'right'};
	        steps['s4:='] = {state: 's4', value: '=', move: 'right'};
	        steps['s4:']  = {state: 's5', value: '1', move: 'left'};
	        
	        // s4: seek left until Y
	        steps['s5:1'] = {state: 's5', value: '1', move: 'left'};
	        steps['s5:='] = {state: 's5', value: '=', move: 'left'};
	        steps['s5:Y'] = {state: 's3', value: 'Y', move: 'right'};

	        // s6: cleanup Y and seek X
	        steps['s6:Y'] = {state: 's6', value: '1', move: 'left'};
	        steps['s6:*'] = {state: 's6', value: '*', move: 'left'};
	        steps['s6:1'] = {state: 's6', value: '1', move: 'left'};
	        steps['s6:X'] = {state: 's1', value: 'X', move: 'right'};
	        
	        // handle 0
	        steps['s1:0'] = {state: 's7', value: '0', move: 'right'};
	        steps['s3:0'] = {state: 's7', value: '0', move: 'right'};
	        steps['s7:*'] = {state: 's7', value: '*', move: 'right'};
	        steps['s7:1'] = {state: 's7', value: '1', move: 'right'};
	        steps['s7:0'] = {state: 's7', value: '0', move: 'right'};
	        steps['s7:='] = {state: 's7', value: '=', move: 'right'};
	        steps['s7:']  = {state: 's8', value: '0', move: 'right'};

    return steps
}

function mapGetter(){
    let aMap = new Map()

    aMap.set("1tape",['1', '1', '1', '*', '1', '1', '*', '1', '='])
    aMap.set("1calc",'3! =')
    aMap.set("1from",'s1')
    aMap.set("1to",'s9')
   
	aMap.set("2tape",['1', '1', '1', '!', '='])
    aMap.set("2calc",'3! =')
    aMap.set("2from",'s1')
    aMap.set("2to",'s99')
   
	aMap.set("3tape",['1', '1', '1', '*', '1', '1', '='])
    aMap.set("3calc",'3 * 2 =')
    aMap.set("3from",'s1')
    aMap.set("3to",'s8')
    
   return aMap;
}