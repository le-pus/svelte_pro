/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createElement, detachNode, init, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	var meta0, meta1;

	return {
		c() {
			meta0 = createElement("meta");
			meta1 = createElement("meta");
			meta0.name = "twitter:creator";
			meta0.content = "@sveltejs";
			meta1.name = "twitter:title";
			meta1.content = "Svelte";
		},

		m(target, anchor) {
			append(document.head, meta0);
			append(document.head, meta1);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detach) {
			detachNode(meta0);
			detachNode(meta1);
		}
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default SvelteComponent;