# 🤝 PeerBoost
<p align="center">
<img src="PeerBoost.png" alt="Logo PeerBoost" width="200"/>
</p>
PeerBoost is a smart support platform designed for Holberton students.
Its goal is simple: reduce time wasted when stuck on a project, facilitate connections with classmates who have already completed the project, and reward helpers through a badge and points system (connected to Jolt).

## 🛑 Problems
At Holberton, learning is project-based.
But sometimes:

* Too much time is wasted looking for people to help.
* Helpers aren't valued for their investment.

**The result:** frustration, discouragement, wasted time -> less well-being and efficiency.

## 🚀 Proposed solution

**PeerBoost:** a digital mutual aid tool that allows you to:

	1.Select your project and post a problem.

	2.Automatically obtain a list of peers who have already validated this project.

	3.Contact the helper directly via Holberton Slack.

	4.Validate the help received → the helper earns a badge and Jolt points.

	5.Go to the current project on the intranet Holberton

	6.Go to the page jolt page of holbies

## 🔑 Key Features

* "I'm stuck" form (project + description).

* Simple matching algorithm (validated project database).

* "Contact via Slack" button.

* Awarding of badges and Jolt points (API simulation).

* Dashboard with leaderboard of the best helpers.

## 🛠️ Technology Stack

* Frontend: React + TailwindCSS

* Backend: Node.js + Express

* Database: SQLite (or Firebase for real-time sync)

* External Integrations:

	* Slack (redirect via slack://user?... links)

	* Jolt

	* Holberton intranet

## 📂 Project architecture
```
holberton-help/
│
├─ frontend/ 		# React App
│ ├─ src/
│ │ ├─ components/ 	# Modular UI
│ │ ├─ pages/ 		# Form, Dashboard
│ │ ├─ services/ 	# API calls to backend
│ │ └─ App.jsx
│
├─ backend/ 		#Express API
│ ├─ routes/ 		# endpoints REST
│ ├─ models/ 		# ORM/DB
│ ├─ controllers/ 	# business logic
│ └─ app.js
│
├─ database/ 		# SQLite or Firebase config
├─ README.md
└─ .gitignore
```
## 🗄️ Data Schema

**Table** users:
| field | type | description |
| ------------ | ---- | ------------------ |
| id | INT | unique identifier |
| name | TEXT | student name |
| slack\_id | TEXT | Slack identifier |
| validated | JSON | validated projects |
| badges | INT | number of badges |
| jolt\_points | INT | points accumulated |
| jolt\_url | TEXT | direct URL to Jolt profile |
| slack\_url | TEXT | direct URL to Slack profile |

**Table** problems:
| field | type | description |
| ----------- | ---- | ---------------------- |
| id | INT | problem identifier |
| user\_id | INT | blocked student (FK) |
| project | TEXT | project name |
| description | TEXT | block description |
| status | TEXT | open, resolved |

**Table** badges:
| field | type | description |
| ----------- | ---- | ------------------------ |
| id | INT | badge identifier |
| helper\_id | INT | student who helped (FK) |
| problem\_id | INT | related problem (FK) |
| points | INT | Jolt point value |

## 🔗 API REST (Backend)

* POST /problems → problem creation
Input:
```json
{"user_id": 1, "project": "Simple Shell", "description": "Segfault on exec"}
```
Output:
```json
{"problem_id": 42, "status": "open"}
```

* GET /helpers/:project → list helpers for a project
Output:
```json
[{"user_id": 2, "name": "Wilfried", "slack_id": 22}]
```

* POST /badges → badge and points allocation
Input:
```json
{"helper_id": 3, "problem_id": 33}
```
Output:
```json
{"badge_id": 4, "points_awarded": 7}
```

* GET /leaderboard → ranking helpers
Output:
```json
[{"name": "Lentz", "badges": 3, "jolt_points": 15}]
```

## 🔄 Workflow example

	1.Student A is stuck on "Simple Shell".

	2.He fills out the form → problem logged in the database.

	3.API /helpers/Simple Shell → suggests students B & C.

	4.Student A clicks "Contact via Slack" → Slack opens.

	5.Once helped, he validates → Student B receives +1 badge and +5 Jolt points.

	6.Dashboard updated automatically.

## 🌐 Rapid deployment

* Backend: Render

* Frontend: Vercel

* Database: SQLite

## 🚧 Limits & developments

* Hackathon: Simple matching + Jolt points simulation.

* Final version:

* Authentication via Slack OAuth.

* Real connection to the Jolt API.

* Advanced matching (availability, help history, response time).

## 👥 Authors

- Wilfried Panol Guele Tchomeugne

- Lentz Gonzalez

- Georges Menheim

**Github Link**: [PeerBoost Repository](https://github.com/wlfrd18/Hack_the_campus)
