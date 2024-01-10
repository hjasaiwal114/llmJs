import { config } from "dptenv";
config();

import { ChatOpenAI } from "langchain/chat_models/openai";
import { intializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";

const model = new ChatOpenAI({ temperatur: O});
const tools = [new Calculate()];

const executor = await initailizeAgentExecutinWithOptions(tools, model. {
    agentType: "chat-conversational-react-description",
    verbose: true,
})

const input1 = "What is 100divided by 25?";
const result1 = await executor.call({ input: input1 });
console.log(result1);