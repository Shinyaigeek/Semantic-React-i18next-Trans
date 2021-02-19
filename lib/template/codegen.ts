import fs from "fs";
import path from "path";
import { htmltags } from "./htmltags";

const template = fs.readFileSync(path.join(__dirname, "./template.tsx"), "utf-8");

const makeFirstCharUppercase = (str: string): string => str.substring(0, 1).toUpperCase() + str.substring(1)

const output = `
// THIS FILE IS AUTO GENERATED
` + template.replace(`
/*
replace
*/
`, `
${htmltags.map(tag => `
declare function _${tag}<
    K extends TFuncKey<N> extends infer A ? A : never,
    N extends Namespace = DefaultNamespace
>(
    props: TransProps<K, N, "${tag}">
): React.ReactElement;`).join("\n")}

${htmltags.map(tag => `
const Trans${makeFirstCharUppercase(tag)}: typeof _${tag} = (props) => <TransComp parent="${tag}" {...props} />;
`).join("\n")}

export {
    ${htmltags.map(tag => `Trans${makeFirstCharUppercase(tag)}`)}
}
`)

fs.writeFileSync(path.join(__dirname, "../_index.tsx"), output)