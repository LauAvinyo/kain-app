# Kain App

## Random stuff

### To set up the husky and things

yarn create react-app kain-app --template typescript
cd kain-app
git remote add origin git@github.com:LauAvinyo/kain-frontend.git
git branch -M main
git add .
git commit -m "Initial Commit"
git push -u origin main
yarn add --dev prettier
yarn add eslint --dev
yarn eslint --init
yarn add --dev eslint-plugin-prettier
yarn add husky --dev
yarn add lint-staged --dev
npx husky-init && yarn install

###
