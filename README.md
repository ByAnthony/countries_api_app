# Lab: Make an app with the Countries API

## Learning Objectives

- Be able to make requests and displaying the data on the page
- Understand how to traverse the data structure received from an API
- Be able to implement reacts's hooks useState and useEffect

Your task is to build an app that uses [this API](https://restcountries.com/v2/all) to display information on the countries of the world :earth_africa:

## MVP

Your app should be able to:

- Fetch all the countries from the api provided
- Display a list of country names.
- Add a click event to each list item which should then render more detail about that country in a seperate component.
- Add the countries flag and languages spoken in the country to the country detail component.

## Extensions

- Instead of rendering a list, populate a dropdown with all of the countries names.
- Add a change event to the select that renders information about the selected country.
- Show the total population of the world

## Advanced Extensions

- Show a selected countries neighbouring countries
- Show the total population of all neighbouring countries of the selected country
- Add a search bar to the page so that when a user enters the countries name the country detail component renders. Try to achieve this without the user having to enter the whole name.

## Suggestions

Planning
Draw a diagram of your files, detailing:

- the state, props, components and methods for each component.
- the flow of data throughout the application.

Expected Components for MVP

- CountryContainer
- CountryList (Have the country list rendering a ul with each country showing on the page as an li, no need for a CountryListItem component)
- CountryDetail

Expected Components for Extensions

- CountryContainer
- CountrySelect
- CountryDetail
