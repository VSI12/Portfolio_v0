import React from 'react'
import styles from './ids.module.css'
import Image from 'next/image'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link'
const tech_stack = [
  {
    tech: ["AWS", "Ansible", "Terraform", "Bash", "Python"],
    tech_icons: ["/icons/AWS.svg", "/icons/Ansible.svg", "/icons/terraform.svg", "/icons/Bash.svg", "/icons/Python.svg"]
},

]

const IDS = () => {
  return (
    <section className={styles.section} id="ids">

        <span className={styles.section__navback}>
          <Link href="/projects">
            <MoveLeft />
            Back to Projects
          </Link>
        </span>
        <h2 className={styles.section__title}>EC2 Instance Configuration using Terraform and Ansible</h2>

        <Image 
          src="/ec2.png" 
          alt="EC2 Instance Configuration Architecture" 
          width={1000} 
          height={667}
          className={styles.architecture}
        />
        <span className={styles.architecture__title}>Project Architecture Diagram</span>

        <div className={styles.tech_stack}>
          {tech_stack[0].tech.map((tech, index) => (
            <div key={tech} className={styles.tech}>
              <div className={styles.tech__icon}>
                <img
                  src={tech_stack[0].tech_icons[index]}
                  alt={tech}
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.tech__line}></div>
              <h3 className={styles.tech__title}>{tech}</h3>
            </div>
          ))}
        </div>

        <div className={styles.projects__content}>
          <div className={styles.projects__overview}>
            <div className={styles.title}>
              Project Overview
            </div>
            <div className={styles.project_des}>
              This project uses Terraform to provision an EC2 instance 
              on AWS and Ansible to configure it with a Flask application, 
              enabling a seamless Infrastructure-as-Code workflow.
             </div>
          </div>

          <div className={styles.projects__properties}>
            <div className={styles.project__features1}>
              <div className={styles.features}>
                  <div className={styles.title}>
                    Key Features
                  </div>
                  <ul className={styles.features__list}>
                    <li><span className={styles.bold}>Infrastructure as Code (IaC):</span> Automates the provisioning of an AWS EC2 instance using Terraform.</li>
                    <li><span className={styles.bold}>Configuration Management:</span> Installs and configures a Python Flask application using Ansible.</li>
                    <li><span className={styles.bold}>Automation:</span> Uses Bash scripting to streamline the entire process from provisioning to deployment.</li>
                    <li><span className={styles.bold}>Modular Structure:</span> Clean separation of concerns with dedicated folders for Terraform, Ansible, and scripts.</li>
                    <li><span className={styles.bold}>Repeatable Workflow:</span> Easily reproducible setup for consistent and reliable infrastructure and application deployment.</li>
                  </ul>
                </div>
            </div>

            <div className={styles.project__features2}>
              
              <div className={styles.project__links}>
                <div className={styles.title}>
                  View Project
                </div>
                
                <div className={styles.links}>
                  <a href="https://github.com/VSI12/EC2-Configuration-with-Terraform-and-Ansible" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <div className={styles.link__tech}>
                      <div className={styles.tech__icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={styles.icon}><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                      </div>
                      <div className={styles.tech__line}></div>
                      <h3 className={styles.tech__title}>
                        Github Repository
                      </h3>
                    </div>
                  </a>

                  <a href="https://victoriliya.hashnode.dev/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <div className={styles.link__tech}>
                      <div className={styles.tech__icon}>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 48 48" className={styles.icon}>
                      <path fill="#2962ff" d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"></path>
                      </svg>
                      </div>
                      <div className={styles.tech__line}></div>
                      <h3 className={styles.tech__title}>
                        Hashnode Blog Post
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.project__usage}>
            <div className={styles.title}>
              How it works
            </div>
            <ol className={styles.features__list}>
              <li><span className={styles.bold}>Terraform</span> provisions an EC2 instance on AWS and outputs its public IP.</li>
              <li>A <span className={styles.bold}>Bash script</span> captures the public IP and dynamically updates the Ansible inventory file.</li>
              <li><span className={styles.bold}>Ansible</span> connects to the instance via SSH and:
                <ul>
                  <li>Installs required packages (Python3, pip, Flask)</li>
                  <li>Clones or sets up the Flask app</li>
                  <li>Runs the Flask application</li>
                </ul>
              </li>
              <li>The Flask app becomes accessible via the EC2 public IP.</li>
            </ol>
          </div>
        </div>
    </section>     
  )
}

export default IDS