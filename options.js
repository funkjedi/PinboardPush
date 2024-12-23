
document.querySelector('button').addEventListener('click', function() {
  chrome.storage.local.set({
    pinboard_username: document.querySelector('input[name=username]').value,
    pinboard_password: document.querySelector('input[name=password]').value
  }, function() {
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 4000);
  });
});

chrome.storage.local.get(['pinboard_username', 'pinboard_password'], function(items) {
  document.querySelector('input[name=username]').value = items.pinboard_username || '';
  document.querySelector('input[name=password]').value = items.pinboard_password || '';
});
