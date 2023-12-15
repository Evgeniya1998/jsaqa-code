Feature: Buying ticket
    Scenario: Happy path of one ticket buying
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user choose day "3"
        When user choose film "1"
        When user choose row "8" and seat "2"
        When user click button "button"
        Then user see information "Вы выбрали билеты:"

            Scenario: Happy path of two tickets buying
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user choose day "4"
        When user choose film "2"
        When user choose row "3" and seat "8"
        When user choose row "3" and seat "9"
        When user click button "button"
        Then user see information "Вы выбрали билеты:"

            Scenario: Sad path no places
        Given user is on "https://qamid.tmweb.ru/client/index.php" page
        When user choose day "5"
        When user choose film "1"
        When user choose row "2" and seat "4"
        When user click button "button"
        When user click button "button"
        When user2 click is on "https://qamid.tmweb.ru/client/index.php" page
        When user2 choose day "5"
        When user2 choose film "1"
        When user2 choose row "2" and seat "4"
        Then user2 see that the button "button" is not activated
        

