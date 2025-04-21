/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Documents } from './Documents';
import { DocumentsRequestBuilder } from './DocumentsRequestBuilder';
import { EconomicActivityType } from './EconomicActivityType';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { CarrierTypeW } from './CarrierTypeW';
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
export class DocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Documents<DeSerializersT>, DeSerializersT>
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
  ): DocumentsApi<DeSerializersT> {
    return new DocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Documents;

  requestBuilder(): DocumentsRequestBuilder<DeSerializersT> {
    return new DocumentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Documents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Documents<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Documents<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Documents, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Documents, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    LOADING_DATE_AND_TIME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOADING_LATITUDE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNLOADING_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_DATE_AND_TIME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEHICLE_MODEL: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_POST_BOX: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_LATITUDE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOADING_CITY: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_LONGITUDE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_DISTRICT_NAME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_VALID_FROM: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_ZIP_CODE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_DESCRIPTION: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_DISTRICT_NAME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_LONGITUDE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARRIER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECONOMIC_ACTIVITY: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      EconomicActivityType,
      true,
      true
    >;
    UNLOADING_TIME_ZONE: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    LOADING_COUNTY: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_ZIP_CODE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_STREET_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_REGISTRATION_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_CITY: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_STREET: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRIVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_STREET_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_DUNS_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_TIME_ZONE: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    LOADING_DUNS_NUMBER: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_DESCRIPTION: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_IS_PRIVATE: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOADING_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_ADDRESS: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_POST_BOX: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_ADDRESS: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RISK_LEVEL_OF_THE_LOAD: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_TYPE: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      CarrierTypeW,
      true,
      true
    >;
    UNLOADING_LOCATION_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_STATE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_IS_PRIVATE: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOADING_LOCATION_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_COUNTY: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE_TIME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNLOADING_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_TRANSPORTATION_DETAILS: EnumField<
      Documents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNLOADING_VALID_TO: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DRIVER_NAME: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_STREET: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNLOADING_STATE: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOADING_VALID_FROM: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOADING_VALID_TO: OrderableEdmTypeField<
      Documents<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Documents<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link loadingDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'LoadingDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loadingLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_LATITUDE: fieldBuilder.buildEdmTypeField(
          'LoadingLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unloadingCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'UnloadingCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'UnloadingDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vehicleModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_MODEL: fieldBuilder.buildEdmTypeField(
          'VehicleModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'LoadingBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_POST_BOX: fieldBuilder.buildEdmTypeField(
          'UnloadingPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_LATITUDE: fieldBuilder.buildEdmTypeField(
          'UnloadingLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loadingCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_CITY: fieldBuilder.buildEdmTypeField(
          'LoadingCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'LoadingLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'LoadingDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'UnloadingValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link issuedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'IssuedByPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'UnloadingZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'UnloadingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'UnloadingDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'LoadingCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'UnloadingLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link carrier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER: fieldBuilder.buildEdmTypeField('Carrier', 'Edm.String', true),
        /**
         * Static representation of the {@link economicActivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECONOMIC_ACTIVITY: fieldBuilder.buildEnumField(
          'EconomicActivity',
          EconomicActivityType,
          true
        ),
        /**
         * Static representation of the {@link unloadingTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_TIME_ZONE: fieldBuilder.buildEnumField(
          'UnloadingTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link loadingCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_COUNTY: fieldBuilder.buildEdmTypeField(
          'LoadingCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'LoadingZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'UnloadingStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trailerRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrailerRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_CITY: fieldBuilder.buildEdmTypeField(
          'UnloadingCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_STREET: fieldBuilder.buildEdmTypeField(
          'UnloadingStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link driverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DriverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadingStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'UnloadingDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_TIME_ZONE: fieldBuilder.buildEnumField(
          'LoadingTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link loadingDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoadingDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LoadingDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_IS_PRIVATE: fieldBuilder.buildEnumField(
          'UnloadingIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loadingCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'LoadingCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'LoadingAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_POST_BOX: fieldBuilder.buildEdmTypeField(
          'LoadingPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'UnloadingAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link riskLevelOfTheLoad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_LEVEL_OF_THE_LOAD: fieldBuilder.buildEdmTypeField(
          'RiskLevelOfTheLoad',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'UnloadingBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link package} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE: fieldBuilder.buildEdmTypeField('Package', 'Edm.String', true),
        /**
         * Static representation of the {@link carrierType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_TYPE: fieldBuilder.buildEnumField(
          'CarrierType',
          CarrierTypeW,
          true
        ),
        /**
         * Static representation of the {@link unloadingLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'UnloadingLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_STATE: fieldBuilder.buildEdmTypeField(
          'LoadingState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_IS_PRIVATE: fieldBuilder.buildEnumField(
          'LoadingIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link loadingLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LoadingLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_COUNTY: fieldBuilder.buildEdmTypeField(
          'UnloadingCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DocumentDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unloadingCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'UnloadingCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printTransportationDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TRANSPORTATION_DETAILS: fieldBuilder.buildEnumField(
          'PrintTransportationDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unloadingValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_VALID_TO: fieldBuilder.buildEdmTypeField(
          'UnloadingValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link driverName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRIVER_NAME: fieldBuilder.buildEdmTypeField(
          'DriverName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_STREET: fieldBuilder.buildEdmTypeField(
          'LoadingStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unloadingState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLOADING_STATE: fieldBuilder.buildEdmTypeField(
          'UnloadingState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadingValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'LoadingValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loadingValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_VALID_TO: fieldBuilder.buildEdmTypeField(
          'LoadingValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Documents)
      };
    }

    return this._schema;
  }
}
