const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function mapFields(csvData) {
  const prompt = `
Convert the following CSV records into GrowEasy CRM format.

CSV Data:
${JSON.stringify(csvData)}

Return only valid JSON as an array.

Fields:
- created_at
- name
- email
- country_code
- mobile_without_country_code
- company
- city
- state
- country
- lead_owner
- crm_status
- crm_note
- data_source
- possession_time
- description

If any field is not available, return an empty string.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

module.exports = { mapFields };