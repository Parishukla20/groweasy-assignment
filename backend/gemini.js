const { GoogleGenAI } = require("@google/genai");
console.log(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function mapFields(csvData) {
  const prompt = `
You are a CRM field mapping assistant.

CSV Data:
${JSON.stringify(csvData)}

Return JSON only.
Map the fields to:
firstName
lastName
email
phone
company
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = { mapFields };