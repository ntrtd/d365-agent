/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankAccountTableBiEntities } from './BankAccountTableBiEntities';
import { BankAccountTableBiEntitiesRequestBuilder } from './BankAccountTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { MarkupModuleType } from './MarkupModuleType';
import { Timezone } from './Timezone';
import { DmfTimeZonePreference } from './DmfTimeZonePreference';
import { BankTransTypeJp } from './BankTransTypeJp';
import { BankCodeType } from './BankCodeType';
import { BankAccountHoldStatus } from './BankAccountHoldStatus';
import { LvPaymentOrderType } from './LvPaymentOrderType';
import { BankInterbankClearingCodeBe } from './BankInterbankClearingCodeBe';
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
export class BankAccountTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankAccountTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): BankAccountTableBiEntitiesApi<DeSerializersT> {
    return new BankAccountTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankAccountTableBiEntities;

  requestBuilder(): BankAccountTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new BankAccountTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankAccountTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankAccountTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankAccountTableBiEntities<DeSerializersT>,
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
    typeof BankAccountTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankAccountTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_REMITTANCE_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEX: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_COLLECTION_IT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAGER: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_RECONCILIATION_ENABLED: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_RECONCILIATION_STMT_AS_PAYM_CONFIRM: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_BANK_BAR_CODE_FI: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CONTRACT_ACCOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMS: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SORT_CODE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_POSITIVE_PAY_FORMAT_NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_NUM: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FEE_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_COMPANY_STATEMENT_NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_REMIT_NOTES_IT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_LOCAL: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONSTANT_SYMBOL: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NSF_FEE_MARKUP_GROUP_MODULE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_SELL_ORDER_TEMPLATE_NAME_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_CONTRACT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_NO: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPII_NAME_IN: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NSF_FEE_MARKUP_GROUP_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIFIC_SYMBOL: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_POSITIVE_PAY_START_DATE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QRIBAN_CH: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BANK_PRENOTE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENCY_SELL_ORDER_TEMPLATE_REF_REC_ID_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TELE_FAX: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISC_CREDIT_MAX_MST: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_DIRECT_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_DISCOUNT_LEDGER_DIMENSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TEMPLATE_FILE_NAME_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE_PREFERENCE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      DmfTimeZonePreference,
      true,
      true
    >;
    CURRENCY_ORDER_TEMPLATE_NAME_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_FORMAT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_LOCAL_EXPORT_PATH_LT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TYPE_JP: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankTransTypeJp,
      true,
      true
    >;
    INVOICE_REMIT_AMOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_TRANSFER_CODE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PHONE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_SUFFIX: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_DEBIT_CREDIT: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_DESTINATION_NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GIRO_CONTRACT_ACCOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPI_ID_IN: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFM_BANK_BALANCE_MINIMUM: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_DISCOUNT_IT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_RECON_ALLOWED_PENNY_DIFFERENCE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMIT_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_CODE_TYPE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankCodeType,
      true,
      true
    >;
    CORR_ACCOUNT_W: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPLATE_REF_REC_ID_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_ORDER_TEMPLATE_REF_REC_ID_RU: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_GIRO_FI: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_FOREIGN_EXPORT_PATH_LT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_COLLECTION_LEDGER_DIMENSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_CLEARING_CODE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CELLULAR_PHONE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRENOTE_RESPONSE_DAYS: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_RECONCILIATION_MATCH_RULE_SET: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYM_ORDER_NUM_SEQ_ID_W: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY_PAYM_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION_PAYM_ID: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_RECON_MATCH_AUTO_AFTER_IMPORT: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMITTANCE_DISCOUNT_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_STATUS: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankAccountHoldStatus,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IFSC_IN: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PAYMENT_FEE_LEDGER_DIMENSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_PAYM_FEE_POST: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMIT_COLLECTION_AMOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_NAME_KANA_JP: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_MX: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_COLLECTION_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LV_PAY_ORDER_TYPE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      LvPaymentOrderType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_INTERBANK_CLEARING_CODE_BE: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      BankInterbankClearingCodeBe,
      true,
      true
    >;
    OVER_DRAFT_LIMIT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FEE_CONTRACT_ACCOUNT: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LV_DEFAULT_BANK: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REMITTANCE_LEDGER_DIMENSION: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NSF_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_MULTI_CURRENCY: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CIN: OrderableEdmTypeField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NACHA_FILE_BLOCKED: EnumField<
      BankAccountTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BankAccountTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link accountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'AccountID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceRemittanceLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMITTANCE_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'InvoiceRemittanceLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link telex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEX: fieldBuilder.buildEdmTypeField('Telex', 'Edm.String', true),
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
         * Static representation of the {@link pager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAGER: fieldBuilder.buildEdmTypeField('Pager', 'Edm.String', true),
        /**
         * Static representation of the {@link bankReconciliationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECONCILIATION_ENABLED: fieldBuilder.buildEnumField(
          'BankReconciliationEnabled',
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
         * Static representation of the {@link bankReconciliationStmtAsPaymConfirm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECONCILIATION_STMT_AS_PAYM_CONFIRM: fieldBuilder.buildEnumField(
          'BankReconciliationStmtAsPaymConfirm',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeBankBarCodeFi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_BANK_BAR_CODE_FI: fieldBuilder.buildEnumField(
          'IncludeBankBarCode_FI',
          NoYes,
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
         * Static representation of the {@link sms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMS: fieldBuilder.buildEdmTypeField('SMS', 'Edm.String', true),
        /**
         * Static representation of the {@link bankSortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SORT_CODE: fieldBuilder.buildEdmTypeField(
          'BankSortCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankPositivePayFormatName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_POSITIVE_PAY_FORMAT_NAME: fieldBuilder.buildEdmTypeField(
          'BankPositivePayFormatName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUM: fieldBuilder.buildEdmTypeField(
          'RegistrationNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFeeLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FEE_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'CustomerPaymentFeeLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link bankCompanyStatementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COMPANY_STATEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'BankCompanyStatementName',
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
         * Static representation of the {@link phoneLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_LOCAL: fieldBuilder.buildEdmTypeField(
          'PhoneLocal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankConstantSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONSTANT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BankConstantSymbol',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link nsfFeeMarkupGroupModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NSF_FEE_MARKUP_GROUP_MODULE: fieldBuilder.buildEnumField(
          'NsfFeeMarkupGroupModule',
          MarkupModuleType,
          true
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
         * Static representation of the {@link currencySellOrderTemplateNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_SELL_ORDER_TEMPLATE_NAME_RU: fieldBuilder.buildEdmTypeField(
          'CurrencySellOrder_TemplateName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link giroContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_CONTRACT: fieldBuilder.buildEdmTypeField(
          'GiroContract',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link swiftNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWIFT_NO: fieldBuilder.buildEdmTypeField('SWIFTNo', 'Edm.String', true),
        /**
         * Static representation of the {@link upiiNameIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPII_NAME_IN: fieldBuilder.buildEdmTypeField(
          'UPIIName_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nsfFeeMarkupGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NSF_FEE_MARKUP_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'NsfFeeMarkupGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specificSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SpecificSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankPositivePayStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_POSITIVE_PAY_START_DATE: fieldBuilder.buildEdmTypeField(
          'BankPositivePayStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link qribanCh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QRIBAN_CH: fieldBuilder.buildEdmTypeField(
          'QRIBAN_CH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBankPrenote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BANK_PRENOTE: fieldBuilder.buildEnumField(
          'isBankPrenote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currencySellOrderTemplateRefRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_SELL_ORDER_TEMPLATE_REF_REC_ID_RU:
          fieldBuilder.buildEdmTypeField(
            'CurrencySellOrder_TemplateRefRecId_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link teleFax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELE_FAX: fieldBuilder.buildEdmTypeField('TeleFax', 'Edm.String', true),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link discCreditMaxMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_CREDIT_MAX_MST: fieldBuilder.buildEdmTypeField(
          'DiscCreditMaxMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link debitDirectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_DIRECT_ID: fieldBuilder.buildEdmTypeField(
          'DebitDirectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceDiscountLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_DISCOUNT_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'RemittanceDiscountLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link templateFileNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_FILE_NAME_RU: fieldBuilder.buildEdmTypeField(
          'TemplateFileName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeZonePreference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE_PREFERENCE: fieldBuilder.buildEnumField(
          'TimeZonePreference',
          DmfTimeZonePreference,
          true
        ),
        /**
         * Static representation of the {@link currencyOrderTemplateNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ORDER_TEMPLATE_NAME_RU: fieldBuilder.buildEdmTypeField(
          'CurrencyOrder_TemplateName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_FORMAT: fieldBuilder.buildEdmTypeField(
          'BankStatementFormat',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymLocalExportPathLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_LOCAL_EXPORT_PATH_LT: fieldBuilder.buildEdmTypeField(
          'PaymLocalExportPath_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transTypeJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TYPE_JP: fieldBuilder.buildEnumField(
          'TransType_JP',
          BankTransTypeJp,
          true
        ),
        /**
         * Static representation of the {@link invoiceRemitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceRemitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankTransferCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSFER_CODE: fieldBuilder.buildEdmTypeField(
          'BankTransferCode',
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
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        /**
         * Static representation of the {@link bankSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SUFFIX: fieldBuilder.buildEdmTypeField(
          'BankSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reverseDebitCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DEBIT_CREDIT: fieldBuilder.buildEnumField(
          'ReverseDebitCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankDestinationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DESTINATION_NAME: fieldBuilder.buildEdmTypeField(
          'BankDestinationName',
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
         * Static representation of the {@link giroContractAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIRO_CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GiroContractAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upiIdIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPI_ID_IN: fieldBuilder.buildEdmTypeField(
          'UPIId_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfmBankBalanceMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFM_BANK_BALANCE_MINIMUM: fieldBuilder.buildEdmTypeField(
          'CFMBankBalanceMinimum',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link bankReconAllowedPennyDifference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECON_ALLOWED_PENNY_DIFFERENCE: fieldBuilder.buildEdmTypeField(
          'BankReconAllowedPennyDifference',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remitDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIT_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemitDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE_TYPE: fieldBuilder.buildEnumField(
          'BankCodeType',
          BankCodeType,
          true
        ),
        /**
         * Static representation of the {@link corrAccountW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORR_ACCOUNT_W: fieldBuilder.buildEdmTypeField(
          'CorrAccount_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link templateRefRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_REF_REC_ID_RU: fieldBuilder.buildEdmTypeField(
          'TemplateRefRecId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link currencyOrderTemplateRefRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ORDER_TEMPLATE_REF_REC_ID_RU: fieldBuilder.buildEdmTypeField(
          'CurrencyOrder_TemplateRefRecId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledgerJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'LedgerJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link contactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'ContactPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankStatementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'BankStatementName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printGiroFi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_GIRO_FI: fieldBuilder.buildEnumField('PrintGiro_FI', NoYes, true),
        /**
         * Static representation of the {@link paymForeignExportPathLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_FOREIGN_EXPORT_PATH_LT: fieldBuilder.buildEdmTypeField(
          'PaymForeignExportPath_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceCollectionLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_COLLECTION_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'RemittanceCollectionLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankClearingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CLEARING_CODE: fieldBuilder.buildEdmTypeField(
          'BankClearingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cellularPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELLULAR_PHONE: fieldBuilder.buildEdmTypeField(
          'CellularPhone',
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
         * Static representation of the {@link bankReconciliationMatchRuleSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECONCILIATION_MATCH_RULE_SET: fieldBuilder.buildEdmTypeField(
          'BankReconciliationMatchRuleSet',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymOrderNumSeqIdW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ORDER_NUM_SEQ_ID_W: fieldBuilder.buildEdmTypeField(
          'PaymOrderNumSeqId_W',
          'Edm.String',
          true
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
         * Static representation of the {@link companyPaymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_PAYM_ID: fieldBuilder.buildEdmTypeField(
          'CompanyPaymId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link divisionPaymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_PAYM_ID: fieldBuilder.buildEdmTypeField(
          'DivisionPaymId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankReconMatchAutoAfterImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECON_MATCH_AUTO_AFTER_IMPORT: fieldBuilder.buildEnumField(
          'BankReconMatchAutoAfterImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remittanceDiscountLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_DISCOUNT_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'RemittanceDiscountLedgerDimensionValuesJson',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ifscIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IFSC_IN: fieldBuilder.buildEdmTypeField('IFSC_IN', 'Edm.String', true),
        /**
         * Static representation of the {@link ledgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentFeeLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_FEE_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentFeeLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custPaymFeePost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PAYM_FEE_POST: fieldBuilder.buildEnumField(
          'CustPaymFeePost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remitCollectionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIT_COLLECTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemitCollectionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountNameKanaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME_KANA_JP: fieldBuilder.buildEdmTypeField(
          'AccountNameKana_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_MX: fieldBuilder.buildEdmTypeField('Rfc_MX', 'Edm.String', true),
        /**
         * Static representation of the {@link remittanceCollectionLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_COLLECTION_LEDGER_DIMENSION_VALUES_JSON:
          fieldBuilder.buildEdmTypeField(
            'RemittanceCollectionLedgerDimensionValuesJson',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lvPayOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LV_PAY_ORDER_TYPE: fieldBuilder.buildEnumField(
          'LvPayOrderType',
          LvPaymentOrderType,
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
         * Static representation of the {@link bankInterbankClearingCodeBe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_INTERBANK_CLEARING_CODE_BE: fieldBuilder.buildEnumField(
          'BankInterbankClearingCode_BE',
          BankInterbankClearingCodeBe,
          true
        ),
        /**
         * Static representation of the {@link overDraftLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DRAFT_LIMIT: fieldBuilder.buildEdmTypeField(
          'OverDraftLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link feeContractAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FeeContractAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lvDefaultBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LV_DEFAULT_BANK: fieldBuilder.buildEnumField(
          'LvDefaultBank',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceRemittanceLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REMITTANCE_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'InvoiceRemittanceLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link nsfLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NSF_LEDGER_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'NsfLedgerJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankMultiCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_MULTI_CURRENCY: fieldBuilder.buildEnumField(
          'BankMultiCurrency',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankCin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CIN: fieldBuilder.buildEdmTypeField('BankCIN', 'Edm.String', true),
        /**
         * Static representation of the {@link isNachaFileBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NACHA_FILE_BLOCKED: fieldBuilder.buildEnumField(
          'IsNACHAFileBlocked',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankAccountTableBiEntities)
      };
    }

    return this._schema;
  }
}
