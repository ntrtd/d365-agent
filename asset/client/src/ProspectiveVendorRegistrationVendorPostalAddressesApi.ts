/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProspectiveVendorRegistrationVendorPostalAddresses } from './ProspectiveVendorRegistrationVendorPostalAddresses';
import { ProspectiveVendorRegistrationVendorPostalAddressesRequestBuilder } from './ProspectiveVendorRegistrationVendorPostalAddressesRequestBuilder';
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
export class ProspectiveVendorRegistrationVendorPostalAddressesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializersT>,
      DeSerializersT
    >
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
  ): ProspectiveVendorRegistrationVendorPostalAddressesApi<DeSerializersT> {
    return new ProspectiveVendorRegistrationVendorPostalAddressesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProspectiveVendorRegistrationVendorPostalAddresses;

  requestBuilder(): ProspectiveVendorRegistrationVendorPostalAddressesRequestBuilder<DeSerializersT> {
    return new ProspectiveVendorRegistrationVendorPostalAddressesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializersT>,
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
    typeof ProspectiveVendorRegistrationVendorPostalAddresses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProspectiveVendorRegistrationVendorPostalAddresses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VENDOR_REGISTRATION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_EMAIL_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ROLE_DELIVERY: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_POST_BOX: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ADDRESS_PRIMARY: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STATE_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ROLE_HOME: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_TAX_REGISTRATION: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTENTION_TO_ADDRESS_LINE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCATION_OWNER: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    IS_ROLE_BUSINESS: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ADDRESS_PRIVATE: EnumField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ProspectiveVendorRegistrationVendorPostalAddresses<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link vendorRegistrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'VendorRegistrationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'AddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactPersonEmailAddress',
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
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'AddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAddressPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADDRESS_PRIMARY: fieldBuilder.buildEnumField(
          'IsAddressPrimary',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'AddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isRoleHome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ROLE_HOME: fieldBuilder.buildEnumField('IsRoleHome', NoYes, true),
        /**
         * Static representation of the {@link addressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'AddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
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
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
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
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link addressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'AddressTimeZone',
          Timezone,
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
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ProspectiveVendorRegistrationVendorPostalAddresses
        )
      };
    }

    return this._schema;
  }
}
