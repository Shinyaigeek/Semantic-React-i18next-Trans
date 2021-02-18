import fs from "fs";
import path from "path";
import { htmltags } from "./htmltags";

const template = fs.readFileSync(path.join(__dirname, "./template.tsx"), "utf-8");

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

interface ExtendTransComponentType {
    ${htmltags.map(tag => `${tag}: typeof _${tag};`).join("\n")}
}

const ExtendTransComponentMethods: ExtendTransComponentType = {
    ${htmltags.map(tag => `
    ${tag}: (props) => <TransBase parent="${tag}" {...props} />,`).join("\n")}
};
`)

fs.writeFileSync(path.join(__dirname, "../_index.tsx"), output)