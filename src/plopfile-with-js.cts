import { rootDir } from './cli/utils/rootdir';

import path from 'path';

import { NodePlopAPI } from 'node-plop';

const templates = __dirname.replace('/dist', '');

module.exports = function (plop: NodePlopAPI) {
	plop.setGenerator('story', {
		description: 'Generate a Storybook story',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/stories/{{componentName}}.stories.js'),
				templateFile: path.resolve(templates, 'plop-templates/story/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('embed files', {
		description: 'Generate a embed.js default file',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/_standalone/{{componentName}}/embed.js'),
				templateFile: path.resolve(templates, 'plop-templates/embed/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('types files', {
		description: 'Generate a types.js default file',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/_standalone/{{componentName}}/types.js'),
				templateFile: path.resolve(templates, 'plop-templates/types/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('routes files', {
		description: 'Generate a default route handler that imports the script',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/routes/{{componentName}}/+page.svelte'),
				templateFile: path.resolve(templates, 'plop-templates/route/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('layout files', {
		description: 'Generate a layout handler once',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/routes/+layout.svelte'),
				templateFile: path.resolve(templates, 'plop-templates/route/layout.hbs')
			}
		]
	});

	plop.setGenerator('svelte files', {
		description: 'Generate a default svelte component to be embedded',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'src/_standalone/{{componentName}}/index.svelte'),
				templateFile: path.resolve(templates, 'plop-templates/structure/component.hbs')
			}
		]
	});
};
