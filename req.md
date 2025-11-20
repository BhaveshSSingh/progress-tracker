

📌 Minimal PRD — “Bhavesh Job Prep Tracker”

1. Overview

A personal webapp for Bhavesh to track everything required to get a job: learning hours, questions solved, revisions, projects, job applications, and weekly check-ins.
No multi-user functionality.
One login only.

Stack
	•	Frontend: Next.js (App Router)
	•	Backend: Next.js API routes
	•	Database: MongoDB
	•	Auth: Hardcoded username/password (“bhavesh”)

⸻

2. Core Features (Only Essentials)

A. Authentication
	•	Simple login page
	•	Hardcoded credentials (username: bhavesh, password stored in .env)
	•	Session stored in JWT or NextAuth simple credentials provider

⸻

B. Daily Tracking

1. Hours Spent
	•	Input field: “hours today”
	•	Auto-timestamp
	•	Stored as: { date, hours }

2. Topics / Things Learned
	•	List of items learned
	•	Quick add input
	•	Stored as: { date, items: [] }

3. Questions Solved
	•	Number field
	•	Optional tags (DSA, system design, frontend, etc.)

4. Questions Revisited
	•	Simple number field

5. Revision Done
	•	Checkbox or notes
	•	Stored as: { date, note }

6. Projects
	•	List of ongoing projects
	•	Track:
	•	hours spent
	•	tasks done
	•	status

⸻

C. Job Applications Tracking
	•	Company name
	•	Role
	•	Date applied
	•	Status: Applied → Online Test → Interview → Offer → Rejected
	•	Notes

⸻

D. Weekly Check-In

Track weekly status:
	•	Interview attempts
	•	Learnings summary
	•	Weak points
	•	Plan for next week

Stored as { weekNumber, summary, interviews, progress }

⸻

E. Dashboard

Minimal dashboard showing:
	•	Total hours this week
	•	Questions solved this week
	•	Revisions done
	•	Projects progress
	•	Applications status (count in each stage)
	•	Graphs using simple chart library (optional)

⸻

F. AI Assistant (Optional MVP)
	•	Simple text box to ask for weekly plan
	•	Uses OpenAI API to generate:
	•	daily plan
	•	weak-point analysis
	•	improvements

⸻

3. Database Schema (Minimal)

Collections

users
  - username
  - passwordHash

dailyMetrics
  - date
  - hours
  - topicsLearned[]
  - questionsSolved
  - questionsRevisited
  - revisionNotes

projects
  - name
  - tasks[]
  - hours
  - status

applications
  - company
  - role
  - dateApplied
  - status
  - notes

weeklyCheckins
  - weekNumber
  - summary
  - interviews
  - improvements


⸻

4. Non-Goals

❌ Multi-user system
❌ Payments or subscription
❌ Public profiles
❌ Advanced AI interview simulation
❌ Social or community features

⸻

5. Feature Priorities (MVP Only)

MVP
	•	Login (bhavesh)
	•	Daily metrics form
	•	Applications tracker
	•	Projects list
	•	Weekly check-in
	•	Dashboard

Phase 2
	•	AI weekly report
	•	AI daily plan
	•	Charts

⸻

6. Pages Structure

/login
/dashboard
/daily
/applications
/projects
/weekly
/ai (optional)




