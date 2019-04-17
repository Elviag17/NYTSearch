$(document).ready(function () {


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var apiKey = "&api-key=2MH0rog0K6ywT2DrsNUWmPShHS8bCLXz";
    var userInput = ""
    var searchTerm = "q=" + userInput

    userInput = "cat"
    $.ajax({
        url: queryURL + searchTerm + apiKey,
        method: "GET"
    }).then(function (response) {
          
        console.log(response)
        console.log(queryURL + searchTerm + apiKey)

        //gets number of total records retrieved
        //console.log(response.response.meta.hits)

        //retreives date of publication in yyyy/mm/dd form
        //console.log(response.response.docs[0].pub_date)


    });

})