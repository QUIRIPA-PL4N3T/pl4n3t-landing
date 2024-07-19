export const EMembershipType = {
    Free: 'FREE',
    Basic: 'BASIC',
    Premium: 'PREMIUM',
    Elite: 'ELITE'
} as const;

export type EMembershipType = typeof EMembershipType[keyof typeof EMembershipType];



/**
 * 
 * @export
 * @interface IMembership
 */
export interface IMembership {
    /**
     * 
     * @type {number}
     * @memberof IMembership
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'name': string;
    /**
     * 
     * @type {EMembershipType}
     * @memberof Membership
     */
    'membership_type'?: EMembershipType;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'price': string;
    /**
     * Ingrese -1 para una membresía ilimitada.
     * @type {number}
     * @memberof IMembership
     */
    'duration'?: number;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'benefits'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IMembership
     */
    'num_brands'?: number;
    /**
     * 
     * @type {number}
     * @memberof IMembership
     */
    'num_locations'?: number;
    /**
     * 
     * @type {number}
     * @memberof IMembership
     */
    'num_users'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'emission_sources'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'footprint_types'?: string;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'liquidation_options'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'analysis_tools'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'basic_support'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IMembership
     */
    'storage_capacity'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'tutorials'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'webinars'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'general_support'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'dedicated_support'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IMembership
     */
    'custom_api_access'?: boolean;
}



