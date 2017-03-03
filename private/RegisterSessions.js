/**
 * Created by sarimj on 12/25/2015.
 */

//Main.js
Session.setDefault('registerForm',false);
Session.setDefault('signinForm', true);

//profile.js
Session.setDefault('isProfileTab',true);
Session.setDefault('isPortfoliosTab',false);
Session.setDefault('isAddPortfolioTab',false);
Session.setDefault('isEditProfileTab',false);

//portfolio.js
Session.setDefault('isSecondLevelBuildingsTab',true);
Session.setDefault('isSecondLevelAddBuildingTab',false);

//portfolios.js
Session.setDefault('isPortfolioDetailsTab',false);
Session.setDefault('currentPortfolioId',-1);

//buildings.js
Session.setDefault('isBuildingDetailsTab',false);
Session.setDefault('currentBuildingId',-1);

//units.js
Session.setDefault('isUnitDetailsTab',false);
Session.setDefault('currentUnitId',-1);

//building.js
Session.setDefault('isThirdLevelUnitsTab',true);
Session.setDefault('isThirdLevelAddUnitTab',false);