export const toastNotifiable = {
    
    methods: {
        
        showNotificationError (message) {
            this.$toasted.error(message, { 
                theme: "toasted-primary", 
                position: "bottom-right", 
                duration : 5000,
                action : {
                    text : 'Fechar',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            });
        },

        showNotificationSuccess (message) {
            this.$toasted.success(message, { 
                theme: "toasted-primary", 
                position: "bottom-right", 
                duration : 5000,
                action : {
                    text : 'Fechar',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            });
        },

        showNotificationInfo (message) {
            this.$toasted.info(message, { 
                theme: "toasted-primary", 
                position: "bottom-right", 
                duration : 5000,
                action : {
                    text : 'Fechar',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            });
        },

        showNotificationShow (message) {
            this.$toasted.show(message, { 
                theme: "toasted-primary", 
                position: "bottom-right", 
                className: "colorNotificationShow",
                duration : 5000,
                action : {
                    text : 'Fechar',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            });
        }
        
    }
}

