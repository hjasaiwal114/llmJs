import "dotenv/config";

import { chatOpenAi } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/message";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
    SystemMessagePromptTemplate,
    HumanMessagePomptTemplate
} from "@langchain/core/prompts";

const promptFromMessages = ChatPromptTempelate.formMessage([
    ["system", "you are an exper at picking company names."],
    ["human", "What are three good names for a company that make {product}?"]
]);

await promptFromMessages.formatMessage({
    product: "Shinny objects"
});

const chain = prompt.pipe(model);

await chain.invoke({
    prodct: "colorfull socks"
});

const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good name for a company that makes {product}?`
)

await prompt.format({
    product: "colorful socks"
});

await prompt.formatMessage({
    product: "colorful socks"
});

const model =new chatOpenAi({
    modelName: "gpt-3.5 turbo-1106"
});

await model.invoke([
    new HumanMessage("Tell me a joke")
]);