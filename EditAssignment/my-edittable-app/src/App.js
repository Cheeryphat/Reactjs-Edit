import {useState} from 'react'
import './App.css';

function App() {
    let [name, setName] = useState("");
    let [price,setPrice] = useState("");
    let [quantity,setQuantity] = useState("");
    let [allProducts, setAllproducts] = useState([]);
    let [editInput, setEditInput] = useState("")
   
// 1. Add product Button
 const addProduct = ()=>{
    let newProduct = {name,price,quantity, edit:false}
   setAllproducts([...allProducts,newProduct])
   setName("");
   setPrice("");
   setQuantity("");
 }
 // save edit
 const saveEdit =index=>{
    let newAllProduct = [...allProducts];
    let editedProduct = newAllProduct.find((_,i) => index === i);
    editedProduct.edit = true;
    editedProduct.name = editInput;
    // editedProduct.quantity =editInput;
    setEditInput("");
    setAllproducts(newAllProduct);
   

 }
 // 2. edit
 const changeEdit = index=>{
    let newAllProduct = [...allProducts];
    let editedProduct = newAllProduct.find((_,i)=>index ===i)
    editedProduct.edit = true;
    setAllproducts(newAllProduct);

 }
  
 //3. Delete Button
const deleteProduct = (index)=>{
    let filteredProduct = allProducts.filter((_, i)=>i !==index);
    setAllproducts(filteredProduct);
}

  return (
    <div className="App">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder='Product-name'/>
            <input value={price} onChange={e=>setPrice(e.target.value)} placeholder='Price'/>
            <input value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder='Quantity'/>
            <button onClick={addProduct}>Add product</button>

           {allProducts.length > 0 ? <table>
                <thead>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        allProducts.map((product,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{product.edit ? <input onChange={e=>setEditInput(e.target.value)}/> : product.name}</td>
                            <td>{product.price}</td>
                             <td> {product.quantity}</td> 
                             {/*product.edit? <input onChange={e=>setEditInput(e.target.value)}/> :*/}
                            <td>
                                {/* Change eDIT BUTTON INTO SAVE */}
                                {product.edit ? <button onClick={()=>{saveEdit(i)}}>save</button>:
                                <button onClick={()=>{changeEdit(i)}}>Edit</button>   
                            }    
                            </td>
                            
                            <td><button onClick={()=>deleteProduct(i)}>Delete</button></td>
                        
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            : <div>No student yet</div>}
    </div>
  );
}

export default App;
