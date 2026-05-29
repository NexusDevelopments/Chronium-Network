/* empty css                                        */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderScript, b as renderTemplate, d as createAstro } from '../../../chunks/astro/server_BXYMPdlv.mjs';
import { $ as $$SettingsCard } from '../../../chunks/SettingsCard_BKqb5Sg7.mjs';
import { n as noop, s as subscribe_to_store, a as run_all, c as current_component, f as fallback, b as attr_style, d as bind_props, e as escape_html, g as spread_props, p as push, h as spread_attributes, i as pop, j as attr_class, k as stringify, l as slot, m as store_get, o as ensure_array_like, u as unsubscribe_stores, q as attr, t as clsx } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_CoKgzUc8.mjs';
/* empty css                                    */
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../../../chunks/Layout_Cx6AcNfo.mjs';
import { $ as $$SettingsLayout, a as $$SettingsSection } from '../../../chunks/SettingsSection_BrKAWws_.mjs';
import { M as MARKETPLACE_ENABLED } from '../../../chunks/client_5pRn_Q30.mjs';

/** @import { Equals } from '#client' */


/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Creates a `Readable` store that allows reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Readable<T>}
 */
function readable(value, start) {
	return {
		subscribe: writable(value, start).subscribe
	};
}

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>, set: (value: T) => void, update: (fn: Updater<T>) => void) => Unsubscriber | void} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * @template {Stores} S
 * @template T
 * @overload
 * @param {S} stores
 * @param {(values: StoresValues<S>) => T} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
/**
 * @template {Stores} S
 * @template T
 * @param {S} stores
 * @param {Function} fn
 * @param {T} [initial_value]
 * @returns {Readable<T>}
 */
function derived(stores, fn, initial_value) {
	const single = !Array.isArray(stores);
	/** @type {Array<Readable<any>>} */
	const stores_array = single ? [stores] : stores;
	if (!stores_array.every(Boolean)) {
		throw new Error('derived() expects stores as input, got a falsy value');
	}
	const auto = fn.length < 2;
	return readable(initial_value, (set, update) => {
		let started = false;
		/** @type {T[]} */
		const values = [];
		let pending = 0;
		let cleanup = noop;
		const sync = () => {
			if (pending) {
				return;
			}
			cleanup();
			const result = fn(single ? values[0] : values, set, update);
			if (auto) {
				set(result);
			} else {
				cleanup = typeof result === 'function' ? result : noop;
			}
		};
		const unsubscribers = stores_array.map((store, i) =>
			subscribe_to_store(
				store,
				(value) => {
					values[i] = value;
					pending &= ~(1 << i);
					if (started) {
						sync();
					}
				},
				() => {
					pending |= 1 << i;
				}
			)
		);
		started = true;
		sync();
		return function stop() {
			run_all(unsubscribers);
			cleanup();
			// We need to set this to false because callbacks can still happen despite having unsubscribed:
			// Callbacks might already be placed in the queue which doesn't know it should no longer
			// invoke this derived store.
			started = false;
		};
	});
}

/**
 * Get the current value from a store by subscribing and immediately unsubscribing.
 *
 * @template T
 * @param {Readable<T>} store
 * @returns {T}
 */
function get(store) {
	let value;
	subscribe_to_store(store, (_) => (value = _))();
	// @ts-expect-error
	return value;
}

/** @import { Component } from '#server' */

/** @param {() => void} fn */
function onDestroy(fn) {
	var context = /** @type {Component} */ (current_component);
	(context.d ??= []).push(fn);
}

createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="parent" class="flex flex-row flex-wrap gap-4 items-center font-roboto justify-center"></div> <div class="w-0 h-0 visibility-none hidden"> ${renderComponent($$result, "asset-loader1", "asset-loader1", {})} </div> ${renderScript($$result, "/workspaces/Chronium-Network/src/components/catalog/InstalledPlugins.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/components/catalog/InstalledPlugins.astro", void 0);

/**
 * @external Store
 * @see [Svelte stores](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values-store-contract)
 */

/**
 * Create a store similar to [Svelte's `derived`](https://svelte.dev/docs#run-time-svelte-store-writable),
 * but which has its own `set` and `update` methods and can send values back to the origin stores.
 * [Read more...](https://github.com/PixievoltNo1/svelte-writable-derived#default-export-writablederived)
 * 
 * @param {Store|Store[]} origins One or more stores to derive from. Same as
 * [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 1st parameter.
 * @param {!Function} derive The callback to determine the derived value. Same as
 * [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 2nd parameter.
 * @param {!Function} reflect Called when the derived store gets a new value via its `set` or
 * `update` methods, and determines new values for the origin stores.
 * [Read more...](https://github.com/PixievoltNo1/svelte-writable-derived#new-parameter-reflect)
 * @param [initial] The new store's initial value. Same as
 * [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 3rd parameter.
 * 
 * @returns {Store} A writable store.
 */
function writableDerived(origins, derive, reflect, initial) {
	var childDerivedSetter, originValues, blockNextDerive = false;
	var reflectOldValues = reflect.length >= 2;
	var wrappedDerive = (got, set, update) => {
		childDerivedSetter = set;
		if (reflectOldValues) {
			originValues = got;
		}
		if (!blockNextDerive) {
			let returned = derive(got, set, update);
			if (derive.length < 2) {
				set(returned);
			} else {
				return returned;
			}
		}
		blockNextDerive = false;
	};
	var childDerived = derived(origins, wrappedDerive, initial);
	
	var singleOrigin = !Array.isArray(origins);
	function doReflect(reflecting) {
		var setWith = reflect(reflecting, originValues);
		if (singleOrigin) {
			blockNextDerive = true;
			origins.set(setWith);
		} else {
			setWith.forEach( (value, i) => {
				blockNextDerive = true;
				origins[i].set(value);
			} );
		}
		blockNextDerive = false;
	}
	
	var tryingSet = false;
	function update(fn) {
		var isUpdated, mutatedBySubscriptions, oldValue, newValue;
		if (tryingSet) {
			newValue = fn( get(childDerived) );
			childDerivedSetter(newValue);
			return;
		}
		var unsubscribe = childDerived.subscribe( (value) => {
			if (!tryingSet) {
				oldValue = value;
			} else if (!isUpdated) {
				isUpdated = true;
			} else {
				mutatedBySubscriptions = true;
			}
		} );
		newValue = fn(oldValue);
		tryingSet = true;
		childDerivedSetter(newValue);
		unsubscribe();
		tryingSet = false;
		if (mutatedBySubscriptions) {
			newValue = get(childDerived);
		}
		if (isUpdated) {
			doReflect(newValue);
		}
	}
	return {
		subscribe: childDerived.subscribe,
		set(value) { update( () => value ); },
		update,
	};
}

const TOAST_LIMIT = 20;
const toasts = writable([]);
const pausedAt = writable(null);
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId) => {
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        remove(toastId);
    }, 1000);
    toastTimeouts.set(toastId, timeout);
};
const clearFromRemoveQueue = (toastId) => {
    const timeout = toastTimeouts.get(toastId);
    if (timeout) {
        clearTimeout(timeout);
    }
};
function update(toast) {
    if (toast.id) {
        clearFromRemoveQueue(toast.id);
    }
    toasts.update(($toasts) => $toasts.map((t) => (t.id === toast.id ? { ...t, ...toast } : t)));
}
function add(toast) {
    toasts.update(($toasts) => [toast, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast) {
    if (get(toasts).find((t) => t.id === toast.id)) {
        update(toast);
    }
    else {
        add(toast);
    }
}
function dismiss(toastId) {
    toasts.update(($toasts) => {
        if (toastId) {
            addToRemoveQueue(toastId);
        }
        else {
            $toasts.forEach((toast) => {
                addToRemoveQueue(toast.id);
            });
        }
        return $toasts.map((t) => t.id === toastId || toastId === undefined ? { ...t, visible: false } : t);
    });
}
function remove(toastId) {
    toasts.update(($toasts) => {
        if (toastId === undefined) {
            return [];
        }
        return $toasts.filter((t) => t.id !== toastId);
    });
}
function startPause(time) {
    pausedAt.set(time);
}
function endPause(time) {
    let diff;
    pausedAt.update(($pausedAt) => {
        diff = time - ($pausedAt || 0);
        return null;
    });
    toasts.update(($toasts) => $toasts.map((t) => ({
        ...t,
        pauseDuration: t.pauseDuration + diff
    })));
}
const defaultTimeouts = {
    blank: 4000,
    error: 4000,
    success: 2000,
    loading: Infinity,
    custom: 4000
};
function useToasterStore(toastOptions = {}) {
    const mergedToasts = writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
        ...toastOptions,
        ...toastOptions[t.type],
        ...t,
        duration: t.duration ||
            toastOptions[t.type]?.duration ||
            toastOptions?.duration ||
            defaultTimeouts[t.type],
        style: [toastOptions.style, toastOptions[t.type]?.style, t.style].join(';')
    })), ($toasts) => $toasts);
    return {
        toasts: mergedToasts,
        pausedAt
    };
}

const isFunction = (valOrFunction) => typeof valOrFunction === 'function';
const resolveValue = (valOrFunction, arg) => (isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction);

const genId = (() => {
    let count = 0;
    return () => {
        count += 1;
        return count.toString();
    };
})();
const prefersReducedMotion = (() => {
    // Cache result
    let shouldReduceMotion;
    return () => {
        if (shouldReduceMotion === undefined && typeof window !== 'undefined') {
            const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
            shouldReduceMotion = !mediaQuery || mediaQuery.matches;
        }
        return shouldReduceMotion;
    };
})();

const createToast = (message, type = 'blank', opts) => ({
    createdAt: Date.now(),
    visible: true,
    type,
    ariaProps: {
        role: 'status',
        'aria-live': 'polite'
    },
    message,
    pauseDuration: 0,
    ...opts,
    id: opts?.id || genId()
});
const createHandler = (type) => (message, options) => {
    const toast = createToast(message, type, options);
    upsert(toast);
    return toast.id;
};
const toast = (message, opts) => createHandler('blank')(message, opts);
toast.error = createHandler('error');
toast.success = createHandler('success');
toast.loading = createHandler('loading');
toast.custom = createHandler('custom');
toast.dismiss = (toastId) => {
    dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
    const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });
    promise
        .then((p) => {
        toast.success(resolveValue(msgs.success, p), {
            id,
            ...opts,
            ...opts?.success
        });
        return p;
    })
        .catch((e) => {
        toast.error(resolveValue(msgs.error, e), {
            id,
            ...opts,
            ...opts?.error
        });
    });
    return promise;
};

function calculateOffset(toast, $toasts, opts) {
    const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
    const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height);
    const toastIndex = relevantToasts.findIndex((t) => t.id === toast.id);
    const toastsBefore = relevantToasts.filter((toast, i) => i < toastIndex && toast.visible).length;
    const offset = relevantToasts
        .filter((t) => t.visible)
        .slice(...(reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]))
        .reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
    return offset;
}
const handlers = {
    startPause() {
        startPause(Date.now());
    },
    endPause() {
        endPause(Date.now());
    },
    updateHeight: (toastId, height) => {
        update({ id: toastId, height });
    },
    calculateOffset
};
function useToaster(toastOptions) {
    const { toasts, pausedAt } = useToasterStore(toastOptions);
    const timeouts = new Map();
    let _pausedAt;
    const unsubscribes = [
        pausedAt.subscribe(($pausedAt) => {
            if ($pausedAt) {
                for (const [, timeoutId] of timeouts) {
                    clearTimeout(timeoutId);
                }
                timeouts.clear();
            }
            _pausedAt = $pausedAt;
        }),
        toasts.subscribe(($toasts) => {
            if (_pausedAt) {
                return;
            }
            const now = Date.now();
            for (const t of $toasts) {
                if (timeouts.has(t.id)) {
                    continue;
                }
                if (t.duration === Infinity) {
                    continue;
                }
                const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
                if (durationLeft < 0) {
                    if (t.visible) {
                        // FIXME: This causes a recursive cycle of updates.
                        toast.dismiss(t.id);
                    }
                    return null;
                }
                timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
            }
        })
    ];
    onDestroy(() => {
        for (const unsubscribe of unsubscribes) {
            unsubscribe();
        }
    });
    return { toasts, handlers };
}

function CheckmarkIcon($$payload, $$props) {
	let primary = fallback($$props['primary'], "#61d345");
	let secondary = fallback($$props['secondary'], "#fff");

	$$payload.out += `<div class="svelte-11kvm4p"${attr_style('', {
		'--primary': primary,
		'--secondary': secondary
	})}></div>`;

	bind_props($$props, { primary, secondary });
}

function ErrorIcon($$payload, $$props) {
	let primary = fallback($$props['primary'], "#ff4b4b");
	let secondary = fallback($$props['secondary'], "#fff");

	$$payload.out += `<div class="svelte-1ee93ns"${attr_style('', {
		'--primary': primary,
		'--secondary': secondary
	})}></div>`;

	bind_props($$props, { primary, secondary });
}

function LoaderIcon($$payload, $$props) {
	let primary = fallback($$props['primary'], "#616161");
	let secondary = fallback($$props['secondary'], "#e0e0e0");

	$$payload.out += `<div class="svelte-1j7dflg"${attr_style('', {
		'--primary': primary,
		'--secondary': secondary
	})}></div>`;

	bind_props($$props, { primary, secondary });
}

function ToastIcon($$payload, $$props) {
	let type, icon, iconTheme;
	let toast = $$props['toast'];

	({ type, icon, iconTheme } = toast);

	if (typeof icon === 'string') {
		$$payload.out += '<!--[-->';
		$$payload.out += `<div class="animated svelte-1kgeier">${escape_html(icon)}</div>`;
	} else if (typeof icon !== 'undefined') {
		$$payload.out += '<!--[1-->';
		$$payload.out += `<!---->`;
		icon?.($$payload, {});
		$$payload.out += `<!---->`;
	} else if (type !== 'blank') {
		$$payload.out += '<!--[2-->';
		$$payload.out += `<div class="indicator svelte-1kgeier">`;
		LoaderIcon($$payload, spread_props([iconTheme]));
		$$payload.out += `<!----> `;

		if (type !== 'loading') {
			$$payload.out += '<!--[-->';
			$$payload.out += `<div class="status svelte-1kgeier">`;

			if (type === 'error') {
				$$payload.out += '<!--[-->';
				ErrorIcon($$payload, spread_props([iconTheme]));
			} else {
				$$payload.out += '<!--[!-->';
				CheckmarkIcon($$payload, spread_props([iconTheme]));
			}

			$$payload.out += `<!--]--></div>`;
		} else {
			$$payload.out += '<!--[!-->';
		}

		$$payload.out += `<!--]--></div>`;
	} else {
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
	bind_props($$props, { toast });
}

function ToastMessage($$payload, $$props) {
	push();

	let toast = $$props['toast'];

	$$payload.out += `<div${spread_attributes({ class: 'message', ...toast.ariaProps }, 'svelte-1nauejd')}>`;

	if (typeof toast.message === 'string') {
		$$payload.out += '<!--[-->';
		$$payload.out += `${escape_html(toast.message)}`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<!---->`;
		toast.message?.($$payload, { toast });
		$$payload.out += `<!---->`;
	}

	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { toast });
	pop();
}

function ToastBar($$payload, $$props) {
	push();

	let toast = $$props['toast'];
	let position = fallback($$props['position'], () => void 0, true);
	let style = fallback($$props['style'], "");
	let Component = fallback($$props['Component'], () => void 0, true);
	let factor;
	let animation;

	{
		const top = (toast.position || position || "top-center").includes("top");

		factor = top ? 1 : -1;

		const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];

		animation = toast.visible ? enter : exit;
	}

	$$payload.out += `<div${attr_class(`base ${stringify(toast.height ? animation : 'transparent')} ${stringify(toast.className || '')}`, 'svelte-ug60r4')}${attr_style(`${stringify(style)}; ${stringify(toast.style)}`, { '--factor': factor })}>`;

	if (Component) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<!---->`;

		Component?.($$payload, {
			$$slots: {
				icon: ($$payload) => {
					ToastIcon($$payload, { toast, slot: 'icon' });
				},
				message: ($$payload) => {
					ToastMessage($$payload, { toast, slot: 'message' });
				}
			}
		});

		$$payload.out += `<!---->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<!---->`;

		slot($$payload, $$props, 'default', { ToastIcon, ToastMessage, toast }, () => {
			ToastIcon($$payload, { toast });
			$$payload.out += `<!----> `;
			ToastMessage($$payload, { toast });
			$$payload.out += `<!---->`;
		});

		$$payload.out += `<!---->`;
	}

	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { toast, position, style, Component });
	pop();
}

function ToastWrapper$1($$payload, $$props) {
	push();

	let top, bottom, factor, justifyContent;
	let toast = $$props['toast'];
	let setHeight = $$props['setHeight'];

	top = toast.position?.includes("top") ? 0 : null;
	bottom = toast.position?.includes("bottom") ? 0 : null;
	factor = toast.position?.includes("top") ? 1 : -1;
	justifyContent = toast.position?.includes("center") && "center" || (toast.position?.includes("right") || toast.position?.includes("end")) && "flex-end" || null;

	$$payload.out += `<div${attr_class('wrapper svelte-v01oml', undefined, {
		'active': toast.visible,
		'transition': !prefersReducedMotion()
	})}${attr_style('', {
		'--factor': factor,
		'--offset': toast.offset,
		top,
		bottom,
		'justify-content': justifyContent
	})}>`;

	if (toast.type === 'custom') {
		$$payload.out += '<!--[-->';
		ToastMessage($$payload, { toast });
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<!---->`;

		slot($$payload, $$props, 'default', { toast }, () => {
			ToastBar($$payload, { toast, position: toast.position });
		});

		$$payload.out += `<!---->`;
	}

	$$payload.out += `<!--]--></div>`;
	bind_props($$props, { toast, setHeight });
	pop();
}

function Toaster($$payload, $$props) {
	push();

	var $$store_subs;
	let reverseOrder = fallback($$props['reverseOrder'], false);
	let position = fallback($$props['position'], "top-center");
	let toastOptions = fallback($$props['toastOptions'], () => void 0, true);
	let gutter = fallback($$props['gutter'], 8);
	let containerStyle = fallback($$props['containerStyle'], () => void 0, true);
	let containerClassName = fallback($$props['containerClassName'], () => void 0, true);
	const { toasts, handlers } = useToaster(toastOptions);
	let _toasts;

	_toasts = store_get($$store_subs ??= {}, '$toasts', toasts).map((toast) => ({
		...toast,
		position: toast.position || position,
		offset: handlers.calculateOffset(toast, store_get($$store_subs ??= {}, '$toasts', toasts), {
			reverseOrder,
			gutter,
			defaultPosition: position
		})
	}));

	const each_array = ensure_array_like(_toasts);

	$$payload.out += `<div${attr_class(`toaster ${stringify(containerClassName || '')}`, 'svelte-1phplh9')}${attr_style(containerStyle)} role="alert"><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let toast = each_array[$$index];

		ToastWrapper$1($$payload, {
			toast,
			setHeight: (height) => handlers.updateHeight(toast.id, height)
		});
	}

	$$payload.out += `<!--]--></div>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);

	bind_props($$props, {
		reverseOrder,
		position,
		toastOptions,
		gutter,
		containerStyle,
		containerClassName
	});

	pop();
}

function Toast($$payload, $$props) {
	push();

	let toastProp = $$props['toastProp'];

	$$payload.out += `<button${attr('id', toastProp.id)}${attr_class(clsx(toastProp.class), undefined, { 'invisible': 'invisible', 'hidden': 'hidden' })}>Auto clicked for toast notifs</button>`;
	bind_props($$props, { toastProp });
	pop();
}

function ToastWrapper($$payload, $$props) {
	$$payload.out += `<div class="hidden" id="toastwrapper">`;
	Toaster($$payload, {});
	$$payload.out += `<!----> <!---->`;
	slot($$payload, $$props, 'default', {}, null);
	$$payload.out += `<!----></div>`;
}

const $$Astro = createAstro("http://localhost:4321");
const $$Pr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pr;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Settings" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsLayout", $$SettingsLayout, { "title": t("settings.proxy") }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SettingsSection", $$SettingsSection, { "title": "Proxy", "subtitle": "A wide variety of settings for the proxy/rewriter itself." }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col items-center justify-center flex-wrap md:flex-row md:items-start md:justify-start gap-4"> ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Proxy", "description": "Choose the proxy/rewriter that fits your needs", "input": { input: false }, "button": { name: "Change", id: "setproxy" }, "select": {
    select: true,
    name: "proxy",
    options: [
      { name: "Automatic", value: "automatic", disabled: false },
      { name: "Ultraviolet", value: "uv", disabled: false },
      { name: "Scramjet (BETA)", value: "sj", disabled: false }
    ]
  }, "both": { enabled: false } })} <!-- SettingsCard
          title="Open in"
          description="Choose how to open your sites"
          input={{ input: false }}
          button={{ name: "Set", id: "setopenin" }}
          select={{
            select: true,
            name: "openin",
            options: [
              { name: "Embed", value: "embed", disabled: false },
              { name: "Direct", value: "direct", disabled: false },
              { name: "About:Blank", value: "a:b", disabled: false },
              { name: "Blob", value: "blob", disabled: false },
            ],
            }}
            both={{enabled: false}}
        / --> ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Search Engine", "description": "Choose your search engine", "input": { input: false }, "button": { name: "Set Search Engine", id: "setsearchengine" }, "select": {
    select: true,
    name: "searchengine",
    options: [
      { name: "DuckDuckGo", value: "ddg", disabled: false },
      { name: "Bing", value: "bing", disabled: false }
    ]
  }, "both": { enabled: false } })} ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Wisp Server", "description": "Choose the wisp server you feel is the fastest", "input": { input: true, required: false, placeholder: "wss://chronium.network/wisp/" }, "button": { name: "Select", id: "setwispurl" }, "select": {
    select: true,
    name: "wispurl",
    options: [
      { name: "Default", value: "default", disabled: false },
      { name: "Custom", value: "custom", disabled: false }
    ]
  }, "both": {
    enabled: true,
    showOnSelect: { value: "custom" }
  } })} ${renderComponent($$result4, "SettingsCard", $$SettingsCard, { "title": "Transport", "description": "Select the transport to use", "input": { input: false }, "button": { name: "Set transport", id: "settransport" }, "select": {
    select: true,
    name: "transport",
    options: [
      { name: "Libcurl", value: "libcurl", disabled: false },
      { name: "Epoxy", value: "epoxy", disabled: false }
    ]
  }, "both": { enabled: false } })} </div> ` })} ${MARKETPLACE_ENABLED}` })} ${renderComponent($$result2, "ToastWrapper", ToastWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/toasts/ToastWrapper.svelte", "client:component-export": "default" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Toast", Toast, { "toastProp": {
    toastType: "success",
    text: "Successfully changed proxy!",
    class: "proxyMessage"
  }, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/toasts/Toast.svelte", "client:component-export": "default" })}  ${renderComponent($$result3, "Toast", Toast, { "toastProp": {
    toastType: "success",
    text: "Saved Search Engine Selection!",
    class: "searchEngineMessage"
  }, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/toasts/Toast.svelte", "client:component-export": "default" })} ${renderComponent($$result3, "Toast", Toast, { "toastProp": {
    toastType: "success",
    text: "Wisp server selected!",
    class: "wispUrlMessage"
  }, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/toasts/Toast.svelte", "client:component-export": "default" })} ${renderComponent($$result3, "Toast", Toast, { "toastProp": {
    toastType: "success",
    text: "Transport set!",
    class: "transportMessage"
  }, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/toasts/Toast.svelte", "client:component-export": "default" })} ` })} ` })} ${renderScript($$result, "/workspaces/Chronium-Network/src/pages/[lang]/settings/pr.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Chronium-Network/src/pages/[lang]/settings/pr.astro", void 0);

const $$file = "/workspaces/Chronium-Network/src/pages/[lang]/settings/pr.astro";
const $$url = "/[lang]/settings/pr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Pr,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
