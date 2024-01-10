import { config } from "dotenv";
config();


import { OpenAiEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";
import { openAI } from "langchain/llms/openai";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";

const embeddings = new OpenAiEmbeddings();
const vectorStore = await FaissStore.load("./", embeddings);

const model = new openAI({ temperature: O});

const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQAStuffChain(model),
    retriever: vectorStore.asRetriever(),
    returnSourceDocuments: true,
});

const res = await chain.call({
    query: "When does the restaurent open on friday?",
});
console.log(res.text)