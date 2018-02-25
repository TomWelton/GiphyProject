//
//topics variable to hold different gif topics
var topics = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
// API key added, search results set to 10, topic inserted into URL
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rcUDV56RQydbSMp02umB8zGJIYuXf4s1&q=" + topics + "&limit=10&offset=0&rating=G&lang=en";
//GIPHY API KEY: rcUDV56RQydbSMp02umB8zGJIYuXf4s1


//dynamically creating buttons from array
function renderButtons() {
    $("#buttons-view").empty();
    //loop to append buttons for each string in the array
    for (var i = 0; i < topics.length; i++) {

        var b = $("<button>");
        b.addClass("topic-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);

        $("#buttons-view").append(b);
    };
    //AJAX call to the GIPHY website using GET method to obtain the chosen topic, stored in "response"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
    });
    //grab text from topic input when clicked
    $("#add-topic").on("click", function (event) {
        event.preventDefault();

        var topic = $("#topic-input").val().trim();
        //new topic pushed to array
        topics.push(topic);
    });
    renderButtons();
}; // endFunc renderButtons

renderButtons(); //calling renderButtons function