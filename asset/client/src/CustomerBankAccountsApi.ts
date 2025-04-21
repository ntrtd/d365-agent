/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerBankAccounts } from './CustomerBankAccounts';
import { CustomerBankAccountsRequestBuilder } from './CustomerBankAccountsRequestBuilder';
import { Timezone } from './Timezone';
import { BankCodeType } from './BankCodeType';
import { NoYes } from './NoYes';
import { BankAccountType } from './BankAccountType';
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
export class CustomerBankAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerBankAccounts<DeSerializersT>, DeSerializersT>
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
  ): CustomerBankAccountsApi<DeSerializersT> {
    return new CustomerBankAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerBankAccounts;

  requestBuilder(): CustomerBankAccountsRequestBuilder<DeSerializersT> {
    return new CustomerBankAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerBankAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerBankAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerBankAccounts<DeSerializersT>,
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
    typeof CustomerBankAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerBankAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_TEXT_CODE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_INTERNAL_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    MESSAGE_TO_BANK: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONTRACT_ACCOUNT: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PAGER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_MOBILE_PHONE_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_CODE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL_ADDRESS: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TELEX_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_RATE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_INTERNET_ADDRESS: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_NAME: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER_TYPE: EnumField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      BankCodeType,
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_ADDRESS: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESR: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL_ADDRESS_FOR_SENDING_SMS: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SPECIFIC_SYMBOL: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE_OF_EXCHANGE_REFERENCE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_BANK_ACCOUNT: EnumField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_FAX_NUMBER: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_TYPE: EnumField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      BankAccountType,
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QRIBAN: OrderableEdmTypeField<
      CustomerBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerBankAccounts<DeSerializers>>;
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
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentTextCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TEXT_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentTextCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlInternalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_INTERNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ControlInternalNumber',
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
         * Static representation of the {@link messageToBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_TO_BANK: fieldBuilder.buildEdmTypeField(
          'MessageToBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankContractAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankContractAccount',
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
         * Static representation of the {@link contactPager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PAGER: fieldBuilder.buildEdmTypeField(
          'ContactPager',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankAccountNumber',
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
         * Static representation of the {@link contactMobilePhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_MOBILE_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactMobilePhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankConstantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankConstantSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
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
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link swiftCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWIFT_CODE: fieldBuilder.buildEdmTypeField(
          'SWIFTCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
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
         * Static representation of the {@link contactEmailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactEmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactTelexNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TELEX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactTelexNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_RATE: fieldBuilder.buildEdmTypeField(
          'CrossRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contactInternetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactInternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoutingNumber',
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
         * Static representation of the {@link bankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BankGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'ContactPersonName',
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
         * Static representation of the {@link routingNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RoutingNumberType',
          BankCodeType,
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
         * Static representation of the {@link contactPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FullAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESR: fieldBuilder.buildEdmTypeField('ESR', 'Edm.String', true),
        /**
         * Static representation of the {@link contactEmailAddressForSendingSms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL_ADDRESS_FOR_SENDING_SMS: fieldBuilder.buildEdmTypeField(
          'ContactEmailAddressForSendingSMS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankSpecificSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SPECIFIC_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankSpecificSymbol',
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
         * Static representation of the {@link rateOfExchangeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_OF_EXCHANGE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'RateOfExchangeReference',
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
         * Static representation of the {@link contactPhoneNumberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'ContactPhoneNumberExtension',
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
         * Static representation of the {@link isDefaultBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_BANK_ACCOUNT: fieldBuilder.buildEnumField(
          'IsDefaultBankAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link contactFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'BankAccountType',
          BankAccountType,
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
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link qriban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QRIBAN: fieldBuilder.buildEdmTypeField('QRIBAN', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerBankAccounts)
      };
    }

    return this._schema;
  }
}
