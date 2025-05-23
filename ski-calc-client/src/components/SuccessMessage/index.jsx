import { Alert } from '@mantine/core';
import classes from './styles.module.css'

const SuccessMessage = ({ skierCode, din }) => {

    return (
        <Alert
            title='DIN Succesfully calculated'
            color='green'
            classNames={{
                title: classes.title,
                message: classes.message,
                label: classes.label
            }}      
        >
            Skier Code: <strong>{skierCode}</strong><br />
            DIN Value: <strong>{din}</strong>
        </Alert>
    )
}

export default SuccessMessage;