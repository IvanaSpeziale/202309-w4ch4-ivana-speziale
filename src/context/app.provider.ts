import { useState } from 'react';
import { AppContext, ContextStructure } from './app.context';
import { useTasks } from '../hooks/use.tasks';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [count, setCount] = useState(0);

  const tasksState = useTasks();

  const context: ContextStructure = {
    foo: 'El contexto de Pepe',
    count,
    setCount,
    tasksTools: tasksState,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
