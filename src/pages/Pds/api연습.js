let api연습 =
{
    code: "200",
    message: "성공!",
    result: {
        planViewDTOList: [
            {
                id: 0,
                title: "잠자기",
                startTime: {
                    hour: 23
                },
                endTime: {
                    hour: 8
                },
                status: true,
                category: {
                    id: 0,
                    name: "일상",
                    colorCode: "#e15d5e"
                }
            }
            ,
            {
                id: 3,
                title: "밥먹기",
                startTime: {
                    hour: 10
                },
                endTime: {
                    hour: 11
                },
                status: true,
                category: {
                    id: 0,
                    name: "일상",
                    colorCode: "#ffff"
                }
            },
            {
                id: 1,
                title: "간식",
                startTime: {
                    hour: 15
                },
                endTime: {
                    hour: 18
                },
                status: true,
                category: {
                    id: 0,
                    name: "일상",
                    colorCode: "#f3bec7"
                }
            }
        ],
        doViewDTOList: [
            {
                id: 0,
                title: "제목길게제목길게제목길게",
                startTime: {
                    hour: 9,
                    minute: 10
                },
                endTime: {
                    hour: 12,
                    minute: 30
                },
                category: {
                    id: 0,
                    name: "공부",
                    colorCode: "#f3bec7"
                }
            }
            ,
            {
                id: 0,
                title: "으으으으으아",
                startTime: {
                    hour: 19,
                    minute: 10
                },
                endTime: {
                    hour: 20,
                    minute: 30
                },
                category: {
                    id: 0,
                    name: "공부",
                    colorCode: "#ffff"
                }
            }
        ],
        seeViewDTO: [
            {
                id: 0,
                content: "ㅠㅠ 너무 힘들다"
            }
        ],
        userName: "임지은"
    }
}

export default api연습