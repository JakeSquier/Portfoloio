import React from 'react';

class ProjectCard extends React.Component{

    render(){

        return(
            <div className='projectCard hidden' id={'card' + this.props.val}>
                <div>
                    <a href={this.props.project.externalLink}>
                        <svg className="mentionsExternalLink" id={`${this.props.project.title}-externalLink`} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                    <a href={this.props.project.gitLink}>
                        <svg className="mentionsGitLink" id={`${this.props.project.title}-gitLink`} role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </a>
                </div>
                <div className='mentionsContent'>
                    <h1 className='mentionSubTitle'>{this.props.project.title}</h1>
                    <p className='mentionDescription'>{this.props.project.description}</p>
                </div>
                <div className='listContainer'>
                    <ul className='mentionsTechList'>
                        {this.props.project.tech.map((tech) => <li className='technology'>{tech}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectCard;