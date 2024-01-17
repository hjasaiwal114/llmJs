import { Document } from "lanchain/document";
import { CharactertextSpitter } from "lanchain/text_spiltter";

const text = "foo bar baz 1243";

const splitter  =  new CharacterTextSplitter({
    seperator: ", "
    chunkSize: 7,
    chunkOverlap: 3,
});

const oputput = await splitter.createDocuments([text]);