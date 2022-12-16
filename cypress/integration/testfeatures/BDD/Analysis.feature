
Feature: PIPware application Automation for Analysis Module

  @Smoke
  Scenario: Verify  UserName and Password
  Given Login to the application
  When  Provide the Username and Password for login
  Then Verify successful login

  @Smoke
  Scenario: Verify  HomePage components
  Given Login to the application
  When  Provide the Username and Password for login
  When the listed components present in UI

  @Smoke
  Scenario: To verify the filter all KPIs under Analysis Tab
  Given Login to the application
  When  Provide the Username and Password for login
  When Navigate to Analysis list and select KPI tab
  Then Check by sorting  All KPIs in order of appliying filter with Owner

  @Smoke
  Scenario: To Verify the individual KPI chart
  Given Login to the application
  When  Provide the Username and Password for login
  When Navigate to Analysis list and select KPI tab
  Then Check the individual KPI  chart by clicking on specific name

  @Smoke
  Scenario: Verify the specific KPIs value or target or baseline
  Given Login to the application
  When  Provide the Username and Password for login
  When Navigate to Analysis list and select KPI tab
  Then Check the individual KPI  chart by clicking on specific name
  Then Checking on respective values of KPIs

  @Smoke
  Scenario: Verify the Reference --> Review date
  Given Login to the application
  When  Provide the Username and Password for login
  When Navigate to Analysis list and select KPI tab
  Then Check the individual KPI  chart by clicking on specific name
  Then Verify the review date by clicking on reference Tab

  @Smoke
  Scenario: Analysis >> Value Hound >> Verify by Applying filter with Definition
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Analysis list and select Value Hound tab
  Then Apply filter with Definition

  @Smoke
  Scenario: Add new Folder / VDI
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Analysis list and select Value Hound tab
  When Navigate to addFolder tab to add Folder
  Then Navigate to AddVDT tab to addVDT

  @Smoke
  Scenario: Verify and access the Tabs under value Hound
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Analysis list and select Value Hound tab
  Then Navigate to Add to library, Analysis, Copy and Configuration button to add them
  
  