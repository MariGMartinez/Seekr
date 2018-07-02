import axios from "axios";
import GoogleApiComponent from "google-maps-react/dist/GoogleApiComponent";

export const USER = {
    codeAddress: function(address){
        //const geocoder = new google.maps.Geocoder()
    },
    getUsers: function () {
        return axios.get("/api/users");
    },
    login: function (data) {
        return axios.post('/api/users/login/'+ data.username, data)
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    updateUser: function (id, item) {
        return axios.put("/api/users/" + id, item)
    },
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};
