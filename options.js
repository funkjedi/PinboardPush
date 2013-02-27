
// Restores select box state to saved value from localStorage.
function restore_options() {
  $("input[name=username]").val(localStorage["pinboard_username"]);
  $("input[name=password]").val(localStorage["pinboard_password"]);
  $("input[name=application]").val(localStorage["pinboard_application"]);
}


// Saves options to localStorage.
function save_options() {
  localStorage["pinboard_username"] = $("input[name=username]").val();
  localStorage["pinboard_password"] = $("input[name=password]").val();
  localStorage["pinboard_application"] = $("input[name=application]").val();

  // Update status to let user know options were saved.
  $("#status").html("<p><strong>Options Saved</strong></p>");
}


$(function() {
    restore_options();
    $("button[name=save]").on("click", save_options);
});
