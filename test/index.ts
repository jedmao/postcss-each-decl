///<reference path="../typings/tsd.d.ts" />
import { expect } from 'chai';
import postcss from 'postcss';
import eachDecl from '../lib/index';

// ReSharper disable WrongExpressionStatement
describe('postcss-each-decl', () => {

	it('shallowly iterates over each declaration', () => {
		const rule = postcss.parse(`
			a {
				foo: FOO;
				bar: BAR;
				b {
					baz: BAZ;
				}
				qux: QUX;
			}
		`).first;
		const expected = ['qux', 'bar', 'foo'];
		eachDecl(<postcss.Container>rule, decl => {
			const prop = expected.pop();
			expect(decl.prop).to.eq(prop);
			expect(decl.value).to.eq(prop.toUpperCase());
		});
		expect(expected).lengthOf(0);
	});

});
