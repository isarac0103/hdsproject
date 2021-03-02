import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const List = ({listTitle,items}) => {

    // const items = [
    //     {
    //         title: "A",
    //         value: "A Value"
    //     },
    //     {
    //         title: "B",
    //         value: "B Value"
    //     },
    //     {
    //         title: "C",
    //         value: "C Value"
    //     },
    // ]

    return (
        <>
            <Container>
                <Row>
                    <Col>{listTitle}</Col>
                </Row>
            {
                items.map(({title,value},index) => {
                    return (
                        <Row key={index}>
                            <Col>{title}</Col>
                            <Col>{value}</Col>
                        </Row>
                    )
                })
            }
            </Container>
        </>
    )
}

export default List