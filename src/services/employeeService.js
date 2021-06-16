import axios from "axios"

export default class EmployeeService{
    getAll(){
        return axios.get("http://localhost:8080/api/employees/getall")
        
    }

    confirm(status){
        return axios.post("http://localhost:8080/api/employees/confirm",status)
    }
}