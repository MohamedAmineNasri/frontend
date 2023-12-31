    import React from 'react'
    import { Helmet } from "react-helmet";
    import "./AdminDashboard.css";
    import GroupAddIcon from "@mui/icons-material/GroupAdd";
    import DashboardIcon from "@mui/icons-material/Dashboard";
    import WorkIcon from "@mui/icons-material/Work";
    import CategoryIcon from "@mui/icons-material/Category";
    import StatComponent from "../../components/StatComponent.js";
    import { Box, Stack, Typography } from "@mui/material";
    import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
    import ChartComponent from '../../components/ChartComponent';
    import { Chart } from "react-google-charts";
    import { data, options } from "./data/data";
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../../redux/actions/userAction';





    const AdminDashboard = () => {
            const linkStyle = {
        color: "#000", // Set the desired color for visited links
        textDecoration: "none", // Remove underline
        // Add other styling properties if needed
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const { userInfo } = useSelector((state) => state.signIn);
     const logOutUser = () => {
       localStorage.removeItem("userInfo");
       dispatch(userLogoutAction()); // Dispatch your logout action if needed
       navigate("/login");
     };

        
    return (
        <div className="dashboard-container">
        <Helmet>
            <title>exported project</title>
        </Helmet>
        <div className="dashboard-dashboard">
            <div className="dashboard-frame1">
            <div className="dashboard-menu-collapsed-drawer">
                <div className="dashboard-menu-drawer">
                <div className="dashboard-menu-drawer1">
                    <div className="dashboard-dashboard1">
                    <div className="dashboard-list-item">
                        <div className="dashboard-container01">
                        <div className="dashboard-icon">
                            <img
                            src="/external4/homeoutlined1174-3fl.svg"
                            alt="HomeOutlined1174"
                            className="dashboard-home-outlined"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="dashboard-section-separator">
                    <div className="dashboard-list-subheader">
                        <img
                        src="/external4/line11174-a8d.svg"
                        alt="Line11174"
                        className="dashboard-line1"
                        />
                    </div>
                    </div>
                    <div className="dashboard-appspages">
                    <div className="dashboard-list-item1">
                        <div className="dashboard-container02">
                            <Link to="/AdminDash" className="dashboard-link" style={linkStyle}>
                        <div className="dashboard-icon01">
                            <DashboardIcon />
                        </div>
                        </Link>
                        </div>
                    </div>
                    <div className="dashboard-list-item2">
                        <div className="dashboard-container03">
                        <Link to="/AdminUserDash" className="dashboard-link" style={linkStyle}>
                            <div className="dashboard-icon02">
                            <GroupAddIcon />
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="dashboard-list-item3">
                        <div className="dashboard-container04">
                        <div className="dashboard-icon03">
                            <Link to="/AdminJobsDash" className="dashboard-link" style={linkStyle}>
                                <WorkIcon/>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="dashboard-list-item3">
                        
                        <div className="dashboard-icon03">
                            <Link to="/JobOffer" className="dashboard-link" style={linkStyle}>
                                <WorkIcon/>
                            </Link>
                        </div>
                    </div>
                    <div className="dashboard-list-item4">
                        <div className="dashboard-container05">
                            <Link to="/AdminCatDash" className="dashboard-link" style={linkStyle}>
                        <div className="dashboard-icon04">
                            <CategoryIcon/>
                        </div>
                        </Link>
                        </div>
                    </div>
                    <div className="dashboard-list-item1">
                    <div className="dashboard-container02">
                        <div className="dashboard-icon01">
                            <button
                            onClick={logOutUser}
                            style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                            }}
                            >
                            <LogoutIcon />
                            </button>
                        </div>
                        </div>
                    </div>
                
                    </div>
                    <div className="dashboard-section-separator1">
                    <div className="dashboard-list-subheader1">
                        <img
                        src="/external4/line11174-l1m5.svg"
                        alt="Line11174"
                        className="dashboard-line11"
                        />
                    </div>
                    </div>
                    <div className="dashboard-list-item6">
        
                    </div>
                    <div className="dashboard-settings">
                    <div className="dashboard-container08">
                        <div className="dashboard-icon07">
                        <img
                            src="/external4/settings1174-c0iw.svg"
                            alt="Settings1174"
                            className="dashboard-settings1"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="dashboard-frame11">
                <div className="dashboard-body">
                <div className="dashboard-cards">
                    <div className="dashboard-filter">
                    <span className="dashboard-text LightTypographyH6">
                        <span>Search Filters</span>
                    </span>
                    <div className="dashboard-filter1">
                        <div className="dashboard-select-outlined">
                        <div className="dashboard-input">
                            <div className="dashboard-inactive">
                            <span className="dashboard-text002 LightComponentsInputText">
                                <span>Select Role</span>
                            </span>
                            <div className="dashboard-arrow">
                                <img
                                src="/external4/arrowdropdown1215-rxve.svg"
                                alt="ArrowDropDown1215"
                                className="dashboard-arrow-drop-down"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="dashboard-select-outlined1">
                        <div className="dashboard-input1">
                            <div className="dashboard-inactive1">
                            <span className="dashboard-text004 LightComponentsInputText">
                                <span>Invoice Date</span>
                            </span>
                            <div className="dashboard-arrow1">
                                <img
                                src="/external4/arrowdropdown1215-kt6vl.svg"
                                alt="ArrowDropDown1215"
                                className="dashboard-arrow-drop-down1"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="dashboard-select-outlined2">
                        <div className="dashboard-input2">
                            <div className="dashboard-inactive2">
                            <span className="dashboard-text006 LightComponentsInputText">
                                <span>Invoice Status</span>
                            </span>
                            <div className="dashboard-arrow2">
                                <img
                                src="/external4/arrowdropdown1215-tvjo.svg"
                                alt="ArrowDropDown1215"
                                className="dashboard-arrow-drop-down2"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="dashboard-table">
                    <div className="dashboard-content1">
                        <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="45621"
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Administrators"
                        money=''
                    />
                    <StatComponent
                        value="450"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value="6548"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                    />

                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <ChartComponent>
                        <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width="100%"
                            height="300px"
                            legendToggle
                        />
                    </ChartComponent>
                </Stack>

            </Box>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default AdminDashboard