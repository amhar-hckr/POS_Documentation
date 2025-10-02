// Consolidated data from all description files
export const descriptions = {
  "amex.tsx": ``,

  "bill_seek.tsx": `# BILL SEEK FEATURE

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

| **Button**   | **Function**                                                                 |
|--------------|-------------------------------------------------------------------------------|
| \`PgUp\`     | Scroll upward through the list, page by page.                                |
| \`PgDown\`  | Scroll downward through the list, page by page.                              |
| \`Up\`       | Move upward one line at a time.                                              |
| \`Down\`     | Move downward one line at a time.                                            |
| \`Select\`   | Confirm and choose the highlighted item or bill.                             |
| \`Cancel\`   | Abort the current action or step back without making changes.                |
| \`Void\`   | Remove an item already entered into the bill if the customer no longer wants it. Ensures billing accuracy while keeping a record of voided actions. |

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
`,
  //--------------------------------------------------------------------------------
  "cansel.tsx": `# Cancel a Bill 
## 📝 Description
The **Cancel Bill** option lets staff cancel a bill if something goes wrong during billing.  
This is useful when:
- The cashier made a mistake while entering items.
- A customer cannot complete the payment.
- A system error occurs during billing.

---

## ⚠️ Precondition
- Staff must be **logged in with a Manager password** to cancel a bill.  
  (This ensures that only authorized users can cancel transactions.)

---

## 📋 Steps
- **STEP-01:** Press the **CANCEL key** on the POS.  
- **STEP-02:** Confirm cancellation if prompted.

---

## ✅ Expected Result
- The bill is **canceled** in the system.  
- The items are removed from the current transaction.  

---

## 💡 Notes
- Use this option **only when necessary**.  
- Canceled bills will not be counted in daily sales.  
`,
  //--------------------------------------------------------------------------------
  "cash.tsx": `# Cash Transaction

## 📝 Description
The **Cash Transaction** function is used when a customer chooses to pay their bill with cash. It is the most common and straightforward payment method in the POS system.

---

## 📋 Steps
- **STEP-01:** Sign in to the **POS system**.  
- **STEP-02:** Scan the **item barcodes** to add them to the bill.  
- **STEP-03:** Press the **Cash** button to record the payment.  

---

## ✅ Expected Result
- A **Cash Payment transaction** will be added to the bill.  
- The system will update the sale as paid.  

---

## 💡 Notes
- Before finalizing the bill, always ask the customer if they have any of the following:  
  - **Exchange Receipt**  
  - **Discount Coupon**  
  - **Arapaima Card**  
- This ensures the customer receives all eligible benefits before payment is completed.  
`,
  //--------------------------------------------------------------------------------
  "change_phone.tsx": ``,
  //--------------------------------------------------------------------------------
  "change_side.tsx": ``,
  //--------------------------------------------------------------------------------
  "clear.tsx": ``,
  //--------------------------------------------------------------------------------
  "copy.tsx": ``,
  //--------------------------------------------------------------------------------
  "customer_keypad.tsx": ``,
  //--------------------------------------------------------------------------------
  "debit.tsx": ``,
  //--------------------------------------------------------------------------------
  "discount_amount.tsx": ``,
  //--------------------------------------------------------------------------------
  "discount_level.tsx": `# Discount Level

## 📝 Description
The **Discount Level** function allows staff to apply different types of discounts to a bill or specific items, depending on the situation.

---

## 🎯 Purpose
- To add discounts to a bill across **various categories** (e.g., staff discount, promotional discount, loyalty rewards).  
- To ensure the correct discount type is applied during checkout.  

---

## ⚠️ Precondition
- The transaction must be **approved by a manager** if the discount is **3% or higher**.  
- Discounts below 3% can be applied without manager approval.  

---

## 📋 Steps
- **STEP-01:** Select the required discount level number:  

  | No. | Discount Type                     |
  |-----|-----------------------------------|
  | 1   | Staff Discount                    |
  | 2   | General Discount                  |
  | 3   | Credit Card Discount              |
  | 4   | Loyalty Discount                  |
  | 5   | Damage Discount                   |
  | 6   | Promotional Discount              |
  | 7   | Gift Voucher Discount             |
  | 8   | Roundup Discount                  |
  | 9   | Supplier Discount                 |
  | 10  | Flight Attendants Union Discount  |
  | 11  | Ran Salu Discount                 |
  | 12  | Subtotal Discount                 |
  | 13  | Etisalat Discount                 |
  | 14  | Loyalty Birthday Discount         |
  | 15  | Doctors Welfare Society Discount  |
  | 16  | Dialog Star Points Discount       |
  | 17  | M-Cash Discount                   |
  | 18  | United Motors Discount            |

- **STEP-02:** Press the **DIS LEVEL** key.  
- **STEP-03:** Enter the **discount percentage**.  
- **STEP-04:** Press the **% button**.  
- **STEP-05:** Finalize the bill.  

---

## ✅ Expected Result
- The selected discount will be **applied to the bill**.  
- The bill total will adjust to reflect the discount.  

---

## 💡 Notes
- The maximum discount percentage you can apply may depend on your **user password and access level**.  
- To **view all available discount levels**, type \`*****\` and press the **Discount Level** key.  
`,
  //--------------------------------------------------------------------------------
  "discount_persentage.tsx": `# Adding Voucher Discount %

## 📝 Description
The **Adding Voucher Discount %** function allows staff to apply a discount to a gift voucher during a special promotion or when the voucher amount qualifies for a discount.

---

## 🎯 Purpose
- To give promotional or special discounts on **gift voucher sales**.  
- To ensure customers receive the correct discount benefit.  

---

## ⚠️ Precondition
- A **Gift Voucher sale must already be on the bill** before applying the discount.  

---

## 📋 Steps
- **STEP-01:** Press the **NO7** key.  
- **STEP-02:** Press the **DIS LEVEL** key.  
- **STEP-03:** Enter the **discount percentage**.  
- **STEP-04:** Press the **% button**.  
- **STEP-05:** Finalize the bill.  

---

## ✅ Expected Result
- The discount percentage will be **added to the bill**.  
- The bill total will be updated to reflect the discounted amount.  

---

## 💡 Notes
- Ensure that discounts are applied **only during valid promotions** or as instructed by management.  
- Double-check the discount percentage before finalizing to avoid billing errors.  
`,
  //--------------------------------------------------------------------------------
  "discount_remove.tsx": `# DIS REMO

## 📝 Description
The **Discount Remove** function allows staff to clear discounts applied to items or the entire bill.

---

## 📋 Steps
- **STEP-01:** To remove a **subtotal discount**, press the **D/R key**.  
- **STEP-02:** To remove an **item-wise discount**:  
  1. Type the product code.  
  2. Press the **D/R key**.  
- **STEP-03:** To remove **all discounts** on the bill:  
  1. Type \`**\`.  
  2. Press the **D/R key**.  

---

## ✅ Expected Result
- The selected discount(s) will be **removed** from the bill.  
- The bill will update to show the corrected total without the removed discount(s).  
`,
  //--------------------------------------------------------------------------------
  "edc.tsx": `# EDC Payment Process in POS System

This document describes the standard workflow for processing **card payments** through the EDC (Electronic Data Capture) terminal in the POS system.

---

## Workflow Steps

### 🟢 STEP-01: Customer Request
- When a customer requests to pay by **card**, proceed with the EDC process.

### 🟢 STEP-02: Add Items to POS
- Enter all purchased items into the POS system.  
- Verify that the bill is accurate.

### 🟢 STEP-03: Generate Subtotal
- Press the **Subtotal** button to finalize the total amount due.

### 🟢 STEP-04: Initiate EDC Payment
- Click on the **EDC option** in the POS.  
- The connected **EDC terminal** will pop up and display the payment amount.

### 🟢 STEP-05: Staff Action on Terminal
- The cashier/staff should perform one of the following on the EDC terminal:  
  - **Tap the card** (for contactless/NFC payments), or  
  - **Swipe the card**, or  
  - **Insert the card** (chip-enabled payment).


### 🟢 STEP-06: Transaction Processing
- The EDC terminal communicates with the bank/payment gateway.  
- If successful, the transaction is marked as **Approved** in the POS.

### 🟢 STEP-07: Receipt Printing
- A receipt will be **automatically printed** from the EDC terminal.  
- Provide the customer with the receipt.

---

## Notes

- Ensure the EDC terminal is powered on and connected before initiating payment.  
- If the transaction fails, re-check USB connection from pos and try again.  
- Always hand the card back to the customer after the transaction.  

---

*Document maintained by POS Support Team IT*
`,
  //--------------------------------------------------------------------------------
  "gv_manuel.tsx": `# Manual Gift Voucher Sales

## 📝 Description
The **Manual Gift Voucher Sales** function is used to sell a gift voucher by manually entering its number instead of scanning the serial code.

---

## 📋 Steps
- **STEP-01:** Enter the **Gift Voucher number** manually.  
- **STEP-02:** Press the **GIFTSALE** button.  
- **STEP-03:** Press **Subtotal** to confirm the sale.  

---

## ✅ Expected Result
- The **Gift Voucher** will be added to the bill as a purchased item.  
- The bill total will update to include the voucher value.  

---

## 💡 Notes
- Use this method only if the voucher barcode/serial code cannot be scanned.  
- Double-check the voucher number before finalizing the bill to avoid errors.  
`,
  //--------------------------------------------------------------------------------
  "gv_redeem.tsx": `# Gift Voucher Redeem

## 📝 Description
The **Gift Voucher Redeem** function is used when a customer pays for their purchase using a gift voucher instead of cash or card.

---

## 🎯 Purpose
- To accept **gift vouchers** as a valid method of payment.  
- To reduce the bill total based on the voucher value.  

---

## 📋 Steps
- **STEP-01:** Scan the **Gift Voucher** barcode **OR** type the **Gift Voucher number** manually.  
- **STEP-02:** Press the **Gift** key.  
- **STEP-03:** Finalize the bill to complete the payment.  

---

## ✅ Expected Result
- The **Gift Voucher** will be redeemed and deducted from the bill.  
- The transaction will be recorded in the system as paid via Gift Voucher.  

---

## 💡 Notes
- If the **server is not available** or the voucher number is not accepted, proceed with the **Manual Gift Voucher Redeem** process (see section *2.3.2*).  
- Always verify the voucher number before finalizing to prevent rejection.  
`,
  //--------------------------------------------------------------------------------
  "gv_sale.tsx": `# Gift Voucher Sales

## 📝 Description
The **Gift Voucher Sales** function is used when a customer purchases a gift voucher. The voucher is treated like a product and added to the bill.

---

## 📋 Steps
- **STEP-01:** Press the **GIFTSALE** button.  
- **STEP-02:** Scan the **voucher serial code**.  
- **STEP-03:** Press **Subtotal** to confirm.  

---

## ✅ Expected Result
- The **Gift Voucher** will be added to the bill as a purchased item.  
- The bill total will include the voucher value.  

---

## 💡 Notes
- Always check that the voucher serial code is scanned correctly before finalizing.  
- Hand over the printed voucher to the customer once the transaction is completed.  
`,
  //--------------------------------------------------------------------------------
  "koko.tsx": ``,
  //--------------------------------------------------------------------------------
  "layer.tsx": ``,
  //--------------------------------------------------------------------------------
  "loyalty.tsx": `# POS Connectivity Alert

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
`,
  //--------------------------------------------------------------------------------
  "manual_card_payment.tsx": ``,
  //--------------------------------------------------------------------------------
  "master.tsx": ``,
  //--------------------------------------------------------------------------------
  "menu.tsx": `# 🗂️ Menu Overview

When you click **Menu**, a layout window appears displaying various reports and system options:

![Menu Screen](../screenshots/menu.png)

---

## 📊 Available Reports & Options

- **Suspend Report**
- **Bill Cancellation Report**
- **Cashier Reading**
- **Non-Sales Report**
- **X Reading**
- **Refresh**
- **Restart System**
- **Shutdown System**
- **Exit Menu**

---

## 🧭 Navigation Buttons

At the bottom of the menu, six navigation buttons help you move through reports efficiently:

| Button | Label | Function |
|:-------|:------|:---------|
| \`1\` | \`PGUP\` | Jump to the top of the report |
| \`2\` | \`PGDN\` | Jump to the end of the report |
| \`3\` | \`UP\` | Move up one item at a time |
| \`4\` | \`DOWN\` | Move down one item at a time |
| \`5\` | \`SELECT\` | Print the selected report |
| \`6\` | \`EXIT\` | Close the report menu |

---

## 💡 Example Usage

- Press \`PGUP\` (1) to quickly move to the first item in the report list
- Use \`PGDN\` (2) to scroll directly to the last item
- Navigate through items one by one with \`UP\` (3) and \`DOWN\` (4)
- Use \`SELECT\` (5) to print the highlighted report
- Press \`EXIT\` (6) to close the menu and return to the main screen

> **Note:** Always verify the correct report is highlighted before pressing \`SELECT\` to ensure the intended document is printed.
`,
  //--------------------------------------------------------------------------------
  "mint_pay.tsx": ``,
  //--------------------------------------------------------------------------------
  "money.tsx": ``,
  //--------------------------------------------------------------------------------
  "new_loyalty.tsx": ``,
  //--------------------------------------------------------------------------------
  "ogf_manual.tsx": ``,
  //--------------------------------------------------------------------------------
  "outlet.tsx": `# Local Server Connectivity Alert

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
`,
  //--------------------------------------------------------------------------------
  "paid_out.tsx": ``,
  //--------------------------------------------------------------------------------
  "plu.tsx": `# Price Look Up (PLU)

## 📝 Description
The **Price Look Up (PLU)** function is used to manually add an item to the bill when the barcode cannot be scanned or read by the system.

---

## 🎯 Purpose
- To ensure items are billed correctly even if the barcode is damaged or unreadable.  
- Provides a backup method for adding products to the bill.  

---

## 📋 Steps
- **STEP-01:** Manually type the **item barcode** into the POS system.  
- **STEP-02:** Press the **PLU key** to confirm.  

---

## ✅ Expected Result
- The selected item will be **added to the bill** successfully.  
- The bill total will update to include the item.  

---

## 💡 Notes
- Always double-check the typed barcode to avoid errors.  
- If the item is not found, use **Item Seek** to locate it by description or price.  
`,
  //--------------------------------------------------------------------------------
  "promo.tsx": ``,
  //--------------------------------------------------------------------------------
  "recall.tsx": `# Recall (Suspend Bill)

## 📝 Description
The **Recall** function allows staff to reopen a previously suspended bill so that billing can continue without re-entering items.

---

## 🎯 Purpose
- To **recall suspended bills** and continue processing them.  
- Useful when a transaction was put on hold (e.g., customer needed time to decide or fetch payment).  

---

## 📋 Steps
- **STEP-01:** Scan the **suspended bill** barcode **OR** enter the **Suspend Serial No**.  
  - Format: \`mmdd0001\` (Example: \`01120001\`)  
- **STEP-02:** Press the **RECALL key** on the POS.  

---

## ✅ Expected Result
- The suspended bill will be displayed on the POS screen.  
- Staff can continue billing from where it was left off.  

---

## 💡 Notes
- A **Suspend Bill Recall Report** can be generated by selecting *Suspend Bill Recall Report* from the menu.  
`,
  //--------------------------------------------------------------------------------
  "recive_acc.tsx": ``,
  //--------------------------------------------------------------------------------
  "redeem.tsx": ``,
  //--------------------------------------------------------------------------------
  "refresh_system.tsx": ``,
  //--------------------------------------------------------------------------------
  "refund.tsx": ``,
  //--------------------------------------------------------------------------------
  "reload.tsx": `# Reload (Update Product Data)

## 📝 Description
The **Reload** function updates product and product details from the main server to the POS system.

---

## 🎯 Purpose
- To ensure the POS system has the **latest product information** (prices, codes, details).
- Helps staff work with accurate and up-to-date product data.

---

## ⚠️ Precondition
- To update only the last **2 days of product changes**: type \`*** reload\`.
- To update the **entire product list**: type \`***** reload\`.

---

## 📋 Steps
- **STEP-01:** Type \`***\` (for last 2 days) **OR** \`*****\` (for full update).
- **STEP-02:** Press the **Reload key**.

---

## ✅ Expected Result
- A message will appear: **"Reload Completed"**.
- Product and product details are updated in the POS system.
`,
  //--------------------------------------------------------------------------------
  "rplu.tsx": `# Repeat Price Look Up (RPLU)

## 📝 Description
The **Repeat Price Look Up (RPLU)** function is used to quickly increase the quantity of the **last item** added to the bill without scanning or typing the barcode again.

---

## 🎯 Purpose
- To save time when a customer purchases **multiple quantities** of the same item.  
- Prevents repeated scanning of the same product.  

---

## 📋 Steps
- **STEP-01:** While billing, press the **RPLU key**.  
- **STEP-02:** Each press of the **RPLU key** will increase the **quantity of the last item** on the bill by one.  

---

## ✅ Expected Result
- The **quantity of the last item** on the bill will increase.  
- The bill total will update to reflect the additional quantity.  

---

## 💡 Notes
- Use this function only when the customer is buying **more than one unit** of the same product.  
- Each key press adds **+1** to the last item's quantity.  
`,
  //--------------------------------------------------------------------------------
  "sales_man.tsx": ``,
  //--------------------------------------------------------------------------------
  "save.tsx": ``,
  //--------------------------------------------------------------------------------
  "seek.tsx": `# Item Seek Feature

## 📌 Description
The **Item Seek** feature allows users to identify products when a barcode is not available or when the price tag is missing.  

---

## 🎯 Purpose
To ensure smooth product lookup in cases where:
- A barcode cannot be scanned  
- A price tag is not available  

---

## 📝 Steps to Use

### 🔍 1. Barcode Seek
- Enter the product name (or partial product code).  
- Press the **SEEK** button.  
- When searching by product code:  
  - Type the first few digits.  
  - Add \`****\` to display all matching items.  

### 💰 2. Price Seek
- Enter the product price.  
- Add \`***\` at the end.  
- Press the **SEEK** button.  

---

## ✅ Expected Result
- Relevant products will be displayed based on the entered barcode, product code, or price.  

---

## ⚠️ Important Note
Before using the **Seek** option, it is recommended to:  
- Enter the barcode (if available).  
- Press the **PLU** button to directly select the product.  
`,
  //--------------------------------------------------------------------------------
  "son.tsx": `# Sign On Procedure

This section describes the steps required for staff to securely sign on to the POS system.

---

## Steps

### 🔑 STEP-01: Enter Password
- Input your **assigned password** using the **on-screen keypad**.  
- Ensure that the password is entered correctly.

### 🔑 STEP-02: Confirm Sign On
- Click the **Sign On** button.  
- The system will validate your credentials.

---

## Result

- Once successfully signed on, your **cashier name** will appear at the **top of the POS screen**.  
- This confirms that you are **logged in and ready to operate the system**.

---

## Notes

- Passwords are **personal and confidential**. Do not share them with others.  
- If you encounter issues signing on, contact your **POS administrator**.  

---

*Document maintained by POS Support Team*
`,
  //--------------------------------------------------------------------------------
  "staff_credit.tsx": `# Staff Credit Purchase Feature

## 📌 Description
This feature allows staff members to make purchases using their staff credit.

---

## ⚠️ Pre-conditions
Before initiating a staff credit purchase:

- ✅ The transaction must be **approved by the manager**.
- ✅ Staff **credit limit should not be exceeded**.

---

## 📝 Steps to Perform

1. Perform **normal billing procedures**.
2. Press **Subtotal**.
3. Enter **Employee Number (EmpNo)**.
4. Press the **STAFF** key.
5. Press the **STAFCRD** key.

> **Note:** Ensure all steps are followed in sequence to avoid errors.

---

## ✅ Expected Result
- A **Staff Credit Transaction** is added to the system.
- The transaction should reflect in the staff's credit history.

---

## 💡 Tips
- If the transaction is declined, verify:
  - Manager approval status.
  - Staff credit limit.
- Always confirm the **EmpNo** before pressing STAFF key.
`,
  //--------------------------------------------------------------------------------
  "staff.tsx": ``,
  //--------------------------------------------------------------------------------
  "sub_total.tsx": ``,
  //--------------------------------------------------------------------------------
  "suspend.tsx": `# Suspend Bill

## 📝 Description
The **Suspend Bill** function allows staff to temporarily place a bill on hold without completing the transaction.  

---

## 🎯 Purpose
- To handle situations where a customer needs extra time (e.g., finding payment, confirming items).  
- To pause billing during emergencies or interruptions.  

---

## 📋 Steps
- **STEP-01:** While processing a bill, press the **SUS key** at any time.  

---

## ✅ Expected Result
- A suspended bill will be **printed** with the heading:  
  **"INVOICE SUSPENDED"**.  
- The system will assign a **new serial number** to the suspended bill.  

---

## 💡 Notes
- In the new system, staff can suspend a bill **even after part payment** (useful during emergencies).  
- A staff bill can only be suspended **after removing staff discounts**.  
- Suspended bills can later be recalled using the **Recall** function.  
`,
  //--------------------------------------------------------------------------------
  "thyaga.tsx": ``,
  //--------------------------------------------------------------------------------
  "discount_percentage.tsx": `test`,
  //--------------------------------------------------------------------------------
  "visa.tsx": ``,
  //--------------------------------------------------------------------------------
  "void.tsx": `# Void (Remove Item from Bill)

## 📝 Description
The **Void** function allows staff to remove items that were mistakenly added to a bill during the billing process.

---

## 🎯 Purpose
- To **remove incorrect items** from the current bill before finalizing.  
- Ensures that customers are only charged for the correct items.  

---

## ⚠️ Precondition
- The item you want to remove must already be on the bill.  

---

## 📋 Steps
- **STEP-01:** Press the **VOID key**.  
- **STEP-02:** Do one of the following:  
  - **Option A:** Scan the item's barcode.  
  - **Option B:**  
    1. Use **Bill Seek** to locate the item.  
    2. Select the item code.  
    3. Press the **VOID key** again.  

---

## ✅ Expected Result
- The selected item will be **removed (minused)** from the bill.  
- The item will no longer appear on the bill.  

---

## 💡 Notes
- Once an item is voided, it **cannot be billed again** unless re-scanned and added back to the bill.  
`,
};

export default descriptions;
