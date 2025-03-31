import { moduleDir, rootDir } from './dir.js';
import path from 'path';
import { NodePlopAPI } from 'node-plop';

export default function (plop: NodePlopAPI) {
	plop.setGenerator('story', {
		description: 'Generate a Storybook story',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/{{componentName}}.stories.js'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/story/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('embed files', {
		description: 'Generate an embed.js default file',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/{{componentName}}/embed.js'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/embed/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('config files', {
		description: 'Generate a config.js default file',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/{{componentName}}/config.js'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/config/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('routes files', {
		description: 'Generate a default route handler that imports the script',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/{{componentName}}/+page.svelte'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/route/{{strategy}}.hbs')
			}
		]
	});

	plop.setGenerator('layout files', {
		description: 'Generate a layout handler once',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/+layout.svelte'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/route/layout.hbs')
			}
		]
	});

	plop.setGenerator('svelte files', {
		description: 'Generate a default Svelte component to be embedded',
		actions: [
			{
				type: 'add',
				path: path.resolve(rootDir, 'web/components/{{componentName}}/index.svelte'),
				templateFile: path.resolve(moduleDir, 'lib/plop-templates/structure/component.hbs')
			}
		]
	});
}
