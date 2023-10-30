import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useSelector } from 'react-redux';

const StatsContainer = () => {
    const { stats } = useSelector((store) => store.allJobs);
    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: '#fdbb5a',
            bcg: '#fcefc7',
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#1dbf72',
            bcg: '#ebebf1',
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: '#ef4e4e',
            bcg: '#ffeeee',
        },
    ];

    return <Wrapper>
        {defaultStats.map((item, index) => {
            return <StatItem key={index} {...item} />
        })}
    </Wrapper>

}
export default StatsContainer