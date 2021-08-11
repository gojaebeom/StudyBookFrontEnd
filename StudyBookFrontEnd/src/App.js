import React from "react";
import { Route, Switch } from "react-router-dom";
import JoinPage from "./components/pages/joinPage";
import KakaoJoinPage from "./components/pages/kakaoJoinPage";
import MainPage from "./components/pages/mainPage";
import PostDetailPage from "./components/pages/postDetailPage";
import PostDraftPage from "./components/pages/postDraftPage";
import UserDetailPage from "./components/pages/userDetailPage";

function App(){
    return(
    <React.Fragment>
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>{/* 메인페이지 */}
            <Route path="/posts/:id">
                <PostDetailPage />
            </Route>{/* 게시글 상세페이지 */}
            <Route path="/draft">
                <PostDraftPage />
            </Route>{/* 게시글 작성페이지 */}
            <Route path="/login">
                <JoinPage />
            </Route>{/* 로그인 페이지 */}
            <Route path="/users/kakao/login">
                <KakaoJoinPage />
            </Route>{/* 카카오 인증 페이지 */}
            <Route path="/users/:id">
                <UserDetailPage />
            </Route>{/* 회원 상세 페이지 */}
        </Switch>
    </React.Fragment>
    )
}
export default App;