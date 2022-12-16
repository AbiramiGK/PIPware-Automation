Feature: PIPware application Automation for Initiatives Module

  @Smoke
  Scenario: Verify  the action bar in intiatives page
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Verify the Action bar contains components as Filter , Add download symbol and column picker icon

  @Smoke
  Scenario: Check list and card view of initiatives
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Check list and card view of initiatives

  @Smoke
  Scenario: Pipeline and concept
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Check Pipeline and concept of initiatives

  @Smoke
  Scenario: Checking on  filter
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Verify the Action bar contains components as Filter and apply filter based on need

  @Smoke
  Scenario: Checking the stage of specific initiatives and its value
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Checking the stage of specific initiatives and its value

  @Smoke
  Scenario: Download format PDF and EXCEL
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Initiatives
  Then Select Download Icon and select the format as PDFandExcel

  @Smoke
  Scenario: Initiatives >> Settings-> PipelineTarget >> Check the hide archive checkbox feature
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Settings PipelineTarget
  Then Check the hide archive checkbox feature and verify the resultant value doesnt contain the archive row

  @Smoke
  Scenario: Add and Delete new Pipeline Target
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Settings PipelineTarget
  Then Add by adding info under Add, for delete the select delete icon

  @Smoke
  Scenario: Go to BottomUp Target and Top-Down Target also can verify charts
  Given Login to the application
  When Provide the Username and Password for login
  When Navigate to initiatives tab and select Settings PipelineTarget
  Then Select to go the target page contains Bottomup and TopDown  target  to view the total site target
  

