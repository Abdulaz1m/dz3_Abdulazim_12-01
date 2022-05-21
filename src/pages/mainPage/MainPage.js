import React from "react";
import News from "../../components/news/News";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({newsStatus: "close"})
        this.openNews = this.openNews.bind(this)
    }
    openNews() {
        this.setState({newsStatus: !this.state.newsStatus})
    }
    closeNews () {
        document.querySelector('.btn').innerHTML = "Открыть новости"
    }
    render() {
        return (
            <>
                {this.state.newsStatus === true ? <News/> : ''}
                <button onClick={this.openNews} className="btn">Открыть/Закрыть новости</button>
            </>
        )
    }
}

export default MainPage;