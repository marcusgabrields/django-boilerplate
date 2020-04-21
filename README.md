# Django Boilerplate
A simple boilerplate to quickstart a new Django/React project.

## Requirements
- [Poetry](https://python-poetry.org/)
- [Django](https://www.djangoproject.com/)
- [Node](https://nodejs.org/en/)
- npm or [Yarn](https://yarnpkg.com/)

## Setup
To setup the project you need to have Poetry installed.

#### Backend
- Go to the directory you want to start your project in.
- Start your project using `django-admin startproject <project_name> --extension py,json --name pyproject.toml  --template=https://github.com/marcusgabrields/django-boilerplate/archive/realise.zip`
- Navigate to the project's directory.
- install dependencies:
    - configure `pyproject.toml` file with your project's particulars.
    - run `poetry check` for check for any error.
    - run `poetry install` to install dependencies.
- start backend server:
    - run `make migrations` to make migrations of users.
    - run `make migrate` to apply the migrations.
    - run `make run` to start the backend server.

#### Frontend
- open another terminal tab.
- install dependencies:
    - run `npm install` if using npm.
    - run `yarn` if using Yarn.
- start fronend server:
    - run `npm run dev` if using npm.
    - run `yarn dev` if using Yarn.
- build the project:
    - run `npm run prod` if using npm.
    - run `yarn prod` if using Yarn.

## Next steps
- CI/CD pipelines
- Deploy in the main services (AWS, Google, Heroku, DigitalOcean)
- Static check (Linters)
