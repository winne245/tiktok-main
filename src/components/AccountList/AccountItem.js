import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import styles from './AccountList.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data?.nickname}`} className={cx('account-item')}>
      <Image className={cx('avatar')} src={data?.avatar} alt={data?.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data?.nickname}</span>
          {data?.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data?.full_name}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object,
};

export default AccountItem;
