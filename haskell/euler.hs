module Euler (euler) where

data Result = Result { x :: Float
                     , y :: Float 
                     } deriving (Show)

computeResult :: (Float -> Float -> Float) -> Float -> Float -> Float -> Result
computeResult slope x y h = Result { x = (x + h), y = ((slope x y) * h) }

eulerR :: (Float -> Float -> Float) -> Float -> Float -> Float -> Int -> Int -> [Result] -> [Result]
eulerR slope x_0 y_0 h steps stepsRemaining results
  | stepsRemaining == steps = eulerR slope x_0 y_0 h steps (stepsRemaining - 1) [(computeResult slope x_0 y_0 h)]
  | stepsRemaining == 0 = results
  | otherwise = 
    let curr = last results
        x_1 = x curr
        y_1 = y curr
    in
      (eulerR slope x_1 y_1 h steps (stepsRemaining - 1) (results ++ [(computeResult slope x_1 y_1 h)]))

-- Approximates the solution to an ordinary differential equation given
-- an initial value, an increment (h) and number of steps to approximate over
euler :: (Float -> Float -> Float) -> Float -> Float -> Float -> Int -> [Result]
euler slope x_0 y_0 h steps = eulerR slope x_0 y_0 h steps steps []
