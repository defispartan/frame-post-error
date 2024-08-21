const requestBody = {
  clientProtocol: "lens@1.0.0",
  trustedData: {
    messageBytes:
      "0x83327ef6057487b09dcd42098c85a5b0224adb7fc0c73d6da88eb0b33fbb93600656ecf2ee04a11aaca283f9f480c47057175a6c8c00d1429a1532bf40f65f9d1c",
  },
  untrustedData: {
    identityToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4MDIwZTNkIiwiZXZtQWRkcmVzcyI6IjB4Rjc0MzYwMjc4ZTE4MUZkQ0ZkZkE2OTQ2ODdjRjUzRkMxNjNkRWUxOCIsInJvbGUiOiJwcm9maWxlX2lkZW50aXR5IiwiYXV0aG9yaXphdGlvbklkIjoiMmIzNzNmODYtNTRiYy00MzBmLTg2YjItOWE4OTgyNWYzYTk3IiwiaWF0IjoxNzI0MjIxOTM4LCJleHAiOjE3MjQyMjM3Mzh9.wr1ERnIG9fNT_pSpvAmWAGlGErhsJM_VsQnPZ-i4Sus",
    unixTimestamp: 1724222766,
    actionResponse: "",
    buttonIndex: 3,
    deadline: 1724224562,
    inputText: "",
    profileId: "0x020e3d",
    pubId: "0x020e3d-0x54-DA-b03e9567",
    specVersion: "1.0.0",
    state: "",
    url: "https://gecko-funky-chicken.ngrok-free.app/frames/38e29629-345b-444c-921f-333936d0cdde/1",
  },
};

const requestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "User-Agent": "HeyBot/0.1 (like TwitterBot)",
};

async function makeRequest() {
  try {
    const response = await fetch(
      "https://gecko-funky-chicken.ngrok-free.app/frames/38e29629-345b-444c-921f-333936d0cdde/1",
      {
        body: JSON.stringify({
          clientProtocol: "lens@1.0.0",
          trustedData: requestBody.trustedData,
          untrustedData: requestBody.untrustedData,
        }),
        headers: { "User-Agent": "HeyBot/0.1 (like TwitterBot)" },
        method: "POST",
        redirect: "manual",
      }
    );

    const { status } = response;
    const { headers } = response;

    let data = {};
    if (status !== 302) {
      if (response.headers.get("content-type")?.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }
    }
    console.log(`Status: ${status}`);
    console.log(`Re-direct Location: ${headers.get("location")}`);
  } catch (error) {
    if (error.response) {
      console.error(
        `Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else {
      console.error("Error:", error.message);
    }
  }
}

makeRequest();
