import {useState} from 'react'

import {TextField, Button} from '@material-ui/core'

const Financial = () => {

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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>Hak Sahibi</div>
                <div>Hasar Kalemi</div>
                <div>Mevcut Tahmini Hasar Tutarı</div>
                <div>Para Birimi</div>
                <div>Güncelleme Zamanı</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            {
                list.map((item,index) => {
                    return (
                        <>
                            <div>{item.hakSahibi}</div>
                            <div>{item.hasarKalemi}</div>
                            <div>{updatingRow === index ? (<TextField onChange={(e) => {
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

                            }} value={item.mtht} />) : item.mtht}</div>
                            <div>{item.paraBirimi}</div>
                            <div>{item.gz}</div>
                            <div><Button onClick={() => {

                                if (updatingRow === index) {// editing
                                    setUpdatingRow(-1)
                                } else {
                                    setUpdatingRow(index)
                                }
                            }}>{updatingRow === index ? "Gönder" : "Düzenle"}</Button></div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}

export default Financial