import axios from "axios"

export default class CvService{
    getAll(jobHunterId){
        return axios.get("http://localhost:8080/api/jobhunters/cv?jobHunterId="+{jobHunterId})
    }
}