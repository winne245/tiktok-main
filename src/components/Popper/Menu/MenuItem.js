import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      leftIcon={data.icon}
      to={data.to}
      className={cx('menu-item', { separate: data.separate })}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
