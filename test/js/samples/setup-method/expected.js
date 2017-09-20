/* generated by Svelte vX.Y.Z */
import { assign, init, noop, proto } from "svelte/shared.js";

var methods = {
	foo ( bar ) {
		console.log( bar );
	}
};

function setup(Component) {
	Component.SOME_CONSTANT = 42;
	Component.factory = function (target) {
		return new Component({
			target: target
		});
	}
	Component.prototype.foo( 'baz' );
}

function create_main_fragment(state, component) {

	return {
		create: noop,

		mount: noop,

		update: noop,

		unmount: noop,

		destroy: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, methods, proto);

setup(SvelteComponent);
export default SvelteComponent;