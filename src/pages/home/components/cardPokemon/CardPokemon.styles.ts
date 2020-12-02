import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    textStyle: {
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '40px',
      paddingRight: '40px',

      font: '16px Roboto, sans-serif',
      textAlign: 'center',
    },
    divContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  }),
);

export default useStyles;
