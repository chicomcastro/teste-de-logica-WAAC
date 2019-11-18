import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaxCost from '../MaxCost';

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

var input = null;
const defaultOutput = "Sem resposta";

export default function SolutionCardBody(textFieldProps) {
    const classes = useStyles();

    const handleInputChange = event => {
        input = event.target.value;
    };

    var [output, setName] = React.useState(defaultOutput);
    const handleOutputChange = newOutput => {
        setName(newOutput);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Input"
                    placeholder="Digite o triângulo"
                    multiline
                    onChange={handleInputChange}
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
                    value={output}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                        output = MaxCost(input);

                        if (output) {
                            handleOutputChange(output);
                        }
                        else {
                            handleOutputChange(defaultOutput);
                        }
                    }}>
                    Calcular
                </Button>
            </div>
        </form>
    );
}