/* generated by Svelte vX.Y.Z */
import { assign, createElement, detachNode, init, insertNode, noop, proto, setStyle } from "svelte/shared.js";

function create_main_fragment(component, ctx) {
	var div;

	return {
		c() {
			div = createElement("div");
			setStyle(div, "color", ctx.color);
		},

		m(target, anchor) {
			insertNode(div, target, anchor);
		},

		p(changed, ctx) {
			if (changed.color) {
				setStyle(div, "color", ctx.color);
			}
		},

		u() {
			detachNode(div);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;