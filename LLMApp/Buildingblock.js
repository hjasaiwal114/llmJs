const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { RecursiveCharacterTextSplitter, TextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const fs = require("fs");

const OPENAI_API_KEY = "api";

async function generateAndStoreEmbeddings() {

    const trainingText = fs.readFileSync("training-data.txt", "utf-8");

    const text_splitter = new RecursiveCharacterTextSplitter({
        chunksSize: 1000,
    });

    const docs = await TextSplitter.createDocuments([trainingText]);

    const vectorstores = await HNSWLib.fromDocuments(
        docs, 
        new OpenAiEmbeddings({ openAiApiKey: OPENAI_API_KEY }),
    );

    VectorStore.save("hnswlib");
}

