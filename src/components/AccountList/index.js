import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountList.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountList({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>Following accounts</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('see-more-btn')}>See all</p>
    </div>
  );
}

AccountList.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AccountList;
