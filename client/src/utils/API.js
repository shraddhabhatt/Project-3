import axios from "axios";

export default {

    // Gets all Events
    getEvents: function() {
        return axios.get("/api/events/")
        .then(function(res){
            console.log("Response in GET "+res);
            return res;
        });
    },
    
    // Saves a Event to the database
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
    
    // Saves a Jobs to the database
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

    //Saves a User to the database
    saveUser: function(userData) {
        console.log(userData);
        return axios.post("/api/users/", userData)
         .then(function(res){
             console.log("Response in POST");
             return res;
         });
    },
};
