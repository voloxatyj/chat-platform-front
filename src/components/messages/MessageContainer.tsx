import { formatRelative } from "date-fns";
import { FC, useCallback, useContext } from "react";
import { MessageContainerStyle, MessageItemAvatar, MessageItemContainer, MessageItemContent, MessageItemDetails, MessageItemHeaderContainer } from "../../styles/messages";
import { AuthContext } from "../../utils/context/AuthContext";
import { Message, User } from "../../utils/types";

type Props = {
    messages: Message[];
}

type FormattedMessageProps = {
    message: Message;
    user: User | undefined;
}

export const FormattedMessage: FC<FormattedMessageProps> = ({ user, message }) => {
    return (
    <MessageItemContainer>
        <MessageItemAvatar style={{ background: user?.id === message.author.id ?  '#5E8BFF' : 'red' }} />
        <MessageItemDetails>
            <MessageItemHeaderContainer>
                <span className="authorName" style={{ color: user?.id === message.author.id ? '#757575' : '#5E8BFF' }}>
                    {message.author.first_name} {message.author.last_name}
                </span>
                <span className="time">
                    {formatRelative(new Date(message.created_at), new Date())}
                </span>
            </MessageItemHeaderContainer>
            <MessageItemContainer>{message.content}</MessageItemContainer>
        </MessageItemDetails>
    </MessageItemContainer>
    )
}

export const MessageContainer: FC<Props> = ({ messages }) => {
    const { user } = useContext(AuthContext);

    const formatMessages = useCallback(() => {
        return messages?.map((message, idx, arr) => {
            const currentMessage = messages[idx];
            const nextMessage = messages[idx + 1];
            if (arr.length === idx + 1) {
                return <FormattedMessage user={user} message={message} />
            }
            if (currentMessage.author.id === nextMessage.author.id) {
                return (
                    <MessageItemContainer>
                        <MessageItemContent>
                            {message.content} {message.author.email}
                        </MessageItemContent>
                    </MessageItemContainer>
                )
            }
            return <FormattedMessage user={user} message={message} />
                })

    }, [messages, user])

    return (
        <MessageContainerStyle>
            {formatMessages()}
        </MessageContainerStyle>
    )
}