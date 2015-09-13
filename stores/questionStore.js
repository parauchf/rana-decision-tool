module.exports = [
	{
		'id': 'CAP_MKTS',
		'text': 'Is there access to capital markets?',
		'choices': [
			{
				'id': 'NO_CAP_MKTS',
				'text': 'No, there is mechanism for public borrowing'
			},
			{
				'id': 'ACCESS_TO_CAP_MKTS',
				'text': 'Yes, the region or municipality can issue debt'
			}
		]
	},
	{
		'id': 'LAND_OWNERSHIP',
		'text': 'Is the land in question publicly owned?',
		'choices': [
			{
				'id': 'PUBLIC_LAND',
				'text': 'Yes, the land is owned by the region or municipality'
			},
			{
				'id': 'PRIVATE_LAND',
				'text': 'No, the land is privately owned'
			}
		]
	},
	{
		'id': 'TAX',
		'text': 'Is there a property tax collection framework in place?',
		'choices': [
			{
				'id': 'HAS_TAX',
				'text': 'Yes, there is a property tax colleciton framework'
			},
			{
				'id': 'NO_TAX',
				'text': 'No, there is no such system'
			}
		]
	},
	{
		'id': 'CADASTRE',
		'text': 'Is there a property cadatastral database or record system?',
		'choices': [
			{
				'id': 'HAS_CADASTRE',
				'text': 'Yes, property cadastre records are available'
			},
			{
				'id': 'NO_CADASTRE',
				'text': 'No, there are no formal records'
			}
		]
	},
	{
		'id': 'LAND_ASSEMBLAGE',
		'text': 'Is the land made up of a single parcel, or fragmented?',
		'choices': [
			{
				'id': 'SINGLE_PARCEL',
				'text': 'A single parcel'
			},
			{
				'id': 'FRAGMENTED_LAND',
				'text': 'Fragmented among several parcels'
			}
		]
	},
	{
		'id': 'ZONING',
		'text': 'Is there a zoning or land use planning framework in place?',
		'choices': [
			{
				'id': 'HAS_ZONING',
				'text': 'There is a zoning or land use planning process already in place'
			},
			{
				'id': 'NO_ZONING',
				'text': 'There is no zoning or land use planning'
			}
		]
	},
	{
		'id': 'ENVIRON_CONCERNS',
		'text': 'Are there environmental concerns with the land?',
		'choices': [
			{
				'id': 'HAS_ENVIRON_CONCERNS',
				'text': 'Yes, environmental concerns have been identified with the land'
			},
			{
				'id': 'NO_ENVIRON_CONCERNS',
				'text': 'No, there are no particular environmental concerns'
			}
		]
	},
	{
		'id': 'EXISTING_COMMUNITY',
		'text': 'Is there an existing community on the land?',
		'choices': [
			{
				'id': 'HAS_EXISTING_COMMUNITY',
				'text': 'Yes, there is an existing community on the land'
			},
			{
				'id': 'NO_EXISTING_COMMUNITY',
				'text': 'No, there is no existing community'
			}
		]
	},
	{
		'id': 'INFROMAL_SETTLE',
		'text': 'Are there informal settlements or renters on the land?',
		'choices': [
			{
				'id': 'HAS_INFORMAL_SETTLEMENTS',
				'text': 'Yes, there are informal settlements or renters on the land'
			},
			{
				'id': 'NO_INFORMAL_SETTLEMENTS',
				'text': 'No, there are no informal settlements or renters'
			}
		]
	}
]