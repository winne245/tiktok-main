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

function Suggestion(props) {
  const classes = useStyles();

  const getHighlightedText = (text, highlight) => {
    if (!highlight) {
      return <span>{text}</span>;
    }
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {}}>
            {part}
          </span>
        ))}{' '}
      </span>
    );
  };

  return (
    <div>
      {props?.data?.map((item) => (
        <div key={item.id} className={classes.item}>
          {getHighlightedText(item.term, props?.searchValue.length > 1 ? props.searchValue : undefined)}
        </div>
      ))}
    </div>
  );
}

export default Suggestion;
