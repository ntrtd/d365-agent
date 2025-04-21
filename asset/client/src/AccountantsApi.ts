/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Accountants } from './Accountants';
import { AccountantsRequestBuilder } from './AccountantsRequestBuilder';
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
export class AccountantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Accountants<DeSerializersT>, DeSerializersT>
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
  ): AccountantsApi<DeSerializersT> {
    return new AccountantsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Accountants;

  requestBuilder(): AccountantsRequestBuilder<DeSerializersT> {
    return new AccountantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Accountants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Accountants<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Accountants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Accountants, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Accountants, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CPF: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRC: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHONE_DESCRIPTION: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE_NAME: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_DESCRIPTION: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC_EXPIRATION_DATE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMAIL_IS_INSTANT_MESSAGE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_IS_PRIVATE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONE_LOCATOR_EXTENSION: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_LOCATOR: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_LOCATOR_EXTENSION: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNPJ: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_IS_INSTANT_MESSAGE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_IS_PRIVATE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_LOCATOR: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTANT_NAME: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_PRIVATE_FOR_PARTY: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_CITY_NAME: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_PRIVATE_FOR_PARTY: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC_ISSUER_STATE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_IS_MOBILE_PHONE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_COUNTRY_REGION_CODE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_COUNTRY_REGION_CODE: OrderableEdmTypeField<
      Accountants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_IS_PRIVATE: EnumField<
      Accountants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Accountants<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPF: fieldBuilder.buildEdmTypeField('CPF', 'Edm.String', false),
        /**
         * Static representation of the {@link crc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC: fieldBuilder.buildEdmTypeField('CRC', 'Edm.String', false),
        /**
         * Static representation of the {@link phoneDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PhoneDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'AddressZipCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EmailDescription',
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
         * Static representation of the {@link crcExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'CRCExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link emailIsInstantMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_IS_INSTANT_MESSAGE: fieldBuilder.buildEnumField(
          'EmailIsInstantMessage',
          NoYes,
          true
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
         * Static representation of the {@link phoneIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_IS_PRIVATE: fieldBuilder.buildEnumField(
          'PhoneIsPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link phoneLocatorExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_LOCATOR_EXTENSION: fieldBuilder.buildEdmTypeField(
          'PhoneLocatorExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailLocator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_LOCATOR: fieldBuilder.buildEdmTypeField(
          'EmailLocator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailLocatorExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_LOCATOR_EXTENSION: fieldBuilder.buildEdmTypeField(
          'EmailLocatorExtension',
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
         * Static representation of the {@link cnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNPJ: fieldBuilder.buildEdmTypeField('CNPJ', 'Edm.String', true),
        /**
         * Static representation of the {@link phoneIsInstantMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_IS_INSTANT_MESSAGE: fieldBuilder.buildEnumField(
          'PhoneIsInstantMessage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_IS_PRIVATE: fieldBuilder.buildEnumField(
          'EmailIsPrivate',
          NoYes,
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
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneLocator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_LOCATOR: fieldBuilder.buildEdmTypeField(
          'PhoneLocator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTANT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailPrivateForParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_PRIVATE_FOR_PARTY: fieldBuilder.buildEdmTypeField(
          'EmailPrivateForParty',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'AddressCityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phonePrivateForParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_PRIVATE_FOR_PARTY: fieldBuilder.buildEdmTypeField(
          'PhonePrivateForParty',
          'Edm.Int64',
          false
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
         * Static representation of the {@link crcIssuerState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_ISSUER_STATE: fieldBuilder.buildEdmTypeField(
          'CRCIssuerState',
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
         * Static representation of the {@link crcCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CRCCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneIsMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_IS_MOBILE_PHONE: fieldBuilder.buildEnumField(
          'PhoneIsMobilePhone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emailCountryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'EmailCountryRegionCode',
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
         * Static representation of the {@link phoneCountryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'PhoneCountryRegionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressIsPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_IS_PRIVATE: fieldBuilder.buildEnumField(
          'AddressIsPrivate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Accountants)
      };
    }

    return this._schema;
  }
}
