import React, { useEffect, useState } from 'react'
import CvService from '../../../services/cvService'
import { Dropdown } from 'semantic-ui-react'

export default function CityList() {
    const [city, setcity] = useState([])
    useEffect(() => {
        let cities = new CvService()
        cities.getAllCities().then(result => setcity(result.data.data))
    },[])



    return (
        <div>
            <Dropdown item text='Cities'>
                <Dropdown.Menu >
                    {
                        city.map((c) => (
                            <Dropdown.Item key={c.id}>{c.city}</Dropdown.Item>
                        ))
                    }</Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
