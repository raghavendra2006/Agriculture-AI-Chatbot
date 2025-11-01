# AgroBot-Universal-AI-based-Agricultural-Assistant-Project
🌾 AI agricultural chatbot · image analysis · multilingual · OpenAI · Flask
---

## 📋 Description

AgroBot-Universal is a smart web-based assistant for farmers and agriculture professionals.
- Instantly answers questions about crops, pests, soil, irrigation, fertilizers in multiple languages
- Reads queries in English, Hindi, Tamil (easily add more languages!)
- Real-time plant/leaf image analysis for health/stress/disease detection
- Works offline (knowledge base) or online (automatic OpenAI fallback)
- User login, admin dashboard, CSV/JSON KB import for easy updates

---

<img width="1889" height="975" alt="Agro-Output" src="https://github.com/user-attachments/assets/2f54c27c-2012-426b-9235-9098dd3faf9f" />


## 🚀 Features

- **Multilingual Chat**: Interact in regional languages
- **Image Analysis**: Upload plant/leaf images to diagnose problems instantly
- **Professional KB**: Expert answers for farming, pests, diseases
- **OpenAI Fallback**: AI model answers if KB doesn't have it
- **Admin Panel**: Manage users, chats, and KB entries

---

## 🛠️ Quick Start

git clone https://github.com/<your-username>/AgroBot-Universal-AI-based-Agricultural-Assistant.git
cd AgroBot-Universal-AI-based-Agricultural-Assistant
python -m venv venv
source venv/bin/activate # For Windows: venv\Scripts\activate
pip install -r requirements.txt

(Optional) Set your OpenAI API key
export OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx

python app.py



Visit: [http://127.0.0.1:5000](http://127.0.0.1:5000)

Default admin:
- Email: `admin@agrobot.com`
- Password: `Admin@123`

---
<img width="425" height="519" alt="Admin-Profile" src="https://github.com/user-attachments/assets/a1c2a8d4-a4e8-41a3-835e-4aa718b899d0" /> 

<img width="1894" height="959" alt="Admin-Dashboard" src="https://github.com/user-attachments/assets/20a455dd-f546-48f9-a24f-70e3cd8661cf" />

---
<img width="1903" height="963" alt="Admin-Login" src="https://github.com/user-attachments/assets/bbed3d3a-e848-402e-b838-0bc63a7a517e" />


## 🖼️ How To Use Image Analysis

1. Go to the main app page
2. Use "Analyze plant/leaf image" upload box
3. Select and analyze your crop/leaf image
4. Get diagnosis and advice instantly

---

## 🗂️ Project Structure

- `app.py`: Flask backend/server
- `chatbot_model.py`: Knowledge base + AI logic
- `database.py`: SQLAlchemy models
- `templates/`: HTML templates
- `static/script.js`: JS code (chat, image analysis)
- `requirements.txt`: Python dependencies

---




<img width="1907" height="968" alt="Chat-History" src="https://github.com/user-attachments/assets/66e738d7-de83-42f0-b851-6080832a0055" />

## ⚠️ Note

- Never commit API keys, DB, or sensitive files
- See `.gitignore` before pushing

---

## 👩‍💻 Made By

**Aarti Patel**  
Contact: [aartipatel0427@gmail.com](mailto:aartipatel0427@gmail.com)

**Mentor:**  
[springboardmentor056@gmail.com](mailto:springboardmentor056@gmail.com)


