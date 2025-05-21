import { type RulesMap } from "./divisor-rule.model.ts";
import { DivisorRules } from "./divisor-rules.const.ts";

export const isDivBy = (i: number, num: number) => !(i % num);

export const mapDivisors = (i: number) => Object.fromEntries(
                DivisorRules.map((item) => [item.value, isDivBy(i, item.value) ? item : undefined])
);

export const createRulesLabel = (index: number, rulesMap: RulesMap): string => {
    let output = '';

    Object.keys(rulesMap).forEach((key) => {
        const item = rulesMap[key];

        if (item) {
            output += item.label
        }
    });

    return `${output ? output : index}`;
}