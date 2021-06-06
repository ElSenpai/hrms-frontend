import axios from "axios"

export default class JobHunterService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobhunters/getall")
    }
}