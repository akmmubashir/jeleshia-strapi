'use strict';

/**
 * skills-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skills-list.skills-list');
