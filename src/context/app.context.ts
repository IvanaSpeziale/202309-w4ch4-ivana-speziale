/* import { createContext, useContext, useState } from 'react';
import { usePhone } from '../hooks/use.phone'; */
export type PhoneContextStructure = {
  phoneNumber: string;
  isCalling: boolean;
  callPhone: () => void;
  hangUp: () => void;
};

const initialPhoneContext = {} as PhoneContextStructure;

/* export const PhoneContext =
  createContext<PhoneContextStructure>(initialPhoneContext); */
