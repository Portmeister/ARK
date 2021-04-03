import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion"

import "fontsource-roboto";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


document.body.style = 'background: lightgray;';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ARK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
      <Container  className={classes.cardGrid} maxWidth="xl">
         {/* Hero unit */}
          <Grid justify='center' container>
            {cards.map((card) => (
              <Grid item key={card} xs={8} sm={8} md={8}>
                <Card  className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/1600x900/?charity"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  </CardContent>
                   {/* End hero unit */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <motion.div
              initial={{ x: "38.5%", y: -400 }}
              animate={{ y: -10 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              component="h1"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              <h1>About Us</h1>
            </motion.div>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Acts of Random Kindness (ARK) is a grass root movement that aims to bridge those in need with individuals or groups willing and able to provide help to better local, national and global communities. Join in the movement today to help make a difference!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <motion.button
                      whileHover={{
                        backgroundColor: "#87CFEB",
                        color: "blue",
                        scale: 2.2,
                        textShadow: "0px 0px 8px #87CFEB",
                        boxShadow: "0px 0px 8px #87CFEB",
                        borderRadius: "40%",
                      }}
                    >
                      Go Back
                    </motion.button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          ONE ARK CAN CHANGE THE WORLD!!!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thanks For Visiting!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );z
}
