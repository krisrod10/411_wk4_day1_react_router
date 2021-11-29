import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import cars from '../cars.json';
import Car from "./Car";

const Home = () => {
    console.log('CARS', cars)
    return (
        <div className="card-container">
            {cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                       <Car>See more details</Car>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home