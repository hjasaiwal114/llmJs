// enviroment coniguration
import {config} from "dotenv";
config();

import { Configuratiin, OpenAiApi } from "opneai";

const configuration = new Configuration({
    apiKey: process.env.OpenAiApi_API_KEY,
});
const openapi = new OpenAiApi(configuration);

async function chat(input) {
    const message = [{role: "user", content: input }];

    const response = await OpenAiApi.createChatCompletion({
        model: "gpt-3.5-turbo",
        message: message,
        temperature: 0,
    });

    return response.data.choice[0].message.content;
}

const question =  "What is the capital of Framce";

chat(question)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

const promptempelate =`
    Be very funny when answering questions
    Question: {question}
`;

const prompt = promptTempelate.replace("{question}", question);

chat(prompt)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));