import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "svelte/internal";

function create_fragment(ctx) {
	let div0;
	let t;
	let div1;

	return {
		c() {
			div0 = element("div");
			t = space();
			div1 = element("div");
			attr(div0, "data-foo", "bar");
			attr(div1, "data-foo", ctx.bar);
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			insert(target, t, anchor);
			insert(target, div1, anchor);
		},
		p(changed, ctx) {
			if (changed.bar) {
				attr(div1, "data-foo", ctx.bar);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t);
			if (detaching) detach(div1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { bar } = $$props;

	$$self.$set = $$props => {
		if ("bar" in $$props) $$invalidate("bar", bar = $$props.bar);
	};

	return { bar };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { bar: 0 });
	}
}

export default Component;