# Pokemon Adventure Quest

    ## Objectives
        - track user state, use this state to determine the end result.
        - give user set of quests that Must be completed to see result.
            - each quest should present the user with choices.
            - point of the game: start as a selected pokemon and try to win as many pokemon battles as possible.
            - game over if hp <= 0.
        - give user choice of characters and custom name.


        ### setup
        - home page
            - standard page layout
                - header, application title, styles
            - form element
                - text input for a custom user character name
                - choice of three starter pokemon; make them radio buttons.
            - form data button
                - submit event which will direct user to the map page.
        - map page
            - display our adventure map
            - load quests onto the map as a clickable link
            - user health bar and 
        - quest page
            - event specific picture
            - paragraph that might inform user how to choose the right attack in order to win battle.
            - set of attacks/actions to choose from. Only the correct one will result in a win.
            - a redirection to the map after choice submission
        - results page
            - result specific picture based on win count.
            - new game button

        ## state tracking
        - User HP / quest completion / wins
