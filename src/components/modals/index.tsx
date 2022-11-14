import { FC, PropsWithChildren } from 'react';
import {
  ModalBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '../../utils/styles';

export const ModalHeader: FC<PropsWithChildren> = ({ children }) => (
  <ModalHeaderStyle>{children}</ModalHeaderStyle>
);

export const ModalBody: FC<PropsWithChildren> = ({ children }) => (
  <ModalBodyStyle>{children}</ModalBodyStyle>
);

export const ModalContainer: FC<PropsWithChildren> = ({ children }) => (
  <ModalContainerStyle>{children}</ModalContainerStyle>
);
