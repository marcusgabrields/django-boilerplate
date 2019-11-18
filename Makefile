run:
	poetry run python backend/manage.py runserver
migrations:
	poetry run python backend/manage.py makemigrations
migrate:
	poetry run python backend/manage.py migrate
