/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalTransBiEntities } from './LedgerJournalTransBiEntities';
import { LedgerJournalTransBiEntitiesRequestBuilder } from './LedgerJournalTransBiEntitiesRequestBuilder';
import { RCashDocRepresType } from './RCashDocRepresType';
import { RCashPayLedgerTransType } from './RCashPayLedgerTransType';
import { Listcode } from './Listcode';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { NoYes } from './NoYes';
import { FactureCorrectionTypeRu } from './FactureCorrectionTypeRu';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { CustVendNegInstProtestReason } from './CustVendNegInstProtestReason';
import { ArrivalPostingType } from './ArrivalPostingType';
import { BankRemittanceType } from './BankRemittanceType';
import { CustVendPaymStatus } from './CustVendPaymStatus';
import { PeriodUnit } from './PeriodUnit';
import { SettlementType } from './SettlementType';
import { CommProfileTypeRu } from './CommProfileTypeRu';
import { LedgerTransType } from './LedgerTransType';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LedgerJournalTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerJournalTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): LedgerJournalTransBiEntitiesApi<DeSerializersT> {
    return new LedgerJournalTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerJournalTransBiEntities;

  requestBuilder(): LedgerJournalTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new LedgerJournalTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerJournalTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalTransBiEntities<DeSerializersT>,
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
    typeof LedgerJournalTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_NOTES: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    R_CASH_DOC_REPRES_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      RCashDocRepresType,
      true,
      true
    >;
    AGREEMENT_COMPANY_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_COPY_REVERSE_CN: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESSING_PL: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EINVOICE_PAYM_TRANS_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTENT_LETTER_ID_IT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_LOCATION: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    R_CASH_PAY_TRANS_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      RCashPayLedgerTransType,
      true,
      true
    >;
    CASH_DISC_CODE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CLIENT_DOCUMENT_TYPE_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LISTCODE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      Listcode,
      true,
      true
    >;
    DEBIT_CURRENCY_CODE_LT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_AGREEMENT_COMPANY_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    OFFSET_POSTING_PROFILE_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CURRENCY_TRANSFER_LOG_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSFER_CURRENCY_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_BANK_ACCOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFFSET_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_REFERENCE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FB_SPED_ECF_DEREX_CLASIFICATION_CODE_BR: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IMPORT_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_COMPANY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_PAYM_REF_REC_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_BILL_OF_EXCHANGE_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CUR_DEBIT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SKIP_BLOCKED_FOR_MANUAL_ENTRY_CHECK: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_REF_PAYM_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DUE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_PROMISSORY_NOTE_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_INSTRUCTION_2: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_COMM_ACCOUNT_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCEL: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_SERIES_MX: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_CALCULATE_TH: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NEG_INST_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELAY_TAX_CALCULATION: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREPAYMENT: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYM_INSTRUCTION_3: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CORRECTION_TYPE_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      FactureCorrectionTypeRu,
      true,
      true
    >;
    LAST_TRANSFERRED: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CORRECTED_INVOICE_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_TYPE: EdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PAYM_SPEC: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_TRANS_TYPE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMITTANCE_ADDRESS: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NO_EDIT: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GSTHST_TAX_TYPE_CA: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    FOREIGN_COMPANY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFDIUUID_MX: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMITTEE_CURRENCY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_AGREEMENT_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERRED_BY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKED_INVOICE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_VOUCHER_TYPE_CN: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFFSET_FIN_TAG: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_CURRENCY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    FOREIGN_VOUCHER: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_SALES_LIST: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNOUNCEMENT_NUM_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_ENTRY: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_CURRENCY_DEAL_COURSE_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FURTHER_POSTING_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPROVER: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATE_CASH_DISC: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKUP_CODE_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CURRENCY_AMOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_NEG_INST_PROTEST_REASON: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendNegInstProtestReason,
      true,
      true
    >;
    FILE_CREATED: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_INVOICE_DECLARATION_IS: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_LEDGER_POSTING: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      ArrivalPostingType,
      true,
      true
    >;
    PURCH_ID_RANGE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_CASH_DOC_REPRES_PERSON_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAFOND_DATE_IT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_ORIGINAL_DOCUMENT_AS_FACTURE_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_REMITTANCE_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      BankRemittanceType,
      true,
      true
    >;
    BANK_DEPOSIT_VOUCHER: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_BASE_DAYS: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAYMENT_STATUS: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendPaymStatus,
      true,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTED_INVOICE_DATE_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIRECT_DEBIT_MANDATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSFER: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RELEASE_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EINVOICE_PAYM_DELIVERY_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCR_PAYM_ORDER_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TRANS_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INT_BANK_LV: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_PERCENT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE_SECONDARY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPRES_PERSON_CARD_W: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREQ_CODE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    AMOUNT_CUR_CREDIT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_ALTERNATE_VENDOR_ACCT_TH: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DEPOSIT_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_VAT_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BANK_CHEQUE_DEPOSIT_TRANS_REF_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_TRANS_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_NUM_JOURNAL: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRA_COM_VAT_DUE_DATE_W: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CORRECT_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_INSTRUCTION_1: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMAIN_AMOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_PRINT_TXT_ON_CHECK: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POOL_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCH_RATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_NEG_INST_RECIPIENT_NAME: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DIRECTION_CONTROL: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_ON_PAYMENT_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRIANGULATION: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FURTHER_POSTING_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_ACCOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_VEND_BANK_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKED_INVOICE_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC_AMOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETTLE_VOUCHER: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      SettlementType,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_W: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_PAYM_FEE_GROUP_JP: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERRED: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPRES_PERSON_NAME_W: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMM_PROFILE_TYPE_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      CommProfileTypeRu,
      true,
      true
    >;
    BANK_AGREEMENT_EXT_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_PRINT_ACCOUNT_NUM_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_CN: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTERPRISE_NUMBER: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORM_BY_TELEX_LT: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_RESP_WORKER_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_REMITTANCE_FILE_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_SEQUENCE_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_AUTH_TRANS_REF_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OFFSET_LEDGER_DIMENSION: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_CENTRAL_BANK_TRANS_TYPE_CUR_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_TAX_AGENT_VEND_ACCOUNT_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_RECONCILE_ACCOUNT_AT_POST: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_RECEIPT_NUM_LV: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_PURPOSE_LT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_RELEASE_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKED_INVOICE_COMPANY: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVISIBLE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_DIMENSION_NAME: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERRED_ON: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROVISIONAL_ASSESSMENT_IN: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCH_RATE_SECOND: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ELECTRONIC_PAYMENT_NUMBER: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_TEXT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_AGREEMENT_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BASE_W: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACKNOWLEDGEMENT_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSFERRED_TO: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_DATE_COMMENT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_VEND_ACCOUNT_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_VEND_ACCOUNT_PL: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_EINVOICE_PAYM_SECTION_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCRCC_GENERAL_LEDGER_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_INSTRUCTION_4: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REVERSE_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_TXT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENTS_CN: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISC_BASE_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VAT_OPERATION_CODE_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_JOURNAL_DLV_DATE_ES: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVED: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_SOURCE_LEDGER_ENTRY_UNPOSTED: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FREQ_VALUE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOADING_DATE: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ERROR_CODE_PAYMENT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INFORM_BY_PHONE_LT: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BANK_SPEC_ACCOUNT_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DUE_DATE_W: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_BANK_ACCOUNT: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_FACTURE_AUTO_CREATE_RU: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_VEND_NAME_PL: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_SCHED: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerTransType,
      true,
      true
    >;
    BANK_TRANS_SUMMARIZATION_ID: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_PAYMENT_REGISTRATION_NUM_LV: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CHEQUE_NUM: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFF_SESSION_ID_RU: OrderableEdmTypeField<
      LedgerJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerJournalTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_NOTES: fieldBuilder.buildEdmTypeField(
          'PaymentNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link rCashDocRepresType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_CASH_DOC_REPRES_TYPE: fieldBuilder.buildEnumField(
          'RCashDocRepresType',
          RCashDocRepresType,
          true
        ),
        /**
         * Static representation of the {@link agreementCompanyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_COMPANY_RU: fieldBuilder.buildEdmTypeField(
          'AgreementCompany_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refCopyReverseCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COPY_REVERSE_CN: fieldBuilder.buildEdmTypeField(
          'RefCopyReverse_CN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressingPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSING_PL: fieldBuilder.buildEdmTypeField(
          'Addressing_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custEinvoicePaymTransNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EINVOICE_PAYM_TRANS_NUM: fieldBuilder.buildEdmTypeField(
          'CustEinvoicePaymTransNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link intentLetterIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID_IT: fieldBuilder.buildEdmTypeField(
          'IntentLetterId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_LOCATION: fieldBuilder.buildEdmTypeField(
          'RemittanceLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link rCashPayTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_CASH_PAY_TRANS_TYPE: fieldBuilder.buildEnumField(
          'RCashPayTransType',
          RCashPayLedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link cashDiscCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_CODE: fieldBuilder.buildEdmTypeField(
          'CashDiscCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankClientDocumentTypeIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CLIENT_DOCUMENT_TYPE_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankClientDocumentTypeId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link listcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTCODE: fieldBuilder.buildEnumField('Listcode', Listcode, true),
        /**
         * Static representation of the {@link debitCurrencyCodeLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CURRENCY_CODE_LT: fieldBuilder.buildEdmTypeField(
          'DebitCurrencyCode_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetAgreementCompanyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_AGREEMENT_COMPANY_RU: fieldBuilder.buildEdmTypeField(
          'OffsetAgreementCompany_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link offsetPostingProfileRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_POSTING_PROFILE_RU: fieldBuilder.buildEdmTypeField(
          'OffsetPostingProfile_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCurrencyTransferLogRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CURRENCY_TRANSFER_LOG_RU: fieldBuilder.buildEdmTypeField(
          'BankCurrencyTransferLog_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transferCurrencyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_CURRENCY_RU: fieldBuilder.buildEdmTypeField(
          'TransferCurrency_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendBankAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link offsetLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link fbSpedEcfDerexClasificationCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FB_SPED_ECF_DEREX_CLASIFICATION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'FBSpedEcfDerexClasificationCode_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link importDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DATE: fieldBuilder.buildEdmTypeField(
          'ImportDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_COMPANY: fieldBuilder.buildEdmTypeField(
          'OffsetCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatPaymRefRecIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_PAYM_REF_REC_ID_RU: fieldBuilder.buildEdmTypeField(
          'VATPaymRefRecId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankBillOfExchangeNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BILL_OF_EXCHANGE_NUM: fieldBuilder.buildEdmTypeField(
          'BankBillOfExchangeNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE_MX: fieldBuilder.buildEnumField(
          'OperationType_MX',
          VendorOperationTypeMx,
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
         * Static representation of the {@link amountCurDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR_DEBIT: fieldBuilder.buildEdmTypeField(
          'AmountCurDebit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link skipBlockedForManualEntryCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_BLOCKED_FOR_MANUAL_ENTRY_CHECK: fieldBuilder.buildEnumField(
          'SkipBlockedForManualEntryCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099RecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REC_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099RecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mcrRefPaymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_REF_PAYM_ID: fieldBuilder.buildEdmTypeField(
          'MCRRefPaymID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link due} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE: fieldBuilder.buildEdmTypeField('Due', 'Edm.DateTimeOffset', false),
        /**
         * Static representation of the {@link bankPromissoryNoteNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_PROMISSORY_NOTE_NUM: fieldBuilder.buildEdmTypeField(
          'BankPromissoryNoteNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymInstruction2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_INSTRUCTION_2: fieldBuilder.buildEdmTypeField(
          'PaymInstruction2',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankCommAccountIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COMM_ACCOUNT_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankCommAccountId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL: fieldBuilder.buildEnumField('Cancel', NoYes, true),
        /**
         * Static representation of the {@link invoiceSeriesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SERIES_MX: fieldBuilder.buildEdmTypeField(
          'InvoiceSeries_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdCalculateTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CALCULATE_TH: fieldBuilder.buildEnumField(
          'TaxWithholdCalculate_TH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link negInstId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEG_INST_ID: fieldBuilder.buildEdmTypeField(
          'NegInstId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link delayTaxCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELAY_TAX_CALCULATION: fieldBuilder.buildEnumField(
          'DelayTaxCalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link prepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT: fieldBuilder.buildEnumField('Prepayment', NoYes, true),
        /**
         * Static representation of the {@link paymInstruction3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_INSTRUCTION_3: fieldBuilder.buildEdmTypeField(
          'PaymInstruction3',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link correctionTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_TYPE_RU: fieldBuilder.buildEnumField(
          'CorrectionType_RU',
          FactureCorrectionTypeRu,
          true
        ),
        /**
         * Static representation of the {@link lastTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_TRANSFERRED: fieldBuilder.buildEdmTypeField(
          'LastTransferred',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link correctedInvoiceIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_ID_RU: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'MainAccountType',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link paymSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SPEC: fieldBuilder.buildEdmTypeField(
          'PaymSpec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANS_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remittanceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'RemittanceAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link noEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_EDIT: fieldBuilder.buildEnumField('NoEdit', NoYes, true),
        /**
         * Static representation of the {@link gsthstTaxTypeCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTHST_TAX_TYPE_CA: fieldBuilder.buildEnumField(
          'GSTHSTTaxType_CA',
          GsthstTaxTypeCa,
          true
        ),
        /**
         * Static representation of the {@link foreignCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_COMPANY: fieldBuilder.buildEdmTypeField(
          'ForeignCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfdiuuidMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDIUUID_MX: fieldBuilder.buildEdmTypeField(
          'CFDIUUID_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link remitteeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTEE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'RemitteeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountAgreementIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_AGREEMENT_ID_RU: fieldBuilder.buildEdmTypeField(
          'OffsetAccountAgreementId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferredBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED_BY: fieldBuilder.buildEdmTypeField(
          'TransferredBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markedInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_INVOICE: fieldBuilder.buildEdmTypeField(
          'MarkedInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerVoucherTypeCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_VOUCHER_TYPE_CN: fieldBuilder.buildEdmTypeField(
          'LedgerVoucherType_CN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link offsetFinTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_FIN_TAG: fieldBuilder.buildEdmTypeField(
          'OffsetFinTag',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BankCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link foreignVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_VOUCHER: fieldBuilder.buildEdmTypeField(
          'ForeignVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES_LIST: fieldBuilder.buildEdmTypeField(
          'EUSalesList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link announcementNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNOUNCEMENT_NUM_RU: fieldBuilder.buildEdmTypeField(
          'AnnouncementNum_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reverseEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_ENTRY: fieldBuilder.buildEnumField('ReverseEntry', NoYes, true),
        /**
         * Static representation of the {@link bankCurrencyDealCourseRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CURRENCY_DEAL_COURSE_RU: fieldBuilder.buildEdmTypeField(
          'BankCurrencyDealCourse_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link furtherPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FURTHER_POSTING_TYPE: fieldBuilder.buildEnumField(
          'FurtherPostingType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link approver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER: fieldBuilder.buildEdmTypeField(
          'Approver',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dateCashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CASH_DISC: fieldBuilder.buildEdmTypeField(
          'DateCashDisc',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link markupCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE_RU: fieldBuilder.buildEdmTypeField(
          'MarkupCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BankCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custVendNegInstProtestReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_NEG_INST_PROTEST_REASON: fieldBuilder.buildEnumField(
          'CustVendNegInstProtestReason',
          CustVendNegInstProtestReason,
          true
        ),
        /**
         * Static representation of the {@link fileCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_CREATED: fieldBuilder.buildEdmTypeField(
          'FileCreated',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendInvoiceDeclarationIs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_DECLARATION_IS: fieldBuilder.buildEdmTypeField(
          'VendInvoiceDeclaration_IS',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchLedgerPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_LEDGER_POSTING: fieldBuilder.buildEnumField(
          'PurchLedgerPosting',
          ArrivalPostingType,
          true
        ),
        /**
         * Static representation of the {@link purchIdRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID_RANGE: fieldBuilder.buildEdmTypeField(
          'PurchIdRange',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rCashDocRepresPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_CASH_DOC_REPRES_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'RCashDocRepresPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plafondDateIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_DATE_IT: fieldBuilder.buildEdmTypeField(
          'PlafondDate_IT',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useOriginalDocumentAsFactureRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ORIGINAL_DOCUMENT_AS_FACTURE_RU: fieldBuilder.buildEnumField(
          'UseOriginalDocumentAsFacture_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankRemittanceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REMITTANCE_TYPE: fieldBuilder.buildEnumField(
          'BankRemittanceType',
          BankRemittanceType,
          true
        ),
        /**
         * Static representation of the {@link bankDepositVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DEPOSIT_VOUCHER: fieldBuilder.buildEnumField(
          'BankDepositVoucher',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscBaseDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DAYS: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          CustVendPaymStatus,
          true
        ),
        /**
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link correctedInvoiceDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_INVOICE_DATE_RU: fieldBuilder.buildEdmTypeField(
          'CorrectedInvoiceDate_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link directDebitMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_DEBIT_MANDATE: fieldBuilder.buildEdmTypeField(
          'DirectDebitMandate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER: fieldBuilder.buildEnumField('Transfer', NoYes, true),
        /**
         * Static representation of the {@link releaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'ReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link documentNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUM: fieldBuilder.buildEdmTypeField(
          'DocumentNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custEinvoicePaymDeliveryNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EINVOICE_PAYM_DELIVERY_NUM: fieldBuilder.buildEdmTypeField(
          'CustEinvoicePaymDeliveryNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mcrPaymOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PAYM_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'MCRPaymOrderID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'VendTransId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT: fieldBuilder.buildEdmTypeField('Payment', 'Edm.String', true),
        /**
         * Static representation of the {@link intBankLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INT_BANK_LV: fieldBuilder.buildEdmTypeField(
          'IntBank_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'CashDiscPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchRateSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE_SECONDARY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRateSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link represPersonCardW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPRES_PERSON_CARD_W: fieldBuilder.buildEdmTypeField(
          'RepresPersonCard_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freqCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQ_CODE: fieldBuilder.buildEnumField('FreqCode', PeriodUnit, true),
        /**
         * Static representation of the {@link amountCurCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CUR_CREDIT: fieldBuilder.buildEdmTypeField(
          'AmountCurCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdAlternateVendorAcctTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ALTERNATE_VENDOR_ACCT_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdAlternateVendorAcct_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDepositNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DEPOSIT_NUM: fieldBuilder.buildEdmTypeField(
          'BankDepositNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorVatDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_VAT_DATE: fieldBuilder.buildEdmTypeField(
          'VendorVATDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bankChequeDepositTransRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHEQUE_DEPOSIT_TRANS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'BankChequeDepositTransRefRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'CustTransId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatNumJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM_JOURNAL: fieldBuilder.buildEdmTypeField(
          'VATNumJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intraComVatDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRA_COM_VAT_DUE_DATE_W: fieldBuilder.buildEnumField(
          'IntraComVATDueDate_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link correctRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECT_RU: fieldBuilder.buildEnumField('Correct_RU', NoYes, true),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymInstruction1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_INSTRUCTION_1: fieldBuilder.buildEdmTypeField(
          'PaymInstruction1',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link remainAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mcrPrintTxtOnCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PRINT_TXT_ON_CHECK: fieldBuilder.buildEnumField(
          'MCRPrintTxtOnCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link poolRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_REC_ID: fieldBuilder.buildEdmTypeField(
          'PoolRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankNegInstRecipientName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NEG_INST_RECIPIENT_NAME: fieldBuilder.buildEdmTypeField(
          'BankNegInstRecipientName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDirectionControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DIRECTION_CONTROL: fieldBuilder.buildEnumField(
          'TaxDirectionControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link vatOnPaymentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ON_PAYMENT_RU: fieldBuilder.buildEnumField(
          'VATOnPayment_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link triangulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULATION: fieldBuilder.buildEnumField(
          'Triangulation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link furtherPostingRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FURTHER_POSTING_REC_ID: fieldBuilder.buildEdmTypeField(
          'FurtherPostingRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custVendBankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'CustVendBankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_ID: fieldBuilder.buildEdmTypeField('PaymId', 'Edm.String', true),
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
         * Static representation of the {@link markedInvoiceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_INVOICE_REC_ID: fieldBuilder.buildEdmTypeField(
          'MarkedInvoiceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cashDiscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link settleVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_VOUCHER: fieldBuilder.buildEnumField(
          'SettleVoucher',
          SettlementType,
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
         * Static representation of the {@link receiptDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_W: fieldBuilder.buildEdmTypeField(
          'ReceiptDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendPaymFeeGroupJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PAYM_FEE_GROUP_JP: fieldBuilder.buildEdmTypeField(
          'VendPaymFeeGroup_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED: fieldBuilder.buildEnumField('Transferred', NoYes, true),
        /**
         * Static representation of the {@link represPersonNameW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPRES_PERSON_NAME_W: fieldBuilder.buildEdmTypeField(
          'RepresPersonName_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMM_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'CommProfileType_RU',
          CommProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link bankAgreementExtRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_AGREEMENT_EXT_RU: fieldBuilder.buildEdmTypeField(
          'BankAgreementExt_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link bankPrintAccountNumRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_PRINT_ACCOUNT_NUM_RU: fieldBuilder.buildEdmTypeField(
          'BankPrintAccountNum_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_CN: fieldBuilder.buildEdmTypeField(
          'Voucher_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link enterpriseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTERPRISE_NUMBER: fieldBuilder.buildEdmTypeField(
          'EnterpriseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link informByTelexLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORM_BY_TELEX_LT: fieldBuilder.buildEnumField(
          'InformByTelex_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankRespWorkerIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RESP_WORKER_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankRespWorkerId_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankRemittanceFileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REMITTANCE_FILE_ID: fieldBuilder.buildEdmTypeField(
          'BankRemittanceFileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentSequenceNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SEQUENCE_NUM: fieldBuilder.buildEdmTypeField(
          'PaymentSequenceNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardAuthTransRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTH_TRANS_REF_ID: fieldBuilder.buildEdmTypeField(
          'CreditCardAuthTransRefId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link offsetLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankCentralBankTransTypeCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_TRANS_TYPE_CUR_RU: fieldBuilder.buildEdmTypeField(
          'BankCentralBankTransTypeCur_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link vatTaxAgentVendAccountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_TAX_AGENT_VEND_ACCOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATTaxAgentVendAccount_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankReconcileAccountAtPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RECONCILE_ACCOUNT_AT_POST: fieldBuilder.buildEnumField(
          'BankReconcileAccountAtPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashReceiptNumLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_RECEIPT_NUM_LV: fieldBuilder.buildEdmTypeField(
          'CashReceiptNum_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymPurposeLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_PURPOSE_LT: fieldBuilder.buildEdmTypeField(
          'PaymPurpose_LT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReleaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link markedInvoiceCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_INVOICE_COMPANY: fieldBuilder.buildEdmTypeField(
          'MarkedInvoiceCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invisible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVISIBLE: fieldBuilder.buildEnumField('Invisible', NoYes, true),
        /**
         * Static representation of the {@link ledgerDimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferredOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED_ON: fieldBuilder.buildEdmTypeField(
          'TransferredOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link provisionalAssessmentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISIONAL_ASSESSMENT_IN: fieldBuilder.buildEnumField(
          'ProvisionalAssessment_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exchRateSecond} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_RATE_SECOND: fieldBuilder.buildEdmTypeField(
          'ExchRateSecond',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link electronicPaymentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PAYMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ElectronicPaymentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_ID: fieldBuilder.buildEdmTypeField(
          'RevRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountAgreementIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_AGREEMENT_ID_RU: fieldBuilder.buildEdmTypeField(
          'AccountAgreementId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxBaseW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_W: fieldBuilder.buildEdmTypeField(
          'TaxBase_W',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroupHeadingTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeading_TH',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link acknowledgementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACKNOWLEDGEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AcknowledgementDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transferredTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED_TO: fieldBuilder.buildEdmTypeField(
          'TransferredTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseDateComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReleaseDateComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankVendAccountIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_VEND_ACCOUNT_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankVendAccountId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custVendAccountPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_ACCOUNT_PL: fieldBuilder.buildEdmTypeField(
          'CustVendAccount_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custEinvoicePaymSectionNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_EINVOICE_PAYM_SECTION_NUM: fieldBuilder.buildEdmTypeField(
          'CustEinvoicePaymSectionNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mcrccGeneralLedgerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCRCC_GENERAL_LEDGER_ID: fieldBuilder.buildEdmTypeField(
          'MCRCCGeneralLedgerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymInstruction4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_INSTRUCTION_4: fieldBuilder.buildEdmTypeField(
          'PaymInstruction4',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reverseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DATE: fieldBuilder.buildEdmTypeField(
          'ReverseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_TXT: fieldBuilder.buildEdmTypeField(
          'OffsetTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentsCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENTS_CN: fieldBuilder.buildEdmTypeField(
          'Attachments_CN',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCentralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'BankCentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscBaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vatOperationCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE_RU: fieldBuilder.buildEdmTypeField(
          'VATOperationCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerJournalDlvDateEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_JOURNAL_DLV_DATE_ES: fieldBuilder.buildEdmTypeField(
          'LedgerJournalDlvDate_ES',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED: fieldBuilder.buildEnumField('Approved', NoYes, true),
        /**
         * Static representation of the {@link budgetSourceLedgerEntryUnposted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SOURCE_LEDGER_ENTRY_UNPOSTED: fieldBuilder.buildEdmTypeField(
          'BudgetSourceLedgerEntryUnposted',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link freqValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQ_VALUE: fieldBuilder.buildEdmTypeField(
          'FreqValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link loadingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_DATE: fieldBuilder.buildEdmTypeField(
          'LoadingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link errorCodePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CODE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'ErrorCodePayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link informByPhoneLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORM_BY_PHONE_LT: fieldBuilder.buildEnumField(
          'InformByPhone_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bankSpecAccountIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_SPEC_ACCOUNT_ID_RU: fieldBuilder.buildEdmTypeField(
          'BankSpecAccountId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatDueDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DUE_DATE_W: fieldBuilder.buildEdmTypeField(
          'VatDueDate_W',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustBankAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custFactureAutoCreateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_FACTURE_AUTO_CREATE_RU: fieldBuilder.buildEnumField(
          'CustFactureAutoCreate_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custVendNamePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_NAME_PL: fieldBuilder.buildEdmTypeField(
          'CustVendName_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_SCHED: fieldBuilder.buildEdmTypeField(
          'PaymSched',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          LedgerTransType,
          true
        ),
        /**
         * Static representation of the {@link bankTransSummarizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANS_SUMMARIZATION_ID: fieldBuilder.buildEdmTypeField(
          'BankTransSummarizationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankPaymentRegistrationNumLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_PAYMENT_REGISTRATION_NUM_LV: fieldBuilder.buildEdmTypeField(
          'BankPaymentRegistrationNum_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankChequeNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CHEQUE_NUM: fieldBuilder.buildEdmTypeField(
          'BankChequeNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offSessionIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFF_SESSION_ID_RU: fieldBuilder.buildEdmTypeField(
          'OffSessionId_RU',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerJournalTransBiEntities)
      };
    }

    return this._schema;
  }
}
