Feature: PIPware application Automation for Management Module

  @Ignore
  Scenario: Management  >> Meetings >> Verify to schedule meeting-ADD
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Management  tab and select Meetings
  #enable while scheduling the meeting
  #When Click ADD button and provide information under details part and save
  When Click FILTER button and provide a filter value to view the  filtered meeting
  Then Click on series tab to view them in series mode, click again to view in calender mode

  @Ignore
  Scenario: Management  >> RARS >> Reviewer can be selected for the result action
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Management  tab and select RARS
  #enablefor adding reviwers and save
  When Click icon and try adding the reviewer details and do save
  

  @Ignore
  Scenario: Management  >> RARS >> Reviewer can be selected for the result action
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Management  tab and select RARS
  Then Provide Results KPIs Initiatives Resources reports Actions and Review information

  #@Smoke
  #Scenario: Management  >> RAR Administration >> RARs page >> will filter and check for reviewer information
  #Given Login to the application
  #When Provide the Username and Password for login
  #When Navigate to Management  tab and select RARS Administration
  #When Provide Reviewer and Reviewee information and select filter option  to view the selected information
  #Then Click “Reset” button to unfilter all
  

