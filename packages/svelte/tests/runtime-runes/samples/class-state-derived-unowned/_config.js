import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	// The component context class instance gets shared between tests, strangely, causing hydration to fail?
	skip_if_hydrate: 'permanent',

	async test({ assert, target, component }) {
		const btn = target.querySelector('button');

		flushSync(() => {
			btn?.click();
		});

		assert.deepEqual(component.log, [0, 'class trigger false', 'local trigger false', 1]);

		flushSync(() => {
			btn?.click();
		});

		assert.deepEqual(component.log, [0, 'class trigger false', 'local trigger false', 1, 2]);

		flushSync(() => {
			btn?.click();
		});

		assert.deepEqual(component.log, [0, 'class trigger false', 'local trigger false', 1, 2, 3]);

		flushSync(() => {
			btn?.click();
		});

		assert.deepEqual(component.log, [
			0,
			'class trigger false',
			'local trigger false',
			1,
			2,
			3,
			4,
			'class trigger true',
			'local trigger true'
		]);
	}
});
