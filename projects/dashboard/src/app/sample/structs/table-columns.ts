export const TableColumns = {
    user: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        email: {
            key: 'email',
            title: 'USER_INFO.EMAIL'
        },
        firstName: {
            key: 'firstName',
            title: 'USER_INFO.FIRST_NAME'
        },
        lastName: {
            key: 'lastName',
            title: 'USER_INFO.LAST_NAME'
        },
        unifiedName: {
            key: 'unifiedName',
            title: 'USER_INFO.UNIFIED_NAME'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    client: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'name',
            title: 'CLIENT_INFO.NAME'
        },
        email: {
            key: 'email',
            title: 'CLIENT_INFO.EMAIL'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    userToClient: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        email: {
            key: 'email',
            title: 'USER_TO_CLIENT_INFO.EMAIL'
        },
        roles: {
            key: 'role',
            title: 'USER_TO_CLIENT_INFO.ROLES'
        },
        rights: {
            key: 'role',
            title: 'USER_TO_CLIENT_INFO.RIGHTS'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    userToClientLocations: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        clientId: {
            key: 'clientId',
            title: 'clientId',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        companyName: {
            key: 'companyName',
            title: 'USER_TO_CLIENT_LOCATIONS.COMPANY_NAME'
        },
        street: { key: 'street', title: 'USER_TO_CLIENT_LOCATIONS.STREET' },
        houseNo: { key: 'houseNo', title: 'USER_TO_CLIENT_LOCATIONS.STREET_NO' },
        postCode: { key: 'postCode', title: 'USER_TO_CLIENT_LOCATIONS.POST_CODE' },
        city: { key: 'city', title: 'USER_TO_CLIENT_LOCATIONS.CITY' },
        // country: { key: 'country', title: 'USER_TO_CLIENT_LOCATIONS.COUNTRY' },
        // phone: { key: 'phone', title: 'USER_TO_CLIENT_LOCATIONS.PHONE' },
        // fax: { key: 'fax', title: 'USER_TO_CLIENT_LOCATIONS.FAX' },
        // email: { key: 'email', title: 'USER_TO_CLIENT_LOCATIONS.EMAIL' },
        action: { key: 'actions', title: 'ACTIONS' }
    },
    machineFields: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'publicName.', //DOT used for translations
            title: 'MACHINE_FIELDS.NAME'
        },
        field: {
            key: 'type',
            title: 'FIELD_TYPE'
        },
        section: {
            key: 'section.name.',
            title: 'MACHINE_FIELDS.MACHINE_SECTION'
        },
        category: {
            key: 'category.name.', //DOT used for translations
            title: 'MACHINE_FIELDS.MACHINE_CATEGORY'
        },
        group: {
            key: 'group.groupName.',
            title: 'MACHINE_FIELDS.MACHINE_GROUP'
        },
        action: { key: 'actions', title: 'ACTIONS' }
    },
    machineFieldsParts: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'publicName.', //DOT used for translations
            title: 'MACHINE_FIELDS.NAME'
        },
        field: {
            key: 'type',
            title: 'FIELD_TYPE'
        },
        section: {
            key: 'section.name.',
            title: 'MACHINE_FIELDS.MACHINE_SECTION'
        },
        category: {
            key: 'category.name.', //DOT used for translations
            title: 'MACHINE_FIELDS.MACHINE_CATEGORY'
        },
        group: {
            key: 'group.groupName.',
            title: 'MACHINE_FIELDS.MACHINE_GROUP'
        },
        action: { key: 'actions', title: 'ACTIONS' }
    },
    machineFieldsAccessories: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'publicName.', //DOT used for translations
            title: 'MACHINE_FIELDS.NAME'
        },
        field: {
            key: 'type',
            title: 'FIELD_TYPE'
        },
        section: {
            key: 'section.name.',
            title: 'MACHINE_FIELDS.MACHINE_SECTION'
        },
        category: {
            key: 'category.name.', //DOT used for translations
            title: 'MACHINE_FIELDS.MACHINE_CATEGORY'
        },
        group: {
            key: 'group.groupName.',
            title: 'MACHINE_FIELDS.MACHINE_GROUP'
        },
        action: { key: 'actions', title: 'ACTIONS' }
    },
    machines: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'name.de',
            title: 'PARTS_INFO.NAME'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    parts: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'name.de',
            title: 'PARTS_INFO.NAME'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    accessories: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        name: {
            key: 'name.de',
            title: 'ACCESSORIES_INFO.NAME'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    },
    machineList: {
        id: {
            key: 'id',
            title: 'Id',
            cssClass: { includeHeader: true, name: 'hideTableColumn' }
        },
        section: {
            key: 'productSection',
            title: 'MACHINE_LISTS.PRODUCT_SECTION'
        },
        category: {
            key: 'productCategory',
            title: 'MACHINE_LISTS.PRODUCT_CATEGORY'
        },
        product: {
            key: 'productName',
            title: 'MACHINE_LISTS.PRODUCT_NAME'
        },
        location: {
            key: 'cityLocation',
            title: 'MACHINE_LISTS.LOCATION'
        },
        status: {
            key: 'statusId',
            title: 'MACHINE_LISTS.STATUS'
        },
        action: {
            key: 'action',
            title: 'ACTIONS'
        }
    }
};
