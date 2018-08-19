# Tax Refund Calculator
## A simple tax calculator is available to help you calculate the tax on your taxable income when you are in Austrlia.

## demo [https://tax-australia.firebaseapp.com/](https://tax-australia.firebaseapp.com/) to view it in the browser.

## This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

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

###### tax type:
- resident
- non-resident

You are a working holiday maker if you have a visa subclass:

- 417 (Working Holiday)
- 462 (Work and Holiday).

###### M1 Medicare levy reduction or exemption 2017
This question is about whether you qualify for a Medicare levy reduction or exemption. Australian residents for tax purposes are subject to a Medicare levy of 2.0% of their taxable income unless they qualify for a reduction or exemption.

If you were not an Australian resident for tax purposes for the whole of 2016–17, you are exempt from the Medicare levy.

A Medicare levy reduction is based on your taxable income. A Medicare levy exemption is based on specific categories. You need to consider your eligibility for a reduction or an exemption separately.

The first part of this question deals with Medicare levy reduction. If you are not eligible for a reduction, you will be directed to read the exemption section to see whether you qualify for a Medicare levy exemption.

###### Low income earners
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

###### Medicare levy - It is partly funded by taxpayers who pay a Medicare levy of 2% of their taxable income.

Your Medicare levy is reduced if your taxable income is below a certain threshold. In some cases you may not have to pay the levy at all. The thresholds are higher for seniors and pensioners. If your taxable income is above the thresholds, you may still qualify for a reduction based on your family taxable income.

Can I qualify for a Medicare levy reduction?
In 2016–17 you do not have to pay the Medicare levy if your taxable income is equal to or less than $21,655 ($34,244 for seniors and pensioners entitled to the seniors and pensioners tax offset).

You will pay only part of the Medicare levy if your taxable income is between $21,655 and $27,068 ($34,244 and $42,805 for seniors and pensioners entitled to the seniors and pensioners tax offset).

What if I don't qualify for a Medicare levy reduction?
In 2016–17 if you are single with no dependants and your taxable income is over $27,069 ($42,806 for seniors and pensioners entitled to the seniors and pensioners tax offset), you do not qualify for a Medicare levy reduction.

You may still qualify for a reduction based on your family taxable income.

If you do not qualify for a reduction in the Medicare levy, you may still qualify for a Medicare levy exemption.

###### Medicare levy reduction for low-income earners
The tax-free threshold and the Medicare levy
Most working holiday makers are foreign resident taxpayers. Foreign resident taxpayers are not eligible for the tax-free threshold and do not pay the Medicare levy.

However, if you are on a working holiday visa, but are an Australian resident, you will be eligible for the tax-free threshold in a modified way. The calculation of the tax-free threshold will be affected by any working holiday maker income you earn. The calculation is done in two steps with any working holiday maker income being dealt with first, which effectively reduces your tax-free threshold.

###### Resident tax rates 2017–18

| Taxable income  | Tax on this income |
| ------------- | ------------- |
| $0 – $18,200  | Nil  |
| $18,201 – $37,000  | 19c for each $1 over $18,200  |
| $37,001 – $90,000  | $3,572 plus 32.5c for each $1 over $37,000 |
| $90,001 – $180,000 | $20,797 plus 37c for each $1 over $90,000 |
| $180,001 and over | $54,097 plus 45c for each $1 over $180,000 |


###### Working holiday maker tax rates 2017–18

| Taxable income  | Tax on this income |
| ------------- | ------------- |
| $0 – $37,000  | 15c for each $1  |
| $37,001 – $87,000  | $5,550 plus 32.5c for each $1 over $37,000 |
| $87,001 – $ 180,000  | $21,800 plus 37c for each $1 over $87,000 |
| $180,001 and over  | $56,210 plus 45c for each $1 over $180,000 |

###### Reference:

- Tax Income Rates [https://www.ato.gov.au/Rates/Individual-income-tax-rates/](https://www.ato.gov.au/Rates/Individual-income-tax-rates/).
- Australian Taxation Office [remote zone](https://www.ato.gov.au/forms/withholding-declaration---calculating-your-tax-offset/?page=3).
