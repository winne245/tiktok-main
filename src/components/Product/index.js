import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    height: 100,
    padding: '10px 16px',
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
  image: {
    display: 'flex',
    width: 55,
    height: 80,
    objectFit: 'cover',
  },
  info: {
    marginLeft: 16,
    fontSize: '14px',
  },
  title: {
    fontWeight: 'bold',
  },
  brand: {},
  price: {
    fontWeight: 800,
  },
}));

function Product(props) {
  const classes = useStyles();

  return (
    <div>
      {props?.data?.map((item) => (
        <div key={item.id} className={classes.item}>
          <img className={classes.image} src={require(`../../assets/images/${item.image}`)} alt={item.title} />
          <div className={classes.info}>
            <p className={classes.title}>{item.title}</p>
            <p className={classes.brand}>{item.brand}</p>
            <p className={classes.price}>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
