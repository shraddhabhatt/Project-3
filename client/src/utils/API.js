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

    // Find user with email
    findUser: function(email) {
        console.log("Email : "+email);
        return axios.get("/api/user/" + email);
    },

    // Deletes the event with the given id
    deleteEvent: function(id, userid) {
        console.log("Delete : "+id+"/ user "+userid);
        return axios.delete("/api/events/" + id + "/" +userid);
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
    }, 


    //Saves a User to the database
    saveUser: function(userData) {
        console.log(userData);
        return axios.post("/api/user/", userData)
         .then(function(res){
             console.log("Response in POST");
             return res;
         });
    }

};
