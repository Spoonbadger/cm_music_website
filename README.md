CS50 web - Capstone: cm_music_website
Craig Morley, November 2024


Introduction:
For the capstone project to CS50 web I have created a Single Page Application (SPA) website for my music. Thank you for taking the time to explore the web application.


Running the application:
To run the application please download the files from the repository and use 'python3 manage.py runserver' in the command-line to start the program in development mode.


Distinctiveness and Complexity:

SPA
I have created a Single Page App for my capstone music website project. Instead of installing and utilizing React-Router which I would use in project moving forwards I have used three script tags, React - to allow me to use the react library, React-DOM - providing methods to render React components in the DOM, Babel to transpile the JSX from React components into JavaScript code that the browser can read. In creating an SPA all pages are already loaded and are shown based of the url. When a new page link in clicked the page is loaded immediately.


CONTACT-FORM EMAIL
On the Contact-page the user is able to enter text into 3 fields ('name', 'email', and 'message'). Here they can send a message directly into my email inbox. Upon 'submit' view.py stores the information after running some inbuilt Django form checks .is_valid() and form.cleaned_data. If the data passes the checks successfully, the data is saved and using django.core.mail module, I am using send_mail which the appropriate crendentials and the message is forwarded to my email. I updated the EMAIL settings in settings.py and kept my credentials safe by storing them ('email host user' and 'email host password' ) in the .env file

.ENV
I have creating a .env file and getting an app password in order to have users be able to contact my email direcly when submitting a contact form on the website. For this had to learn about the format on send_email() and also install python-decouple in order to link to the .env file from settings.py which you can see listed in the requirements.txt file.

DOCKER
I have created a Dockerfile in order for the web app to be run in a virtual environment and a Docker-compose yaml file

TESTING
I have utilized testing in multiple areas. I have used forms.py to support form validity in Django. I have used checks in models.py ('is_valid_message'). I am running tests in test.py and also running a test with every upload to Github with Github Actions automatic check using a yaml file. I have also used Django inbuilt functions such as .is_valid() and .cleaned_data() to add further thorough checks.

3RD PARTY UTILIZATION
I have also embedded music players and a donation form from other websites. On the music page, I am using iframe tags to embed music from Spotify to appear on the webpage. On the 'invest' page (linked to in footer), I have embedded a donation widget to allow users to donate to the musical cause. The widget is from Stripe and links with my bank account through stripe - please feel free to donate.

ANIMATION
I have added CSS for all webpages and included a number of animation styles for multiple elements and some complex design elements such as a variety of ways of playing audio and video on the website. When Bio is clicked, the text fades in. For 'links' the links fly in with a swoop from the background.

Music Button
I am using React state to be able to toggle music played off and on and for the text to match the state of the music playing or not.


Files:
In views.py I created a view for each webpage of the app. 'index', 'bio', 'invest', and 'links'. In urls.py when a URL is entered the appropraite function in views.py is called, rendering the page selected.

For 'contact_page' I am beggining with a check to see if the form on the contact page has been submitted (with a method of 'POST'). If the form has not been submitted yet (a request method of 'GET'), the contact-form page will load. If the form has been sent I gather the information from the form with contactForm form class which I have imported from .forms. contactForm handles validation checks and I save the infomation as the variable 'post'. With this information I can then use the built-in djangofunction .is_valid() to make sure the data is valid.
I can then use .cleaned_data to gather the data in the correct format and set the correct variables I need in order to save the new ContactMessage object and have the data ready to use to send in a email using 'send_mail'.

For send_mail to work I had to add email host and and smtp information in order to have the form, once submitted, emailed to my own personal email. In order not to publish my Gmail login and password on github I had to get an 'app password' from my Gmail account and use that, then move the username and password to a seperate .env file and link to this file from settings.py using 'from decouple import config'. I added the .env file to a new .gitignore
file so as to not publish my Gmail username and 'app password'.

There are checks on the client-side by using Django forms automated verification such as .is_valid() and .cleaned-data(). The backend model also checks that the forms are not submitted blank on the server-side. If the form is not valid, the the page will reload with all the current information written on the form replaced, however, the Django client-side checks shouldn't allow a form to be submitted if the fields are blank.

In urls.py I have created calls to action via a url pathname. These paths can be called on from the website, and calls upon the relevent function
in views.py.

In models.py I have created two models (actually three with User but that's for possible future development). The first is ContactMessage in which everytime a user leaves a message on the contact.html page, the data is stored in the database. I have include the fields, name, email, message and also included a timestamp as an easy and helpful addition. I have created a string (__str__) method within the class so the model is easily readable in /admin. I have also
included an is valid message check which I can utilize to add further checks in tests.py.

I have also created a class of Videos which stores the videos name and the path name too, allowing me to easily add or remove videos using python shell or by using django admin, and this data can easily be accessed from views.py.

In forms.py I created the form layout and my using some built-in django features I could add further checks to the form data such as Email Validator, serving client-side validation to the user, where if the user doesn't type in an email in a valid email format, the website will inform the user.

In admin.py I added the Videos and ContactMessage models in order to access these database items in Django admin.

in tests.py I ran a series of checks for the two models I created using TestCase. Although adding a number of relevant checks I see I can futher develop these 
checks by adding more checks to the view functions in views.py also.

In my static folder I have a CSS file where I have designed various aesthetic features using both flexbox and grid CSS. I have also incorporated @key_frames to add animation elements to the design of the website.

There are images, and music also stored here. These are large files and so when uploading to Github I had to install a large file tracker in order to add these large items to a gitattributes file. I created some a Bio.js file in order add a dynamic music playing element to the bio.html page. On this page music can be toggled off and on at the click of a text-only button.

I have a navbar featured on all the webpages as well as a footer and also links to social media accounts.

In the footer I also have a link which takes a user to a pay where they can 'invest' in the musician by donating through 'stripe' payment system.

I have also included .github folder including a YAML file which serves to run tests.py when uploading to github and the test results are easily checkable on github.

I have created a Dockerfile in order for the app to be able to run on a virtual environment. For this to work I also needed to include a requirements.txt file, which I have included.

I also kept track of what I needed to build in the app by using a roadmap.md file.


Thank you very much for reviewing my work.