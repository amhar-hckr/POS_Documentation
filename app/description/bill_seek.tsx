export const content = `# BILL SEEK FEATURE

## 📌 Description
The **Bill Seek** feature allows users to quickly locate and review bills within the POS system. This is especially useful when customers request a copy of a past bill or when verifying completed transactions.  

---

## 🎯 Purpose
- Retrieve past bills efficiently.  
- Enable verification and reprints of transactions.  
- Improve customer service during inquiries.  

---

## 📝 Steps to Use

### 🧾 Bill Seek
- Enter the bill number or reference.  
- Press the **BILL SEEK** button.  
- The corresponding bill details will be displayed.  

📷 *Example Bill Seek Screen:*  
![Bill Seek Screenshot](../screenshots/bill_seek.png)  

---

## ✅ Expected Result
- The requested bill will be displayed with full transaction details, ready for review or reprint.  

---

## ⚙️ Menu Navigation Buttons

\| **Button**   \| **Function**                                                                 \|
\|--------------\|-------------------------------------------------------------------------------\|
\| \`PgUp\`     \| Scroll upward through the list, page by page.                                \|
\| \`PgDown\`  \| Scroll downward through the list, page by page.                              \|
\| \`Up\`       \| Move upward one line at a time.                                              \|
\| \`Down\`     \| Move downward one line at a time.                                            \|
\| \`Select\`   \| Confirm and choose the highlighted item or bill.                             \|
\| \`Cancel\`   \| Abort the current action or step back without making changes.                \|
\| \`Void\`   \| Remove an item already entered into the bill if the customer no longer wants it. Ensures billing accuracy while keeping a record of voided actions. \|

---
 

## ✅ Expected Result
- Relevant products will be displayed based on the entered barcode, product code, or price.  
- Bill Seek will show the full bill details for review or reprint.  

---

## ⚙️ Menu Navigation Buttons
The POS interface includes several action keys to help manage products efficiently:

- **PgUp / PgDown** → Scroll through lists page by page.  
- **Up / Down** → Navigate items line by line.  
- **Select** → Confirm and add the highlighted product.  
- **Cancel** → Exit the current action without changes.  
- **Void** 🆕 →  
  - Used when a customer decides not to purchase an item *after* it has already been entered.  
  - Instantly removes the selected product from the active bill.  
  - Helps maintain billing accuracy and keeps a record of voided actions for accountability.  

---
## ⚠️ Important Note
Before using the \`Bill Seek\` option, it is recommended to:  
- Enter the barcode (if available).  
- Press the \`PLU\` button to directly select the product.  
`;