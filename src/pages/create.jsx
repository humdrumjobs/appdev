import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display:'block'
    }
})

export function Create() {

    const classes = useStyles()
    const [jobtype, setJobType] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [payment, setPayment] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (jobtype && location && email && payment && notes) {
            console.log(jobtype, location, email, payment, notes)
        }
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
                <textarea
                onChange={(e) => setJobType(e.target.value)}
                className={classes.field}
                label='Job Type' 
                variant='outlined'
                color='secondary'
                fullWidth
                required/>

                <textarea
                onChange={(e) => setLocation(e.target.value)}
                className={classes.field}
                label='Details' 
                variant='outlined'
                color='secondary'
                fullWidth
                required/>

                <textarea
                onChange={(e) => setEmail(e.target.value)}
                className={classes.field}
                label='Details' 
                variant='outlined'
                color='secondary'
                fullWidth
                required/>

                <textarea
                onChange={(e) => setPayment(e.target.value)}
                className={classes.field}
                label='Details' 
                variant='outlined'
                color='secondary'
                fullWidth
                required/>

                <textarea
                onChange={(e) => setNotes(e.target.value)}
                className={classes.field}
                label='Details' 
                variant='outlined'
                color='secondary'
                fullWidth
                rows={5}
                required/>

            
            <button 
            type='submit' 
            color='secondary' 
            variant='contained'> 
            {/* startIcon={}
            endIcon={}> */}
            Submit</button>
            </form>

            
        </Container>
    )
}