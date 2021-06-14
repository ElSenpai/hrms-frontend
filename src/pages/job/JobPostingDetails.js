import React, { useEffect, useState } from 'react'
import Img from '../../assets/business.png'
import JobPostingService from '../../services/jobPostingService'
import { Button, Card, Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
export default function JobPostingDetails() {
    let { employerId } = useParams();
    const [jobPosting, setJobPosting] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(employerId).then(result => setJobPosting(result.data.data))
    }, [employerId])
    return (
        <div>
            <Card.Group>
                <Card fluid>


                    {
                        jobPosting.map((job => (
                            <Card.Content key={job.id}>
                                <Image
                                    floated='right'
                                    size='mini'
                                    src={Img}
                                />
                                <Card.Header>{job.employer.companyName}</Card.Header>
                                <Card.Meta>{job.jobs.name}</Card.Meta>
                                <Card.Description>
                                 Req : {job.requirements} / {job.employmentType.name} / {job.salary}₺ // {job.city.city}
                                </Card.Description>
                            </Card.Content>

                        )))
                    }




                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
