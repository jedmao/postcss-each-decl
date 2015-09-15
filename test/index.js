var tape = require('tape');
var postcss = require('postcss');

var eachDecl = require('..');

tape('it shallowly iterates over each declaration', function(t) {

	var rule = postcss.parse(`
		a {
			foo: FOO;
			bar: BAR;
			b {
				baz: BAZ;
			}
			qux: QUX;
		}
	`).first;
	var expected = ['qux', 'bar', 'foo'];
	eachDecl(rule, function(decl) {
		var prop = expected.pop();
		t.equal(decl.prop, prop);
		t.equal(decl.value, prop.toUpperCase());
	});
	t.equal(expected.length, 0);

	t.end();
});
