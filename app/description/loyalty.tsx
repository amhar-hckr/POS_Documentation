export const content = `# POS Connectivity Alert

## 🔴 Alert: Connectivity Lost
When this indicator turns **red**, it means the connectivity between this **POS machine** and **Head Office (HO)** has dropped.

---

## ⚠️ Key Points to Check

Before troubleshooting further, verify the following:

1. **POS to HO Connection**
   - Use the **Command Prompt (CMD)** to confirm connectivity.
   - Example:
     ping <HO_IP_Address>
   - Ensure the response is successful.

2. **HO to Outlet Connectivity**
   - Verify the Outlet can communicate with the **Head Office**.
   - Ensure there are no network disruptions or firewall blocks.

---

## ✅ Expected Result
- If **both connections are confirmed healthy**, the POS should automatically reconnect to the Head Office.
- If not, investigate **network issues** or **hardware failures**.

---
## 💡 Solution
- Check \`cables, switches\`, and \`routers\` between POS and HO.
- Ensure \`POS machine IP configuration\` is correct.
- Look at \`system logs\` for additional clues.
- sign out \`pos\` unit
- restart \`pos\` unit
`;