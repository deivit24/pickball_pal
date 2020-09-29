# Picklebal Pal

This web application is designed to help connect pickleball players around your area. You can create a player profile, post, comment and direct message other players. You can filter players or posts by zip code or city.

[This App is currently deployed on heroku](https://dreamy-heisenberg-115bc0.netlify.app).

The git repo to the backend may be found [here](https://github.com/deivit24/pickleball_pal_backend)

## Tech Stack

- Backend
  - Node.js, Express
  - MongoDB, Mongoose
- Frontend
  - HTML, CSS, JavaScript
  - React/Redux
  - Material UI
- Deployment
  - Heroku Deployment Platform (Backend)
  - Netlify (Frontend)

## The Data and APIs

I used Google Geo-location API to populate the User's Profile location when they input the zipcode in the create/edit profile form. For example:

Input

    geocode(78745);

Output

    data: {
    		  zip: 78745,
    		  location: 'Austin, TX 78745, USA',
    		  lat: 30.2153869,
    		  lng: -97.7960118

    		}

I used the same API when authenticated users want to show the places where they usually play. However, instead of using the zip code to find the address, the used types in the name of the location and the API will return:

Input

    geocode('St Stephens Episcopal School');

Output

    data: {
    		  zip: 78746,
    		  location: '6500 St. Stephen's Dr, Austin, TX 78746, USA',
    		  lat: 30.3303994,
    		  lng: -97.8192418

    		}

Then I used Google Maps API to show map with markers where users play by extracting the datas latitude and longitude. This is what it will look like on a player's profile:

![](https://res.cloudinary.com/dptksyqdf/image/upload/v1601216408/qpqexwtuiamjxquyjs8x.png)

## The Why/Problem

I was born and raised a tennis player and have been playing most off my life and coach as well. I have seen so many apps like [Playyourcourt](https://www.playyourcourt.com/) and [myTennislessons](https://mytennislessons.com/) that connect tennis players with coaches. However one requires you to pay and subscribe to use the application while the other books lessons for you but they take your credit card info and they take a big cut out of the coaches.

I did not want to create an app that connects tennis players but pickleball players instead. I haven't seen many applications out there that do that.

## The Solution - Pickleball Pal

Pickleball allows you (as a non registered user) view player profiles and search for profiles by location( either zipcode or city, state) to see if they are in your area. The profile cards display their location and their level. Their profiles also display where the user usually plays.

### Features as a registered user

- Create a player profile that displays your bio, playing style, level, where you play and etc.
  - Your are able to edit profile, add and delete places and delete your account
- Ability to send direct messages to other pickleball players
- Publish a post to the pickleball pal community
  - You can delete your own posts
- Like and comment on player posts
  - You can unlike and delete comments
- Filter posts based on location (zipcode or city, state)

## Standard User Flow

1.  Users may first view players and see if there is someone to connect with then register. Or you can just register right away and be the first in your area.

2.  Once registered, you will be prompted to create a profile. Once created you will be returned to your Dashboard.

3.  From the Dashboard, you can upload a photo and add a place where you usually play. Then you are pretty much complete with the profile creation and your profile will be displayed/searchable to the community

4.  You can then publish a post to the community.
5.  Search for players by community and send them a direct message.

6.  You can manage your posts and see your messages on your dashboard

7.  Connect with someone, get their number and go play some pickleball.

## Testing

### Testing the backend

For this capstone, I decided to use Postman to test the backend. The README file on hmy repo to the backend goes over in detail on how to test it. It can be found here [here](https://github.com/deivit24/pickleball_pal_backend)

### Testing the frontend

I used React/Jest testing library to test my components.

You can run each test individually by opening the terminal run: 

    npm test [File_Name] 

Or if you simply want to run all tests, you can open the terminal and run:

    npm test

## Future goals

I gave myself a deadline to meet and at some point I felt like I 'bit more than I can chew'. I learned a lot from this capstone. I do believe this app can scale and there are many features I wanted to implement but did not have time. For example:

- Implementing **notifications**
  - I never tried implementing direct messages and spent a lot of time on it and I got it to 'work'. I have an idea and will try to solve it in the future.
