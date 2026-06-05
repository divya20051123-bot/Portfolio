# FOODCONNECT - FOOD WASTE REDUCTION PLATFORM

## FINAL YEAR PROJECT REPORT

**Bachelor of Science (Computer Science)**  
**Vel Tech Ranga Sanku Arts College**  
*Affiliated to University of Madras, Chennai*

---

## BONAFIDE CERTIFICATE

Certified that this report titled **"FOODCONNECT - FOOD WASTE REDUCTION PLATFORM"** is a bonafide record of the project work done by **[Student Name] (Reg. No: [Register Number])** under our supervision and guidance, towards partial fulfillment of the requirement for award of the Degree of **B.Sc Computer Science** of **Vel Tech Ranga Sanku Arts College** for the academic year **2024-2025**.

**Internal Guide Signature:** ___________________________

**Head of the Department Signature:** ___________________________

**External Guide Signature:** ___________________________

**Date:** ___________________________

---

## ACKNOWLEDGEMENT

I am deeply indebted to our Principal and the Management of Vel Tech Ranga Sanku Arts College for providing a supportive environment and all necessary facilities that helped me successfully complete this project.

I am extremely grateful to **Mrs. N. Chamundeeswari**, Head of the Department of Computer Science, for her moral support, encouragement, and valuable guidance throughout this project.

I express my sincere gratitude to my **Internal Guide** and mentors from the Department of Computer Science for their valuable guidance, constructive feedback, and continuous support.

I also thank all the teaching and non-teaching staff of the Department of Computer Science for their kind help.

Finally, I would like to express my deep gratitude to my parents, family, and friends for their constant support, encouragement, and blessings, which have been my greatest strength.

---

## TABLE OF CONTENTS

1. **INTRODUCTION**
   - 1.1 Project Overview
   - 1.2 Problem Statement
   - 1.3 Limitations of Existing Methods
   - 1.4 The Proposed System and Advantages

2. **SYSTEM ANALYSIS AND DESIGN**
   - 2.1 Context Diagram
   - 2.2 Data Flow Diagrams (DFD)
   - 2.3 Database Design (Local Storage)
   - 2.4 Architecture Diagram

3. **IMPLEMENTATION**
   - 3.1 Tools and Technologies
   - 3.2 Program List and Sample Code
   - 3.3 Folder Structure

4. **OUTPUTS**
   - 4.1 Screen Layouts
   - 4.2 User Flows

5. **TESTING AND DEPLOYMENT**
   - 5.1 Testing Strategy
   - 5.2 Deployment Strategy

6. **CONCLUSION AND FUTURE ENHANCEMENTS**

7. **REFERENCES**

---

# CHAPTER 1: INTRODUCTION

## 1.1 Project Overview

**FoodConnect** is a web-based platform designed to bridge the gap between surplus food and hunger. It serves as a centralized solution for Hotels, Restaurants, and Event Organizers to donate excess food to Orphanages and NGOs in real-time.

The system is developed to manage:
- Hotel and Orphanage registration
- Real-time food donation posting
- Donation claiming and tracking
- Impact visualization
- Direct communication between donors and recipients

**Social Impact:** Reducing food waste while simultaneously addressing hunger in the local community.

## 1.2 Problem Statement

Currently, the process of food donation is inefficient and relies on:

### Manual Processes:
1. **Lack of Coordination**
   - Hotels throw away excess food because they don't know who needs it.
   - Orphanages struggle to find food donors on short notice.
   - No centralized database of available food.

2. **Time Constraints**
   - Food is perishable; finding a recipient manually takes too long.
   - Phone calls and personal contacts are slow and unreliable.

3. **Logistical Challenges**
   - No standard way to communicate quantity, type, and expiry time of food.
   - Miscommunication leads to wasted trips or spoiled food.

## 1.3 Limitations of Existing Methods

1. **Information Gap**
   - Donors and recipients are disconnected.
   - No real-time visibility of needs vs. availability.

2. **Wastage**
   - Significant amounts of edible food end up in landfills due to lack of timely connection.

3. **Inefficiency**
   - Manual coordination consumes valuable time for both hotel staff and orphanage caretakers.

## 1.4 The Proposed System - Advantages and Features

### System Overview

**FoodConnect** is a responsive web application that allows donors to post food availability and recipients to claim it instantly.

### Key Advantages

#### For Hotels (Donors)
- **Easy Posting:** Quickly list food items, quantity, and best-before time.
- **Waste Reduction:** Contribute to sustainability goals by reducing food waste.
- **Community Impact:** Direct help to those in need.
- **History Tracking:** View past donations and impact.

#### For Orphanages (Recipients)
- **Real-time Access:** See available food donations instantly.
- **Quick Claiming:** Secure food with a single click.
- **Reliable Source:** Verified donors ensure food safety.
- **Contact Details:** Direct access to donor location and phone number.

### Core Features

#### 1. Authentication
- Secure login and registration for Hotels and Orphanages.
- Role-based redirection to specific dashboards.
- Session management using Local Storage.

#### 2. Hotel Dashboard
- **Post Donation:** Form to enter food details (Items, Quantity, Validity).
- **My Donations:** List of active and claimed donations.
- **Status Tracking:** See when a donation has been claimed.

#### 3. Orphanage Dashboard
- **Available Donations:** Live feed of food posted by hotels.
- **Claim Functionality:** Button to claim a specific donation.
- **Donation Details:** View address, contact person, and food specifics.

---

# CHAPTER 2: SYSTEM ANALYSIS AND DESIGN

## 2.1 Context Diagram

```
                          ┌─────────────────────────┐
                          │      FOODCONNECT        │
                          │    (Web Platform)       │
                          └─────────────────────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
            ┌────────┐          ┌────────┐         ┌──────────┐
            │ HOTEL  │          │ORPHANAGE│        │  ADMIN   │
            └────────┘          └────────┘         └──────────┘
                │                   │                   │
       (Post Food,             (View Food,          (Monitor
        Manage Donations)       Claim Food)          Activity)
```

## 2.2 Data Flow Diagrams (DFD)

### Level 0 DFD (System Context)

```
      ┌─────────┐                                     ┌──────────────┐
      │  HOTEL  │◄───────────────────────────────────►│              │
      └─────────┘                                     │              │
                                                      │ FOODCONNECT  │
      ┌─────────┐                                     │    SYSTEM    │
      │ORPHANAGE│◄───────────────────────────────────►│              │
      └─────────┘                                     └──────┬───────┘
                                                             │
                                                             ▼
                                                    ┌──────────────────┐
                                                    │  LOCAL STORAGE   │
                                                    │  (Browser DB)    │
                                                    └──────────────────┘
```

## 2.3 Database Design - Local Storage Schema

Since this is a prototype, we use the browser's `localStorage` to persist data. The data is stored as JSON strings.

### Key: `users`
Stores all registered users (both hotels and orphanages).
```json
[
  {
    "id": 1715432100,
    "name": "Grand Hotel",
    "username": "hotel1",
    "password": "password123",
    "type": "hotel",
    "contact": "9876543210",
    "address": "123 Main St, Chennai",
    "photo": "url_to_photo"
  },
  {
    "id": 1715432101,
    "name": "Sunshine Orphanage",
    "username": "orphanage1",
    "password": "password123",
    "type": "orphanage",
    "contact": "9123456780",
    "address": "456 North St, Chennai",
    "document": "url_to_doc"
  }
]
```

### Key: `donations`
Stores all food donation posts.
```json
[
  {
    "id": 1715432200,
    "hotelId": 1715432100,
    "hotelName": "Grand Hotel",
    "foodItems": "Rice, Dal, Curry",
    "quantity": "50 servings",
    "bestBefore": "2024-05-12T20:00",
    "status": "available", // or "claimed"
    "claimedBy": null,
    "address": "123 Main St, Chennai",
    "contact": "9876543210"
  }
]
```

### Key: `currentUser`
Stores the currently logged-in user session.
```json
{
  "id": 1715432100,
  "username": "hotel1",
  "type": "hotel"
}
```

## 2.4 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                                  │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Web Browser (Chrome, Firefox, Edge)                        │   │
│  │  HTML5, CSS3, JavaScript (ES6)                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────────┘
                             │ User Interactions
                             ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                                 │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  app.js (Donation Logic) | auth.js (Login/Signup Logic)     │   │
│  │  DOM Manipulation & Event Handling                          │   │
│  └──────────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────────┘
                             │ JSON Data
                             ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Browser Local Storage API                                  │   │
│  │  (Key-Value Store)                                          │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

# CHAPTER 3: IMPLEMENTATION

## 3.1 Tools and Technologies

### Frontend Stack
| Component           | Technology      | Purpose                                |
| :------------------ | :-------------- | :------------------------------------- |
| **Structure**       | HTML5           | Semantic page structure                |
| **Styling**         | CSS3            | Custom styling, Flexbox, Grid          |
| **Scripting**       | JavaScript (ES6)| Dynamic logic and interaction          |
| **Icons**           | Font Awesome    | UI icons for visual enhancement        |
| **Fonts**           | Google Fonts    | Typography (Segoe UI, etc.)            |

### Data Storage
| Component          | Technology              | Purpose                               |
| :----------------- | :---------------------- | :------------------------------------ |
| **Database**       | Local Storage API       | Client-side data persistence          |

## 3.2 Program List and Sample Code

### Sample 1: User Authentication (auth.js)

```javascript
const Auth = {
    // Register a new user
    register: (userData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if username exists
        if (users.find(u => u.username === userData.username)) {
            alert('Username already exists!');
            return false;
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    },

    // Login user
    login: (username, password) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        return null;
    }
};
```

### Sample 2: Donation Management (app.js)

```javascript
const App = {
    // Add a new donation
    addDonation: (donationData) => {
        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        donations.push(donationData);
        localStorage.setItem('donations', JSON.stringify(donations));
    },

    // Get available donations
    getAvailableDonations: () => {
        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        return donations.filter(d => d.status === 'available');
    },

    // Claim a donation
    claimDonation: (donationId, orphanageId) => {
        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        const index = donations.findIndex(d => d.id === donationId);
        
        if (index !== -1) {
            donations[index].status = 'claimed';
            donations[index].claimedBy = orphanageId;
            localStorage.setItem('donations', JSON.stringify(donations));
            return true;
        }
        return false;
    }
};
```

## 3.3 Folder Structure

```
/food-connect
├── index.html              # Landing Page
├── login.html              # Login Page
├── signup-hotel.html       # Hotel Registration
├── signup-orphanage.html   # Orphanage Registration
├── hotel-dashboard.html    # Hotel User Interface
├── orphanage-dashboard.html# Orphanage User Interface
├── css/
│   └── style.css           # Global Stylesheet
├── js/
│   ├── auth.js             # Authentication Logic
│   └── app.js              # Application Logic
└── images/                 # Project Assets
```

---

# CHAPTER 4: OUTPUTS

## 4.1 Screen Layouts

1.  **Landing Page:** Features a Hero section with a "Call to Action", Impact Statistics, "How it Works", and Contact Information.
2.  **Login/Signup:** Clean forms for user onboarding.
3.  **Hotel Dashboard:** Simple form to post food and a list of history.
4.  **Orphanage Dashboard:** Card-based grid view of available food with "Claim" buttons.

## 4.2 User Flows

**Donation Flow:**
1. Hotel logs in.
2. Clicks "Post Donation".
3. Fills in food details.
4. Donation appears in the global list.

**Claim Flow:**
1. Orphanage logs in.
2. Views "Available Donations".
3. Clicks "Claim" on a specific item.
4. Status updates to "Claimed".
5. Contact details are revealed for pickup coordination.

---

# CHAPTER 5: TESTING AND DEPLOYMENT

## 5.1 Testing Strategy

-   **Unit Testing:** Verified individual functions in `auth.js` and `app.js` for correctness.
-   **Integration Testing:** Tested the flow of data between the Hotel Dashboard and Orphanage Dashboard via Local Storage.
-   **Responsive Testing:** Verified layout on Desktop, Tablet, and Mobile screen sizes.
-   **User Acceptance Testing:** Validated that the "Claim" button correctly updates status and prevents double-claiming.

## 5.2 Deployment Strategy

Since this is a client-side application:
1.  The project can be hosted on any static file server (e.g., GitHub Pages, Netlify, Vercel).
2.  No backend server configuration is required.
3.  Data is local to the user's browser (for this prototype version).

---

# CHAPTER 6: CONCLUSION AND FUTURE ENHANCEMENTS

**Conclusion:**
FoodConnect successfully demonstrates how technology can be used to solve real-world problems like food waste and hunger. The platform provides a simple, efficient way for donors and recipients to connect.

**Future Enhancements:**
1.  **Backend Integration:** Move from Local Storage to a cloud database (Firebase/MongoDB) for centralized data.
2.  **Map Integration:** Show donor locations on a map for easier logistics.
3.  **Push Notifications:** Alert orphanages instantly when food is posted.
4.  **Volunteer Network:** Add a "Volunteer" role to help transport food.
5.  **Mobile App:** Develop a native mobile application for easier access.

---

# CHAPTER 7: REFERENCES

1.  No Food Waste Chennai - https://nofoodwastechennai.ngo/
2.  MDN Web Docs (HTML/CSS/JS) - https://developer.mozilla.org/
3.  Bootstrap Documentation - https://getbootstrap.com/
4.  Font Awesome Icons - https://fontawesome.com/
