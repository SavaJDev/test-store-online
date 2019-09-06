let isProd = process.env.NODE_ENV === 'production';
let path = require('path');

let config = {
	productionSourceMap: false,
	configureWebpack: config => {
		return {
			
			resolve: {
				alias: {
					'~': path.resolve(__dirname, 'src')
				}
			}
		}
	}
};

module.exports = config;