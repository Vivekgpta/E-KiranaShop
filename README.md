# 🛒 E-Kirana Shop — Full-Stack E-Commerce Project

**E-Kirana Shop** is a Blinkit-inspired online grocery & essentials ordering platform built for a local village shop.  
Sellers list products by buying a **monthly subscription** (no commission per product); sellers handle delivery directly to customers.

This documentation follows a standard Software Project write-up (project synopsis, requirements, diagrams, implementation & testing) inspired by common academic project formats. (Format reference: GeeksforGeeks). :contentReference[oaicite:1]{index=1}

---

## 📄 Table of Contents
1. Project Overview  
2. Team & Roles  
3. Topic Selection & Objectives  
4. Project Synopsis  
5. Functional & Non-Functional Requirements  
6. System Architecture & Tech Stack  
7. ER Diagram, Use Case & Data Flow (diagrams)  
8. Flowchart: Order Process  
9. API Overview (sample endpoints)  
10. Database Schema (tables)  
11. Installation & Setup (Frontend + Backend)  
12. Testing Strategy  
13. Deployment & DevOps (notes)  
14. Future Scope & Enhancements  
15. References

---

## 1. Project Overview
**Problem:** Small shopkeepers cannot profitably sell online due to high per-sale commissions and loss of delivery control.

**Solution:** A subscription-based platform where sellers pay a monthly fee to list products (no commission per sale). Sellers maintain direct delivery responsibility, reducing tampering and third-party issues.

**Unique Selling Points**
- Subscription-only revenue model (no per-item commission)  
- Seller handled delivery (no third party)  
- Local, low-overhead digital storefront for village sellers

---

## 2. Team & Roles
- Frontend Developer — React UI, responsive design  
- Backend Developer — Spring Boot REST APIs, security (JWT)  
- Database Engineer — MySQL schema design  
- Tester — API & UI testing (Postman / Selenium)  
- DevOps — Docker + deployment scripts (optional)

(If solo, list yourself and highlight which parts you implemented.)

---

## 3. Topic Selection & Objectives
**Topic:** E-Kirana Shop — Subscription based local e-commerce platform  
**Objectives:**  
- Provide an easy listing & selling platform for local sellers  
- Remove per-sale commissions (subscription model)  
- Let sellers control deliveries and product handling  
- Build a robust, well-documented full-stack application

---

## 4. Project Synopsis
Short overview, problem statement, proposed solution, and the business model (subscription + seller delivery). The synopsis also lists the methodology used (Agile / Iterative), required technologies, and expected outcomes.

---

## 5. Requirements

### Functional Requirements
- User registration & login (customer, seller, admin)  
- Seller subscription purchase & management  
- Product CRUD (create/read/update/delete) by sellers/admin  
- Product browsing, search & filters for customers  
- Cart management & checkout (COD or gateway)  
- Order placement, seller confirmation, and delivery tracking  
- Admin tools: approve sellers, manage categories, monitor orders

### Non-Functional
- Security: JWT authentication, input validation  
- Performance: paging for product lists, optimized DB queries  
- Scalability: stateless backend endpoints friendly to horizontal scaling  
- Usability: mobile-first responsive UI (low bandwidth friendly)

---

## 6. System Architecture & Tech Stack

### Frontend
- React.js (Hooks), React Router  
- Axios for REST calls  
- Tailwind CSS (or Bootstrap) for UI  
- State: Context API or Redux

### Backend
- Spring Boot (REST APIs)  
- Spring Security + JWT for auth  
- Spring Data JPA (Hibernate)

### Database
- MySQL (or PostgreSQL)  
- Proper relational schema with foreign keys

### Optional / DevOps
- Docker (Dockerfile + docker-compose)  
- CI: GitHub Actions (build/tests)  
- Deployment: AWS / Heroku / Render

---

## 7. ER Diagram, Use Case & Data Flow
**(Place diagrams in `docs/images/` and reference below.)**

- ER Diagram: `docs/images/er-diagram.png`  
- Use Case Diagram: `docs/images/usecase-diagram.png`  
- Data Flow Diagram (DFD): `docs/images/dfd.png`

> **Note:** I included a Use Case and Flow diagrams (see below). Download the provided images in this repo's `/docs/images` and link them here.

---

## 8. Flowchart — Order Process
**Image:** `docs/images/flowchart-order-process.png`

This flowchart shows the ordered steps from customer visiting site → registration/login → browsing → add to cart → place order → payment (if any) → order sent to seller → seller confirms → seller delivers → order completed.

**Mermaid (editable)**
```mermaid
flowchart TD
  A[Customer Opens Website] --> B[Register / Login]
  B --> C[Browse / Search Products]
  C --> D[Add to Cart]
  D --> E[Place Order]
  E --> F[Payment (if applicable)]
  F --> G[Order Sent to Seller]
  G --> H[Seller Confirms Order]
  H --> I[Seller Delivers Product]
  I --> J[Customer Receives Order]
  J --> K[Order Completed]
```





This is ME :) Vivek Gupta.

Thankyou.....
