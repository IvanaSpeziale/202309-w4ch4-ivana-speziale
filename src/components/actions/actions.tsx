import { Display } from '../display/display';

export function Actions({ phoneNumber }) {
  const isCallButtonActive = phoneNumber.length === 9;

  return (
    <div className="actions">
      <Display phoneNumber={phoneNumber} />
      <a
        href="#"
        className={`call ${isCallButtonActive ? 'active' : ''}`}
        onClick={onCallClick}
      >
        Call
      </a>
      <a href="#">Hang</a>
    </div>
  );
}

export default Actions;
