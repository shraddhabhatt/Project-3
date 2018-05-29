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

    saveEmailEvents: function(emailEvents) {
        console.log("this is in API:" + emailEvents);

        return axios.post("/api/emailEvents/", emailEvents)
        .then(function(res){
            console.log("Response in Post email for events");
            return res;
        });
    },
    saveEmailJobs: function(emailJobs) {
        console.log("this is in API:" + emailJobs);

        return axios.post("/api/emailJobs/", emailJobs)
        .then(function(res){
            console.log("Response in Post email for events");
            return res;
        });
    },

    getEventsEmails: function() {
        console.log("inside API function, getting my emails baby!!!");

        return axios.get("api/emailEvents/")
        .then(function(res){
            console.log("response in GET emails for events" + res);
            return res;
        });
    } 

};
