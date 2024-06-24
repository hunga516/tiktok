import { useMemo, useRef, useState } from "react";
function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [product, setProduct] = useState([])

  const nameRef = useRef()
  const inputRef = useRef()

  const handleAddProduct = () => {
    setProduct([...product, {
      name,
      price: +price
    }])

    setName("")
    setPrice("")
  }

  const total = useMemo(() => {
    const result = product.reduce((total, item) => {
      console.log('tinh laii...');

      return total + item.price
    }, 0)
    return result;
  }, [product])
  return (
    <>
      <input
        ref={nameRef}
        onClick={() => console.log(inputRef.current)}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        ref={inputRef}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add</button>
      <h1>{total}</h1>
      <ul>
        {product.map(item => {
          return (
            <li key={item.name}>{item.name} - {item.price}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App;