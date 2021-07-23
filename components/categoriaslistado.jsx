import axios from 'axios';
import React, { useEffect } from 'react';
import 'bootswatch/dist/cerulean/bootstrap.min.css'


export default function Listadocateg() {
    
    const [list, setData] = React.useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:4000/categorias');
                if (response.status === 200) {  
                    setData(response.data.respuesta);
                }
            } catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, []);

      const lista = list.map((categorias) =>{
        return (
            <div key={categorias.id}>
                <tr className="table-active">
                    <th scope="row">{categorias.id}</th>
                    <td>{categorias.nombre}</td>
                    <td><button type="button" className="btn btn-primary">Modificar</button></td>
                    <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                </tr>

            </div>
        )
        })  
    
      return (
        <>
        <div className = 'container'>
            <h1>Categorias</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Género</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {lista}
                </tbody>
            </table>
        </div>
        </>
    )
};
