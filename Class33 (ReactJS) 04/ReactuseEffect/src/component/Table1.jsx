import React, { useEffect, useState } from 'react'

const Table1 = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            // console.log(data)
            setProductList(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>0</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table1
