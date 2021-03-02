import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const List = ({listTitle,items}) => {

    return (
        <>
            <Container>
                <Row xs={12}>
                    <Col>{listTitle}</Col>
                </Row>
            {
                items.map(({title,value},index) => {
                    return (
                        <Row key={index} xs={12}>
                            <Col xs={6}>{title}</Col>
                            <Col xs={6}>{value}</Col>
                        </Row>
                    )
                })
            }
            </Container>
        </>
    )
}

export default List