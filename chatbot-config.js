const chatbotConfig = {
    chatflowid: "0caf8f1d-2342-4f7c-a6e6-955136a13461",
    apiHost: "https://growthengine-2-0-flowise.onrender.com",
    chatflowConfig: {
        // topK: 2
    },
    theme: {
        button: {
            backgroundColor: "#1eeda2",
            right: 20,
            bottom: 20,
            size: 480
            dragAndDrop: false,
            iconColor: "black",
            autoWindowOpen: {
                autoOpen: false,
                openDelay: 0,
                autoOpenOnMobile: false,
            },
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Hi There 👋!',
            tooltipBackgroundColor: 'black',
            tooltipTextColor: 'white',
            tooltipFontSize: 16,
        },
        chatWindow: {
            showTitle: true,
            title: 'Sweepstakes Casino Chatbot',
            showAgentMessages: true,
            welcomeMessage: 'Hello! wave Ask me any Sweepstakes related question.',
            errorMessage: 'Whoops! Something went wrong! 😵 Please try again or refresh the chat.',
            backgroundColor: "#ffffff",
            backgroundImage: 'enter image path or link',
            height: 700,
            width: 400,
            fontSize: 16,
            starterPromptFontSize: 15,
            clearChatOnReload: false,
            botMessage: {
                backgroundColor: "#f2f3f8",
                textColor: "#000",
                showAvatar: false,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
                backgroundColor: "#1eeda2",
                textColor: "#fff",
                showAvatar: false,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
                placeholder: 'Type your question',
                backgroundColor: '#ffffff',
                textColor: '#303235',
                sendButtonColor: '#000',
                maxChars: 50,
                maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                autoFocus: true,
                sendMessageSound: false,
                receiveMessageSound: false,
            },
            feedback: {
                color: '#303235',
            },
            footer: {
                textColor: '#303235',
                text: 'Powered by',
                company: 'Growthleads',
                companyLink: 'https://www.growthleads.com/',
            }
        }
    }
};

export default chatbotConfig;
