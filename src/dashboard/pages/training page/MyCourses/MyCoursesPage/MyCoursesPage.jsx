import React, { useEffect, useState } from 'react'
import styles from "./MyCoursesPage.module.css";

import { Link } from 'react-router-dom';
import $ from 'jquery';
import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';


const MyCoursesPage = () => {
const [completed,setCompleted] = useState([])
const [inProg,setInProg] = useState([])
async function getCompletedCourses() {
    console.log(localStorage.getItem("userToken"));
    
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}courses/my_courses/completed/`,{
            headers:{
                Authorization:`Token ${localStorage.getItem("userToken")}`
            }
        })
        console.log(data);
        setCompleted(data)
    } catch (error) {
        console.log(error);
    }
}
async function getInProgCourses() {
    console.log(localStorage.getItem("userToken"));
    
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}courses/my_courses/inprogress/`,{
            headers:{
                Authorization:`Token ${localStorage.getItem("userToken")}`
            }
        })
        console.log(data);
        setInProg(data)
        
    } catch (error) {
        console.log(error);
    }
}

    useEffect(() => {

        // Show the first tab by default
        $('.myCourses-tabs .tab').hide();
        $('.myCourses-tabs .tab:first-child').show();
        $('.myCourses-tabs .tabs-nav li:first').addClass('selected');

        // Change tab class and display content
        $('.myCourses-tabs .tabs-nav a').on('click', function (event) {
            event.preventDefault();

            $('.myCourses-tabs .tabs-nav li').removeClass('selected');
            $('.myCourses-tabs .tabs-nav li').addClass('not-selected');
            $(this).parent().removeClass('not-selected');
            $(this).parent().addClass('selected');
            $('.myCourses-tabs .tab').hide();
            $($(this).attr('href')).show();

        });

    }, [])

    useEffect(()=>{
getCompletedCourses()
getInProgCourses()
console.log("asdasdasdasdasdsadsadsda");

    },[])


    return (


        <div className=" flex flex-col lg:flex-row gap-[50px] pt-[20px]">
            <div className={styles.trainings_courses + " myCourses-tabs w-full lg:w-2/3"}>

                <ul class="tabs-nav flex items-center gap-[20px] lg:gap-[40px] p-0 mt-0 mb-6 list-unstyled">

                    {/* taps that show the appropriate content in leaderBoard page */}
                    <li className='pr-[20px] lg:pr-[40px]'><a href="#inProgress">In Progress</a></li>
                    <li><a href="#completed">Completed</a></li>

                </ul>
                <div class="tabs-stage tabs-content">

                    {/* Biggest Winners content that show when user click on Biggest Winners tab in leaderBoard page */}
                    <div id="inProgress" className='tab space-x-4'>

                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block "}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                            <div className={styles.enrolled_date}>
                                                <p>12 July</p>
                                                <span>Started</span>
                                            </div>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span>Module 4 of 6</span>
                                        </div>
                                        <ProgressBar
                                            completed={90}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>



                    </div>

                    <div id="completed" className='tab space-x-4'>
                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block"}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span className={styles.completed}>Completed</span>
                                        </div>
                                        <ProgressBar
                                            completed={100}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block"}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span className={styles.completed}>Completed</span>
                                        </div>
                                        <ProgressBar
                                            completed={100}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block"}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span className={styles.completed}>Completed</span>
                                        </div>
                                        <ProgressBar
                                            completed={100}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block"}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span className={styles.completed}>Completed</span>
                                        </div>
                                        <ProgressBar
                                            completed={100}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {/* course card in St suite academy page that redirect to single training page*/}
                        <Link to="/dashboard/training/my-courses/single-course">
                            <div className={styles.border_animate}>
                                <div className={styles.course_card + " flex gap-[16px]"}>
                                    <div className={styles.course_card_img + " w-1/4 hidden lg:block"}>

                                    </div>
                                    <div className={styles.course_card_info + " w-full lg:w-3/4 space-y-2 lg:space-y-5"}>
                                        <div className='flex items-center justify-between'>
                                            <h4>Day Trading, Swing Trading, Position Trading</h4>
                                        </div>
                                        <div className='flex items-end justify-end lg:justify-between'>
                                            <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <span className={styles.completed}>Completed</span>
                                        </div>
                                        <ProgressBar
                                            completed={100}
                                            isLabelVisible={false}
                                            bgColor="#53ACFF"
                                            height="8px"
                                            baseBgColor="rgba(20, 20, 20, 1)"
                                            labelColor="#fff"
                                            transitionDuration="1"
                                            animateOnRender
                                            maxCompleted={100}
                                            className={styles.ProgressBar + ' w-full'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </div>

                </div>

            </div>

            {/* most liked and most completed section */}
            <div className={styles.most_liked_trainings + " w-full lg:w-1/3"}>

                {/* most liked */}
                <h5>Recommended for you</h5>

                {/* most liked training card */}
                <Link to="/dashboard/training/my-courses/single-course">
                    <div className={styles.most_liked_training_card}>
                        <div className="w-full min-h-36"></div>
                        <h6>Day Trading, Swing Trading, Position Trading</h6>
                        <ul>
                            <li>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4444 4.62293C12.3883 4.61492 12.3323 4.61492 12.2762 4.62293C11.0343 4.58287 10.0488 3.56535 10.0488 2.31547C10.0488 1.04156 11.0824 0 12.3643 0C13.6382 0 14.6798 1.03355 14.6798 2.31547C14.6718 3.56535 13.6863 4.58287 12.4444 4.62293Z" fill="#53ACFF" />
                                    <path d="M15.0563 10.1757C14.1589 10.7766 12.901 11.001 11.7393 10.8487C12.0437 10.1917 12.204 9.46266 12.212 8.6935C12.212 7.8923 12.0357 7.13116 11.6992 6.46616C12.885 6.30592 14.1429 6.53026 15.0482 7.13116C16.3141 7.96441 16.3141 9.33446 15.0563 10.1757Z" fill="#53ACFF" />
                                    <path d="M3.55937 4.62293C3.61545 4.61492 3.67154 4.61492 3.72762 4.62293C4.96949 4.58287 5.95496 3.56535 5.95496 2.31547C5.95496 1.03355 4.92141 0 3.63949 0C2.36558 0 1.33203 1.03355 1.33203 2.31547C1.33203 3.56535 2.31751 4.58287 3.55937 4.62293Z" fill="#53ACFF" />
                                    <path d="M3.64947 8.69366C3.64947 9.47082 3.81772 10.2079 4.12218 10.8729C2.99249 10.9931 1.81472 10.7527 0.949424 10.1839C-0.316475 9.34263 -0.316475 7.97258 0.949424 7.13132C1.80671 6.55445 3.01652 6.32209 4.15423 6.45029C3.82574 7.1233 3.64947 7.88444 3.64947 8.69366Z" fill="#53ACFF" />
                                    <path d="M8.11031 11.1127C8.04621 11.1046 7.9741 11.1046 7.90199 11.1127C6.42778 11.0646 5.25 9.85477 5.25 8.36453C5.25801 6.84225 6.48387 5.6084 8.01416 5.6084C9.53644 5.6084 10.7703 6.84225 10.7703 8.36453C10.7623 9.85477 9.59253 11.0646 8.11031 11.1127Z" fill="#53ACFF" />
                                    <path d="M5.50697 12.7721C4.29716 13.5813 4.29716 14.9113 5.50697 15.7125C6.88505 16.6339 9.14444 16.6339 10.5225 15.7125C11.7323 14.9033 11.7323 13.5733 10.5225 12.7721C9.15245 11.8507 6.89306 11.8507 5.50697 12.7721Z" fill="#53ACFF" />
                                </svg>
                                2.1k
                            </li>
                            <li>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5804 1.46831C14.3084 1.12924 13.9214 0.934858 13.5185 0.934858H12.1413C12.0722 -0.142691 11.4071 0.00708708 11.1481 0.00708708C10.8748 0.00708708 7.50002 0.00708708 7.50002 0.00708708C7.50002 0.00708708 4.12528 0.00708708 3.85194 0.00708708C3.5929 0.00708708 2.92772 -0.142658 2.85866 0.934858H1.48142C1.07864 0.934858 0.691603 1.12931 0.419524 1.46831C0.0897582 1.87932 -0.0525367 2.47247 0.0173949 3.14133C0.0303441 3.43847 0.16675 4.96477 1.60206 6.05037C2.33149 6.60207 3.03257 6.88335 3.67036 7.02649C3.81014 7.05972 3.95155 7.08957 4.09648 7.11287C4.09848 7.11532 4.10044 7.11784 4.10249 7.12025C7.08664 10.5751 6.72221 8.57645 6.72221 11.7433C6.72221 12.9711 5.17619 12.5736 5.17619 13.516C5.17619 14.4583 3.97124 13.6828 4.08277 14.8008C4.15109 15.4862 5.99639 16 7.50008 16C9.00365 16 10.8491 15.4862 10.9174 14.8008C11.0289 13.6828 9.82384 14.4583 9.82384 13.516C9.82384 12.5736 8.27791 12.9711 8.27791 11.7433C8.27791 8.57642 7.91345 10.5751 10.8976 7.12025C10.9017 7.11545 10.9055 7.11036 10.9096 7.10552C11.6528 6.99964 12.5051 6.72587 13.3981 6.05041C14.8333 4.9648 14.9697 3.4385 14.9826 3.14136C15.0525 2.47247 14.9102 1.87926 14.5804 1.46831ZM13.8051 3.00951L13.7997 3.04148L13.8004 3.08509C13.7976 3.16969 13.7417 4.21047 12.7275 4.97753C12.4502 5.18736 12.1818 5.34639 11.9209 5.46989C11.8618 5.49619 11.803 5.52253 11.7426 5.54544C12.0989 4.44153 12.1568 3.20682 12.1578 2.2368H13.5185C13.5641 2.2368 13.6315 2.25298 13.6933 2.32988C13.7985 2.46106 13.8393 2.70873 13.8051 3.00951ZM6.66544 6.32859C6.55396 6.48327 6.38899 6.56385 6.22256 6.56385C6.09957 6.56385 5.97576 6.51992 5.87196 6.42932C4.45455 5.19258 4.33581 3.49484 4.33581 2.00064C4.33581 1.65751 4.58873 1.37932 4.90062 1.37932C5.21252 1.37932 5.46538 1.65751 5.46538 2.00064C5.46538 3.31167 5.55019 4.56243 6.57385 5.45565C6.81825 5.66892 6.85924 6.05975 6.66544 6.32859ZM2.27243 4.97753C1.25923 4.21118 1.20239 3.17166 1.19949 3.08534L1.20014 3.05569L1.19486 3.00947C1.16065 2.70876 1.20143 2.46103 1.30672 2.32985C1.36848 2.25295 1.4358 2.23677 1.48142 2.23677H2.84211C2.84302 3.06488 2.88702 4.08544 3.12102 5.05331C3.16004 5.2202 3.20328 5.38613 3.25411 5.54918C2.93876 5.41797 2.6121 5.23445 2.27243 4.97753Z" fill="#53ACFF" />
                                </svg>

                                1025
                            </li>
                            <li>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z" fill="#53ACFF" />
                                </svg>
                                300
                            </li>
                        </ul>
                    </div>
                </Link>

                {/* most liked training card */}
                <Link to="/dashboard/training/my-courses/single-course">
                    <div className={styles.most_liked_training_card}>
                        <h6>Day Trading, Swing Trading, Position Trading</h6>
                        <ul>
                            <li>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4444 4.62293C12.3883 4.61492 12.3323 4.61492 12.2762 4.62293C11.0343 4.58287 10.0488 3.56535 10.0488 2.31547C10.0488 1.04156 11.0824 0 12.3643 0C13.6382 0 14.6798 1.03355 14.6798 2.31547C14.6718 3.56535 13.6863 4.58287 12.4444 4.62293Z" fill="#53ACFF" />
                                    <path d="M15.0563 10.1757C14.1589 10.7766 12.901 11.001 11.7393 10.8487C12.0437 10.1917 12.204 9.46266 12.212 8.6935C12.212 7.8923 12.0357 7.13116 11.6992 6.46616C12.885 6.30592 14.1429 6.53026 15.0482 7.13116C16.3141 7.96441 16.3141 9.33446 15.0563 10.1757Z" fill="#53ACFF" />
                                    <path d="M3.55937 4.62293C3.61545 4.61492 3.67154 4.61492 3.72762 4.62293C4.96949 4.58287 5.95496 3.56535 5.95496 2.31547C5.95496 1.03355 4.92141 0 3.63949 0C2.36558 0 1.33203 1.03355 1.33203 2.31547C1.33203 3.56535 2.31751 4.58287 3.55937 4.62293Z" fill="#53ACFF" />
                                    <path d="M3.64947 8.69366C3.64947 9.47082 3.81772 10.2079 4.12218 10.8729C2.99249 10.9931 1.81472 10.7527 0.949424 10.1839C-0.316475 9.34263 -0.316475 7.97258 0.949424 7.13132C1.80671 6.55445 3.01652 6.32209 4.15423 6.45029C3.82574 7.1233 3.64947 7.88444 3.64947 8.69366Z" fill="#53ACFF" />
                                    <path d="M8.11031 11.1127C8.04621 11.1046 7.9741 11.1046 7.90199 11.1127C6.42778 11.0646 5.25 9.85477 5.25 8.36453C5.25801 6.84225 6.48387 5.6084 8.01416 5.6084C9.53644 5.6084 10.7703 6.84225 10.7703 8.36453C10.7623 9.85477 9.59253 11.0646 8.11031 11.1127Z" fill="#53ACFF" />
                                    <path d="M5.50697 12.7721C4.29716 13.5813 4.29716 14.9113 5.50697 15.7125C6.88505 16.6339 9.14444 16.6339 10.5225 15.7125C11.7323 14.9033 11.7323 13.5733 10.5225 12.7721C9.15245 11.8507 6.89306 11.8507 5.50697 12.7721Z" fill="#53ACFF" />
                                </svg>
                                2.1k
                            </li>
                            <li>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5804 1.46831C14.3084 1.12924 13.9214 0.934858 13.5185 0.934858H12.1413C12.0722 -0.142691 11.4071 0.00708708 11.1481 0.00708708C10.8748 0.00708708 7.50002 0.00708708 7.50002 0.00708708C7.50002 0.00708708 4.12528 0.00708708 3.85194 0.00708708C3.5929 0.00708708 2.92772 -0.142658 2.85866 0.934858H1.48142C1.07864 0.934858 0.691603 1.12931 0.419524 1.46831C0.0897582 1.87932 -0.0525367 2.47247 0.0173949 3.14133C0.0303441 3.43847 0.16675 4.96477 1.60206 6.05037C2.33149 6.60207 3.03257 6.88335 3.67036 7.02649C3.81014 7.05972 3.95155 7.08957 4.09648 7.11287C4.09848 7.11532 4.10044 7.11784 4.10249 7.12025C7.08664 10.5751 6.72221 8.57645 6.72221 11.7433C6.72221 12.9711 5.17619 12.5736 5.17619 13.516C5.17619 14.4583 3.97124 13.6828 4.08277 14.8008C4.15109 15.4862 5.99639 16 7.50008 16C9.00365 16 10.8491 15.4862 10.9174 14.8008C11.0289 13.6828 9.82384 14.4583 9.82384 13.516C9.82384 12.5736 8.27791 12.9711 8.27791 11.7433C8.27791 8.57642 7.91345 10.5751 10.8976 7.12025C10.9017 7.11545 10.9055 7.11036 10.9096 7.10552C11.6528 6.99964 12.5051 6.72587 13.3981 6.05041C14.8333 4.9648 14.9697 3.4385 14.9826 3.14136C15.0525 2.47247 14.9102 1.87926 14.5804 1.46831ZM13.8051 3.00951L13.7997 3.04148L13.8004 3.08509C13.7976 3.16969 13.7417 4.21047 12.7275 4.97753C12.4502 5.18736 12.1818 5.34639 11.9209 5.46989C11.8618 5.49619 11.803 5.52253 11.7426 5.54544C12.0989 4.44153 12.1568 3.20682 12.1578 2.2368H13.5185C13.5641 2.2368 13.6315 2.25298 13.6933 2.32988C13.7985 2.46106 13.8393 2.70873 13.8051 3.00951ZM6.66544 6.32859C6.55396 6.48327 6.38899 6.56385 6.22256 6.56385C6.09957 6.56385 5.97576 6.51992 5.87196 6.42932C4.45455 5.19258 4.33581 3.49484 4.33581 2.00064C4.33581 1.65751 4.58873 1.37932 4.90062 1.37932C5.21252 1.37932 5.46538 1.65751 5.46538 2.00064C5.46538 3.31167 5.55019 4.56243 6.57385 5.45565C6.81825 5.66892 6.85924 6.05975 6.66544 6.32859ZM2.27243 4.97753C1.25923 4.21118 1.20239 3.17166 1.19949 3.08534L1.20014 3.05569L1.19486 3.00947C1.16065 2.70876 1.20143 2.46103 1.30672 2.32985C1.36848 2.25295 1.4358 2.23677 1.48142 2.23677H2.84211C2.84302 3.06488 2.88702 4.08544 3.12102 5.05331C3.16004 5.2202 3.20328 5.38613 3.25411 5.54918C2.93876 5.41797 2.6121 5.23445 2.27243 4.97753Z" fill="#53ACFF" />
                                </svg>

                                1025
                            </li>
                            <li>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z" fill="#53ACFF" />
                                </svg>
                                300
                            </li>
                        </ul>
                    </div>
                </Link>
                
                {/* most liked training card */}
                <Link to="/dashboard/training/my-courses/single-course">
                    <div className={styles.most_liked_training_card}>
                        <h6>Day Trading, Swing Trading, Position Trading</h6>
                        <ul>
                            <li>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4444 4.62293C12.3883 4.61492 12.3323 4.61492 12.2762 4.62293C11.0343 4.58287 10.0488 3.56535 10.0488 2.31547C10.0488 1.04156 11.0824 0 12.3643 0C13.6382 0 14.6798 1.03355 14.6798 2.31547C14.6718 3.56535 13.6863 4.58287 12.4444 4.62293Z" fill="#53ACFF" />
                                    <path d="M15.0563 10.1757C14.1589 10.7766 12.901 11.001 11.7393 10.8487C12.0437 10.1917 12.204 9.46266 12.212 8.6935C12.212 7.8923 12.0357 7.13116 11.6992 6.46616C12.885 6.30592 14.1429 6.53026 15.0482 7.13116C16.3141 7.96441 16.3141 9.33446 15.0563 10.1757Z" fill="#53ACFF" />
                                    <path d="M3.55937 4.62293C3.61545 4.61492 3.67154 4.61492 3.72762 4.62293C4.96949 4.58287 5.95496 3.56535 5.95496 2.31547C5.95496 1.03355 4.92141 0 3.63949 0C2.36558 0 1.33203 1.03355 1.33203 2.31547C1.33203 3.56535 2.31751 4.58287 3.55937 4.62293Z" fill="#53ACFF" />
                                    <path d="M3.64947 8.69366C3.64947 9.47082 3.81772 10.2079 4.12218 10.8729C2.99249 10.9931 1.81472 10.7527 0.949424 10.1839C-0.316475 9.34263 -0.316475 7.97258 0.949424 7.13132C1.80671 6.55445 3.01652 6.32209 4.15423 6.45029C3.82574 7.1233 3.64947 7.88444 3.64947 8.69366Z" fill="#53ACFF" />
                                    <path d="M8.11031 11.1127C8.04621 11.1046 7.9741 11.1046 7.90199 11.1127C6.42778 11.0646 5.25 9.85477 5.25 8.36453C5.25801 6.84225 6.48387 5.6084 8.01416 5.6084C9.53644 5.6084 10.7703 6.84225 10.7703 8.36453C10.7623 9.85477 9.59253 11.0646 8.11031 11.1127Z" fill="#53ACFF" />
                                    <path d="M5.50697 12.7721C4.29716 13.5813 4.29716 14.9113 5.50697 15.7125C6.88505 16.6339 9.14444 16.6339 10.5225 15.7125C11.7323 14.9033 11.7323 13.5733 10.5225 12.7721C9.15245 11.8507 6.89306 11.8507 5.50697 12.7721Z" fill="#53ACFF" />
                                </svg>
                                2.1k
                            </li>
                            <li>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5804 1.46831C14.3084 1.12924 13.9214 0.934858 13.5185 0.934858H12.1413C12.0722 -0.142691 11.4071 0.00708708 11.1481 0.00708708C10.8748 0.00708708 7.50002 0.00708708 7.50002 0.00708708C7.50002 0.00708708 4.12528 0.00708708 3.85194 0.00708708C3.5929 0.00708708 2.92772 -0.142658 2.85866 0.934858H1.48142C1.07864 0.934858 0.691603 1.12931 0.419524 1.46831C0.0897582 1.87932 -0.0525367 2.47247 0.0173949 3.14133C0.0303441 3.43847 0.16675 4.96477 1.60206 6.05037C2.33149 6.60207 3.03257 6.88335 3.67036 7.02649C3.81014 7.05972 3.95155 7.08957 4.09648 7.11287C4.09848 7.11532 4.10044 7.11784 4.10249 7.12025C7.08664 10.5751 6.72221 8.57645 6.72221 11.7433C6.72221 12.9711 5.17619 12.5736 5.17619 13.516C5.17619 14.4583 3.97124 13.6828 4.08277 14.8008C4.15109 15.4862 5.99639 16 7.50008 16C9.00365 16 10.8491 15.4862 10.9174 14.8008C11.0289 13.6828 9.82384 14.4583 9.82384 13.516C9.82384 12.5736 8.27791 12.9711 8.27791 11.7433C8.27791 8.57642 7.91345 10.5751 10.8976 7.12025C10.9017 7.11545 10.9055 7.11036 10.9096 7.10552C11.6528 6.99964 12.5051 6.72587 13.3981 6.05041C14.8333 4.9648 14.9697 3.4385 14.9826 3.14136C15.0525 2.47247 14.9102 1.87926 14.5804 1.46831ZM13.8051 3.00951L13.7997 3.04148L13.8004 3.08509C13.7976 3.16969 13.7417 4.21047 12.7275 4.97753C12.4502 5.18736 12.1818 5.34639 11.9209 5.46989C11.8618 5.49619 11.803 5.52253 11.7426 5.54544C12.0989 4.44153 12.1568 3.20682 12.1578 2.2368H13.5185C13.5641 2.2368 13.6315 2.25298 13.6933 2.32988C13.7985 2.46106 13.8393 2.70873 13.8051 3.00951ZM6.66544 6.32859C6.55396 6.48327 6.38899 6.56385 6.22256 6.56385C6.09957 6.56385 5.97576 6.51992 5.87196 6.42932C4.45455 5.19258 4.33581 3.49484 4.33581 2.00064C4.33581 1.65751 4.58873 1.37932 4.90062 1.37932C5.21252 1.37932 5.46538 1.65751 5.46538 2.00064C5.46538 3.31167 5.55019 4.56243 6.57385 5.45565C6.81825 5.66892 6.85924 6.05975 6.66544 6.32859ZM2.27243 4.97753C1.25923 4.21118 1.20239 3.17166 1.19949 3.08534L1.20014 3.05569L1.19486 3.00947C1.16065 2.70876 1.20143 2.46103 1.30672 2.32985C1.36848 2.25295 1.4358 2.23677 1.48142 2.23677H2.84211C2.84302 3.06488 2.88702 4.08544 3.12102 5.05331C3.16004 5.2202 3.20328 5.38613 3.25411 5.54918C2.93876 5.41797 2.6121 5.23445 2.27243 4.97753Z" fill="#53ACFF" />
                                </svg>

                                1025
                            </li>
                            <li>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 7.73333V14.1333C18 15.0889 17.039 16 16.0312 16H10.125C8.89882 16 7.90516 15.8565 6.75 15.4667C6.3933 15.3463 5.34375 14.9333 5.34375 14.9333V7.46667L9.98691 2.29553L10.4062 0H11.25C12.1847 0 12.8431 0.707133 12.8431 1.59347V2.09193C12.8431 3.2296 12.7708 4.36627 12.6266 5.49573L12.5793 5.86667H16.0312C17.039 5.86667 18 6.7778 18 7.73333ZM0 15.7333H4.21875V6.66667H0V15.7333Z" fill="#53ACFF" />
                                </svg>
                                300
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default MyCoursesPage
