class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello! How can I assist you today?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, greetingMessage],
      }));
    }
  
    handleHelp() {
      const helpMessage = this.createChatBotMessage("Sure, I'm here to help! What do you need assistance with?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, helpMessage],
      }));
    }
  
    handleUnknown() {
      const unknownMessage = this.createChatBotMessage("I'm not sure how to respond to that. Can you please rephrase?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, unknownMessage],
      }));
    }
  }
  
  export default ActionProvider;
  