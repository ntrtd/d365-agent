/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankAccounts } from './BankAccounts';
import { BankAccountsRequestBuilder } from './BankAccountsRequestBuilder';
import { BankCheckLayoutsApi } from './BankCheckLayoutsApi';
import { BankBillOfExchangeLayoutsApi } from './BankBillOfExchangeLayoutsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { BankGroupsApi } from './BankGroupsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { CustomerChargeGroupApi } from './CustomerChargeGroupApi';
import { JournalNamesApi } from './JournalNamesApi';
import { ReconciliationMatchRuleSetsApi } from './ReconciliationMatchRuleSetsApi';
import { NoYes } from './NoYes';
import { BankAccountHoldStatus } from './BankAccountHoldStatus';
import { Timezone } from './Timezone';
import { BankTransTypeJp } from './BankTransTypeJp';
import { BankCodeType } from './BankCodeType';
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
export class BankAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankAccounts<DeSerializersT>, DeSerializersT>
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
  ): BankAccountsApi<DeSerializersT> {
    return new BankAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link bankCheckLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_CHECK_LAYOUT: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankCheckLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankBillOfExchangeLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_BILL_OF_EXCHANGE_LAYOUT: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankBillOfExchangeLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_GROUP: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerChargeGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_CHARGE_GROUPS: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      CustomerChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reconciliationMatchRuleSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECONCILIATION_MATCH_RULE_SET: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      ReconciliationMatchRuleSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BankCheckLayoutsApi<DeSerializersT>,
      BankBillOfExchangeLayoutsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      BankGroupsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      CustomerChargeGroupApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>,
      ReconciliationMatchRuleSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BANK_CHECK_LAYOUT: new OneToOneLink(
        'BankCheckLayout',
        this,
        linkedApis[0]
      ),
      BANK_BILL_OF_EXCHANGE_LAYOUT: new OneToOneLink(
        'BankBillOfExchangeLayout',
        this,
        linkedApis[1]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[2]
      ),
      BANK_GROUP: new OneToOneLink('BankGroup', this, linkedApis[3]),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[4]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[5]),
      CUSTOMER_CHARGE_GROUPS: new OneToOneLink(
        'CustomerChargeGroups',
        this,
        linkedApis[6]
      ),
      JOURNAL_NAME: new OneToOneLink('JournalName', this, linkedApis[7]),
      RECONCILIATION_MATCH_RULE_SET: new OneToOneLink(
        'ReconciliationMatchRuleSet',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = BankAccounts;

  requestBuilder(): BankAccountsRequestBuilder<DeSerializersT> {
    return new BankAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankAccounts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankAccounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankAccounts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BankAccounts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_BANK_STATEMENTS_AS_CONFIRMATION_OF_ELECTRONIC_PAYMENTS: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_INTERESTS_FEE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POST_CUSTOMER_PAYMENT_FEE: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DRAWER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_INTERNET_ADDRESS: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILIATION_MATCHING_RULE_SET_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LATITUDE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_TELEX_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_POST_ACCOUNT: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REMIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_SUFFICIENT_FUNDS_JOURNAL_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SPECIFIC_SYMBOL: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECT_DEBIT_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESR: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILE_AFTER_STATEMENT_IMPORT: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FEE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RFC_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_STATUS: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      BankAccountHoldStatus,
      true,
      true
    >;
    COLLECTION_EXPENSES_FEE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BESR_ID_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_ADVANCED_BANK_RECONCILIATION: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_TIME_ZONE: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    COLLECTION_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRENOTE_RESPONSE_DAYS: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_LIMIT: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KANA_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUFFIX: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_ESR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_STATEMENT_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITIVE_PAY_START_DATE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATEMENT_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_PRIMARY_ADDRESS: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NON_SUFFICIENT_FUNDS_CHARGES_GROUP_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_JOURNAL_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REMIT_FEE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_PAGER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANSACTION_TYPE: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      BankTransTypeJp,
      true,
      true
    >;
    BANKS_IDENTIFICATION_OF_COMPANY: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER_TYPE: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      BankCodeType,
      true,
      true
    >;
    BANK_STATEMENT_FORMAT_ID: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_MOBILE_PHONE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IBAN: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_INTERNAL_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_FAX_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_ISO_CODE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LONGITUDE: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_TRANSACTIONS_IN_ADDITIONAL_CURRENCIES: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSITIVE_PAY_FORMAT_NAME: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRENOTE_REQUIRED: EnumField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTRY: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_SMS: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DISCOUNTING_MAXIMUM: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_PENNY_DIFFERENCE_FOR_RECONCILIATION: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTACT_PHONE_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTING_NUMBER: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_DISCOUNT_IT: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_COLLECTION_IT: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_REMIT_NOTES_IT: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QRIBAN: OrderableEdmTypeField<
      BankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankCheckLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_CHECK_LAYOUT: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankCheckLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankBillOfExchangeLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_BILL_OF_EXCHANGE_LAYOUT: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankBillOfExchangeLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_GROUP: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      BankGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerChargeGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_CHARGE_GROUPS: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      CustomerChargeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_NAME: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reconciliationMatchRuleSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECONCILIATION_MATCH_RULE_SET: OneToOneLink<
      BankAccounts<DeSerializersT>,
      DeSerializersT,
      ReconciliationMatchRuleSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankAccounts<DeSerializers>>;
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
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useBankStatementsAsConfirmationOfElectronicPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BANK_STATEMENTS_AS_CONFIRMATION_OF_ELECTRONIC_PAYMENTS:
          fieldBuilder.buildEnumField(
            'UseBankStatementsAsConfirmationOfElectronicPayments',
            NoYes,
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
         * Static representation of the {@link discountInterestsFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_INTERESTS_FEE: fieldBuilder.buildEdmTypeField(
          'DiscountInterestsFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postCustomerPaymentFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_CUSTOMER_PAYMENT_FEE: fieldBuilder.buildEnumField(
          'PostCustomerPaymentFee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link drawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAWER: fieldBuilder.buildEdmTypeField('Drawer', 'Edm.String', true),
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
         * Static representation of the {@link contactInternetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ContactInternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconciliationMatchingRuleSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILIATION_MATCHING_RULE_SET_ID: fieldBuilder.buildEdmTypeField(
          'ReconciliationMatchingRuleSetId',
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
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
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
         * Static representation of the {@link contactTelexNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_TELEX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactTelexNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractPostAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_POST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ContractPostAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceRemitMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMIT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'InvoiceRemitMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link destinationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_NAME: fieldBuilder.buildEdmTypeField(
          'DestinationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonSufficientFundsJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_SUFFICIENT_FUNDS_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'NonSufficientFundsJournalName',
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
         * Static representation of the {@link bankSpecificSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SPECIFIC_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankSpecificSymbol',
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
         * Static representation of the {@link directDebitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_ID: fieldBuilder.buildEdmTypeField(
          'DirectDebitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESR: fieldBuilder.buildEdmTypeField('ESR', 'Edm.String', true),
        /**
         * Static representation of the {@link reconcileAfterStatementImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILE_AFTER_STATEMENT_IMPORT: fieldBuilder.buildEnumField(
          'ReconcileAfterStatementImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyExchangeRateType',
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
         * Static representation of the {@link clearingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_CODE: fieldBuilder.buildEdmTypeField(
          'ClearingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountMainAccountIdDisplayValue',
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
         * Static representation of the {@link customerPaymentFeeMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FEE_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFeeMainAccountIdDisplayValue',
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
         * Static representation of the {@link rfcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_STATUS: fieldBuilder.buildEnumField(
          'BankAccountStatus',
          BankAccountHoldStatus,
          true
        ),
        /**
         * Static representation of the {@link collectionExpensesFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_EXPENSES_FEE: fieldBuilder.buildEdmTypeField(
          'CollectionExpensesFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link besrIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BESR_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'BESRIdNumber',
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
         * Static representation of the {@link enableAdvancedBankReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ADVANCED_BANK_RECONCILIATION: fieldBuilder.buildEnumField(
          'EnableAdvancedBankReconciliation',
          NoYes,
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
         * Static representation of the {@link collectionMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CollectionMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link prenoteResponseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRENOTE_RESPONSE_DAYS: fieldBuilder.buildEdmTypeField(
          'PrenoteResponseDays',
          'Edm.Int32',
          false
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
         * Static representation of the {@link creditLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT: fieldBuilder.buildEdmTypeField(
          'CreditLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link kanaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KANA_NAME: fieldBuilder.buildEdmTypeField(
          'KanaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX: fieldBuilder.buildEdmTypeField('Suffix', 'Edm.String', true),
        /**
         * Static representation of the {@link feeEsrAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_ESR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FeeESRAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'BankMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyStatementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_STATEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyStatementName',
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
         * Static representation of the {@link positivePayStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITIVE_PAY_START_DATE: fieldBuilder.buildEdmTypeField(
          'PositivePayStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link statementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'StatementName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ContactEmail',
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
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nonSufficientFundsChargesGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_SUFFICIENT_FUNDS_CHARGES_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NonSufficientFundsChargesGroupId',
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
         * Static representation of the {@link feeJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'FeeJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceRemitFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMIT_FEE: fieldBuilder.buildEdmTypeField(
          'InvoiceRemitFee',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BankTransactionType',
          BankTransTypeJp,
          true
        ),
        /**
         * Static representation of the {@link banksIdentificationOfCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKS_IDENTIFICATION_OF_COMPANY: fieldBuilder.buildEdmTypeField(
          'BanksIdentificationOfCompany',
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
         * Static representation of the {@link bankStatementFormatId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_FORMAT_ID: fieldBuilder.buildEdmTypeField(
          'BankStatementFormatId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link contactMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'ContactMobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_CODE: fieldBuilder.buildEdmTypeField(
          'SortCode',
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
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
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
         * Static representation of the {@link contactFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactFaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRateType',
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
         * Static representation of the {@link addressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'AddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowTransactionsInAdditionalCurrencies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TRANSACTIONS_IN_ADDITIONAL_CURRENCIES:
          fieldBuilder.buildEnumField(
            'AllowTransactionsInAdditionalCurrencies',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link positivePayFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITIVE_PAY_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'PositivePayFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrenoteRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRENOTE_REQUIRED: fieldBuilder.buildEnumField(
          'IsPrenoteRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link contactSms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_SMS: fieldBuilder.buildEdmTypeField(
          'ContactSMS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDiscountingMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DISCOUNTING_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'PaymentDiscountingMaximum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowedPennyDifferenceForReconciliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_PENNY_DIFFERENCE_FOR_RECONCILIATION:
          fieldBuilder.buildEdmTypeField(
            'AllowedPennyDifferenceForReconciliation',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link routingNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTING_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoutingNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfileBillsRemitDiscountIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_DISCOUNT_IT: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitDiscount_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfileBillsRemitCollectionIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_COLLECTION_IT:
          fieldBuilder.buildEdmTypeField(
            'PostingProfileBillsRemitCollection_IT',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link postingProfileRemitNotesIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_REMIT_NOTES_IT: fieldBuilder.buildEdmTypeField(
          'PostingProfileRemitNotes_IT',
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
        ALL_FIELDS: new AllFields('*', BankAccounts)
      };
    }

    return this._schema;
  }
}
