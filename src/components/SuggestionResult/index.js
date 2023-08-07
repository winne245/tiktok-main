import Suggestion from '../Suggestion';
import Collection from '../Collection';
import Product from '../Product';
import Tippy from '@tippyjs/react/headless';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import ResultBlock from '../ResultBlock';

const TOKEN = 'mrxlp7j7xi3iq0o2yn4b4jyfg1medbrlygl2nd04';

const useStyles = makeStyles((theme) => ({
  searchResult: {
    width: 380,
    borderRadius: 4,
    color: 'black',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 12px',
  },
}));

function SuggestionResult({ searchValue = '', children }) {
  const classes = useStyles();
  const [dataResponse, setDataResponse] = useState({});

  useEffect(() => {
    console.log('haha');
  }, [undefined]);

  const callDataResponse = (endPoint) => {
    fetch(`https://api.json-generator.com/templates/${endPoint}/data`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setDataResponse(json);
      });
  };

  return (
    <Tippy
      visible={searchValue !== ''}
      interactive={true}
      placement="bottom-end"
      render={() => (
        <div className={classes.searchResult} tabIndex={-1}>
          <ResultBlock blockName="SUGGESTIONS">
            <Suggestion data={dataResponse.suggestion} searchValue={searchValue} />
          </ResultBlock>
          <ResultBlock blockName="COLLECTIONS">
            <Collection data={dataResponse.collection} />
          </ResultBlock>
          <ResultBlock blockName="PRODUCTS">
            <Product data={dataResponse.product} />
          </ResultBlock>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default SuggestionResult;
