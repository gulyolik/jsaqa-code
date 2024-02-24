Feature: Ticket booking
  Scenario: The standart ticket booking
    Given user is on poster page
    When user selects available session
    When user reserves one free seat
    Then user sees that his place is chosen

  Scenario: Booking VIP ticket
    Given user is on poster page
    When user selects available session
    When user reserves free VIP seat
    Then user sees that his place is chosen

  Scenario: Attempt to book an occupied seat
    Given user is on poster page
    When user selects available session
    When user selects the occupied seat
    Then button "Забронировать" is disabled