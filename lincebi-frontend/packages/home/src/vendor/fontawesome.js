import Vue from 'vue';

import '@fortawesome/fontawesome-svg-core/styles.css';

Vue.component('FontAwesomeIcon', async () => {
	const [{ FontAwesomeIcon }, { config, library }] = await Promise.all([
		/* eslint-disable prettier/prettier */
		import('@fortawesome/vue-fontawesome'),
		import('@fortawesome/fontawesome-svg-core'),
		/* eslint-enable */
	]);

	config.autoAddCss = false;

	const icons = await Promise.all([
		/* eslint-disable prettier/prettier */
		import('@fortawesome/free-regular-svg-icons/faClock'),
		import('@fortawesome/free-regular-svg-icons/faFileLines'),
		import('@fortawesome/free-regular-svg-icons/faSquare'),
		import('@fortawesome/free-regular-svg-icons/faSquareCheck'),
		import('@fortawesome/free-regular-svg-icons/faWindowMaximize'),
		import('@fortawesome/free-regular-svg-icons/faWindowRestore'),
		import('@fortawesome/free-solid-svg-icons/faAngleDown'),
		import('@fortawesome/free-solid-svg-icons/faAngleUp'),
		import('@fortawesome/free-solid-svg-icons/faArrowsRotate'),
		import('@fortawesome/free-solid-svg-icons/faBars'),
		import('@fortawesome/free-solid-svg-icons/faBook'),
		import('@fortawesome/free-solid-svg-icons/faBoxArchive'),
		import('@fortawesome/free-solid-svg-icons/faBriefcase'),
		import('@fortawesome/free-solid-svg-icons/faBullhorn'),
		import('@fortawesome/free-solid-svg-icons/faCalendar'),
		import('@fortawesome/free-solid-svg-icons/faCartShopping'),
		import('@fortawesome/free-solid-svg-icons/faChartBar'),
		import('@fortawesome/free-solid-svg-icons/faChartPie'),
		import('@fortawesome/free-solid-svg-icons/faChevronLeft'),
		import('@fortawesome/free-solid-svg-icons/faChevronRight'),
		import('@fortawesome/free-solid-svg-icons/faClock'),
		import('@fortawesome/free-solid-svg-icons/faCoins'),
		import('@fortawesome/free-solid-svg-icons/faDatabase'),
		import('@fortawesome/free-solid-svg-icons/faDiagramProject'),
		import('@fortawesome/free-solid-svg-icons/faEarthEurope'),
		import('@fortawesome/free-solid-svg-icons/faFileLines'),
		import('@fortawesome/free-solid-svg-icons/faFilter'),
		import('@fortawesome/free-solid-svg-icons/faFlask'),
		import('@fortawesome/free-solid-svg-icons/faFolderOpen'),
		import('@fortawesome/free-solid-svg-icons/faGear'),
		import('@fortawesome/free-solid-svg-icons/faGlobe'),
		import('@fortawesome/free-solid-svg-icons/faGraduationCap'),
		import('@fortawesome/free-solid-svg-icons/faHandshakeAngle'),
		import('@fortawesome/free-solid-svg-icons/faHelmetSafety'),
		import('@fortawesome/free-solid-svg-icons/faHourglass'),
		import('@fortawesome/free-solid-svg-icons/faHouse'),
		import('@fortawesome/free-solid-svg-icons/faIndustry'),
		import('@fortawesome/free-solid-svg-icons/faLandmark'),
		import('@fortawesome/free-solid-svg-icons/faLayerGroup'),
		import('@fortawesome/free-solid-svg-icons/faLightbulb'),
		import('@fortawesome/free-solid-svg-icons/faLink'),
		import('@fortawesome/free-solid-svg-icons/faList'),
		import('@fortawesome/free-solid-svg-icons/faMagnifyingGlass'),
		import('@fortawesome/free-solid-svg-icons/faMapLocation'),
		import('@fortawesome/free-solid-svg-icons/faPencil'),
		import('@fortawesome/free-solid-svg-icons/faPlus'),
		import('@fortawesome/free-solid-svg-icons/faRightFromBracket'),
		import('@fortawesome/free-solid-svg-icons/faRocket'),
		import('@fortawesome/free-solid-svg-icons/faSatellite'),
		import('@fortawesome/free-solid-svg-icons/faSave'),
		import('@fortawesome/free-solid-svg-icons/faScaleBalanced'),
		import('@fortawesome/free-solid-svg-icons/faScrewdriverWrench'),
		import('@fortawesome/free-solid-svg-icons/faSortAmountDown'),
		import('@fortawesome/free-solid-svg-icons/faSortAmountUp'),
		import('@fortawesome/free-solid-svg-icons/faStar'),
		import('@fortawesome/free-solid-svg-icons/faStore'),
		import('@fortawesome/free-solid-svg-icons/faSuitcaseMedical'),
		import('@fortawesome/free-solid-svg-icons/faTable'),
		import('@fortawesome/free-solid-svg-icons/faTruck'),
		import('@fortawesome/free-solid-svg-icons/faUpDownLeftRight'),
		import('@fortawesome/free-solid-svg-icons/faUser'),
		import('@fortawesome/free-solid-svg-icons/faUsers'),
		import('@fortawesome/free-solid-svg-icons/faWarehouse'),
		import('@fortawesome/free-solid-svg-icons/faWrench'),
		import('@fortawesome/free-solid-svg-icons/faXmark'),
		import('@lincebi/frontend-common/src/fontawesome/facFileAdhoc'),
		import('@lincebi/frontend-common/src/fontawesome/facFileCsv'),
		import('@lincebi/frontend-common/src/fontawesome/facFileOther'),
		import('@lincebi/frontend-common/src/fontawesome/facFilePdf'),
		import('@lincebi/frontend-common/src/fontawesome/facFilePrpt'),
		import('@lincebi/frontend-common/src/fontawesome/facFileSaiku'),
		import('@lincebi/frontend-common/src/fontawesome/facFileSta'),
		import('@lincebi/frontend-common/src/fontawesome/facFileStd'),
		import('@lincebi/frontend-common/src/fontawesome/facFileStolap'),
		import('@lincebi/frontend-common/src/fontawesome/facFileStp'),
		import('@lincebi/frontend-common/src/fontawesome/facFileUrl'),
		import('@lincebi/frontend-common/src/fontawesome/facFileWcdf'),
		import('@lincebi/frontend-common/src/fontawesome/facFileXjpivot'),
		import('@lincebi/frontend-common/src/fontawesome/facToolCde'),
		import('@lincebi/frontend-common/src/fontawesome/facToolJpivot'),
		import('@lincebi/frontend-common/src/fontawesome/facToolOther'),
		import('@lincebi/frontend-common/src/fontawesome/facToolRepositorySynchronizer'),
		import('@lincebi/frontend-common/src/fontawesome/facToolSaiku'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStadmin'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStagile'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStcard'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStdashboard'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStolap'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStpanels'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStpivot'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStreport'),
		import('@lincebi/frontend-common/src/fontawesome/facToolStsearch'),
		/* eslint-enable */
	]);

	icons.map((icon) => {
		library.add(icon.definition);
	});

	return FontAwesomeIcon;
});
