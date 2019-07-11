# Next: The infinitely extensible browser

Hosted by : [@Ambrevar](https://github.com/ambrevar)<br/>

## Context

Browser extensions and mobile apps have that in common that they cannot (easily)
reuse each other.  This is mostly for security reasons, but really, if we could
fix the security aspect differently (and we believe we can), we could lift this
limitation.

So instead of a software landscape growing linearly (i.e. "every new
app/extension adds 1 feature at a time"), it would grow exponentially.

## Enters Next

Next was started with the idea of giving power back to the user.
Being written in Common Lisp, every part of the code base is configurable, even
modifiable, by the user.

Extensions can re-use every existing pieces and be combined indefinitely.

It is web-renderer-agnostic and can be used over WebKit and Webengine (Blink
-- from Chrome fame), and more to come.
It has support for VI- and Emacs-style bindings, and your own of course.

## Future ideas

- IPFS integration!
- Fuzzy-search everything, including tabs, buffer content (like links or sections), bookmarks, pictures,
  etc.
- Annotate pages with text.
- Synchronize (over IPFS / Git / Radicle?) the state of your browser, including
  annotations and bookmarks, in a git/editor-friendly format.
- Per-domain, per-tab settings for everything:  from isolated cookies to
  per-domain Tor support.

## Follow us:

- [Home page](https://next.atlas.engineer)
- [GitHub](https://github.com/atlas-engineer/next)
