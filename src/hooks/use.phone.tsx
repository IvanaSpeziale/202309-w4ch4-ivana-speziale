import { useState } from 'react';

export function usePhone() {
  type State = {
    phoneNumber: string;
    isCalling: boolean;
  };

  const [state, setState] = useState<State>({
    phoneNumber: '',
    isCalling: false,
  });

  const addNumberToDisplay = (num: string) => {
    if (num === 'delete') {
      setState({ ...state, phoneNumber: '' });
      return;
    }
    if (state.phoneNumber.length === 9) return;
    setState({ ...state, phoneNumber: state.phoneNumber + num });
  };
  console.log(state.isCalling);
  const callPhone = () => {
    setState({ ...state, isCalling: true });
    console.log(state.isCalling);
  };
  return {
    phoneNumber: state.phoneNumber,
    isCalling: state.isCalling,
    addNumberToDisplay,
    callPhone,
  };
}
