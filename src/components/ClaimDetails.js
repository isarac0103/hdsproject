import Form from './Form'
import LineFinancialList from './LineFinancialList'
import AppointmentList from './AppointmentList'

import {connectService} from '../core/webService'

const ClaimDetails = () => {

    // web servis çağırılacak

    return (
        <>
            <Form />
            <LineFinancialList />
            <AppointmentList />
        </>
    )
}

export default ClaimDetails