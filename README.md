# **Flight Scheduler CRUD App ✈️**

## **📌 Overview**
The **Flight Scheduler** is a web application that allows users to manage flight schedules using a **Django REST API (backend)** and **React.js (frontend)**.

## **🛠️ Tech Stack**
- **Frontend:** React.js, React Router  
- **Backend:** Django, Django REST Framework  
- **Database:** PostgreSQL (or SQLite for development)  

## **🚀 Features**
✅ View all scheduled flights  
✅ Add a new flight  
✅ Update flight details  
✅ Delete flights  

## **📂 Project Structure**
backend/
│── backend/           # Django project settings
│    ├── __init__.py    
│    ├── asgi.py        
│    ├── settings.py    
│    ├── urls.py        
│    ├── wsgi.py        
│
│── flights/           # Django app for flight scheduling
│    ├── migrations/    
│    ├── __init__.py    
│    ├── admin.py       
│    ├── apps.py        
│    ├── models.py      
│    ├── serializers.py 
│    ├── views.py       
│    ├── urls.py        
│
│── manage.py          # Django management script
│── db.sqlite3         # Database (if using SQLite)

