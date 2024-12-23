
chrome.runtime.onInstalled.addListener(() => {
  chrome.bookmarks.onCreated.addListener(saveBookmark);
  chrome.bookmarks.onChanged.addListener(saveBookmark);
});

async function saveBookmark(id, bookmark) {
  const { pinboard_username, pinboard_password } = await chrome.storage.local.get(['pinboard_username', 'pinboard_password']);
  let api = new URL('https://api.pinboard.in/v1/posts/add?shared=no');

  api.username = pinboard_username;
  api.password = pinboard_password;
  api.searchParams.append('url', bookmark.url);
  api.searchParams.append('description', bookmark.title);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', api.toString(), true);
  xhr.send(null);
}
