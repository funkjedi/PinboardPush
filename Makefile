NAME    := pinboard-push
VERSION := $(shell sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' manifest.json)
DIST    := dist
ZIP     := $(DIST)/$(NAME)-$(VERSION).zip

SOURCES := manifest.json background.js options.html options.js $(wildcard img/*.png)

.PHONY: all clean check

all: $(ZIP)

$(ZIP): $(SOURCES)
	@mkdir -p $(DIST)
	@rm -f $@
	zip -r -X $@ $(SOURCES) -x '*.DS_Store'
	@echo "built $@"

check:
	@python3 -m json.tool manifest.json > /dev/null && echo "manifest.json: valid JSON"
	@node --check background.js && echo "background.js: ok"
	@node -e "new Function(require('fs').readFileSync('options.js','utf8'))" && echo "options.js: ok"

clean:
	rm -rf $(DIST)
