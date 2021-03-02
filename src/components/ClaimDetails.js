import Form from './Form'
import Financial from './Financial'
import AppointmentList from './AppointmentList'

import {connectService} from '../core/webService'

const ClaimDetails = () => {

    // web servis çağırılacak

    return (
        <>
            <Form />
            <Financial />
            <AppointmentList />
        </>
    )
}

export default ClaimDetails