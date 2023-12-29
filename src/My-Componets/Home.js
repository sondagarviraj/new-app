/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <>
                <div id="page-container">
                    <header id="main-header" data-height-onload={66}>
                        <div className="container clearfix et_menu_container">
                            <div className="logo_container">
                                <span className="logo_helper" />
                                <a href="https://re-pos.in/">
                                    <img
                                        src="https://re-pos.in/wp-content/uploads/2019/10/re-pos_logo.png"
                                        alt="RePOS"
                                        id="logo"
                                        data-height-percentage={500}
                                    />
                                </a>
                            </div>
                            <div id="et-top-navigation" data-height={66} data-fixed-height={40}>
                                <nav id="top-menu-nav">
                                    <div id="mega-menu-wrap-primary-menu" className="mega-menu-wrap">
                                        <div className="mega-menu-toggle">
                                            <div className="mega-toggle-blocks-left" />
                                            <div className="mega-toggle-blocks-center" />
                                            <div className="mega-toggle-blocks-right">
                                                <div
                                                    className="mega-toggle-block mega-menu-toggle-block mega-toggle-block-1"
                                                    id="mega-toggle-block-1"
                                                    tabIndex={0}
                                                >
                                                    <span
                                                        className="mega-toggle-label"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        <span className="mega-toggle-label-closed" />
                                                        <span className="mega-toggle-label-open" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul
                                            id="mega-menu-primary-menu"
                                            className="mega-menu max-mega-menu mega-menu-horizontal mega-no-js"
                                        >
                                            <li
                                                className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-34"
                                                id="mega-menu-item-34"
                                            >
                                                <a
                                                    className="mega-menu-link"
                                                    href="#"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                >
                                                    Tour
                                                    <span className="mega-indicator" />
                                                </a>
                                                <ul className="mega-sub-menu">
                                                    <li className="mega-menu-row" id="mega-menu-34-0">
                                                        <ul className="mega-sub-menu">
                                                            <li
                                                                className="mega-menu-column mega-menu-columns-6-of-12"
                                                                id="mega-menu-34-0-0"
                                                            >
                                                                <ul className="mega-sub-menu">
                                                                    <li
                                                                        className="mega-menu_pos mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1109 menu_pos"
                                                                        id="mega-menu-item-1109"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-friends mega-menu-link"
                                                                            href="https://re-pos.in/point-of-sale/"
                                                                        >
                                                                            Point Of Sale
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_stockmng mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1113 menu_stockmng"
                                                                        id="mega-menu-item-1113"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-tracking mega-menu-link"
                                                                            href="https://re-pos.in/stock-management/"
                                                                        >
                                                                            Stock Management
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_sales mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1111 menu_sales"
                                                                        id="mega-menu-item-1111"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-groups mega-menu-link"
                                                                            href="https://re-pos.in/sales-marketing/"
                                                                        >
                                                                            Sales And Marketing
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_crm mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1106 menu_crm"
                                                                        id="mega-menu-item-1106"
                                                                    >
                                                                        <a
                                                                            className="dashicons-star-half mega-menu-link"
                                                                            href="https://re-pos.in/customer-relationship-management-crm/"
                                                                        >
                                                                            Customer Relationship Tool
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                className="mega-menu-column mega-menu-columns-6-of-12"
                                                                id="mega-menu-34-0-1"
                                                            >
                                                                <ul className="mega-sub-menu">
                                                                    <li
                                                                        className="mega-menu_frnmng mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1107 menu_frnmng"
                                                                        id="mega-menu-item-1107"
                                                                    >
                                                                        <a
                                                                            className="dashicons-plugins-checked mega-menu-link"
                                                                            href="https://re-pos.in/franchisee-management/"
                                                                        >
                                                                            Franchisee Management
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_hdoffice mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1108 menu_hdoffice"
                                                                        id="mega-menu-item-1108"
                                                                    >
                                                                        <a
                                                                            className="dashicons-tickets mega-menu-link"
                                                                            href="https://re-pos.in/head-office-module/"
                                                                        >
                                                                            Head Office Module
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_reporting mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1110 menu_reporting"
                                                                        id="mega-menu-item-1110"
                                                                    >
                                                                        <a
                                                                            className="dashicons-text mega-menu-link"
                                                                            href="https://re-pos.in/reporting-analytics/"
                                                                        >
                                                                            Reporting Analytics
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_setting mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1112 menu_setting"
                                                                        id="mega-menu-item-1112"
                                                                    >
                                                                        <a
                                                                            className="dashicons-tagcloud mega-menu-link"
                                                                            href="https://re-pos.in/configuration-settings/"
                                                                        >
                                                                            Setting And Configuration
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-menu-item-35"
                                                id="mega-menu-item-35"
                                            >
                                                <a
                                                    className="mega-menu-link"
                                                    href="#"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    tabIndex={0}
                                                >
                                                    Products
                                                    <span className="mega-indicator" />
                                                </a>
                                                <ul className="mega-sub-menu">
                                                    <li className="mega-menu-row" id="mega-menu-35-0">
                                                        <ul className="mega-sub-menu">
                                                            <li
                                                                className="mega-menu-column mega-menu-columns-12-of-12"
                                                                id="mega-menu-35-0-0"
                                                            >
                                                                <ul className="mega-sub-menu">
                                                                    <li
                                                                        className="mega-menu_reana mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1081 menu_reana"
                                                                        id="mega-menu-item-1081"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-replies mega-menu-link"
                                                                            href=""
                                                                        >
                                                                            ReANALYSE - Reporting App
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_reecho mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1083 menu_reecho"
                                                                        id="mega-menu-item-1083"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-activity mega-menu-link"
                                                                            href=""
                                                                        >
                                                                            ReECHO - Feedback App
                                                                        </a>
                                                                    </li>
                                                                    <li
                                                                        className="mega-menu_tmo mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-has-icon mega-icon-left mega-menu-item-1082 menu_tmo"
                                                                        id="mega-menu-item-1082"
                                                                    >
                                                                        <a
                                                                            className="dashicons-buddicons-activity mega-menu-link"
                                                                            href=""
                                                                        >
                                                                            TabMyOrder – Realtime Ordering App
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-1085"
                                                id="mega-menu-item-1085"
                                            >
                                                <a className="mega-menu-link" href="" tabIndex={0}>
                                                    About
                                                </a>
                                            </li>
                                            <li
                                                className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-232661"
                                                id="mega-menu-item-232661"
                                            >
                                                <a className="mega-menu-link" href="" tabIndex={0}>
                                                    RestroTrail
                                                </a>
                                            </li>
                                            <li
                                                className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-1084"
                                                id="mega-menu-item-1084"
                                            >
                                                <a className="mega-menu-link" href="" tabIndex={0}>
                                                    Contact
                                                </a>
                                            </li>
                                            <li
                                                className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-129"
                                                id="mega-menu-item-129"
                                            >
                                                <a className="mega-menu-link" href="" tabIndex={0}>
                                                    Book A Demo
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div id="et_mobile_nav_menu">
                                    <div className="mobile_nav closed">
                                        <span className="select_page">Select Page</span>
                                        <span className="mobile_menu_bar mobile_menu_bar_toggle" />
                                    </div>
                                </div>
                            </div>
                            {/* #et-top-navigation */}
                        </div>
                        {/* .container */}
                        <div className="et_search_outer">
                            <div className="container et_search_form_container">
                                <form
                                    role="search"
                                    method="get"
                                    className="et-search-form"
                                    action="https://re-pos.in/"
                                >
                                    <input
                                        type="search"
                                        className="et-search-field"
                                        placeholder="Search …"
                                        defaultValue=""
                                        name="s"
                                        title="Search for:"
                                    />
                                </form>
                                <span className="et_close_search_field" />
                            </div>
                        </div>
                    </header>




                </div>
                <Outlet />


            </>
        )
    }
}
