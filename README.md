# Coding challenge Jonas Seegers

In this repository, you can find my results for the [frontend-coding-challenge](https://github.com/project-a/frontend-coding-challenge) by Project A. In the following, it will be described how to run and potentially work with the code base. Additionally, an outlook will be given on what I would've added if I was willing to invest more time in this. The results presented in this repository took me about a day (8 hours).

## Running the application

In order to run the application, make sure you have Node.js installed, preferably the lts version via [nvm](https://github.com/nvm-sh/nvm). I've used `yarn` to develop this application, but the commands should work with the respective `npm` commands as well.

Once you've done that, simply run `yarn dev`. This should serve the application on localhost:3000.

## Testing the application

You can run the tests by running `yarn test`. The tests are written with [ts-jest](https://github.com/kulshekhar/ts-jest). The tests are rather mandatory, but they might give an idea of how I would setup test cases.

## Language and frameworks

I used React and TypeScript for this application. I choose TypeScript over JavaScript because it adds type safety which allows to find a lot of errors during compile time. Since I already know that the upcoming project will be written with React, it makes sense to use React to build the components.

## Tooling

The application was built from scratch, so no create-react-app or anything comparable. This was done, because I wanted to keep the code base ligthweight and it should be clear that everything that is part of this repository was made by me. I use a very simple webpack config to bundle the application and webpack-dev-server to be able to run the application on localhost.

## Styling

I tried to stick to the given design, but refrain from using pixel values. In my experience, it's better to use relative values rather than pixels. This is why the implementation is not meant to be pixel perfect.

I used [emotion-js](https://github.com/emotion-js/emotion) to style the components. There are very few global styles that are inject by the `Global` component from emotion. This can be found in `style/globalStyles.tsx`

## Structure of the application

The React components are structured as described in the [atomic design pattern](https://bradfrost.com/blog/post/atomic-web-design/).

```
├── public                      # everything that acompanies the javascript bunlde
    ├── index.html              # simple html file that gets the js bundle injected by webpack
    ├── reset.css               # a small css file that resets every style in css
├── src
    ├── atoms
    ├── config                  # contains configuration files, which is the password rules right now
    ├── molecules
    ├── organisms
    ├── services                # contains a mock service for the login right now
    ├── style                   # contains some constants and utility functions for the styling
    ├── utility                 # some utility functions, mainly for validating input values
    ├── app.tsx                 # this where the structure of the application is defined
    ├── index.tsx               # the starting point of the application
└── README.md
```

## Outlook

In the following I'll discuss some ideas on how to improve the application

1. Right now the email input gets validated as well. If you enter an invalid email, the submit button stys disabled. For a better UX the input should provide some feedback for invalid values
2. There ís no i18n at all in this application. I wouldn't do that in a "real" application, but I left it out for speed and simplicity
3. There is no real templating for this application for the same reasons
4. Although there are unit tests, there are no frontend tests (like using Selenium / puppeteer / ...). I've worked with frontend tests before and I think that unit tests are way more important. Also frontend tests tend to be flaky and they need to be maintained reguraly. I wouldn't recomed frontend tests for a startup with no dedicated QA department
5. The password rule for special characters allows ä, ö, ü, ß, ç, ... as special characters. It may be discussed if that counts or not.
