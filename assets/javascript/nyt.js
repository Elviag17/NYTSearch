$(document).ready(function () {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var apiKey = "&api-key=2MH0rog0K6ywT2DrsNUWmPShHS8bCLXz";
    // var userInput = $("#search-term").value
    // console.log(userInput)


    $(".search").click(function () {
        var userInput = $("#search-term").value
        console.log(userInput)


        console.log("userInput : " + userInput);



        // var searchTerm = "q=" + userInput

        // $.ajax({
        //     url: queryURL + searchTerm + apiKey,
        //     method: "GET"
        // }).then(function (response) {

        //     console.log(response)
        //     console.log(queryURL + searchTerm + apiKey)

        //gets number of total records retrieved
        //console.log(response.response.meta.hits)

        //retreives date of publication in yyyy/mm/dd form
        //console.log(response.response.docs[0].pub_date)


        // });
    });

})