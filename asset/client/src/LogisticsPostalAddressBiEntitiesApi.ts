/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LogisticsPostalAddressBiEntities } from './LogisticsPostalAddressBiEntities';
import { LogisticsPostalAddressBiEntitiesRequestBuilder } from './LogisticsPostalAddressBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
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
export class LogisticsPostalAddressBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LogisticsPostalAddressBiEntities<DeSerializersT>, DeSerializersT>
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
  ): LogisticsPostalAddressBiEntitiesApi<DeSerializersT> {
    return new LogisticsPostalAddressBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LogisticsPostalAddressBiEntities;

  requestBuilder(): LogisticsPostalAddressBiEntitiesRequestBuilder<DeSerializersT> {
    return new LogisticsPostalAddressBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LogisticsPostalAddressBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LogisticsPostalAddressBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LogisticsPostalAddressBiEntities<DeSerializersT>,
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
    typeof LogisticsPostalAddressBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LogisticsPostalAddressBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIVATE: EnumField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    IS_SIMPLIFIED_ADDRESS_RU: EnumField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STREET_KANA_JP: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_KANA_JP: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STREET_ID_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISTRICT: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLEMENT_REC_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APARTMENT_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALITY_REC_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY_REC_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ZIP_CODE_REC_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRIVATE_FOR_PARTY: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUILDING_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLAT_ID_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOUSE_ID_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_REFERENCE_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STEAD_ID_RU: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      LogisticsPostalAddressBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LogisticsPostalAddressBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link isSimplifiedAddressRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SIMPLIFIED_ADDRESS_RU: fieldBuilder.buildEnumField(
          'IsSimplifiedAddress_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link streetKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_KANA_JP: fieldBuilder.buildEdmTypeField(
          'StreetKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cityKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_KANA_JP: fieldBuilder.buildEdmTypeField(
          'CityKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link latitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATITUDE: fieldBuilder.buildEdmTypeField(
          'Latitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link streetIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_ID_RU: fieldBuilder.buildEdmTypeField(
          'StreetId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link district} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT: fieldBuilder.buildEdmTypeField(
          'District',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settlementRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'SettlementRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link apartmentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APARTMENT_RU: fieldBuilder.buildEdmTypeField(
          'Apartment_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localityRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALITY_REC_ID: fieldBuilder.buildEdmTypeField(
          'LocalityRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cityRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_REC_ID: fieldBuilder.buildEdmTypeField(
          'CityRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link zipCodeRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE_REC_ID: fieldBuilder.buildEdmTypeField(
          'ZipCodeRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link privateForParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIVATE_FOR_PARTY: fieldBuilder.buildEdmTypeField(
          'PrivateForParty',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link buildingRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_RU: fieldBuilder.buildEdmTypeField(
          'Building_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flatIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLAT_ID_RU: fieldBuilder.buildEdmTypeField(
          'FlatId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link longitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONGITUDE: fieldBuilder.buildEdmTypeField(
          'Longitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link houseIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_ID_RU: fieldBuilder.buildEdmTypeField(
          'HouseId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link streetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'StreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link channelReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'ChannelReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link postBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_BOX: fieldBuilder.buildEdmTypeField('PostBox', 'Edm.String', true),
        /**
         * Static representation of the {@link steadIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEAD_ID_RU: fieldBuilder.buildEdmTypeField(
          'SteadId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link buildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'BuildingCompliment',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LogisticsPostalAddressBiEntities)
      };
    }

    return this._schema;
  }
}
