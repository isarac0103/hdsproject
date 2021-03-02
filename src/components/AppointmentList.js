import {InputLabel,MenuItem,FormHelperText,FormControl,Select} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import {useState} from 'react'

import SelectNext from 'react-select'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
const AppointmentList = () => {

    const classes = useStyles();

    const data = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ]

    const [selectedItem, setSelectedItem] = useState(-1)
    const [selectedValue, setSelectedValue] = useState(data[0])


    return (
        <>
            <div>Kabul & Ret Durumu</div>
            <div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>Hak Sahibi</div>
                    <div>Hasar Kalemi</div>
                    <div>Ret Nedeni</div>
                    <div>Açıklama</div>
                    <div>Kabul Ret Durumu</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>Hak Sahibi</div>
                    <div>Hasar Kalemi</div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedItem}
                            onChange={(e) => {
                                setSelectedItem(e.target.value)
                            }}
                            >
                            <MenuItem value={-1}>Sebep Belirtin</MenuItem>
                            <MenuItem value={1}>Sağlık Sebepleri</MenuItem>
                            <MenuItem value={2}>İş Durumları</MenuItem>
                            </Select>
                        </FormControl>                    
                    </div>
                    <div>
                        <SelectNext 
                            options={data}
                            value="one"
                            onChange={(val) => {
                                console.log(val)
                            }}
                        />
                    </div>
                    <div>Kabul Ret Durumu</div>
                </div>
            </div>
        </>
    )
}

export default AppointmentList