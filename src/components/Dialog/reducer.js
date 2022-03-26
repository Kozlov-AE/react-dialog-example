export default function reducer(state, action) {
  switch (action.type) {
    case "remove-message":
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
      break;
      case "add-message":
        return {
          ...state,
          messages: state.messages.concat(action.payload),
        };
        break;
      case "update-status":
        return {
          ...state,
          messages: state.messages.map((message) => {
            if(message.id === action.payload.id) {
              return {
                ...message,
                status: action.payload.status,
              };
            }
            return message;
          }),
        };
        break;
    default:
    throw new Error("Unknown action type");
  }
}
