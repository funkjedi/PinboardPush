
let input  = document.querySelector('input[name=token]');
let saved  = document.querySelector('#saved');
let notice = document.querySelector('#notice');

function flash(element, message) {
  if (message) element.textContent = message;

  element.style.display = 'block';

  setTimeout(function() {
    element.style.display = 'none';
  }, 4000);
}

async function migrate() {
  let legacy = await chrome.storage.local.get(['pinboard_username', 'pinboard_password']);

  let username = localStorage['pinboard_username'] || legacy.pinboard_username;
  let password = localStorage['pinboard_password'] || legacy.pinboard_password;

  if (!username && !password) return null;

  delete localStorage['pinboard_username'];
  delete localStorage['pinboard_password'];

  await chrome.storage.local.remove(['pinboard_username', 'pinboard_password']);

  notice.className = 'alert alert-warning';
  notice.textContent = 'Pinboard Push now uses an API token instead of your password. Paste yours below.';
  notice.style.display = 'block';

  return username ? username + ':' : null;
}

document.querySelector('button').addEventListener('click', async function() {
  let token = input.value.trim();

  if (!/^[^:\s]+:[0-9A-F]+$/i.test(token)) {
    notice.className = 'alert alert-danger';
    flash(notice, 'That does not look like a Pinboard API token. Expected username:XXXXXXXXXXXX.');
    return;
  }

  await chrome.storage.local.set({ auth_token: token });

  notice.style.display = 'none';
  flash(saved);
});


(async function() {
  let hint = await migrate();
  let { auth_token } = await chrome.storage.local.get('auth_token');

  input.value = auth_token || hint || '';
})();
