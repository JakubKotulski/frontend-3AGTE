import { Table, Button } from "react-bootstrap";
import "./CheckList.css"

const CheckList = ({ list, removeFunction, fetch }) => {
    
    return(
        <Table id = "check-table" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="td">#</th>
                    <th className="td">Name</th>
                    <th className="td mobile-none">Product</th>
                    <th className="td">Price</th>
                    <th className="td">Delete an item</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key= {index}>
                        <td className="td" >{index + 1}</td>
                        <td className="td">{item.name}</td>
                        <td className="td mobile-none"> <img className="check-list-img" src = {item.url}></img> </td>
                        <td className="td">{item.price}</td>
                        <td className="td">  <Button className="remove-item-button" onClick={ () => {removeFunction(index); fetch()}} variant="danger">Remove from the list</Button> </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CheckList;