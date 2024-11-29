import { EmbeddableStrageies } from '../cli-create';

const TYPE_TO_ROUTE: { [key in EmbeddableStrageies]: string } = {
	autoEmbedOnBody: 'route-auto-start',
	autoEmbedWithTarget: 'route-with-target',
	embed: 'route-callable',
	embedMultiple: 'route-multiple'
} as const;

const TYPE_TO_STORY: { [key in EmbeddableStrageies]: string } = {
	autoEmbedOnBody: 'story-no-config',
	autoEmbedWithTarget: 'story-no-config',
	embed: 'story-with-config',
	embedMultiple: 'story-with-config'
} as const;

const TYPE_TO_TYPESCRIPT: { [key in EmbeddableStrageies]: string } = {
	autoEmbedOnBody: 'types-auto',
	autoEmbedWithTarget: 'types-auto',
	embed: 'types',
	embedMultiple: 'types-multiple'
} as const;

const TYPE_TO_EMBED: { [key in EmbeddableStrageies]?: string } = {
	autoEmbedOnBody: 'embed',
	autoEmbedWithTarget: 'embed-with-target',
	embed: 'embed',
	embedMultiple: 'embed'
} as const;

export { TYPE_TO_EMBED, TYPE_TO_ROUTE, TYPE_TO_TYPESCRIPT, TYPE_TO_STORY };
