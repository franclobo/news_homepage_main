# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

| Desktop version | Mobile version |
|---|---|
| ![image](https://github.com/franclobo/news_homepage_main/assets/58642949/53d62d60-7693-4a3b-a841-cb08bd5a2d0f) | ![image](https://github.com/franclobo/news_homepage_main/assets/58642949/ff28761b-dbe5-4fd0-affe-ddfbbe115444) |



### Links

- Solution URL: [News Homepage Main](https://github.com/franclobo/news_homepage_main)
- Live Site URL: [News Homepage](https://news-homepage-20230620.netlify.app/)

## My process

1. Initialize the project as a public repository on [GitHub](https://github.com/). Creating a repo to share the code with the community.
2. Configure the repository to publish the code to a web address.
3. Look through the designs to start planning out how to tackle the project.
4. Before adding any styles, structure the content with HTML.
5. Write out the base styles for the project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down.

### Built with

- Semantic HTML5 markup
- SASS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Bootstrap](https://react-bootstrap.netlify.app/) - CSS framework
- [Material UI](https://mui.com/) - CSS framework

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to edit components from Material UI and React Bootstrap. I also learned how to use SASS and how to use the grid system from Bootstrap.

```css
:root {
  --soft-orange: hsl(35, 77%, 62%);
  --soft-red: hsl(5, 85%, 63%);
  --off-white: hsl(36, 100%, 99%);
  --grayish-blue: hsl(233, 8%, 79%);
  --dark-grayish-blue: hsl(236, 13%, 42%);
  --very-dark-blue: hsl(240, 100%, 5%);
}

.MuiContainer-root {
  background-color: var(--off-white);
  color: var(--dark-grayish-blue);
}

.MuiBox-root {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.MuiList-root {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
```
```js
<Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <IconButton
                  aria-label="Close"
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      background: "none",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "hsl(236, 13%, 42%)",
                      "&:hover": {
                        color: "hsl(5, 85%, 63%)",
                        background: "none",
                        fontFamily: "inter",
                        fontWeight: "400",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
```

### Continued development

- Create functional links for the nav menu.
- Use API to fetch data for the articles.

### Useful resources

- [Edit Material UI components](https://mui.com/material-ui/api/app-bar/) - This helped me to edit the components from Material UI.
- [Root CSS](https://developer.mozilla.org/es/docs/Web/CSS/:root) - This is an amazing article which helped me finally understand how to use the root CSS.

## Author

- Website - [Portfolio](https://borja-lobato-francisco-potfolio.netlify.app/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to acknowledge to Frontend Mentor team. I'm really grateful for the opportunity to learn and improve my skills. I'm looking forward to the next challenge.
