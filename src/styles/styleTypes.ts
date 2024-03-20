export type PageProps = Partial<{
  display: string;
  justifyContent: string;
  alignItems: string;
}>;

export type InputContainerProps = Partial<{
  backgroundColor: string;
}>;

export type ConversationSidebarItemProps = {
  selected: boolean;
};

export type ModalProps = Partial<{
  showModal: boolean;
}>;

export type MessageItemContentProps = Partial<{
  padding: string;
}>;