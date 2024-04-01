import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1311b3a09df4ef3bcb9a7df645a2d8b~c5_300x300.webp?lk3s=a5d48078&x-expires=1712152800&x-signature=nZLcZR7En3XXTek3NQecsB89MdQ%3D"
        alt="Thuyy"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span> hellothuyymin </span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>thuyymin </span>
      </div>
    </div>
  );
}

export default AccountItem;
