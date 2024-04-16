# react-router-use-uri-hash

## About

This is a very lightweight React hook that will let you use URI hashes to navigate to a specific point (a dom element with a matching ID) on a page.

## Usage

1. NPM Install and save the package to your project.
    - `npm install react-router-use-uri-hash --save`
1. At the top of each page that will use it, import the package, then call it.
    - `import { useUriHash } from "react-router-use-uri-hash";`
    - useUriHash();
1. Add a hash to the `to=""` prop of the **<Link>** element from **react-router-dom**

### Gotchas

- Only include the `useUriHash()` once per page/view (on the highest/first component that renders).
- This hook does not return anything


## Example
```
...
import { useUriHash } from "react-router-use-uri-hash";
import { Link } from "react-router-dom";

function Home() {
    useUriHash();

    return (
        <div className="page-home">
            <nav>
                <Link to="/#section-1">section 1</Link>
                <Link to="/#section-2">section 2</Link>
                <Link to="/#section-3">section 3</Link>
                <Link to="/#footer">Footer</Link>
            </nav>
            <section id="section-1">
                ...
            </section>
            <section id="section-2">
                ...
            </section>
            <section id="section-3">
                ...
            </section>
            <footer id="footer">
                ...
            </footer>
        </div>
    );
}

export default Home;
```

## Issues / Feature requests

Use github to suggest improvemnts / updates / report bugs.