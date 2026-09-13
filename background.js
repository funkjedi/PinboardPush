
async function saveBookmark(id, bookmark) {
  let { auth_token } = await chrome.storage.local.get('auth_token');
  if (!auth_token || !bookmark.url) return;

  let api = new URL('https://api.pinboard.in/v1/posts/add');

  api.searchParams.set('shared', 'no');
  api.searchParams.set('auth_token', auth_token);
  api.searchParams.set('url', bookmark.url);
  api.searchParams.set('description', bookmark.title || bookmark.url);

  let response = await fetch(api);
  if (!response.ok) {
    console.error('Pinboard Push:', response.status, await response.text());
  }
}

chrome.bookmarks.onCreated.addListener(saveBookmark);
chrome.bookmarks.onChanged.addListener(saveBookmark);
