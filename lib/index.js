///<reference path="../node_modules/postcss/postcss.d.ts" />
import postcss from 'postcss';

export default function eachDecl(
	container: postcss.Container,
	callback: (decl: postcss.Declaration) => void
) {
	container.each(node => {
		if (node.type === 'decl') {
			callback(<postcss.Declaration>node);
		}
	});
}
