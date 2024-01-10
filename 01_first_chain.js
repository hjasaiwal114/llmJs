import { config} from "dotenv";
config();

import { OpenAI } from "langchain/llms/openai";
import {promptTemplates } from "langchain/prompts";
import {LLMChain} from "langchain/chains";

const model = new OpenAI({ temperature: O });
const tempelate = 
 " Be very funny when answering question\n Question: {question}";
 const prompt = new promptTemplates({ template, inputVariables: ["question"]});

 const chain  = new LLMChain({ llm: model, prompt });

 const result = await chain.call({ question: "What is the capital of France?"});

 console.log(result);