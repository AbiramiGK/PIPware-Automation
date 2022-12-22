Feature: PIPware application Automation for Portfolios Module

  @Ignore
  Scenario: Portfolios >> Portfolio Management >> Verify the view
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Portfolios  tab
  Then Enable left or top mode to view the portfolio management information

  @Smoke
  Scenario: Portfolios >> Portfolio Management >> View all  information under portfolio Management
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to Portfolios  tab
  When Click on particular Portfolio to view the respective dashboards details initiatives wokplan Risk Dependencies and resources
  #Then Click on notes icon to add comments and attachments