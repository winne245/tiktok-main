import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderResults = (attrs) => (
    <div className={cx('menu')} tabIndex={-1} {...attrs}>
      <PopperWrapper className={cx('menu-inner')}>
        {history.length > 1 && (
          <Header
            title={current.title}
            onBack={() => {
              setHistory((pre) => pre.slice(0, pre.length - 1));
            }}
          />
        )}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isPatent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isPatent) {
              setHistory([...history, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleResetMenu = () => {
    setHistory((pre) => pre.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      offset={[5, 10]}
      delay={[0, 700]}
      placement="bottom-end"
      render={renderResults}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
