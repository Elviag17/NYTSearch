$(document).ready(function () {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var apiKey = "&api-key=2MH0rog0K6ywT2DrsNUWmPShHS8bCLXz";

    $(".search").click(function () {
        var userInput = $("#search-term").value

        $.ajax({
            url: queryURL +  apiKey,
            method: "GET"
        }).then(function (response) {

            console.log(response)
        });

})