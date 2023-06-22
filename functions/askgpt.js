const { Configuration, OpenAIApi } = require("openai");

exports.handler = async (event) => {
    try {
        // List of models supported by OpenAI
        const supportedModels = [
            "gpt-3.5-turbo",
            "gpt-3.5-turbo-16k",
            "gpt-3.5-turbo-0613",
            "gpt-3.5-turbo-16k-0613",
            "text-davinci-003",
            "text-davinci-002",
            "code-davinci-002"
        ];

        // Extract the query string parameters
        const { role_system = "", prompt, temperature = "0.7", max_tokens = 100, apikey, model = "gpt-3.5-turbo" } = event.queryStringParameters;

        // Check if the API key was provided
        if (!apikey) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    code: 400,
                    message: "YOU NEED TO PROVIDE AN OPENAI API KEY PARAMETER",
                    error: "BAD REQUEST"
                })
            };
        }

        // Check if the prompt was provided
        if (!prompt) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    code: 400,
                    message: "YOU NEED TO PROVIDE A PROMPT PARAMETER",
                    error: "BAD REQUEST"
                })
            };
        }

        // Check if the provided model is valid
        if (!supportedModels.includes(model)) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    code: 400,
                    message: "INVALID MODEL",
                    error: "BAD REQUEST"
                })
            };
        }

        // Configure the OpenAI API with the provided API key
        const configuration = new Configuration({
            apiKey: apikey
        });

        // Instantiate the OpenAI API
        const openai = new OpenAIApi(configuration);

        // Call the API to create a chat conversation
        const response = await openai.createChatCompletion({
            model,
            messages: [
                { role: 'system', content: role_system },
                { role: 'user', content: prompt }
            ],
            temperature: parseFloat(temperature),
            max_tokens: parseInt(max_tokens)
        });

        // Extract the response from the model
        const answer = response.data.choices[0].message.content;

        // Return the response in the appropriate format
        return {
            statusCode: 200,
            body: JSON.stringify({
                code: 200,
                prompt,
                answer
            })
        };
    } catch (error) {
        console.log(error);

        // Return an error with the appropriate status and message
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({
                code: error.response.status || 500,
                message: null,
                error: error.response.statusText || "Internal Server Error"
            })
        };
    }
};
