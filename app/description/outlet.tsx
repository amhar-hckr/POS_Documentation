export const content = `# Local Server Connectivity Alert

## 🔴 Alert: Connection Dropped
When this indicator turns **red**, it means the connection between the **POS machine** and the **local server** has dropped.

---

## ⚠️ Key Points to Check

Before attempting to restore the connection, verify the following:

1. **Server Machine Power**
   - 🕳️Ensure the **server machine is powered on**.

2. **Server IP Address**
   - 🕳️Confirm the server has the **correct IP address** configured.

3. **Server Connection to Switch**
   - 🕳️Verify the server is **physically connected to the network switch**.

4. **Ping Test**
   - 🕳️Ensure the **server can be pinged from the POS machine**:
     ping <Server_IP_Address>
   - 🕳️Successful replies indicate network reachability.

---

## ✅ Expected Result
- If all of the above checks are correct, the **connection between the POS and the local server should return automatically**.
- If issues persist, investigate **network hardware**, **cables**, or **firewall settings**.

---

## 💡 Tips
- Check \`switch port status\` for the server connection.
- Ensure \`IP conflicts\` are not present in the network.
- Review \`server and POS logs\` for additional error messages.
`;