# Button Component - Design Document

## Overview
The Button Component is a reusable UI element designed to handle user interactions efficiently.It supports multiple variants, custom labels, and click actions.

---

## Features
1. **Variants**
    - Primary (Default)
    - Secondary

2. **Custom Label**
    - Dynamic label passed as a prop.

3. **Disabled State**
    - Prevents user interaction when disabled.
    - Applies disabled styles.

4. **On Click Action**
    - Callback function to handle button clicks.

---

##  Component Design

### 1. **Core Structure**
- **Button Container:** Renders the button with appropriate styles.
- **Label:** Displays the button text.
- **Click Handler:** Executes provided callback on button click.

---

## 🎨 UI/UX Considerations
- Button size should be responsive.
- Clear visual distinction between primary and secondary variants.
- Disabled state should have a faded look with no pointer events.

---

## 🧠 Logical Design

### 1. **Input Configuration**
```json
{
  "label": "Submit",
  "variant": "primary",
  "disabled": false,
  "onClick": "handleSubmit"
}