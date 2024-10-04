import React, { createContext, useState } from 'react';
import { ISession } from '@/src/commons/interfaces';
import { BlockList } from '../types';
// Define the shape of the context state
interface ModalContextType {
  showEditDialog: {
    type?: 'edit' | 'create';
    show: boolean;
    data?: ISession | null;
    id?: number;
  };
  setEditDialog: React.Dispatch<
    React.SetStateAction<{
      type?: 'edit' | 'create';
      show: boolean;
      data?: ISession | null;
      id?: number;
    }>
  >;
}

// Create a context for managing the modal state with a default value
export const ModalContext = createContext<ModalContextType>({
  showEditDialog: {
    type: 'create',
    show: false,
    data: null,
    id: undefined,
  },
  setEditDialog: () => {},
});

export const SessionsModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showEditDialog, setShowEditDialog] = useState<{
    type?: 'edit' | 'create';
    show: boolean;
    data?: ISession | null;
    id?: number;
  }>({
    type: 'create',
    show: false,
    data: null,
    id: undefined,
  });

  const setEditDialog = (data) => setShowEditDialog(data)
  return (
    <ModalContext.Provider value={{ showEditDialog, setEditDialog }}>
      {children}
    </ModalContext.Provider>
  );
};
