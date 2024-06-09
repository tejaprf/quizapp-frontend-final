import React from 'react';
import '../styles/packages.css'; // Ensure you create the corresponding CSS file
import avatar from '../avatar.png'
import { Link } from 'react-router-dom';

const DigitalLiteracyPrograms = () => {
    return (
        <div className="digital-literacy-container">
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <img src={avatar} style={{display:"inline", width:"5vw",height:"5vw"}}/>
            <header className="header">
                <h1>Unlock Expert Digital Literacy at Unbeatable Prices</h1>
                <h2>Start Safeguarding Your Child's Future Today!</h2>
            </header>
            <Link to="/SignUp">
            <button className='signInButton' style={{backgroundColor:'#8668cd',color:'white',marginLeft:'30px'}}>Sign Up</button>
            </Link>
            </div>
            {/* <div className="table-container">
                <div className="table-row header-row">
                    <div className="table-column header-column">Package</div>
                    {packages.map((pkg, index) => (
                        <div className="table-column header-column" key={index}>
                            {pkg.name}
                        </div>
                    ))}
                </div>
                {rows.map((row, rowIndex) => (
                    <div className="table-row" key={rowIndex}>
                        <div className="table-column header-column" style={{background:'white'}}>{row.title}</div>
                        {packages.map((pkg, pkgIndex) => (
                            <div className="table-column" key={pkgIndex}>
                                <div className="package-details">
                                    {Array.isArray(pkg[row.field]) ? (
                                        <ul>
                                            {pkg[row.field].map((item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{pkg[row.field]}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div> */}
                <table className="table-container">
      <thead>
        <tr className="table-row header-row">
          <th className="table-column header-column">Package</th>
          {packages.map((pkg, index) => (
            <th className="table-column header-column" key={index}>
              <span>{pkg.name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr className="table-row" key={rowIndex}>
            <td className="table-column header-column" ><span style={{ backgroundColor: row.title === 'Subscription' ? '#00AF27B0':'white',padding:'10px',borderRadius:'5px' }}>{row.title}</span>
</td>
            {packages.map((pkg, pkgIndex) => (
              <td className="table-column" key={pkgIndex}>
                <div className="package-details">
                  {Array.isArray(pkg[row.field]) ? (
                    <ul>
                      {pkg[row.field].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{pkg[row.field]}</p>
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
            <footer className="footer">
                <p style={{color:'#710A85',fontSize:'30px'}}>Check out our <Link to="/SignIn">Quizzes</Link>, Play, Win and Learn</p>
            </footer>
        </div>
    );
};

const packages = [
    {
        name: 'Rare Digital Hero',
        description: 'Introduces Foundational Digital Literacy Topics And Basic Online Safety Concepts Through Interactive Quizzes.',
        ageGroup: ['Beginners To Digital Literacy.', 'Age: 9-10 Years'],
        topics: [
            'Balancing Online And Offline Activities',
            'Bluetooth Technology',
            'Computer Essentials',
            'Email Etiquette',
            'Internet Basics',
            'Malware Awareness',
            'Microsoft Word Basics',
            'Password Security',
            'Smartphone Basics',
        ],
        subscription: '₹99/- For 15 Quizzes Across Topics',
    },
    {
        name: 'Legendary Digital Hero',
        description: 'Expands On Foundational Knowledge With Quizzes Covering Advanced Digital Etiquette, Responsible AI Use, And Social Media Awareness.',
        ageGroup: ['Seeking To Build On To Digital Literacy.', 'Age: 11-12 Years'],
        topics: [
            'Advanced Password Security',
            'Effective Search Strategies',
            'Email Best Practices',
            'Introduction To Virus/Antivirus',
            'Malware Detection And Prevention',
            'Microsoft Word & PPT Basics',
            'Phishing Awareness',
            'Recognizing Fake News',
            'Safe Internet Surfing Practices',
            'Smart Device Usage',
            'Understanding Digital Communication',
        ],
        subscription: '₹99/- For 15 Quizzes Across Topics',
    },
    {
        name: 'Supreme Digital Hero',
        description: 'Comprehensive Digital Literacy Curriculum Covering Advanced Topics Such As Malware, AI, Cyberbullying, And Social Media.',
        ageGroup: ['Deepen Understanding Of Digital Literacy.', 'Age: 13-14 Years'],
        topics: [
            'Advanced Cyber Security',
            'Advanced MS Excel And PowerPoint Skills',
            'Artificial Intelligence (AI) Ethics',
            'Cyberbullying Prevention',
            'Cybercrime Awareness',
            'Digital Communication Strategies',
            'Digital Identity Protection',
            'Firewall Basics',
            'Parental Control Tools',
            'Recognizing And Combating Fake News',
            'Social Media Best Practices',
        ],
        subscription: '₹99/- For 10 Quizzes Across Topics',
    },
    {
        name: 'Ultimate Digital Hero',
        description: 'Advanced Digital Literacy Program Focusing On Digital Identity, Communication, Fake News, And Advanced MS Tools Usage.',
        ageGroup: ['Advance Level For Adept Technology Users.', 'Age: 15-16 Years'],
        topics: [
            'Advanced AI Usage And Ethics',
            'Advanced Digital Identity Management',
            'Advanced MS Excel And PowerPoint Techniques',
            'Cybercrime Prevention And Awareness',
            'Effective Digital Communication Strategies',
            'Identifying And Combating Fake News',
            'Social Media Management And Ethics',
        ],
        subscription: '₹149/- For 10 Quizzes Across Topics',
    },
];

const rows = [
    { title: 'What It Is?', field: 'description' },
    { title: 'Sustainability & Ideal Age Group', field: 'ageGroup' },
    { title: 'Topics Covered (Sample, Non-Exhaustive)', field: 'topics' },
    { title: 'Subscription', field: 'subscription' },
];

export default DigitalLiteracyPrograms;
