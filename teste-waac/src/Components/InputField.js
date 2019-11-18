import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SolutionCardBody(textFieldProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Input"
                    placeholder="Digite o triângulo"
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Output"
                    defaultValue={textFieldProps ? (textFieldProps.output ? textFieldProps.output : null) : null}
                    className={classes.textField}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                    Calcular
                </Button>
            </div>
        </form>
    );
}
