import { svelte } from 'svelte';

const ignoreWarnings = new Set([
    'a11y-no-onchange',
    'a11y-label-has-associated-control',
    'css-unused-selector'
]);

// ...

svelte({
    // ...
    onwarn: (warning, handler) => {
        if (ignoreWarnings.has(warning.code)) {
            return;
        }
        handler(warning);
    }
});
  