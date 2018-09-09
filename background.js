
function saveBookmark(id, bookmark) {
  let api = new URL('https://api.pinboard.in/v1/posts/add?shared=no');

  api.username = localStorage['pinboard_username'];
  api.password = localStorage['pinboard_password'];
  api.searchParams.append('url', bookmark.url);
  api.searchParams.append('description', bookmark.title);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', api.toString(), true);
  xhr.send(null);
}

chrome.bookmarks.onCreated.addListener(saveBookmark);
chrome.bookmarks.onChanged.addListener(saveBookmark);
