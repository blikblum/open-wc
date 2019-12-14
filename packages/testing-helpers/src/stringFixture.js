import { fixtureWrapper } from './fixtureWrapper.js';
import { elementUpdated } from './elementUpdated.js';

/**
 * Setups an element synchronously from the provided string template and puts it in the DOM.
 * Allows to specify properties via an object or a function taking the element as an argument.
 *
 * @template {Element} T - Is an element or a node
 * @param {string} template
 * @param {object} [options]
 * @returns {T}
 */
export function stringFixtureSync(template, options = {}) {
  const wrapper = fixtureWrapper(options.parent);
  wrapper.innerHTML = template;
  return /** @type {T} */ (wrapper.children[0]);
}

/**
 * Setups an element asynchronously from the provided string template and puts it in the DOM.
 * Allows to specify properties via an object or a function taking the element as an argument.
 *
 * @template {Element} T - Is an element or a node
 * @param {string} template
 * @param {object} [options]
 * @returns {Promise<T>}
 */
export async function stringFixture(template, options) {
  const el = stringFixtureSync(template, options);
  await elementUpdated(el);
  // @ts-ignore
  return el;
}
