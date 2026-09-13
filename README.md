# Pinboard Push

A Chrome extension that automatically copies bookmarks you create or edit in Chrome to your [Pinboard](https://pinboard.in) account.

Bookmarks are posted as **private** (`shared=no`).

## Single purpose

Pinboard Push does one thing: it mirrors your Chrome bookmarks to your own Pinboard account.

When you create or edit a bookmark, the extension sends that bookmark's URL and title to the Pinboard API using the API token you provide. That is the whole extension. It does not read your browsing history or page content, does not track you, and sends data nowhere other than Pinboard.

## Setup

1. Install the extension.
2. Open its options page.
3. Paste your Pinboard API token — find it on your [password settings page](https://pinboard.in/settings/password). It looks like `username:XXXXXXXXXXXXXXXX`.
4. Save.

That's it. From then on, adding or editing a bookmark in Chrome pushes its URL and title to Pinboard.

### Upgrading from 0.1.x

Version 0.2.0 switched from storing your username and password to a Pinboard **API token**, so no password is kept on disk. A stored password can't be converted into a token, so you'll need to paste one in once after upgrading. The options page clears the old credentials automatically and prompts you.

## Permissions

| Permission | Why |
| --- | --- |
| `bookmarks` | Receives the `onCreated` / `onChanged` events that trigger a push. Only the `url` and `title` of the changed bookmark are read — the extension never enumerates, edits, or deletes your bookmarks. |
| `storage` | Stores your API token in `chrome.storage.local`, on your device only, so the service worker can authenticate. |
| `https://api.pinboard.in/v1/*` | The single endpoint bookmarks are posted to. No other host is contacted. |

No analytics, no tracking, no remote code — all JavaScript ships in the package.

See [PRIVACY.md](PRIVACY.md) for the full privacy policy.

## Development

Load the unpacked directory via `chrome://extensions` with Developer mode enabled.

```sh
make check   # validate manifest JSON and parse both scripts
make         # build dist/pinboard-push-$(VERSION).zip for the Web Store
make clean   # remove dist/
```

The zip's version is read from `manifest.json`, so bump it there before building a release.
