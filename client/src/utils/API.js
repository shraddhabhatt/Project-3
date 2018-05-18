import axios from "axios";

export default {

    // Gets all books
    getEvents: function() {
        return axios.get("/api/events");
    },
    // Saves a book to the database
    saveEvent: function(eventData) {
        console.log(eventData);
        return axios.post("/api/events/", eventData)
         .then(function(res){
             console.log("Response in POST");
             return res;
         });
    },
    
    getUser: function(){
        return axios.get("/api//auth/google");
    }
};
