build: install-deps npm-install tailwind

install-deps:
	pip install -r requirements.txt -U

npm-install:
	npm i

compile-ts:
	tsc ./web/script.ts

tailwind:
	npx tailwindcss -i ./web/input.css -o ./web/output.css

tailwind-watch:
	npx tailwindcss -i ./web/input.css -o ./web/output.css --watch

run:
	uvicorn main:app --reload --port 8083

clean:
	rm ./web/output.css
	rm ./web/script.js