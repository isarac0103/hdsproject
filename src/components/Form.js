import claims from './claims.json'

import FormRow from './FormRow'
import moment from 'moment'

import {Button} from '@material-ui/core'

const Form = () => {

    console.log(claims)

    const claim = claims.claims[0]

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', borderBottom: '1px solid #aaaaaa'}}>
                <div style={{width: 250}}>Hasar Bilgileri</div>
                <div style={{width: 250}}>Poliçe Bilgileri</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: 250}}>
                    <FormRow title="Hasar Dosya Numarası" value={claim.claimNumber} />
                    <FormRow title="Hasar Tarihi" value={moment(claim.loss.lossDate).format('MMM Do YY')} />
                    <FormRow title="Dosya Statüsü" value={claim.status.textShort} />
                    <FormRow title="Hak Sahibi" value={"Ahmet Tekin"} />
                    <FormRow title="Hasar Tipi" value={claim.loss.lossType.textShort} />
                    <FormRow title="Hasar Sebebi" value={claim.loss.initialReasonOfLoss.textShort} />
                    <FormRow title="İhbar Tarihi" value={moment(claim.claimEnteredDate).format('MMM Do YY')} />
                    <FormRow title="Dosya Sorumlusu" value={"Hale Demir"} />
                    <FormRow title="Sigorta Konusu" value={"Bir Konu"} />
                    <FormRow title="Hasar Adresi" value={claim.loss.lossAddress.fullAddress} />
                    <FormRow title="Hasar Açıklaması" value={claim.loss.description} />
                </div>
                <div style={{width: 250}}>
                    <FormRow title="Poliçe Numarası" value={claim.policy.policyNumber} />
                    <FormRow title="Poliçe Başlangıç Tarihi" value={claim.policy.policyStartDate} />
                    <FormRow title="Poliçe Bitiş Tarihi" value={claim.policy.policyEndDate} />
                    <FormRow title="Sigortalı" value={"Mehmet Demir"} />
                    <FormRow title="Müşteri Skoru" value={10} />
                    <FormRow title="Müşteri Segmenti" value={"A"} />
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div><Button color="secondary" variant="contained">Geri</Button></div>
                <div><Button color="primary" variant="contained">İleri</Button></div>
            </div>
        </>
    )
}

export default Form