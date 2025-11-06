// src/utils/auth.js
import * as SecureStore from "expo-secure-store";

const KEYCLOAK_URL = "https://keycloak-server/realms/demo";
const CLIENT_ID = "react-app";

export async function manualLogin(username, password) {
  const response = await fetch(`${KEYCLOAK_URL}/protocol/openid-connect/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "password",
      client_id: CLIENT_ID,
      username,
      password,
    }).toString(),
  });

  const tokens = await response.json();
  if (tokens.access_token) {
    await SecureStore.setItemAsync("access_token", tokens.access_token);
    return true;
  }
  return false;
}
