import { google } from "googleapis";

const client_email = "apticon@macro-magpie-424101-r4.iam.gserviceaccount.com";
const private_key =
  "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDEnt9ebgIa2SnU\nSt5vsvuY3gzR4iTUa78exJ/mRlpj63tEmXc4XUpoP355w0AJ7o39q72tv/KVQlNl\n8RE4oO3m8LzA14P540UbC9DDJ7NfXX53gjfiBKWf3eU1hgk0iX6dDZqHo1D4TmBY\nJbe5S9jKaC8eOvq2xJZfkQfSbHtaMTgpqUnZiHNFtFCbIHGFRT6MVIjThZaa00hl\nLBLAg35NJD1sq/+emO8ZOPvXZfBpUkqc5Y8UWoapssnO8xvcLWL8Kk79K+5pzFoW\nKJBKJr9rQzrm+3B/F4TkJ+ZLgTDwr/nJuje29txNdlA0BD85gMQa4OyOOatFetZS\nRUAnjx4tAgMBAAECggEAJYac4wzj4fPog9f2NCNY2YgnsjcTCGe4BktIqU5sGf3r\nfOA9XMiRVuwnW13kbwDUoMGSZgLobYxHFoG347LzNMxlefin+51gpxTONzDwjxbs\n+ComOEDiy2wyPtDiGODVBWx/PbvxzDJJOQmZ0weizJ6tv3tKNm+2s26eq46AzGma\nR3fcidYSuiknX4QV490JnGQVWCjXDOnbMtRWHfj6LWdbMwvcpcucu1CXjhKnrQX1\nG/9OzNeHuD5Mgv3yxmg7Z2yFxetW79d51UMkbmuPafWl5LIBDUX6JCT/sopcBniv\nMo1bjc8W3M9jEs7ixIjUZlHeLSa3BRsfAUHtTi8CgQKBgQD54LaNuCs2GfSWwPGg\nLdRFbw/rPfLWTuh2IhMEL/FhaubFvJU2o1OuChQWeY+rhhNIb5xI0ZGDDgeyP5Sy\n1voTe35/yRylMBNRpidgIAPjS2tseOsuTcs0XGYn6N9dzF423YvU1ygFFXy7u7Da\naRVPmqfdupUJcSwBh/iHVN9IlQKBgQDJcB5zuYCtFEFfdOx56HNmIftO/ISarvVh\nRVFcyGxJc+7cvsM0W5+VkYg5eM7dftfPyc79JmlMo3x+cPIQL8q6grglmwbBGK5G\nJoyn56jr5Mtyhsok5hTm9aQHa61lv+9nffndsVW+qRHlo0QiWXlvcUbNMGF/SOzq\nUExCmpnhOQKBgC91JVbPNq3EyjZjmMCCU8GIMW7NSjS3seDV4eS2slJ9Oi0t/uzs\nojT4xw3psoayJTFpuTX/T3KjlISfHL/GoqJWnxTn/l/FPLYSJ4JTMknWBiYI5Snb\nLo/YSLKlwN6QtQgYlbkrz/b/OLxzDki9EoYW6nDrQekULHZx+5rAXNPtAoGAG0Qw\n6ws2DreKLcie5dWAIVgCM2vc6y85icQfQkbi2YJ216x+scyhKla7sMPYhITR4492\nlC+p2zTZ+ieBrI07jMl68aQtYt/bXyWCroueAuhCXas/G4WFWMnxPQvnObmkR0b3\nFnoVmCw8fu/9ngSselhD9CxTVi5h20mpOO7CW4kCgYBf4IgDiNU5qz+mQb7nL+tG\n2FpqRz1ez7njac3owwmGjnRqjMCorUTOoogSGSaOwGf6r0qaqM6sw1QYOyeDPaII\n9QC1/gxC947njsF9n8fGUOAC3qMLiFWKmlc/PbrZWLBUnsToxOvjh1VQxalYL+WR\n/IST4+z98qsFAiDFWecLAQ==\n-----END PRIVATE KEY-----\n";

// Configure a JWT auth client
const auth = new google.auth.JWT(client_email, undefined, private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

// Google Sheets API
const sheets = google.sheets({ version: "v4", auth });

export async function appendRowToSheet(rowData: any[]) {
  try {
    const spreadsheetId = "1P85pkAO_42umqh_0ZgvapnYzD962hHs1prVb7rCGP1o";
    const range = "Sheet1!A1";
    const valueInputOption = "RAW";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: {
        values: [rowData],
      },
    });

    console.log("Data appended:", response.data);
  } catch (error) {
    console.error("The API returned an error: " + error);
  }
}
