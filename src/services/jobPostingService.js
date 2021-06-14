import axios from "axios"

export default class JobPostingService{
    getAll(){
        return axios.get("http://localhost:8080/api/verifications/getall")
    }
    getAllConfirmed(){
        return axios.get(`http://localhost:8080/api/jobpostings/getallbyconfirmed?confirmed=true`)
    }
    getById(employerId){
      return axios.get(`http://localhost:8080/api/jobpostings/getallbyemployerid?employerId=${employerId}`)
    }

    addPosting(advertisement){
        return axios.post("http://localhost:8080/api/jobpostings/add",advertisement)
    }
}