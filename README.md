# alexa_million
A package to parse the biggest websites for a specific country.

## Installation
```bash
git pull http://github.com/timothyverhaeghe/alexa_million # Clone the repo
sudo npm install # Install all dependencies
```

## How to use it
```bash
node parse --country {COUNTRY} --tld {TLD}
```

## Examples
```bash
node parse --country belgium --tld .be
node parse --country france --tld .fr
```

## Todo
- Remove all the files in the file before starting "appending" the file to "refresh" the list

## Copyright
Timothy Verhaeghe
