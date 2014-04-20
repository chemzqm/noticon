
build: components index.js noticon.css
	@component build --dev

components:
	@component install --dev

doc:
	@component build
	@rm -fr .gh-pages
	@mkdir .gh-pages
	@mv build .gh-pages/
	@cp example.html .gh-pages/index.html
	@ghp-import .gh-pages -n -p
	@rm -fr .gh-pages

clean:
	rm -fr build components template.js

test:
	serve .

.PHONY: clean test
