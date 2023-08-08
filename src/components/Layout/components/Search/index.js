import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountTime';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isShowResult, setIsShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const debounceSearchValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounceSearchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setIsLoading(true);

      const result = await searchServices.searchUser(debounceSearchValue);
      setSearchResult(result);

      setIsLoading(false);
    };

    fetchAPI();
  }, [debounceSearchValue]);

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearResult = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setIsShowResult(false);
  };

  return (
    <Tippy
      visible={searchResult.length > 0 && isShowResult}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleChangeSearch}
          onFocus={() => setIsShowResult(true)}
        />
        {!!searchValue && !isLoading && (
          <button className={cx('clear-btn')} onClick={handleClearResult}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {isLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
