import React from 'react'
import classNames from 'classnames'
import Header from '../../../components/Header/'
import Footer from '../../../components/Footer/'
import styles from './styles.css'

const fakeCompyList = [
    {
        id: '0',
        title: 'Title0',
        img: 'http://fakeimg.pl/200/',
        desc: 'Dicscription Dicscription Dicscription Dicscription Dicscription Dicscription Dicscription Dicscription Dicscription '
    },
    {
        id: '1',
        title: 'Title1',
        img: 'http://fakeimg.pl/200/',
        desc: 'Dicscription1'
    },
    {
        id: '2',
        title: 'Title2',
        img: 'http://fakeimg.pl/200/',
        desc: 'Dicscription2'
    },
    {
        id: '3',
        title: 'Title3',
        img: 'http://fakeimg.pl/200/',
        desc: 'Dicscription3'
    }
]

const fakeEndorseList = [
    {
        id: '0',
        category: 'A',
        categoryList: ['A1', 'A2', 'A3']
    },
    {
        id: '1',
        category: 'B',
        categoryList: ['B1', 'B2', 'B3']
    },
    {
        id: '2',
        category: 'C',
        categoryList: ['C1', 'C2', 'C3']
    }
]

class EndorseBar extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isShowCategoryDetail: false,
            currentCategoryDetail: null
        }

        this.showDetailItem = this.showDetailItem.bind(this)
        this.hideDetailItem = this.hideDetailItem.bind(this)
    }
    static propTypes = {
        endorseList: React.PropTypes.object.isRequired
    };

    showDetailItem(category) {
        let {categoryList} = category
        this.setState({
            isShowCategoryDetail: true,
            currentCategoryDetail: categoryList
        })
    }

    endorseBarCotent(showDetail, endorseList) {
        if (showDetail) {
            return endorseList.map((endorse, index) => {
                return <li
                  key={index}
                  className={classNames(`${styles.endorse}`, 'item')}
                >
                {endorse}
                </li>
            })
        } else {
            return endorseList.map((endorse, index) => {
                return <li
                  key={index}
                  className={classNames(`${styles['endorse' + endorse.category]}`, 'item')}
                  onClick={this.showDetailItem.bind(this, endorse)}
                >
                {endorse.category}
                </li>
            })
        }
    }

    hideDetailItem() {
        this.setState({
            isShowCategoryDetail: false
        })
    }

    render() {
        let {isShowCategoryDetail} = this.state
        let endorseList = isShowCategoryDetail ? this.state.currentCategoryDetail : this.props.endorseList
        return (
          <div>
            <ul className={styles.endorsebar}>
                {this.endorseBarCotent(isShowCategoryDetail, endorseList)}
            </ul>
            {isShowCategoryDetail && <div className={styles.btn_endorsebar} onClick={this.hideDetailItem}>Back</div>}
          </div>
        )
    }
}

class CompanysBlock extends React.Component {
    static defaultProps = {
        company: {}
    };
    static propTypes = {
        company: React.PropTypes.object.isRequired
    };
    render() {
        let {title, desc, img} = this.props.company
        return (
          <div className={styles.com}>
            <img src={img} />
            <div className={styles.com_body}>
              <h6 className={styles.com_title}>{title}</h6>
              <div className={styles.com_endore}>
                <em className={styles.com_endore_iconLike}>Like</em>
                <em className={styles.com_endore_iconHate}>Hate</em>
              </div>
              <p className={styles.com_desc}>{desc}</p>
            </div>
          </div>
        )
    }
}

class Index extends React.Component {
    constructor(props, context) {
        super(props, context)

        // GetInitialState (Better)
        this.state = {
        }
        // 在 Constructor 內先綁定 this
        this._method = this._method.bind(this)
    }

    // GetDefaultProps
    static defaultProps = {
    }
    // Type Define
    static propTypes = {
    }

    // GetInitialState (Normal)
    state = {
    }

    componentWillMount() {
        // document.addEventListener('change', this._method)
    }
    componentWillUnmount() {
        // document.removeEventListener('change', this._method)
    }

    // Once
    componentDidMount() {
        // $.ajax({
        //   success: this.onDataReceived
        // })
        // window.addEventListener('resize', this.handleResize)
    }

    // skip if no props change
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps !== this.props) {
        }
        this.setState({
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    _method(event) {
    }

    _methodAutoBind = (event) => {
        // 把方法直接作為一個arrow function的屬性來定義，初始化的時候就繫結好了this指針
    }

    render() {
        let companyList = fakeCompyList
        return (
          <div>
            <Header additionalClass="index" />
            <main className={styles.page}>
              <div className={styles.companyswrap}>
                {
                  companyList.map((company, index) => {
                      return (
                        <div className={styles.comblock}>
                          <CompanysBlock company={company} key={index} />
                        </div>
                      )
                  })
                }
              </div>
            </main>
            <Footer>
              <EndorseBar endorseList={fakeEndorseList} />
            </Footer>
          </div>
        )
    }
}
export default Index
