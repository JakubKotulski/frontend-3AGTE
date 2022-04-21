import { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap";
import "./CheckList.css"

const CheckList = ({ list, removeFunction }) => {

    
    return(
        <Table id = "check-table" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="td">#</th>
                    <th className="td">Name</th>
                    <th className="td">Product</th>
                    <th className="td">Price</th>
                    <th className="td">Delete an item</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key= {index}>
                        <td className="td" >{index + 1}</td>
                        <td className="td">{item.name}</td>
                        <td className="td"> <img className="check-list-img" src = {item.url}></img> </td>
                        <td className="td">{item.price}</td>
                        <td className="td">  <Button onClick={ () => {removeFunction(index)}} variant="danger">Remove from the list</Button> </td>
                    </tr>
                ))}
                {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr> */}
            </tbody>
        </Table>
    )
}

export default CheckList;