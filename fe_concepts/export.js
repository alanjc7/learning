export { name1, name2, nameN };
export { variable1 as name1, variable2 as name2, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (x) { … } // also class, function*
export default function name1(x) { … } // also class, function*
export { name1 as default };

export * from 'path/to/file' ;
export { name1, name2, nameN } from './path' ;
export { import1 as name1, import2 as name2, nameN } from …;
export { default } from 'path';


// Named exports:
// exports a function declared earlier
export { myFunction };

// exports a constant
export const foo = Math.sqrt(2);

// Default exports (function):
export default function() {}

// Default exports (class):
export default class {}

