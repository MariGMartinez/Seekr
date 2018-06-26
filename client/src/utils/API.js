import axios from "axios";

export const API = {
    searchTrails: function(lat, lon){
        return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=200291985-53a4087f9af13c0073c4ab63808a8d04`)
    },
    getTrails: function () {
        return axios.get("/api/trails");
    },
    getTrail: function (id) {
        return axios.get("/api/trails/" + id);
    },
    updateTrail: function (id, item) {
        return axios.put("/api/trails/" + id, item)
    },
    deleteTrail: function (id) {
        return axios.delete("/api/trails/" + id);
    },
    saveTrail: function (trailData) {
        return axios.post("/api/trails", trailData);
    }
};