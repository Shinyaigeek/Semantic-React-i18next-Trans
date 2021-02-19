# semantic-react-i18next-trans

## Feature

This is Extended `<Trans />` Component in `react-i18next` for semantics and types.

You can code jsx with Translation like

```tsx
import { TransP } from "semantic-react-i18next-trans";

const Hoge = () => {
    return(<div>
        <TransP>Paragraph</TransP>
    </div>)
}
```

not like here, `<Trans />` is mixed up with markup.

```tsx
import { TransP } from "semantic-react-i18next-trans";

const Hoge = () => {
    return(<div>
        <p><Trans>Paragraph</Trans></p>
    </div>)
}
```

## FAQ

* Q. Does this package will cause expanded bundle-size ?
* No, This package is tree-shakable ✨
