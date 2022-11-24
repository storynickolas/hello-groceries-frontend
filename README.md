# Mealkit Recipes

![Sample Page](https://github.com/storynickolas/mealkit-recipes-frontend/blob/main/Sample%20Images/Meal%20Kit%20Sample.png)

This app has a basic inventory of recipes borrowed from the meal kit delivery service Hello Fresh's website.  On page load a list of recipes can be seen on the lefthand side of the page.  Clicking on any of these recipe names from the list will bring up that particular recipe to the center of the screen for more details.  Additionally, the right hand portion of the page is dedicated to a list of ingredients found in that particular recipe.  At the top of the page below the title is a sequence of buttons that offer different ways to sort the recipe list.  Shortest sorts the recipes by shortest cook time and Longest does the opposite.  Chicken and Veggie options sort the recipes for that particular protein.  The last button is for adding an additional recipe.  Clicking this button takes you to a separate form that can be filled out with an additional recipe to be added to the list, the list is automatically updated on add.

The selected recipe appearing in the middle of the page has the ability to be removed from the list as well as edited if a substitution in protein is desired or the cook time takes longer than what is stated for example.  The ingredients list also features an additions form, but unlike with recipes ingredients cannot be edited or removed after addition.

## Getting Started

Clone the repo in your terminal by clicking the green clone or download button at the top right and copyin the url

```bash
git clone URL
```

replacing URL with the url you copied

This will copy all the files from this repo down to your computer

In your terminal, cd into the directory you just created

```bash
npm install 
```
to install all dependencies

### Database

For this project a backend database was created and will need to be run alongside this react application

You can consult the repository with direction on how to get the database up and running here: [mealkit-recipes-database](https://github.com/storynickolas/Sinatra-react-project-mealkit-recipes) 

Finally,

```bash
npm run start 
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


## Additional Resources

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## License

MIT license @ [MIT](https://github.com/facebook/react/blob/main/LICENSE).

## Hello Fresh

Images and recipes are from Hello Fresh, visit their website for more information and additional recipes: [Hello Fresh](https://www.hellofresh.com/)