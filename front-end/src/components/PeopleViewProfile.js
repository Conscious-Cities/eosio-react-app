import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        height: '100%',
        flex: '1',
    },
    accountName: {
        fontFamily: 'Verdana',
        color: '#5683a6',
        fontWeight: '600',
        fontSize: '24px',
        marginBottom: '40px'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
    },
    organizationsLabelContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        marginBottom: '50px',
        color: '#f6b1c8'
    },
    organizationsLabel: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        marginRight: '30px',
        fontWeight: '600'
    },
    inputField: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundColor: '#90caf8',
        width: '120px',
        height: '120px'
    },
    gridMenuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
        },
    menuAddItem: {
        border: '8px solid #90caf8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        width: '120px',
        height: '120px',
    }
  }));

function PeopleViewProfile(props) {
    const classes = useStyles();

    return (
        <Grid item xs>
            <Container component="div" className={classes.container}>
                <Typography component="p" className={classes.accountName}>
                @{props.accountName}
                </Typography>
                <Container component="p" className={classes.organizationsLabelContainer}>
                    <Typography component="p" className={classes.organizationsLabel}>
                        Organizations 
                    </Typography>
                    <TextField label="search" component="div" className={classes.inputField} />
                </Container>
                <Grid container spacing={8}>
                    <Grid container item xs={12} spacing={3}>
                        {props.organizations.map(data => {
                            return (
                                <Grid component="div" className={classes.gridMenuItem}item xs>
                                    <Box className={classes.menuItem}>
                                        {data.name}
                                    </Box>
                                </Grid>
                            );
                        })}
                        <Grid component="div" className={classes.gridMenuItem} item xs>
                            <Box className={classes.menuAddItem}>
                            +
                            </Box> 
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default PeopleViewProfile;