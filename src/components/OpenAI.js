import OpenAI from "openai";
import { openAIkey } from "../utils/constant";
const openai = new OpenAI({
    apiKey: {openAIkey},
    dangerouslyAllowBrowser: true,
});
export default openai;