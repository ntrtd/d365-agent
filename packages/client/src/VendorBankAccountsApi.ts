/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorBankAccounts } from './VendorBankAccounts';
import { VendorBankAccountsRequestBuilder } from './VendorBankAccountsRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { VendorsV2Api } from './VendorsV2Api';
import { CurrenciesApi } from './CurrenciesApi';
import { BankGroupsApi } from './BankGroupsApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { BankInformationOrigin } from './BankInformationOrigin';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { VendBankTransTypeJp } from './VendBankTransTypeJp';
import { BankCodeType } from './BankCodeType';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorBankAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorBankAccounts<DeSerializersT>, DeSerializersT>
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
  ): VendorBankAccountsApi<DeSerializersT> {
    return new VendorBankAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_GROUP: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      BankGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      BankGroupsApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[1]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[2]),
      BANK_GROUP: new OneToOneLink('BankGroup', this, linkedApis[3]),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = VendorBankAccounts;

  requestBuilder(): VendorBankAccountsRequestBuilder<DeSerializersT> {
    return new VendorBankAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorBankAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorBankAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorBankAccounts<DeSerializersT>,
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
    typeof VendorBankAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorBankAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERIM_VENDOR_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_POST_BOX: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_INFORMATION_ORIGIN: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      BankInformationOrigin,
      true,
      true
    >;
    ADDRESS_COUNTRY: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_INTERNAL_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    FOREIGN_BANK_GROUP_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVIEWED: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOREIGN_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PAGER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_DATE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_MOBILE_PHONE_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      VendBankTransTypeJp,
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_CORRESPONDENCE_ACCOUNT_BANK_GROUP_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_MESSAGE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_BANK_SWIFT_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME_IN_KANA: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL_ADDRESS: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TELEX_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CORRESPONDENCE_BANK_GROUP_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_RATE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_INTERNET_ADDRESS: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECIPIENT_TEXT_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER_TYPE: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      BankCodeType,
      true,
      true
    >;
    CONTACT_PHONE_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL_ADDRESS_FOR_SENDING_SMS: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_BANK_ACCOUNT_FOR_CURRENT_CURRENCY: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SPECIFIC_SYMBOL: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE_OF_EXCHANGE_REFERENCE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_CURRENCY_CODE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERIM_BANK_CORRESPONDENCE_BANK_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_BANK_ACCOUNT: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_FAX_NUMBER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_TYPE: EnumField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      BankAccountType,
      true,
      true
    >;
    FORMATTED_ADDRESS: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_4_NUMBER_SUFFIX: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_SPECIFICATION_PARAMETER: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QRIBAN: OrderableEdmTypeField<
      VendorBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_GROUP: OneToOneLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      BankGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      VendorBankAccounts<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorBankAccounts<DeSerializers>>;
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'VendorBankAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interimVendorBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERIM_VENDOR_BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'InterimVendorBankAccountNumber',
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
         * Static representation of the {@link addressCountryIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankInformationOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_INFORMATION_ORIGIN: fieldBuilder.buildEnumField(
          'BankInformationOrigin',
          BankInformationOrigin,
          true
        ),
        /**
         * Static representation of the {@link addressCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY: fieldBuilder.buildEdmTypeField(
          'AddressCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DUNSNumber',
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
         * Static representation of the {@link foreignBankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ForeignBankGroupId',
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
         * Static representation of the {@link reviewed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEWED: fieldBuilder.buildEnumField('Reviewed', NoYes, true),
        /**
         * Static representation of the {@link foreignBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ForeignBankAccountNumber',
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
         * Static representation of the {@link activeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ActiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BankTransactionType',
          VendBankTransTypeJp,
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
         * Static representation of the {@link bankCorrespondenceAccountBankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CORRESPONDENCE_ACCOUNT_BANK_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'BankCorrespondenceAccountBankGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link bankMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_MESSAGE: fieldBuilder.buildEdmTypeField(
          'BankMessage',
          'Edm.String',
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
         * Static representation of the {@link foreignBankSwiftCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_BANK_SWIFT_CODE: fieldBuilder.buildEdmTypeField(
          'ForeignBankSWIFTCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankNameInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME_IN_KANA: fieldBuilder.buildEdmTypeField(
          'BankNameInKana',
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
         * Static representation of the {@link bankCorrespondenceBankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CORRESPONDENCE_BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BankCorrespondenceBankGroupId',
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
         * Static representation of the {@link recipientTextCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT_TEXT_CODE: fieldBuilder.buildEdmTypeField(
          'RecipientTextCode',
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
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
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
         * Static representation of the {@link contactPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPhoneNumber',
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
         * Static representation of the {@link addressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AddressStreetNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link isDefaultBankAccountForCurrentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_BANK_ACCOUNT_FOR_CURRENT_CURRENCY:
          fieldBuilder.buildEnumField(
            'IsDefaultBankAccountForCurrentCurrency',
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
         * Static representation of the {@link currentCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrentCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correspondenceBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_BANK_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CorrespondenceBankAccountNumber',
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
         * Static representation of the {@link interimBankCorrespondenceBankAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERIM_BANK_CORRESPONDENCE_BANK_ACCOUNT_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'InterimBankCorrespondenceBankAccountNumber',
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
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
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
         * Static representation of the {@link bankAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'BankAccountType',
          BankAccountType,
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link duns4NumberSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_4_NUMBER_SUFFIX: fieldBuilder.buildEdmTypeField(
          'DUNS4NumberSuffix',
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
         * Static representation of the {@link paymentSpecificationParameter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SPECIFICATION_PARAMETER: fieldBuilder.buildEdmTypeField(
          'PaymentSpecificationParameter',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', VendorBankAccounts)
      };
    }

    return this._schema;
  }
}
