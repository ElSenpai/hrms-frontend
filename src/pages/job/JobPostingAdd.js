import React, { useEffect, useState } from 'react'
import { Field, Formik, useFormik } from 'formik';
import { Form, Input, SubmitButton, Select, ResetButton } from 'formik-semantic-ui-react';
import { Button, Modal, Label, Grid} from 'semantic-ui-react'

import JobPostingService from '../../services/jobPostingService'
import BasicService from '../../services/basicService'






export default function JobPostingAdd() {



  let postingService = new JobPostingService()
  

  const [open, setOpen] = React.useState(false)
  const [cities, setCities] = useState([])
  const [employments, setEmployments] = useState([])
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    let service = new BasicService()
    service.getAllCities().then((result) => setCities(result.data.data))
    service.getAllJobs().then((result) => setJobs(result.data.data))
    service.getEmploymentTypes().then((result) => setEmployments(result.data.data))
  }, [])



  const city = cities.map((city => ({
    key: city.id,
    text: city.city,
    value: city.id
  })))

  const job = jobs.map((j => ({
    key: j.jobId,
    text: j.name,
    value: j.jobId
  })))

 

  const formik = useFormik({
    initialValues: {
      requirements: '', openPositions: '', remote: "", salary: '',
      appDate: '', appDeadline: '', cityId: '',
      jobId: '',  employmentId: ''
    },

    onSubmit: values => {
      let advertisement = {
        employer: { userId: 3 },
        employmentType: { id: values.employmentId },
        jobs: { jobId: values.jobId },
        city: { id: values.cityId },
        requirements: values.requirements,
        openPositions: values.openPositions,
        salary:values.salary,
        appDate: values.appDate,
        appDeadline: values.appDeadline,
        active: true,
        remote: values.remote
      };
      console.log(advertisement);
      postingService.addPosting(advertisement);
    },

  });
  const handleDropdownChange = (name, value) => formik.setFieldValue(name, value)


  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Add</Button>}
      >
        <Modal.Header>Job Posting</Modal.Header>
        <Modal.Content >

          <Modal.Description >



            <Formik
              initialValues={formik.initialValues}
              onSubmit={formik.handleSubmit}
            >

              <Form >
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Input
                        name="requirements"
                        placeholder="requirements"
                        errorPrompt
                        size="large"
                        onChange={formik.handleChange}
                        value={formik.values.requirements}
                      />
                      <Input
                        name="openPositions"
                        size="large"
                        type="number"
                        placeholder="openPositions"
                        onChange={formik.handleChange}
                        value={formik.values.openPositions}
                        errorPrompt
                      />

                      <Field placeholder='Cities'
                        as={Select}
                        id="cityId"
                        name="cityId"

                        onChange={(event, data) => {
                          handleDropdownChange("cityId", data.value);

                        }}
                        onBlur={formik.onBlur}
                        value={formik.values.cityId}

                        options={city}

                      />

                      <Field placeholder='Job titles'
                        as={Select}
                        id="jobId"
                        name="jobId"

                        onChange={(event, data) => {
                          handleDropdownChange("jobId", data.value);

                        }}
                        onBlur={formik.onBlur}
                        value={formik.values.jobId}

                        options={job}

                      />

                    </Grid.Column>
                    <Grid.Column width={5}>





                      <Input
                        name="appDate"
                        placeholder="appDate"
                        type="date"
                        errorPrompt
                        onChange={formik.handleChange}
                        value={formik.values.appDate}
                      />
                      <Input
                        name="appDeadline"
                        placeholder="appDeadline"
                        type="date"
                        errorPrompt
                        onChange={formik.handleChange}
                        value={formik.values.appDeadline}
                      />

                     <Label >
                     <Label size="medium">   <Input
                          name="remote"
                          placeholder="remote"
                          type="checkbox"

                          onChange={formik.handleChange}
                          value={formik.values.remote}
                        /> Remote </Label>
                      {
                       employments.map((emp=>(
                         <Label key={emp.id}>
                        <Input type="checkbox"  id="employmentId" name="employmentId"  onChange={(event, data) => {
                          handleDropdownChange("employmentId", emp.id);

                        }} 
                        value={formik.values.employmentId} /> {emp.name}</Label>

                       )))
                      }
</Label>



                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Input style={{marginLeft:"25px"}}
                        name="salary"
                        placeholder="Salary"
                        type="number"
                        errorPrompt
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                        icon="dollar"
                      />



                    <SubmitButton style={{marginLeft:"25px",marginTop:"75px"}} fluid color='google plus'>
                  Create
                </SubmitButton>
                <ResetButton style={{marginLeft:"25px"}} onClick={() => setOpen(false)} fluid color='black'>
                  Close 
                </ResetButton>
                     
                    </Grid.Column>
                  </Grid.Row>
                </Grid>




               
              </Form>
            </Formik>






          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
         
          
        </Modal.Actions>
      </Modal>

    </div>
  )
}
