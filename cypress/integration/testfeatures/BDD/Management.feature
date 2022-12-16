Feature: PIPware application Automation for Management Module

  @Ignore
  Scenario: Management  >> Meetings >> Verify to schedule meeting-ADD
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Management  tab and select Meetings
  When Click ADD button and provide information under details part and save
  When Click FILTER button and provide a filter value to view the  filtered meeting
  Then Click on series tab to view them in series mode, click again to view in calender mode