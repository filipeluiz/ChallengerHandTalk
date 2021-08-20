import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
  gridCut: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%'
  },

  iconPublish: {
    margin: '0 0 0 10px' 
  },  

  down: {
    display: 'none'
  },

  movie: {
    width: '40%',
    height: 'auto',
    marginLeft: '30%',
    marginTop: '5%'
  },

  rootDiv: {
    width: '40%',
    marginTop: '5%',
    marginLeft: '30%'
  },

  paper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px'
  }
})
