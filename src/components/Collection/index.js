import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: '0px 16px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
}));

function Collection(props) {
  const classes = useStyles();

  return (
    <div>
      {props?.data?.map((item) => (
        <div key={item.id} className={classes.item}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Collection;
