

function save_bookmarks(chromeId, bookmarks) {
    var username = localStorage["pinboard_username"],
        password = localStorage["pinboard_password"],
        data = {
            url: bookmarks.url,
            description: bookmarks.title,
            shared: "no"
        };

    $.ajax({
        type: "GET",
        url: "https://" + username + ":" + password + "@api.pinboard.in/v1/posts/add",
        data: data,
        success: function() {
            console.log(arguments);
        }
    });
}


chrome.bookmarks.onCreated.addListener(save_bookmarks);
chrome.bookmarks.onChanged.addListener(save_bookmarks);

