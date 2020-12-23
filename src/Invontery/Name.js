import "./Names.css"
function Inventory (props) {

    return (
        <div>
         
          <table>
              <tr>
                 <th>Name</th>
                 <th>Stock Counts</th>
                 <th> Price </th>
              </tr>
              <td><h3>{props.name}</h3></td>
                 <td><h3>{props.stockcounts}</h3></td> 
                  <td><h3>{props.price}</h3></td>
               
                
          </table>
               
           
        </div>
    )
} 
export default Inventory; 