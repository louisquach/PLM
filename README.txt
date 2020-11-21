Project: Premier League Match Results 
A. Goals: 
	+ Using React for frontend and php symfony backend
	+ Able to read, write and modify data
	+ Generate pdf, csv file

B. Description:
- Make a small project to display football match result, with an admin dashboard where user can modify the results and extract 
the result to pdf or csv file.
- The frontend will be created by using Reactjs with Semantic ui, React Hook, React Context
- The backend will be using PHP Symfony
- Database using MariaDb
- Axios for sending http requests.
- Practice to create functions: 
		+ convert date format
		+ Pagination
		+ Read and insert data from csv file to database
		+ Generate csv and pdf file

C. Configuration
- Set up symfony project full framework: symfony new [projectname] --full
- Install encore to use React: composer require encore
- Create env.local file and change database connection detail
- Enable ReactPreset() in webpack.config file
- Install node_modules: npm install
- Run symfony server: symfony server:start
- Install some react support package: npm install --save-dev @babel/preset-react & npm install react react-dom proptypes
- Run npm install again to update package
- Start npm: npm run watch
- Create default controller: php bin/console make:controller -> set controller name
- Change index.html.twig & base.html.twig files, add encore_entry_link_tags and encore_entry_link_tags
- Change app.js content in asset directory to react file
- Choose setting->live template-> rfs (react functional without proptypes)  