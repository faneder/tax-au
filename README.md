# Tax Refund Calculator
### A simple tax calculator is available to help you calculate the tax on your taxable income when you are in Austrlia.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

> demo [https://tax-australia.firebaseapp.com/](https://tax-australia.firebaseapp.com/) to view it in the browser.


## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Tax types](#tax-types)
- [M1 Medicare levy reduction or exemption 2017](#M1-Medicare-levy-reduction-or-exemption-2017)
- [Low income earners](#low-income-earners)
- [Tax rates](#tax-rates)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Tax types:
- resident
- non-resident

You are a working holiday maker if you have a visa subclass:

- 417 (Working Holiday)
- 462 (Work and Holiday).

## M1 Medicare levy reduction or exemption 2017
This question is about whether you qualify for a Medicare levy reduction or exemption. Australian residents for tax purposes are subject to a Medicare levy of 2.0% of their taxable income unless they qualify for a reduction or exemption.

If you were not an Australian resident for tax purposes for the whole of 2016–17, you are exempt from the Medicare levy.

A Medicare levy reduction is based on your taxable income. A Medicare levy exemption is based on specific categories. You need to consider your eligibility for a reduction or an exemption separately.

The first part of this question deals with Medicare levy reduction. If you are not eligible for a reduction, you will be directed to read the exemption section to see whether you qualify for a Medicare levy exemption.

## Low income earners
You may be eligible for a tax offset if you are a low-income earner and you are an Australian resident for income tax purposes.

You don't have to claim this offset. We will work it out for you when you lodge your tax return. The offset can only reduce the amount of tax you pay to zero and it does not reduce your Medicare levy.

If your taxable income is less than $66,667, you will get the low income tax offset. The maximum tax offset of $445 applies if your taxable income is $37,000 or less. This amount is reduced by 1.5 cents for each dollar over $37,000.

If you are under 18 as at 30 June of the income year and you have unearned income, your low income tax offset cannot reduce the tax payable on this income.

LITO calculation table from 1 July 2015 and following
$0 – $37,000  $445
$37,001 – $66,667 $445 – [(taxable income – $37,000) x 1.5%]
$66,667 + Nil

“LITO” calculation formulae for the tax years 2010 to 2018
LITO is an “offset”, which means it is an amount subtracted from your tax payable. If the calculated LITO offset is greater than your tax payable, the excess is not refundable, and it also can’t be used to offset Medicare Levy.

The LITO is for lower income earners, and does not have to be specifically claimed, because the Tax Office automatically calculates your entitlement in your tax assessment.  (The LITO calculation is provided for in the spreadsheet annual tax calculator).

[official document](https://www.ato.gov.au/individuals/income-and-deductions/offsets-and-rebates/low-income-earners/).

## Tax rates
#### Resident tax rates 2017–18

| Taxable income  | Tax on this income |
| ------------- | ------------- |
| $0 – $18,200  | Nil  |
| $18,201 – $37,000  | 19c for each $1 over $18,200  |
| $37,001 – $90,000  | $3,572 plus 32.5c for each $1 over $37,000 |
| $90,001 – $180,000 | $20,797 plus 37c for each $1 over $90,000 |
| $180,001 and over | $54,097 plus 45c for each $1 over $180,000 |

#### Working holiday maker tax rates 2017–18

| Taxable income  | Tax on this income |
| ------------- | ------------- |
| $0 – $37,000  | 15c for each $1  |
| $37,001 – $87,000  | $5,550 plus 32.5c for each $1 over $37,000 |
| $87,001 – $ 180,000  | $21,800 plus 37c for each $1 over $87,000 |
| $180,001 and over  | $56,210 plus 45c for each $1 over $180,000 |

## Reference:

- Tax Income Rates [https://www.ato.gov.au/Rates/Individual-income-tax-rates/](https://www.ato.gov.au/Rates/Individual-income-tax-rates/).
- Australian Taxation Office [remote zone](https://www.ato.gov.au/forms/withholding-declaration---calculating-your-tax-offset/?page=3).

## Todo:

- [x] caculator tax
- [x] complete the tax in a remote zone
- [x] improve for seo
- [ ] Push my commits to GitHub
- [ ] Open a pull request
