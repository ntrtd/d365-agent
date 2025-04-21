/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsPostalAddressHistory } from './CdsPostalAddressHistory';
import { CdsPostalAddressHistoryRequestBuilder } from './CdsPostalAddressHistoryRequestBuilder';
import { CdsPostalAddressLocationsApi } from './CdsPostalAddressLocationsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CdsPostalAddressHistoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsPostalAddressHistory<DeSerializersT>, DeSerializersT>
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
  ): CdsPostalAddressHistoryApi<DeSerializersT> {
    return new CdsPostalAddressHistoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      CdsPostalAddressHistory<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CdsPostalAddressLocationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CDS_POSTAL_ADDRESS_LOCATION: new OneToOneLink(
        'CDSPostalAddressLocation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CdsPostalAddressHistory;

  requestBuilder(): CdsPostalAddressHistoryRequestBuilder<DeSerializersT> {
    return new CdsPostalAddressHistoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsPostalAddressHistory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CdsPostalAddressHistory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsPostalAddressHistory<DeSerializersT>,
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
    typeof CdsPostalAddressHistory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsPostalAddressHistory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION_ID: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CdsPostalAddressHistory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      CdsPostalAddressHistory<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CdsPostalAddressHistory<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
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
         * Static representation of the {@link districtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DistrictName',
          'Edm.String',
          true
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
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
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
         * Static representation of the {@link buildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'BuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link countryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionISOCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsPostalAddressHistory)
      };
    }

    return this._schema;
  }
}
