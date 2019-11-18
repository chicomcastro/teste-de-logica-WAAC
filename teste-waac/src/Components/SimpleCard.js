import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        width: '100%',
        height: '100%',
        margin: 25,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(cardProps, customComponent) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {cardProps ? (cardProps.title ? cardProps.title : null) : null}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cardProps ? (cardProps.subtitle ? cardProps.subtitle : null) : null}
                </Typography>
                <Typography variant="body2" component="p">
                    {cardProps ? (cardProps.body ? cardProps.body : null) : null}
                </Typography>
                {customComponent ? customComponent() : null}
            </CardContent>
        </Card>
    );
}
