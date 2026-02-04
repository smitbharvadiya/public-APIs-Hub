# API.Nexus 
A high-performance, developer-centric directory for public APIs. Built with a "Cyber-Matrix" aesthetic, this platform allows developers to discover, filter, and integrate verified endpoints in seconds.

## Dataset & Approach

### Dataset Used and Source

This project uses a curated public dataset sourced from the **Public APIs directory**, a well-known open-source collection of publicly available APIs.

- **Dataset Name:** Public APIs  
- **Source URL:** https://github.com/public-apis/public-apis  
- **Dataset Type:** Open-source, community-maintained  
- **License:** MIT License  

The dataset includes APIs across multiple domains such as finance, weather, entertainment, health, and more, along with metadata like authentication requirements, HTTPS support, and CORS availability.

---

### How the Dataset Was Generated

The original dataset is maintained as a Markdown table. To make it suitable for a production-ready web application:

1. The Markdown table was parsed and converted into structured JSON.
2. Only relevant fields were extracted and normalized:
   - `name`
   - `description`
   - `category`
   - `auth`
   - `https`
   - `cors`
   - `url`
3. Categories were indexed separately to support filtering, sorting, and category-based routing.
4. The final dataset is stored locally as static JSON files and loaded at build time.

This approach avoids runtime API dependencies, improves performance, and allows full static generation for better SEO.

---

### Tech Stack and Design Inspiration

#### Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Layer:** Static JSON
- **Deployment:** Vercel

#### Design Inspiration

The UI is inspired by modern developer tools such as Stripe, Linear, and Vercel.  
The design focuses on a clean, high-contrast layout with subtle terminal-inspired visuals to create a developer-first experience.

---

### AI Prompt Examples Used

AI tools were used selectively to accelerate development and reduce repetitive work, while all architectural and implementation decisions were made manually.

**Example prompts used during development:**

1.  
> Convert this Public APIs Markdown table into a clean JSON array with fields: name, category, description, auth, https, and cors.

2.  
> Data Logic: "Write a useMemo hook in Next.js to filter a list of API objects based on a search query and a category slug, then sort them alphabetically A-Z."

3.  
> "Help design a developer tool with a dark, terminal-inspired UI. The vibe should be 'Dark-Industrial'—minimalist but high-tech. Avoid generic bright colors; use a deep background and a sharp for interactive elements."

All AI-generated outputs were reviewed, refined, and integrated manually.

---

### What I Would Improve With 2 More Days

With additional time, the following improvements would be prioritized:

1. **Live Health Checks**
   - Integrate a background cron job using a service like Upstash to ping every API once an hour, adding a "Live/Dead" status indicator to every card.

2. **Code Snippet Generator**
    - A modal that appears when clicking an API, providing instant code templates for fetch, axios, and python-requests specific to that endpoint.

3. **User Personalization**  
   - Ability to bookmark and organize favorite APIs  
   - Custom collections for different use cases  
---

