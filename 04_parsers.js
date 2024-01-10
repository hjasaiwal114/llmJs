import { config } from "dotenv";
config();

import {OpenAi} from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
    answer: "answer to the user's question",
});
const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
    template:
    "be very funny answering questions\n{format_instructions}\n Question: {question}",
    inputVariables:["question"],
    partialVariables: { format_instructions: formatInstructions },
});

const model = new OpenAi({ temperature: 0 });

const input = await prompt.format({
    questio: "what is the capital of france?",
});
console.log(input);

const response = await model.call(input);
console.log(response);

console.log(await parser.parse(repsonse));
