import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const useStyles = makeStyles((theme) => ({
  blockTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 16px',
    fontSize: '14px',
    fontWeight: 600,
    backgroundColor: '#ededed',
  },
}));

function ResultBlock({ blockName = '', children }) {
  const classes = useStyles();
  const [isShowBlock, setIsShowBlock] = useState(true);

  return (
    <div>
      <div
        className={classes.blockTitle}
        style={{
          borderTopLeftRadius: blockName === 'SUGGESTIONS' ? 4 : 0,
          borderTopRightRadius: blockName === 'SUGGESTIONS' ? 4 : 0,
        }}
      >
        <p>{blockName}</p>
        <button
          onClick={() => {
            setIsShowBlock(!isShowBlock);
          }}
        >
          {isShowBlock ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </button>
      </div>
      {isShowBlock && children}
    </div>
  );
}

export default ResultBlock;
