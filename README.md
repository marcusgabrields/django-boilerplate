# Django Boilerplate
A simple boilerplate to quickstart a new Django Project

## Setup

- [Install Poetry](https://poetry.eustace.io/docs/#installation), for dependency management.
- Install Django with `pip install django`, to have the `django-admin` command avaliable.
- Go to the directory you want to start your project in.
- Start your project using `django-admin startproject project_name --extension py,json --name pyproject.toml  --template=https://github.com/marcusgabrields/django-boilerplate/archive/realise.zip`
- Navigate to the project's directory.
- Configure `pyproject.toml` file with your project's particulars.
- run `poetry check` for check for any error.
- run `poetry install` to install dependencies.
- run `make migrations` to make migrations of users.
- run `make migrate` to apply the migrations.
- run `make run run` to start the backend server.
- open another terminal tab.
- run `npm install` to install the dependencies. 
- run `npm start` to start the frontend server.
