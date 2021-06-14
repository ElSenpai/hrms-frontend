import axios from "axios"

export default class BasicService{


    getAllCities(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

    getAllJobs(){
        return axios.get("http://localhost:8080/api/jobs/getall")
    }

    getEmploymentTypes(){
        return axios.get("http://localhost:8080/api/employmentTypes/getall")
    }



}