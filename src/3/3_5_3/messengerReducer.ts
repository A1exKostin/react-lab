export type State = {
    selectedId: number;
    messages: { [key: number]: string };
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState: State = {
    selectedId: 0,
    messages: {
        0: 'Hello',
        1: '',
        2: '',
    },
};

export function messengerReducer(
    state: State,
    action: Action
): State {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                // Черновик будет взят из state.messages[action.contactId] в компоненте.
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: ''
                }
            };
        }
        default: {
            throw Error('Unknown action: ' + (action as any).type);
        }
    }
}
