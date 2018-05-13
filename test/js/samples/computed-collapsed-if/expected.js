/* generated by Svelte vX.Y.Z */
import { assign, init, noop, proto } from "svelte/shared.js";

function a({ x }) {
	return x * 2;
}

function b({ x }) {
	return x * 3;
}

function create_main_fragment(component, ctx) {

	return {
		c: noop,

		m: noop,

		p: noop,

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._recompute({ x: 1 }, this._state);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);

SvelteComponent.prototype._recompute = function _recompute(changed, state) {
	if (changed.x) {
		if (this._differs(state.a, (state.a = a(state)))) changed.a = true;
		if (this._differs(state.b, (state.b = b(state)))) changed.b = true;
	}
}
export default SvelteComponent;