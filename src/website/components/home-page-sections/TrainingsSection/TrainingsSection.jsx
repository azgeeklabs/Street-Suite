import React from 'react'
import "./TrainingsSection.css"
import trainingsImg from "../../../assets/home training img.svg"
import {Link} from 'react-router-dom'


const TrainingsSection = () => {
    return (
        // trainings section
        <section className='trainings'>

            {/* title section */}
            <h3 className='section-title'>TRAINING</h3>


            <div className='mx-auto trainings-container flex flex-col'>

               <div className='flex flex-col lg:flex-row items-center pl-4 lg:pl-[10%] '>

                    {/* content of trainings */}
                    <div className="trainings-content lg:w-1/2 ">
                        <div className="blog">
                            <div className="blog-title">
                                <svg viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.4098 0.116209L2.08189 0.00611629C1.6645 0.00449415 1.26356 0.168746 0.967275 0.462739C0.670988 0.756732 0.503624 1.15638 0.502002 1.57377L0.404142 26.7541C0.40252 27.1715 0.566772 27.5725 0.860764 27.8688C1.15476 28.1651 1.55441 28.3324 1.9718 28.334L30.2997 28.4441C30.7171 28.4458 31.1181 28.2815 31.4143 27.9875C31.7106 27.6935 31.878 27.2939 31.8796 26.8765L31.9775 1.6961C31.9791 1.27871 31.8148 0.877769 31.5208 0.581482C31.2269 0.285195 30.8272 0.117832 30.4098 0.116209ZM5.65565 9.00167C5.5059 8.85591 5.38668 8.68178 5.30495 8.48946C5.22322 8.29713 5.1806 8.09045 5.1796 7.88148C5.1786 7.67251 5.21922 7.46543 5.2991 7.27232C5.37899 7.07922 5.49653 6.90396 5.64487 6.75677C5.79321 6.60958 5.96937 6.4934 6.16309 6.41502C6.35681 6.33664 6.5642 6.29763 6.77316 6.30026C6.98212 6.30289 7.18846 6.3471 7.38014 6.43033C7.57183 6.51355 7.74502 6.63412 7.88961 6.785L9.13277 8.03785L10.3856 6.7947C10.5314 6.64495 10.7055 6.52573 10.8978 6.444C11.0902 6.36227 11.2968 6.31965 11.5058 6.31865C11.7148 6.31765 11.9219 6.35827 12.115 6.43815C12.3081 6.51804 12.4833 6.63558 12.6305 6.78392C12.7777 6.93226 12.8939 7.10843 12.9723 7.30214C13.0506 7.49586 13.0897 7.70325 13.087 7.91221C13.0844 8.12117 13.0402 8.32751 12.957 8.51919C12.8737 8.71088 12.7532 8.88407 12.6023 9.02866L11.3494 10.2718L12.5926 11.5247C12.8781 11.8226 13.0352 12.2208 13.03 12.6334C13.0248 13.046 12.8578 13.4401 12.5648 13.7307C12.2719 14.0214 11.8765 14.1854 11.4639 14.1874C11.0512 14.1893 10.6543 14.0292 10.3586 13.7413L9.11547 12.4885L7.86261 13.7316C7.56468 14.0172 7.16653 14.1742 6.7539 14.169C6.34128 14.1639 5.9472 13.9968 5.65655 13.7039C5.36589 13.411 5.20191 13.0156 5.19993 12.6029C5.19795 12.1903 5.35812 11.7934 5.64595 11.4977L6.8988 10.2545L5.65565 9.00167ZM27.195 17.4155C27.1934 17.8329 27.026 18.2325 26.7297 18.5265C26.4334 18.8205 26.0325 18.9848 25.6151 18.9831C25.1977 18.9815 24.7981 18.8142 24.5041 18.5179C24.2101 18.2216 24.0458 17.8206 24.0474 17.4033L24.0571 14.9072L23.7538 15.2082C21.5582 17.3992 18.9497 19.1329 16.0794 20.3088C13.2091 21.4846 10.1341 22.0794 7.03234 22.0585L6.71758 22.0573C6.30019 22.0557 5.90054 21.8883 5.60655 21.592C5.31256 21.2957 5.1483 20.8948 5.14993 20.4774C5.15155 20.06 5.31891 19.6604 5.6152 19.3664C5.91149 19.0724 6.31243 18.9081 6.72982 18.9097L7.04457 18.911C9.73254 18.9287 12.3973 18.4131 14.8847 17.3941C17.3721 16.3751 19.6327 14.8728 21.5356 12.9743L21.8405 12.6733L19.3445 12.6636C18.9271 12.662 18.5274 12.4946 18.2334 12.1983C17.9394 11.902 17.7752 11.5011 17.7768 11.0837C17.7784 10.6663 17.9458 10.2667 18.2421 9.97266C18.5384 9.67867 18.9393 9.51441 19.3567 9.51604L25.6518 9.5405C26.0692 9.54212 26.4688 9.70949 26.7628 10.0058C27.0568 10.3021 27.2211 10.703 27.2195 11.1204L27.195 17.4155Z" fill="white" />
                                </svg>

                                <h6>In-depth Strategies explained in detail</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic neque earum a modi consectetur quidem repellat</p>
                        </div>

                        <div className="blog">
                            <div className="blog-title">
                                <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.611 31.5446L35.496 22.3909C34.4221 18.3215 30.7499 15.481 26.5413 15.4646L12.0311 15.4082C7.82244 15.3918 4.12764 18.2038 3.02277 22.2647L0.836663 31.4016C0.275769 34.0231 1.7804 36.6464 4.32691 37.4862L4.45239 37.5266C6.80933 38.304 9.38814 37.3241 10.6353 35.1784L12.5175 32.4185C12.9901 31.6048 13.8619 31.1048 14.8024 31.1085L23.6478 31.1428C24.5885 31.1465 25.4557 31.6532 25.9226 32.4706L27.7832 35.245C29.0136 37.4004 31.5847 38.4003 33.9477 37.6413L34.0735 37.6018C36.6265 36.7818 38.1515 34.1703 37.611 31.5446ZM14.5539 25.3261L11.5411 25.3144L11.5294 28.3274L8.90637 28.3172L8.91808 25.3042L5.90573 25.2925L5.91592 22.6708L8.92827 22.6825L8.93997 19.6707L11.563 19.6809L11.5513 22.6927L14.5641 22.7044L14.5539 25.3261ZM27.8515 19.1165C28.7638 19.1201 29.5002 19.8615 29.4967 20.7739C29.4931 21.685 28.751 22.4207 27.8387 22.4172C26.9276 22.4136 26.1919 21.6722 26.1954 20.761C26.199 19.8487 26.9405 19.113 27.8515 19.1165ZM24.5253 25.7062C23.6142 25.7026 22.8778 24.9606 22.8814 24.0477C22.8849 23.1372 23.6271 22.4009 24.5381 22.4044C25.4498 22.408 26.1856 23.15 26.182 24.0605C26.1785 24.9734 25.4369 25.7097 24.5253 25.7062ZM27.813 29.019C26.902 29.0154 26.1662 28.274 26.1698 27.3628C26.1733 26.4505 26.9148 25.7148 27.8259 25.7183C28.7382 25.7219 29.4746 26.4633 29.471 27.3757C29.4675 28.2868 28.7254 29.0225 27.813 29.019ZM31.1271 25.7318C30.216 25.7283 29.4803 24.9862 29.4839 24.0733C29.4874 23.1628 30.2289 22.4265 31.1399 22.4301C32.0517 22.4336 32.788 23.1757 32.7844 24.0861C32.7809 24.9991 32.0389 25.7354 31.1271 25.7318Z" fill="white" />
                                    <path d="M12.4659 4.38877C14.427 3.04917 16.7894 2.27039 19.3379 2.27978C21.8863 2.29028 24.242 3.08731 26.1932 4.44212C26.694 4.78968 27.3819 4.66547 27.7301 4.1654C28.0776 3.66407 27.954 2.9767 27.4533 2.62854C25.1518 1.02967 22.3544 0.0830748 19.3465 0.071975C16.3384 0.0596943 13.5332 0.984513 11.2201 2.56545C10.7166 2.90971 10.5877 3.59668 10.9313 4.10011C11.2756 4.60354 11.9625 4.73251 12.4659 4.38877Z" fill="white" />
                                    <path d="M24.6599 8.32104C24.9578 7.89159 24.8516 7.30167 24.4229 7.00366L24.4223 7.00366C22.9766 5.99821 21.2159 5.40245 19.3254 5.3957C17.4348 5.38776 15.6696 5.96974 14.2155 6.96399C13.7838 7.25858 13.673 7.84774 13.9677 8.27882C14.2623 8.71058 14.8514 8.82131 15.2825 8.52664C16.4357 7.73955 17.8204 7.2829 19.318 7.28806C20.8155 7.29454 22.1961 7.76187 23.3424 8.55797C23.7719 8.85598 24.3613 8.74982 24.6599 8.32104Z" fill="white" />
                                    <path d="M17.2108 11.3613C16.8508 11.6069 16.7583 12.0975 17.0033 12.457C17.249 12.8171 17.7396 12.9096 18.099 12.6646C18.4424 12.4306 18.8514 12.2954 19.2986 12.2971C19.7452 12.2989 20.1537 12.4378 20.494 12.6733C20.8516 12.9217 21.3429 12.833 21.5913 12.4755C21.8398 12.1179 21.7511 11.6266 21.3935 11.3782C20.8025 10.9669 20.079 10.7232 19.3048 10.7202C18.5298 10.7165 17.8051 10.9558 17.2108 11.3613Z" fill="white" />
                                </svg>

                                <h6>In-depth Strategies explained in detail</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic neque earum a modi consectetur quidem repellat</p>
                        </div>

                        <div className="blog">
                            <div className="blog-title">
                                <svg viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.44204 5.80341L6.44874 4.08155C6.45054 3.61744 6.07544 3.23941 5.61133 3.23761C5.14699 3.2358 4.76968 3.61091 4.76788 4.07501L4.70151 21.1504C4.70125 21.2183 4.71119 21.2838 4.72586 21.3473C4.71946 22.7474 4.71353 24.1484 4.70795 25.4816L4.11105 25.4793C2.84832 25.4744 1.81146 26.4616 1.73336 27.7063C1.73403 27.7822 1.73477 27.8395 1.73559 27.877C1.73598 27.8998 1.73205 27.9211 1.7306 27.9434C1.77671 29.209 2.8154 30.227 4.09266 30.2319L4.69101 30.2343C4.68904 30.8646 4.6878 31.4314 4.68688 31.9156L3.95886 31.9128C3.91521 31.9126 3.87351 31.9063 3.83085 31.8995C1.7128 31.759 0.0354096 29.9919 0.0437722 27.8401C0.0439618 27.7913 0.0498436 27.7439 0.0513975 27.695C0.0355037 25.1983 0.134891 6.21139 0.146051 4.14499C0.142634 4.11577 0.137048 4.08735 0.137164 4.05742C0.145699 1.8201 1.97309 0.0070939 4.21049 0.0157893L5.55386 0.0210102L25.9386 0.100233L26.144 0.101031C26.6083 0.102836 26.9834 0.480623 26.9816 0.94497L26.969 4.16771L10.5339 4.10384C8.93679 4.09659 7.48743 4.74957 6.44204 5.80341ZM8.25962 33.6042C8.26029 33.68 8.26094 33.738 8.26176 33.775C8.26168 33.7977 8.25782 33.8196 8.25677 33.8423C8.30281 35.107 9.34158 36.1254 10.6193 36.1304L31.7135 36.2124L31.7225 33.8889C31.7243 33.4241 32.1024 33.0495 32.5667 33.0513C33.031 33.0531 33.4057 33.4307 33.4039 33.8954L33.3916 37.0599C33.3898 37.5237 33.0122 37.8989 32.5479 37.897L10.4857 37.8113C10.4413 37.8111 10.3996 37.8048 10.3574 37.7975C8.23962 37.6569 6.56199 35.8899 6.57035 33.7386C6.57054 33.6898 6.57666 33.6419 6.5783 33.593C6.56216 31.0964 6.66179 12.1097 6.67271 10.0433C6.66945 10.0136 6.66362 9.98538 6.66374 9.95521C6.67244 7.71829 8.49983 5.90513 10.7372 5.91382L12.0806 5.91904L32.4656 5.99827L32.6714 5.99907C33.1356 6.00087 33.5103 6.37866 33.5085 6.843L33.4162 30.6031C33.4144 31.0669 33.0368 31.442 32.5725 31.4402C32.5677 31.4402 32.5625 31.4388 32.5577 31.4387C32.496 31.4533 32.432 31.4625 32.3656 31.4622L10.6373 31.3778C9.37449 31.3728 8.33771 32.3601 8.25962 33.6042ZM11.2278 27.0484C11.226 27.5127 11.6008 27.8907 12.0652 27.8925C12.5294 27.8943 12.9073 27.5192 12.9091 27.0549L12.9755 9.97966C12.9773 9.51531 12.6024 9.13752 12.1381 9.13572C11.6737 9.13392 11.2959 9.50878 11.2941 9.97312L11.2278 27.0484Z" fill="white" />
                                </svg>


                                <h6>In-depth Strategies explained in detail</h6>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic neque earum a modi consectetur quidem repellat</p>
                        </div>

                    </div>
                    {/* end content of trainings */}

                    {/* img of trainings section */}
                    <div className="trainings-img ">
                        <img src={trainingsImg} alt="" />
                    </div>
                    {/* end img of trainings section */}

               </div>
                {/* Seeing is believing, access All Street Suite Pro Features part */}
                <div className="signUpNow border-animate w-full order-3 lg:max-w-[90%] mx-auto">
                    <div className="signUpNow-body">
                        <div className="signUpNow-content">
                            <h4>Seeing is believing, access All <span> Street Suite </span> <br /> Features for Free, no commitments</h4>
                            <Link to="/signup">Sign Up Now</Link>
                        </div>
                    </div>
                </div>
                {/* end of Seeing is believing, access All Street Suite Pro Features part */}
            </div>
        </section>
        //end trainings section
    )
}

export default TrainingsSection
