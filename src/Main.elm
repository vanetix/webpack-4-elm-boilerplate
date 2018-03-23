module Main exposing (main)

import App exposing (init, update, view, subscriptions)
import Html exposing (..)


main =
    programWithFlags
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
