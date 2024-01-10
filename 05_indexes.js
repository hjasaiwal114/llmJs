import { config } from "dotenv";
config();

import { TextLoader } from "langchain/document_loaders/fs/text";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { FaissStore } from "langchain/vectorstores/faiss";

const splitter = new CharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50,
});

const documents = await splitter.splitDocuments(docs);
console.log(documents);

const embeddings = new OpenAIEmbeddings();

const vectorstores = await FaiseStire.fromDocuments(documents, embeddings);

await vectorstores.save("./");