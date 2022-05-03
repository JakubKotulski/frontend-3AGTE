import "./HistoryOfPurchases.css";
import { Table } from "react-bootstrap";

const historyOfPurchases = ({list}) => {
    return(
        <Table id="history-table" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className="td">#</th>
                    <th className="td">Date</th>
                    <th className="td">Price</th>
                    <th className="td">Details</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key= {index}>
                        <td className="td" >{index + 1}</td>
                        <td className="td">{item.date}</td>
                        <td className="td">{item.price}</td>
                        <td className="td">{item.items.map((element) => (
                            <li className="li-padding" key={element._id}>{element.name}</li>
                        ))}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    )
}

export default historyOfPurchases;