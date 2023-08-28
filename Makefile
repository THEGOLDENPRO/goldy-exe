build: npm-install tailwind compile-ts

npm-install:
	npm i

compile-ts:
	tsc ./src/script.ts

tailwind:
	npx tailwindcss -i ./src/input.css -o ./src/output.css

tailwind-watch:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

run:
	python scripts/run_dev_server.py

clean:
	rm ./src/output.css
	rm ./src/script.js