/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostalAddressesInactive } from './PostalAddressesInactive';
import { PostalAddressesInactiveRequestBuilder } from './PostalAddressesInactiveRequestBuilder';
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
export class PostalAddressesInactiveApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostalAddressesInactive<DeSerializersT>, DeSerializersT>
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
  ): PostalAddressesInactiveApi<DeSerializersT> {
    return new PostalAddressesInactiveApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PostalAddressesInactive;

  requestBuilder(): PostalAddressesInactiveRequestBuilder<DeSerializersT> {
    return new PostalAddressesInactiveRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostalAddressesInactive<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PostalAddressesInactive<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostalAddressesInactive<DeSerializersT>,
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
    typeof PostalAddressesInactive,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostalAddressesInactive,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCATION_LOCATION_ID: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PARTY: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STREET_KANA_JP: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_KANA_JP: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STREET_ID_RU: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APARTMENT_RU: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE_REC_ID: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIVATE_FOR_PARTY: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUILDING_RU: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLAT_ID_RU: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LPP_REC_ID: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HOUSE_ID_RU: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_DESCRIPTION: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      PostalAddressesInactive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PostalAddressesInactive<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link locationLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'location_LocationId',
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
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link party} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY: fieldBuilder.buildEdmTypeField('Party', 'Edm.Int64', false),
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
         * Static representation of the {@link apartmentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APARTMENT_RU: fieldBuilder.buildEdmTypeField(
          'Apartment_RU',
          'Edm.String',
          true
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
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
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
         * Static representation of the {@link lppRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LPP_REC_ID: fieldBuilder.buildEdmTypeField(
          'lpp_RecId',
          'Edm.Int64',
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
         * Static representation of the {@link locationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Location_Description',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostalAddressesInactive)
      };
    }

    return this._schema;
  }
}
