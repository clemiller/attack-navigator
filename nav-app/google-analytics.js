const fs = require('fs');
const target = './src/environments/environment.prod.ts';
const config = `export const environment = {
	production: true,
	GOOGLE_ANALYTICS: '${process.env.GOOGLE_ANALYTICS}'
};`;
fs.writeFile(target, config, function(err) {
	if (err) console.log(err);
});