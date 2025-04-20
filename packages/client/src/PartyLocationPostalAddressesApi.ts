/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartyLocationPostalAddresses } from './PartyLocationPostalAddresses';
import { PartyLocationPostalAddressesRequestBuilder } from './PartyLocationPostalAddressesRequestBuilder';
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
export class PartyLocationPostalAddressesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PartyLocationPostalAddresses<DeSerializersT>, DeSerializersT>
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
  ): PartyLocationPostalAddressesApi<DeSerializersT> {
    return new PartyLocationPostalAddressesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PartyLocationPostalAddresses;

  requestBuilder(): PartyLocationPostalAddressesRequestBuilder<DeSerializersT> {
    return new PartyLocationPostalAddressesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartyLocationPostalAddresses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PartyLocationPostalAddresses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PartyLocationPostalAddresses<DeSerializersT>,
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
    typeof PartyLocationPostalAddresses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartyLocationPostalAddresses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_PRIMARY: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CITY_IN_KANA: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_DELIVERY: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIVATE: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_INVOICE: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ROLES: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_IN_KANA: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_HOME: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APARTMENT_RU: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_TAX_REGISTRATION: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTENTION_TO_ADDRESS_LINE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCATION_OWNER: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUILDING_RU: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT_NAME: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIVATE_POSTAL_ADDRESS: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NUMBER: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_BUSINESS: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POST_BOX: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_COMPLIMENT: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSTAL_ADDRESS: EnumField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      PartyLocationPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PartyLocationPostalAddresses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link cityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'CityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRoleDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_DELIVERY: fieldBuilder.buildEnumField(
          'IsRoleDelivery',
          NoYes,
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
         * Static representation of the {@link isRoleInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_INVOICE: fieldBuilder.buildEnumField(
          'IsRoleInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link roles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLES: fieldBuilder.buildEdmTypeField('Roles', 'Edm.String', true),
        /**
         * Static representation of the {@link streetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'StreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRoleHome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_HOME: fieldBuilder.buildEnumField('IsRoleHome', NoYes, true),
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
         * Static representation of the {@link isPrimaryTaxRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_TAX_REGISTRATION: fieldBuilder.buildEnumField(
          'IsPrimaryTaxRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attentionToAddressLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTENTION_TO_ADDRESS_LINE: fieldBuilder.buildEdmTypeField(
          'AttentionToAddressLine',
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
         * Static representation of the {@link isLocationOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOCATION_OWNER: fieldBuilder.buildEnumField(
          'IsLocationOwner',
          NoYes,
          true
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
         * Static representation of the {@link isPrivatePostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE_POSTAL_ADDRESS: fieldBuilder.buildEnumField(
          'IsPrivatePostalAddress',
          NoYes,
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
         * Static representation of the {@link isRoleBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_BUSINESS: fieldBuilder.buildEnumField(
          'IsRoleBusiness',
          NoYes,
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
         * Static representation of the {@link isPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTAL_ADDRESS: fieldBuilder.buildEnumField(
          'IsPostalAddress',
          NoYes,
          true
        ),
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
        ALL_FIELDS: new AllFields('*', PartyLocationPostalAddresses)
      };
    }

    return this._schema;
  }
}
