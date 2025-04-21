/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUnits } from './BusinessUnits';
import { BusinessUnitsRequestBuilder } from './BusinessUnitsRequestBuilder';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { OmOperatingUnitType } from './OmOperatingUnitType';
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
export class BusinessUnitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUnits<DeSerializersT>, DeSerializersT>
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
  ): BusinessUnitsApi<DeSerializersT> {
    return new BusinessUnitsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessUnits;

  requestBuilder(): BusinessUnitsRequestBuilder<DeSerializersT> {
    return new BusinessUnitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessUnits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessUnits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessUnits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BusinessUnits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BusinessUnits, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_LOCATION_ID: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_EXTENSION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_EXTENSION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_TYPE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      OmOperatingUnitType,
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRIMARY_CONTACT_TELEX_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TELEX: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BOOKS: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FACEBOOK_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_URL_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIMARY_CONTACT_TELEX_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_EMAIL_IS_IM: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_NAME: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_IS_PRIVATE: EnumField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_CONTACT_URL_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_FAX_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_TWITTER_DESCRIPTION: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_LINKED_IN_PURPOSE: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      BusinessUnits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUnits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryContactFacebookIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactFacebookIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link electronicLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhonePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhonePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebook',
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
         * Static representation of the {@link addressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AddressDescription',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link primaryContactFaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneExtension',
          'Edm.String',
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
         * Static representation of the {@link operatingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_TYPE: fieldBuilder.buildEnumField(
          'OperatingUnitType',
          OmOperatingUnitType,
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link primaryContactTelexDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
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
        /**
         * Static representation of the {@link primaryContactEmailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmailPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTelex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
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
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressBooks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_BOOKS: fieldBuilder.buildEdmTypeField(
          'AddressBooks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactEmail',
          'Edm.String',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link primaryContactLinkedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedIn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFacebookPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FACEBOOK_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFacebookPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLDescription',
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
         * Static representation of the {@link primaryContactTelexPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TELEX_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTelexPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactEmailIsIm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_EMAIL_IS_IM: fieldBuilder.buildEnumField(
          'PrimaryContactEmailIsIM',
          NoYes,
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
         * Static representation of the {@link phoneticName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactLinkedInIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PrimaryContactTwitterIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryContactUrlPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_URL_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactURLPurpose',
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
         * Static representation of the {@link addressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'AddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactFaxDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_FAX_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactFaxDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactTwitterDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_TWITTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryContactTwitterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactLinkedInPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_LINKED_IN_PURPOSE: fieldBuilder.buildEdmTypeField(
          'PrimaryContactLinkedInPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessUnits)
      };
    }

    return this._schema;
  }
}
