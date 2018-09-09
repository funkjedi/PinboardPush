
document.querySelector('button').addEventListener('click', function() {
  localStorage['pinboard_username'] = document.querySelector('input[name=username]').value;
  localStorage['pinboard_password'] = document.querySelector('input[name=password]').value;

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 4000);
});


document.querySelector('input[name=username]').value = localStorage['pinboard_username'] || '';
document.querySelector('input[name=password]').value = localStorage['pinboard_password'] || '';
