import { FC, PropsWithChildren } from 'react';
import {
  ModalContentBodyStyle,
  ModalContainerStyle,
  ModalHeaderStyle,
} from '../../utils/styles';

export const ModalHeader: FC<PropsWithChildren> = ({ children }) => (
  <ModalHeaderStyle>{children}</ModalHeaderStyle>
);

export const ModalBody: FC<PropsWithChildren> = ({ children }) => (
  <ModalContentBodyStyle>{children}</ModalContentBodyStyle>
);

export const ModalContainer: FC<PropsWithChildren> = ({ children }) => (
  <ModalContainerStyle>{children}</ModalContainerStyle>
);
