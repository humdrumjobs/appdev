import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core'
import Textfield from '@material-ui/core/TextField'
// import Radio from '@material-ui/core/Radio'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display:'block'
    }
})

export function Create() {

    const classes = useStyles()
    const navigate = useNavigate()
    const [jobtype, setJobType] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [payment, setPayment] = useState('')
    const [notes, setNotes] = useState('')

    const [jobtypeError, setJobtypeError] = useState(false)
    const [locationError, setLocationError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [paymentError, setPaymentError] = useState(false)
    const [notesError, setNotesError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setJobtypeError(false);
        setLocationError(false);
        setEmailError(false);
        setPaymentError(false);
        setNotesError(false);

        if (!jobtype) setJobtypeError(true);
        if (!location) setLocationError(true);
        if (!email) setEmailError(true);
        if (!payment) setPaymentError(true);
        if (!notes) setNotesError(true);

        fetch('https://startup.humdrumjobs.com/notes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jobtype, location, email, payment, notes })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => navigate('/jobofferings'))
            .catch(error => {
                console.error('Error submitting form:', error);
            });
            // console.log(jobtype, location, email, payment, notes)
        }

    return (
        <Container>
            <Typography variant='h6' 
            color='textSecondary' 
            component='h2' 
            gutterBottom>
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Textfield
                onChange={(e) => setJobType(e.target.value)}
                className={classes.field}
                label='Job Type' 
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={jobtypeError}/>

                <Textfield
                onChange={(e) => setLocation(e.target.value)}
                className={classes.field}
                label='Location' 
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={locationError}/>

                <Textfield
                onChange={(e) => setEmail(e.target.value)}
                className={classes.field}
                label='Email' 
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={emailError}/>

                <Textfield
                onChange={(e) => setPayment(e.target.value)}
                className={classes.field}
                label='Payment' 
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={paymentError}/>

                <Textfield 
                onChange={(e) => setNotes(e.target.value)}
                className={classes.field}
                label='Notes' 
                variant='outlined'
                color='secondary'
                fullWidth
                multiline
                minRows={5}
                required
                error={notesError}/>

            
            <Button 
            type='submit' 
            color='secondary' 
            variant='contained'> 
            {/* startIcon={}
            endIcon={}> */}
            Submit</Button>
            </form>

            
        </Container>
    )
}