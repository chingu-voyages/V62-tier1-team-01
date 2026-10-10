import style from './about.module.css';

// import claire from '../../assets/claire.jpg';
// import francisco from '../../assets/fransico.jpg';
// import winona from '../../assets/winona.jpg';

const teamMembers = [
    {
        id: 1,
        'name': 'Claire Lee',
        'image': '/src/assets/claire.jpg',
        'github': 'https://github.com/llsy97',
        'linkedin': 'https://www.linkedin.com/in/seungyeon-lee-claire/',
    },
    {
        id: 2,
        'name': 'Fransico Guitler',
        'image': '/src/assets/francisco.jpg',
        'github': 'https://github.com/umfrancisco',
        'linkedin': 'https://www.linkedin.com/in/fransico-guitler/',
    },
    {
        id: 3,
        'name': 'Winona Murphy',
        'image': '/src/assets/winona.jpg',
        'github': 'https://github.com/wmurphy-collabstar',
        'linkedin': 'https://www.linkedin.com/in/winona-murphy-840048170/',
    }
];

export default function About() {
    return (
        <section className={style.about}>
            <div className={style.intro}>
                <h1>About Us</h1>
                <p>We're Voyage 62, tier 1 - team 1.</p>
            </div>

            <div className={style.teamMembers}>
                <h2>Team Members</h2>
                
                <div className={style.memberList}>
                    {teamMembers.map((member) => (
                        <article key={member.id} className={style.memberCard}>
                            <img
                                src={member.image || '/src/assets/placeholder.png'} alt={member.name}
                                className={style.memberImage}
                            />

                            <h3>{member.name}</h3>
                            <div className={style.socialLinks}>
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                )}

                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};