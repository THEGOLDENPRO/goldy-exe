build:
	echo "No build UwU"

run:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

clean:
	rm ./src/output.css