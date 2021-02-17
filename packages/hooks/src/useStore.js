import { ContextStore } from 'packages-store';
import { useContext } from 'react';

export default function useStore() {
  const store = useContext(ContextStore);

  return { ...store };
}
