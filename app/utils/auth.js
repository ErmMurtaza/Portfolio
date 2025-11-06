import * as SecureStore from "expo-secure-store";

export async function manualLogin(username, password) {
  const KEYCLOAK_URL = "https://keycloak.demo/realms/demo"; // correct
  const CLIENT_ID = "react-app";

  if (!username || !password) {
    alert("Please enter both username and password.");
    return false;
  }

  try {
    const response = await fetch(`${KEYCLOAK_URL}/protocol/openid-connect/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "password",
        client_id: CLIENT_ID,
        username, // use input
        password, // use input
      }).toString(),
    });

    const text = await response.text();
    console.log("Raw Response:", text);

    if (!response.ok) throw new Error("Login failed: " + text);

    const data = JSON.parse(text);
    console.log("Login Success:", data);

    if (!data.access_token) throw new Error("Access token missing in response");

    await SecureStore.setItemAsync("access_token", data.access_token);

    return true;
  } catch (error) {
    console.error("Manual Login Error:", error);
    alert(error.message || "Login failed — check credentials or server URL");
    return false;
  }
}

// QR login stays the same for demo purposes
export async function qrLogin(tokenFromQR) {
  try {
    await SecureStore.setItemAsync("access_token", tokenFromQR);
    console.log("QR login success:", tokenFromQR);
    return true;
  } catch (err) {
    console.error("QR Login Error:", err);
    return false;
  }
}
