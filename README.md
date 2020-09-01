# angular-material
# Frontend Training
## Angular2
1. Learned how to setup an angular application [Tutorial](https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0&index=1)
-  a. Updating the Nodejs and npm to latest version
     i. sudo npm install npm@latest -g
     ii. sudo npm install -g n
     iii. sudo n <latest-version>
     iv. sudo n lts
  
  b. Installing angular CLI
     i. sudo npm install -g @angular/cli
     ii. ng new <project_name> (initialize the application)
     iii. cd <project_name>
     iv. ng serve --open (run the application)
    
  c. To create a component
      ng generate component <component_name>
    
  d. To create a service
      ng generate service <service_name>
    
  e. To create a module
      ng generate module <module_name>
    
2. Learned following basic concepts:
   a. Components(it includes logic and the data)
   b. Templates(it includes the view)
   c. Directives
     i. Attribute directives(ngStyle and ngClass)
     ii. Structural directives(ngIf,ngFor)
  d. Data binding(property binding, event binding, two way data binding)
     i. ngModel is used for two-way data binding.
     ii. learned custom property binding(@input()) and custom event binding(@output())
  e. pipe (for data formatting)
  f. created custom pipe to filter the data 
      ng generate pipe <pipe_name>
  g. Routing and Services
  f. Observable and subscriber
  
3. Learned API Integration [Link](https://medium.com/@websleengur/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b)
   a. Installed json-server
     sudo npm install -g json-server
   b. Created mock API
   c. Used Http services(HttpClient.get(),HttpClient.put() and HttpClient.delete())
  
# Refrences:
1. https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0&index=1
2. https://angular.io/tutorial

## Angular Material
1. Learned to include Angular Material in Angular Project
2. Learned to add a button, card, icons, sidenav, toolbar, slider, dropdown list, nav-list, divider

# References:
1. https://material.angular.io/guide/getting-started
2. https://www.youtube.com/watch?v=bV8emCBmFHk&list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU
3. https://www.youtube.com/watch?v=wPT3K3w6JtU 

