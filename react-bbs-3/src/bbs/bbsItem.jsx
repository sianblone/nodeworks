import React, { Component } from 'react';

// 표현할 데이터가 List 형태일 때 List의 한 줄(한 요소)를 표현하는 구조로 생성
class bbsItem extends Component {
    render() {
        const {bbsVO} = this.props
        return (
            <tr key={bbsVO.id}>
                <td>{bbsVO.bbsDate}</td>
                <td>{bbsVO.bbsAuth}</td>
                <td>{bbsVO.bbsTitle}</td>
            </tr>
        );
    }
}

export default bbsItem;