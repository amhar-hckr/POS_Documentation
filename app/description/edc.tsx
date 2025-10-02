export const content = `# EDC Payment Process in POS System

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
`