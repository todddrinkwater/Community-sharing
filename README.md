# Community Share

## Times
Times:          | Days
----------------|------------
Weekdays        | 9am-9pm
Weekends        | 9am-9pm
###### Breaks: 1 hour for lunch and short break to get something for dinner

## Meals
Meals:          | Times/Days
----------------|------------
Lunch           |
Dinner          |

## Roles
Roles:          | Name:
----------------|--------
Project Manager | Jon
Minister of EE  | Todd
Product Owner   | Dan
Git Master      | Pou

**Project Manager:**
Ensuring we all understand the layout of the project, milestones and issues.

**Minister of EE**
Coming up with enjoyable games, and having comms making sure everyones all good, sorting out mindfulness time?

**Product Owner**
Ensuring the product matches the users stories, ensuring the product has consistency.

**Git Master**
Dealing with pull request by making sure its pushed to the right branch and fixing merge conflicts, helping out with git problems.

**Group**
Merge pull request together

## Conflict Management
- If its product related lets re-group and seek clarification.
- Talk it out
- Sarah (EE)

## Planning
- Brainstorm (broad concept)

![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Brainstorm.jpg)

##### Problem
- Require something
- Communication
- Money

##### Solution
###### An application that connects users to allow them to easily share their resources within the community
- By making an online community resource.

##### User Stories
- As a user, I would like to borrow an item
  + I would like to be able to search for an item based on
    + Location
    + Availability
    + 'Thing' category
  + A search will return a list of results (name, photo, location)
  + I can select list item and it will bring up more details to do with the item.
  + On the item profile there will be a request button.
  + Request button will take us to a page where users can see on request form with
    + Item Name
    + T's & C's
    + Date's Booked
    + Submit button
  + Confirmation page to notify the user their request has been sent and the lender will get in touch with them soon.


- As a user, I would like to lend out my item/s
  + I want to be able to list an item to lend
    + Fill in a form thats gonna describe the item and submit form with a button.
    + I will receive a confirmation about item listing
  + I want to be able to receive requests from other users (notification on page/email)
    + I want to be able to accept or reject requests
      - Accept: Further communication
      - Decline: Short message + decline header icon
  + I want to be able to communicate with a borrower
    + Phone
    + Email
    + Chat
  + I want to be able to manage my listings


- User user story: (Logged in)
  + As a user I have access to lending and borrowing
  + I will be able to manage my profile
    + items lending (current)
    + items borrowing (current)
    + personal details
    + pending request
    + location
  + As a user I want to be able to review other users

### MVP

#### (V1)

- Be able to display list of items to be borrowed
- Submit a request to borrow
- View details on an item
- Accept a request to borrow
- Post item to lend
- Auth & Registration
- User Profile Dashboard

#### (V2)

- Search Engine to find items
- User communications eg. messaging system
- Rating system
- List wanted items
- Entend home page content

### TECHNOLOGIES

- HTML
- CSS - SASS
- React
- Redux
- Express
- Knex
- Passport (passport-local)
- React Router
- Sodium

### UI / WIREFRAMES

**Pages**
- Title & Navbar
{{Image here}}

- HomePage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Home.jpg)

- ListingPage or ListPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/ListPage.jpg)

- ListItemPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/ListItem.jpg)

- Dashboard/Profile Page
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Profile.jpg)

- LenderFormPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/LenderForm.jpg)

- Login/RegisterFormPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/RegisterForm.jpg)


{{images here}}

### Database Structure

users    | Data type
---------|----------
user_id  | increments
fname    | string
lname    | string
email    | string
phone    | string
address  | string
suburb   | string
town_city| string
postcode | string
user_image_url| string
hash     | binary

items    | Data type
---------|----------
item_id  | increments
catagory | string
item_name| string
description| string
available| boolean
image_url| string
owner_id | integer references users.user_id
location | string

loans     | Data type
----------|----------
loan_id   | increments
borrower_id| integer references users.user_id
item_id    | integer references items.item_id
pickup   | datetime
dropoff  | datetime
