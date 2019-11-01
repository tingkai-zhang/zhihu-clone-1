import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestionsListRequest } from '../../redux/actions/question';
import { userLogout } from '../../redux/actions/account';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import ExplorePage from '../Explore';
import WaitingPage from '../Waiting';
import TopStoryPage from '../TopStory';


interface Props {
    question: any;
    fetchQuestionsListRequest: () => {};
    userLogout: () => {}
}

const HomePage: React.FC<Props> = ({ question, fetchQuestionsListRequest, userLogout }) => {
    // console.log('question', question);
    const { questions } = question;
    useEffect(() => {
        fetchQuestionsListRequest();
    }, []);

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/explore' component={ExplorePage} />
                <Route path='/question/waiting' component={WaitingPage} />
                <Route path='/' component={TopStoryPage} />
            </Switch>

            {/* <button onClick={userLogout}>log out</button> */}
            {/* <ul>
                {questions.length > 0 && questions.map(({ title, description, _id }: any) => <li key={_id}>
                    <div style={{ padding: 10 }}>
                        <h3>{title}</h3>
                        <p>{description}</p>

                    </div>

                </li>)}
            </ul> */}

        </div>
    )
}

const mapStateToProps = ({ question }: any) => {
    return {
        question
    }
}

export default connect(mapStateToProps, { fetchQuestionsListRequest, userLogout })(HomePage);
