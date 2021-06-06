import axios from "axios"

export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}