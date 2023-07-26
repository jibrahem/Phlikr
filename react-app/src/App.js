import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import UploadPhoto from "./components/UploadPhoto";
import UpdatePhoto from "./components/UpdatePhoto";
import SingleImageIndex from "./components/Image";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/:imageId/update'>
            <UpdatePhoto/>
          </Route>
          <Route exact path='/photos/upload/'>
            <UploadPhoto/>
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/photos/:imageId">
              <SingleImageIndex />
          </Route>
          <Route exact path="/:userId/:page">
            <UserPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
