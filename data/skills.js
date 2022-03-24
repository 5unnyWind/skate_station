const biliBaseUrl = 'https://www.bilibili.com/video/'

export default {
    '滑行': [
        // {
        //     videoName: '',
        //     number: '',
        //     get videoUrl() { return biliBaseUrl + this.number },
        //     posterUrl: '',
        // },
        {
            videoName: '脚位',
            number: 'BV1Li4y1t7VS',
            videoUrl: 'https://www.bilibili.com/video/BV1Li4y1t7VS',
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJGPoT.png'
        },
        {
            videoName: '上板滑行',
            number: 'BV1MJ411J79d',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJGSLq.jpg',
        },
        {
            videoName: '荡板',
            number: 'BV1At411K7Pm',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8bo8.jpg',
        },
        {
            videoName: '快速上板/收板',
            number: 'BV1Xt41187Y8',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8OJg.jpg',
        },
        {
            videoName: '转弯',
            number: 'BV15J411X7DQ',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8zyn.jpg',
        },
    ],
    '刹车': [
        {
            videoName: '横刹',
            number: 'BV14s411K7tR',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8xQs.jpg',
        },
        {
            videoName: '背向横刹',
            number: 'BV1hs411N7gp',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8XWQ.jpg',
        },
    ],
    '入门动作': [
        {
            videoName: 'Ollie',
            number: 'BV1rv41157KK',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8LFS.jpg',
        },
        {
            videoName: 'Manual',
            number: 'BV1RW411B7Cy',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJG9e0.jpg',
        },
        {
            videoName: 'Povit',
            number: 'BV1xa4y1p7mm',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJGCwV.jpg',
        },
    ],
    '进阶动作': [

    ],
    '其他': [
        {
            videoName: '正确摔跤',
            number: 'BV184411P7Vi',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8oLt.jpg',
        },
        {
            videoName: 'jaws 25阶Ollie全记录',
            number: 'BV1AW411h7wT',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ87eP.jpg',
        },
        {
            videoName: 'Dylan 蔚蓝人生',
            number: 'BV1bJ41137Mg',
            get videoUrl() { return biliBaseUrl + this.number },
            posterUrl: 'https://s1.ax1x.com/2022/03/24/qJ8Hdf.jpg',
        },
    ]
}