import axios from "axios";

export default {

    // Gets all books
    getEvents: function() {
        return axios.get("/api/events/")
        .then(function(res){
            console.log("Response in GET "+res);
            return res;
        });
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

    // Deletes the event with the given id
    deleteEvent: function(id) {
        console.log("Delete : "+id);
        return axios.delete("/api/events/" + id);
    },
    
    saveJob: function(jobData) {
        console.log(jobData);
        return axios.post("/api/jobs/", jobData)
         .then(function(res){
             console.log("Response in POST");
             return res;
         });
    },

    getJobs: function() {
        return axios.get("/api/jobs/")
        .then(function(res){
            console.log("Response in GET "+ res);
            return res;
        });
    },
};
