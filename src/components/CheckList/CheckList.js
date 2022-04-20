import { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap";
import "./CheckList.css"

const CheckList = ({ list }) => {

    const [arrayProducts, setArrayProducts] = useState([]);
   
    console.log(list)
    console.log(arrayProducts)

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Product</th>
                <th>Price</th>
                <th>Delete an item</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key= {index}>
                        <td >{index + 1}</td>
                        <td>{item.name}</td>
                        <td> <img className="check-list-img" src = {item.url}></img> </td>
                        <td>{item.price}</td>
                        <td>  <Button variant="danger">Danger</Button> </td>
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