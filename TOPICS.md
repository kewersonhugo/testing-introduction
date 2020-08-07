- Objectives
  - It will be a basic introduction
  - Start to talk about tests in beakyn
  - Discuss test practices and techniques
  - Learn together how we could adopt
  - Feel free to ask questions.










- How we actually develop stuff?
  - The workflow
    - Take an issue from the board
    - Run the application
    - Start writing our issue
    - Wait the browser to reload (take feel seconds)
    - Open the component I modified (take another feel seconds)
    - Execute the logic I added
    - Check results (UI feedback or logs)
    - Repeat
    - This is my feedback loop (Arrange, Act, Assert)
  


  
  
  
  
  
  - We already test, but manually
  
  
  
  
  
  
  
  - Why it is bad to test manually?
    - Error prone due to repetition
    - Risk of forgeting to test everything we did
    - Risk of introducing bugs on working code (lack of regression)
    - Slower feedback loop
    - We normally need help from the author (the code expert)
    - Hard to refactor, because we don't know what will break








- What is the alternative to manual testing?









- Automated testing
  - Mainly programmers tests (unit or integration)
  - Why test?
    - More confidence
    - Regression tests
    - Less bugs
      - Easier to test corner cases
    - Serves as documentation from the creator of the API
    - We depend less on other developers knowledge about specific code
    - Easier refactorings
      - We can try to modify any piece of the code
    - Easier to reason about code (better and simpler design)
    - Faster feedback loop
    - Consistent speed
  
  
  
  
  
  
  
  
  
  - What are unit tests?
    - Fast to run
    - Don't talk to external system
    - Eg. Pure functions and visual components
  
  
  
  
  
  
  
  
  
  - What are integration tests?
    - Can be slow
    - Can talk to external systems
    - Normally need mocks (um fake)
    - Testing together with other components
    - Eg. Testing if a HTTP was made, communication between two components using Redux
  
  
  
  
  
  
  
  
  
  
  - What to test and how to test?
    - Think and test like the user would use our API
    - Happy Paths
    - Code flows (conditionals or exceptions)









  - What are the trade offs?
    - It is an investment
      - Not everyone knows
      - Who knows may be rusty
      - It takes time to learn
      - The results come in the long run
    - We can't test everything. Code was not writen to be tested.
    - It can reduce our productivity until we get familiar.










- What we need to write automated tests?
  - Individual tools
    - A test runner
    - An assertion library
    - And sometimes a mock library
  - Or, an test framework like Jest or Mocha
  
  
  
  
  
  
  
  
  
  - Structure of a test (writing FizzBuzz challenge)
    - Starting simple
      - A simple description of what is being tested
      - Arrange/Setup
      - Act/Interact
      - Assert/Verify
    - Show coverage example


- Give pratical example