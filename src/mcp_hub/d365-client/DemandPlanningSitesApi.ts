/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DemandPlanningSites } from './DemandPlanningSites';
import { DemandPlanningSitesRequestBuilder } from './DemandPlanningSitesRequestBuilder';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DemandPlanningSitesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DemandPlanningSites<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DemandPlanningSitesApi<DeSerializersT> {
    return new DemandPlanningSitesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DemandPlanningSites;

  requestBuilder(): DemandPlanningSitesRequestBuilder<DeSerializersT> {
    return new DemandPlanningSitesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DemandPlanningSites<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DemandPlanningSites<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DemandPlanningSites<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DemandPlanningSites,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DemandPlanningSites,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SITE_ID: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_AREA_PARTY_ID: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SITE_TIMEZONE: EnumField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_ADDRESS_ASSIGNED: EnumField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_TIME_ZONE: EnumField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_NAME: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      DemandPlanningSites<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DemandPlanningSites<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link dataAreaPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'DataAreaPartyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link siteTimezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_TIMEZONE: fieldBuilder.buildEnumField(
          'SiteTimezone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryAddressAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_ADDRESS_ASSIGNED: fieldBuilder.buildEnumField(
          'IsPrimaryAddressAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PrimaryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link primaryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_NAME: fieldBuilder.buildEdmTypeField(
          'SiteName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DemandPlanningSites)
      };
    }

    return this._schema;
  }
}
