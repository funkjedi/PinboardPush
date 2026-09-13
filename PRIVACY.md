# Privacy Policy for Pinboard Push

**Last updated: September 12, 2026**

Pinboard Push is a Chrome extension that copies bookmarks you create or edit in Chrome to your own Pinboard account. This policy describes exactly what it handles and where that data goes.

## What the extension handles

**Bookmark data.** When you create or change a bookmark in Chrome, the extension reads that bookmark's **URL** and **title**. This happens only for the bookmark in the event that just fired. The extension does not read, enumerate, export, or modify the rest of your bookmarks, and it does not access your browsing history, page content, cookies, or any other site data.

**Your Pinboard API token.** The token you enter on the options page is stored on your own device using Chrome's `storage.local` API. It is not synced across devices and is never transmitted anywhere except to Pinboard, as the credential authenticating your own API requests.

## Where data is sent

Bookmark URLs and titles are sent to a single destination: the Pinboard API at `https://api.pinboard.in/v1/posts/add`, using your API token, so that the bookmark is saved to **your own Pinboard account**. Bookmarks are posted as private (`shared=no`).

No data is sent anywhere else. The extension contacts no other server and has permission to contact no other host.

Once data reaches Pinboard it is governed by [Pinboard's own privacy policy](https://pinboard.in/privacy/).

## What the extension does not do

- It does not collect, store, or transmit data to the developer. There is no server, backend, or database operated by this extension.
- It does not sell or share your data with third parties.
- It contains no analytics, telemetry, tracking, or advertising.
- It does not use your data for anything unrelated to its single purpose of pushing bookmarks to Pinboard.
- It does not use your data to determine creditworthiness or for lending purposes.
- It loads no remote code. All of its JavaScript is contained in the published package.

## Retention and deletion

The extension retains nothing beyond your API token on your own device. Uninstalling the extension removes it. You can also clear it at any time by deleting the value on the options page, and you can revoke the token itself from your [Pinboard password settings](https://pinboard.in/settings/password).

Bookmarks already sent to Pinboard live in your Pinboard account and are deleted there, under your control.

## Source code

Pinboard Push is open source. Every claim above can be verified by reading the code, which is a few dozen lines: <https://github.com/funkjedi/PinboardPush>

## Contact

Questions or concerns: please open an issue at <https://github.com/funkjedi/PinboardPush/issues>.

## Changes

If this policy changes, the updated version will be published in this repository and the date above revised.
