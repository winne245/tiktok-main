import classNames from 'classnames/bind';
import { HomeIcon, PeopleIcon, LiveIcon, HomeActiveIcon, PeopleActiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';
import AccountList from '~/components/AccountList';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<PeopleIcon />}
          activeIcon={<PeopleActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <AccountList />
    </aside>
  );
}

export default Sidebar;
