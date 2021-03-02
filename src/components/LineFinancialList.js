import {useState} from 'react'

import {Table,Button,Form} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const LineFinancialList = () => {

    const [list,setList] = useState([{
        hakSahibi: "Çağlar Özyıldırım",
        hasarKalemi: "Deprem",
        mtht: "7500",
        paraBirimi: "TL",
        gz: "güncelleme tarihi"
    }])

    const [updatingRow, setUpdatingRow] = useState(-1)

    return (
        <>
            <Table>
            <thead>
                <tr>
                    <th>Hak Sahibi</th>
                    <th>Hasar Kalemi</th>
                    <th>Tahmini Hasar Tutarı</th>
                    <th>Para Birimi</th>
                    <th>Güncelleme Tarihi</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                list.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{item.hakSahibi}</td>
                            <td>{item.hasarKalemi}</td>
                            <td>{updatingRow === index ? (<Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                                console.log(e.target.value)

                                const newList = list.map((listItem,itemIndex) => {

                                    if (index === itemIndex) { // güncellenecek eleman
                                        return {
                                            ...item,
                                            mtht: e.target.value
                                        }
                                    }

                                    return listItem
                                })

                                console.log('newList', newList)

                                setList(newList)

                            }} value={item.mtht} />) : item.mtht}</td>
                            <td>{item.paraBirimi}</td>
                            <td>{item.gz}</td>
                            <td><Button onClick={() => {

                                if (updatingRow === index) {// editing
                                    setUpdatingRow(-1)
                                } else {
                                    setUpdatingRow(index)
                                }
                            }}>{updatingRow === index ? "Gönder" : "Düzenle"}</Button></td>
                        </tr>
                    )
                })
            }
            </tbody>              
            </Table>
        </>
    )
}

export default LineFinancialList