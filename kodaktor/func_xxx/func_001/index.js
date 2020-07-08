// author: Aksenov Andrey
const concat = require('goss_concat');
function func(r=255, g=255, b=255) {
	console.log(concat('RGB #', r.toString(16), g.toString(16), b.toString(16)));
    console.log(concat('RGB: ', r, ' ', g, ' ', b));
}
func(50,100,250);