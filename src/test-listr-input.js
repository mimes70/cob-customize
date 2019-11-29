const Listr = require('listr');
const input = require('listr-input');
const got = require('got');

const list = new Listr([
	{
		title: 'Retrieving data',
		task: () => input('Credentials', {
			secret: true,
			validate: value => value.length > 0,
			done: credentials => got('https://myapi.com', {
				headers: {
					'Authorization': `Bearer ${credentials}`
				}
			})
		})
	}
]);

list.run();