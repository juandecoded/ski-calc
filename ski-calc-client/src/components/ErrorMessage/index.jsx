import { Alert } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import classes from './styles.module.css'

const ErrorMessage = () => {

    const icon = <IconAlertTriangle />;

    return (
        <Alert
            title='Unable to calculate DIN'
            color='red'
            icon={icon}
            classNames={{
                title: classes.title,
                message: classes.message,
                label: classes.label
            }}      
        >
            Unable to calculate DIN with the provided skier information. Please check your skier parameters.
        </Alert>
    )
}

export default ErrorMessage;