import { createRulesLabel, mapDivisors } from "./functions.ts";

const DEFAULT_MAX_ITERATIONS = 20;
const MAX_ITERATIONS = +(process.env.MAX_ITERATIONS || DEFAULT_MAX_ITERATIONS);

// main
(function() {
    for (let i = 1; i <= MAX_ITERATIONS; i++) {
        const rulesMap = mapDivisors(i);
        const ruleslabel = createRulesLabel(i, rulesMap);

        console.log(ruleslabel);
    }
})();