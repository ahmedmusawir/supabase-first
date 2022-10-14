import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/general/MainNavbar";
import NotFound from "./pages/NotFound";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";
import PostsContextProvider from "./contexts/PostsContext";
import SupaMoose from "./pages/SupaMoose";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App(props) {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <MainNavbar />
        <main>
          <Switch>
            <Route exact path="/">
              <SupaMoose />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/fetch">
              <HomePage />
            </Route>
            <Route exact path="/post/:id">
              <SinglePostPage />
            </Route>
            <Route exact path="/edit-post/:id">
              <EditPostPage />
            </Route>
            <Route exact path="/add-post">
              <AddPostPage />
            </Route>

            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

App.propTypes = {};

export default App;
