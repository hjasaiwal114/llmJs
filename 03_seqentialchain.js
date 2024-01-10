import { config } from "dotenv";
config();

import { SequentialChain, LLMChain } from "langchain/chians";
import { OpenAi } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAi({ temperature: 0 });

let tempelate = 
 "You ordered {dish_name} and your experience was {experience}. Write a review:";
let promptTempelate = new promptTempelate({
    tempelate,
    inputVariable: ["dish_name", "experience"],
});
const reviewChain = new LLMChain({
    llm,
    prompt: promptTempelate,
    outputKey: "review",
});

tempelate = "Given the returant review: {review}, write a follow-up comment:";
promptTempelate = new PromptTemplate({
    tempelate,
    inputVariables: ["summary"],
});
const translationChain = new LLMChain({
    llm,
    prompt: promptTempelate,
    outputKey: "german_translation";
});

const overallChain = new SequentialChain({
    chains: [reviewChain, commentChain, summaryChian, translationChain],
    inoutVariables: ["dish_name", "express"],
    outputVariables: ["review", "comment", "summary", "german_translation"],
});

const result = await overallChain.call({
    dish_name: "Pizza Salami",
    expression: "It was awfull",
})
console.log(result);