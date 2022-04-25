import { Table, Button } from "react-bootstrap";
import "./CheckList.css"

const CheckList = ({ list, removeFunction, fetch }) => {
    
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
                        <td className="td"> <img className="check-list-img" src = {item.url} alt = "img"></img> </td>
                        <td className="td">{item.price}</td>
                        <td className="td">  <Button onClick={ () => {removeFunction(index); fetch()}} variant="danger">Remove from the list</Button> </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CheckList;