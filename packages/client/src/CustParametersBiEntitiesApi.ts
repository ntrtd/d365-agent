/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustParametersBiEntities } from './CustParametersBiEntities';
import { CustParametersBiEntitiesRequestBuilder } from './CustParametersBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { CustSettlementProrationType } from './CustSettlementProrationType';
import { TaxVatNumCountryRegionType } from './TaxVatNumCountryRegionType';
import { ItemCust } from './ItemCust';
import { ErrorTolerance } from './ErrorTolerance';
import { TamDeductionCustPaymSettleMethod } from './TamDeductionCustPaymSettleMethod';
import { InvoiceReferenceNumberFormulaTypeFi } from './InvoiceReferenceNumberFormulaTypeFi';
import { CustSettlePrepaymentVatTypeRu } from './CustSettlePrepaymentVatTypeRu';
import { CustTableChangeProposalDataEntityBehavior } from './CustTableChangeProposalDataEntityBehavior';
import { TypeOfCreditmaxCheck } from './TypeOfCreditmaxCheck';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
import { CustTaxationRu } from './CustTaxationRu';
import { TaxIdValidation } from './TaxIdValidation';
import { CustVendShowTransaction } from './CustVendShowTransaction';
import { UnspecificSpecific } from './UnspecificSpecific';
import { CustInvoiceLinePriority } from './CustInvoiceLinePriority';
import { SalesBookFactureProcessingTypeRu } from './SalesBookFactureProcessingTypeRu';
import { DefaultNoYes } from './DefaultNoYes';
import { CreditCardEstShippingChargeType } from './CreditCardEstShippingChargeType';
import { CommissionTypeIt } from './CommissionTypeIt';
import { CustPkWiUErrorLevel } from './CustPkWiUErrorLevel';
import { McrItemCustCatalog } from './McrItemCustCatalog';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SalesDocumentTimezonePreference } from './SalesDocumentTimezonePreference';
import { CustInterestCalc } from './CustInterestCalc';
import { CustPostedPrinted } from './CustPostedPrinted';
import { UseFiscalInvoiceAccount } from './UseFiscalInvoiceAccount';
import { CustCollectionLetterGenerationLevel } from './CustCollectionLetterGenerationLevel';
import { CustInterestAdjustmentDateToUse } from './CustInterestAdjustmentDateToUse';
import { CreditLineErrorType } from './CreditLineErrorType';
import { PrepaymentHandlingLayoutW } from './PrepaymentHandlingLayoutW';
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
export class CustParametersBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustParametersBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustParametersBiEntitiesApi<DeSerializersT> {
    return new CustParametersBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustParametersBiEntities;

  requestBuilder(): CustParametersBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustParametersBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustParametersBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustParametersBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustParametersBiEntities<DeSerializersT>,
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
    typeof CustParametersBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustParametersBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_CYCLE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_EST_SHIPPING_CHARGE_VALUE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENABLE_CANCEL_POSTING_PROFILES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRENOTIFICATION_DAYS_RECURRING: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_NOTES: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRORATION_TYPE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustSettlementProrationType,
      true,
      true
    >;
    COLLECTION_LETTER_POST_BATCH_TASK_PERCENTAGE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP_RU: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_WAIVE_DAYS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_LEDGER_ALLOW_EDIT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_SEQUENTIAL_LINE_NUMBERS_WHEN_POSTING_CUSTOMER_INVOICE_LINES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREPAYMENT_POSTING_PROFILE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIN_REFUND: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLLECTIONS_EXCLUDE_DISPUTED_TRANSACTIONS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_INVOICE_VAT_NUM: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    CUST_USE_BILLING_CLASSIFICATION_PSN: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_AGENCY_TAX_RATE_W: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_DISC: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    ADVANCE_INVOICE_POSTING_PROFILE_W: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORE_SCHEME_BANK_SUBMISSION_DAYS_FIRST: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENTRY_CERTIFICATE_ISSUING_ENABLED_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_NOTE_CASH_DISCOUNT_CZ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADV_INV_DATE_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    ENABLE_RETURN_POSTING_PROFILES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_GENERAL_SYS_EMAIL_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT_INVOICE_STOP_INVOICE_POSTING_ON_FIRST_ERROR: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_NOTE_REASON_REQ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCEL_PAYMENT_REASON_REQ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAM_DEDUCTION_CUST_PAYM_SETTLE_METHOD: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TamDeductionCustPaymSettleMethod,
      true,
      true
    >;
    SPAN_BILLING_CODE_ACROSS_INVOICES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADVANCE_INVOICE_REVERSAL_CORRECTION_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_REFERENCE_NUMBER_SEQUENCE_TABLE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_REFERENCE_NUMBER_FORMULA_FI: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceReferenceNumberFormulaTypeFi,
      true,
      true
    >;
    CREDIT_CARD_POSTING_BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_CHANGE_PROPOSAL_IS_ENABLED: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_INTEGRATION_SYSTEM_CN: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREPAYMENT_DATE_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    SETTLE_PREPAYMENT_VAT_TYPE_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustSettlePrepaymentVatTypeRu,
      true,
      true
    >;
    COLLECTIONS_OM_TEAM: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ENTRY_CERTIFICATE_MANAGEMENT_ENABLED_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ADJUSTMENT_IN_RETURN: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_AUTH_TRANS_ARCHIVE_THRESHOLD: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_SUBSTITUTION_PROJECT_INVOICES_TH: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_WRITE_OFF_REASON_TABLE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TABLE_CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustTableChangeProposalDataEntityBehavior,
      true,
      true
    >;
    SETTLEMENT_UPDATE_CASH_DISC_DATE_REDUCE_DEADLOCK: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAM_DEDUCTION_TYPE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVOICE_ZERO_AMOUNT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_DISCOUNT: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USUAL_EXPORTER_EXEMPTION_TAX_GROUP_IT: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_INVOICE_TAX_GROUP_W: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_MAX_CHECK: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TypeOfCreditmaxCheck,
      true,
      true
    >;
    DIM_SETTLEMENT_CTRL_TYPE_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DimSettlementCtrlTypeRu,
      true,
      true
    >;
    CUST_TAXATION_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustTaxationRu,
      true,
      true
    >;
    ENABLE_REFER_TO_COLLECTION_AGENCY_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ID_VALIDATION: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxIdValidation,
      true,
      true
    >;
    DUE_2_PAYMENT: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_SINGLE_LINE_TAX_ADJUSTMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FILTER_FOR_CUSTOMER_TRANSACTIONS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustVendShowTransaction,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASH_DISC: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UnspecificSpecific,
      true,
      true
    >;
    PERCENT_CUSTOMERS_PER_BATCH_TASK: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COLLECTIONS_WRITE_OFF_SEPARATE_SALES_TAX: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_STATEMENT_SYS_EMAIL_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_FOR_OVERLAPS_AND_GAPS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_WRITE_OFF_LEDGER_JOURNAL_NAME: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_ENABLED: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREPAYMENT_LINK_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    SHOW_AMOUNT_DEBIT_CREDIT_JP: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_LINE_PRIORITY: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustInvoiceLinePriority,
      true,
      true
    >;
    CREDIT_LIMIT_CHECK_FREE_INVOICE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_BOOK_FACTURE_PROCESSING_TYPE_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      SalesBookFactureProcessingTypeRu,
      true,
      true
    >;
    ENABLE_SUBSTITUTION_INVOICES_TH: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LIMIT_CHECK_SALES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVERSE_PREPAYMENT_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_PROJECT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_DATE_OF_VAT_REGISTER_CHANGING_CZ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_REIMBURSEMENT_EXCHANGE_RATE_TYPE_HU: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ALLOW_EDITING_RETURN_CREDIT_WITH_TAX_ADJ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS_PROTESTED: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTIONS_WRITE_OFF_BASE_AMOUNT_SALES_TAX: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DefaultNoYes,
      true,
      true
    >;
    AUTOMATIC_TOTAL_DISCOUNT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_2_DUE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_INVOICING_REPORT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_RELATION_BR: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    CREDIT_CARD_EST_SHIPPING_CHARGE_TYPE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CreditCardEstShippingChargeType,
      true,
      true
    >;
    COMMISSION_TYPE_IT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CommissionTypeIt,
      true,
      true
    >;
    PK_WI_U_CODE_REQUIREMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustPkWiUErrorLevel,
      true,
      true
    >;
    ADVANCE_INVOICE_TAX_ITEM_GROUP_W: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_ENABLE_PRICE_DETAILS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    B_2_B_SCHEME_BANK_SUBMISSION_DAYS_FIRST: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_PAYMENT_BREAK_DOWN_PROCESS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAM_REBATE_POSTING: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      McrItemCustCatalog,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_INVOICE_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_AGING_SNAPSHOT_BATCH_LIMIT: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATE_STATISTICS_FOR_ZERO_BALANCE_CUSTOMERS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_STAT_REP_INTERVAL: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_GRACE_PERIOD_FOR_DUES_TRANSFER_W: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    R_TAX_25_DEBT_MODEL: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREDIT_CARD_POSTING_ACCOUNT_TYPE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    IS_TOTALS_CALCULATION_AUTOMATIC: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_DEFAULT_DIMENSION_HIERARCHY: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      McrItemCustCatalog,
      true,
      true
    >;
    ALLOW_CROSS_COMPANY_EMPLOYEE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_CHRONOLOGICAL_INVOICE_NUMBERING_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ON_PREPAYMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKAGING_WEIGHT_ON_INVOICE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADVANCE_INVOICE_CREDIT_CORRECTION_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INVOICE_TIMEZONE_PREFERENCE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      SalesDocumentTimezonePreference,
      true,
      true
    >;
    RETURN_ORDERS_REASON_REQ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    R_TAX_25_DEBT_MODEL_TAX: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAM_DEDUCTION_REQUIRE_FULL_SETTLE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_REVERSAL_REASON_REQ: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_PRIORITY_ON_AUTO_SETTLEMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_PRE_AUTHORIZATION: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_SETTLE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLS_JOURNALS_VALIDATIONS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_TAX_GROUP: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ID_EDITING_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_PRINT_TRANSPORTATION_DOCUMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_CUST: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DIM_ADJUST_LINE_CONTROL_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_LETTER_IGNORE_CREDIT_TRANSACTION_CODES: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_CODE_CASH_DISCOUNT_CZ: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_WAIVE_DAYS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUST_INVOICE_REF_NUM_FI: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_INTEREST_CALC: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustInterestCalc,
      true,
      true
    >;
    MATCHED_PACKING_SLIPS_INQUIRY: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETTLEMENT_WRITE_OFF_REASON_CODE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPRESS_DEPRECIATION_OF_PAYMENT_SECTION: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANDATORY_ITEM_TAX_GROUP: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_CREDIT_LINE_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTION_LETTER_CODE_UPDATE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustPostedPrinted,
      true,
      true
    >;
    CORE_SCHEME_BANK_SUBMISSION_DAYS_RECURRING: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_ENABLE_IDEMPOTENCY_KEY: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_PERIOD: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_PREAPPROVAL_LAST_NO_OF_DAYS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_BOOK_ADDITIONAL_LIST_FORMAT_MAPPING_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_FISCAL_INVOICE_ACCOUNT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      UseFiscalInvoiceAccount,
      true,
      true
    >;
    AUTOMATIC_INTENT_LETTER_ASSIGNMENT_IT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COLLECTIONS_SALESPERSON_SYS_EMAIL_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_EST_SHIPPING_CHARGE_MAX: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP_RU: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_ERROR: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_TABLE_COPY_TAX_REGISTION_NUM_AS_TAX_EXEMPT_NUM: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_MST_DIFF: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PREPAYMENT_FACTURE_AUTO_CREATE_RU: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARK_OPEN_INVOICE_LINE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COR_1_SCHEME_BANK_SUBMISSION_DAYS_RECURRING: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_FREE_TEXT_INVOICE_POSTING_TOP_PICK_BATCH_TASKS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    R_TAX_25_PROFIT_TABLE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLEMENT_WRITE_OFF_JOURNAL_NAME: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COR_1_SCHEME_BANK_SUBMISSION_DAYS_FIRST: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AUTO_SETTLE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_CONS_INVOICE_JP: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADV_INV_AMOUNT_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    CUST_NAME_FROM_VAT_NUM: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_DISC_FOR_CREDIT_NOTE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    R_TAX_25_RECEIPT_PCT: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_CUST_PAYM_ID_TABLE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNT_POSITIONS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSTING_PROFILE_BILLS_ENDORSED: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_COST_CENTER_DIMENSION_ATTRIBUTE: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_BOOK_FORMAT_MAPPING_ID: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNT_REVENUE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    COLLECTION_LETTER_GENERATION_LEVEL: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustCollectionLetterGenerationLevel,
      true,
      true
    >;
    CASH_DISC_VAT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_BILLS_REMIT_COLLECTION: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANDATE_DEFAULT_EXPIRATION_MONTHS: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_CUST_PURGE_THRESHOLD: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    B_2_B_SCHEME_BANK_SUBMISSION_DAYS_RECURRING: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRENOTIFICATION_DAYS_FIRST: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADJUSTMENT_DATE_TO_USE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CustInterestAdjustmentDateToUse,
      true,
      true
    >;
    MIXED_PAYMENT: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_MST_OVER_UNDER: OrderableEdmTypeField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CASH_DISC_FOR_PARTIAL_PAYM: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_SETTLEMENT_PRIORITY: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_LINE_ERROR: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CreditLineErrorType,
      true,
      true
    >;
    ACCOUNT_CONSUMPTION: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ItemCust,
      true,
      true
    >;
    MANDATORY_VAT_NUM: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TaxVatNumCountryRegionType,
      true,
      true
    >;
    DUE_TO_TRANS_DATE: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREPAYMENT_HANDLING_LAYOUT_W: EnumField<
      CustParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PrepaymentHandlingLayoutW,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustParametersBiEntities<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link salesCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CYCLE: fieldBuilder.buildEnumField('SalesCycle', NoYes, true),
        /**
         * Static representation of the {@link postingProfileBills} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS: fieldBuilder.buildEdmTypeField(
          'PostingProfileBills',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardEstShippingChargeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_EST_SHIPPING_CHARGE_VALUE: fieldBuilder.buildEdmTypeField(
          'CreditCardEstShippingChargeValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link enableCancelPostingProfiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CANCEL_POSTING_PROFILES: fieldBuilder.buildEnumField(
          'EnableCancelPostingProfiles',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prenotificationDaysRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRENOTIFICATION_DAYS_RECURRING: fieldBuilder.buildEdmTypeField(
          'PrenotificationDaysRecurring',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_NOTES: fieldBuilder.buildEdmTypeField(
          'CreditCardNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prorationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATION_TYPE: fieldBuilder.buildEnumField(
          'ProrationType',
          CustSettlementProrationType,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterPostBatchTaskPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_POST_BATCH_TASK_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'CollectionLetterPostBatchTaskPercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link taxItemGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumWaiveDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_WAIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'MinimumWaiveDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projLedgerAllowEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LEDGER_ALLOW_EDIT: fieldBuilder.buildEnumField(
          'ProjLedgerAllowEdit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useSequentialLineNumbersWhenPostingCustomerInvoiceLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SEQUENTIAL_LINE_NUMBERS_WHEN_POSTING_CUSTOMER_INVOICE_LINES:
          fieldBuilder.buildEnumField(
            'UseSequentialLineNumbersWhenPostingCustomerInvoiceLines',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link prepaymentPostingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PrepaymentPostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_REFUND: fieldBuilder.buildEdmTypeField(
          'MinRefund',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link collectionsExcludeDisputedTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_EXCLUDE_DISPUTED_TRANSACTIONS: fieldBuilder.buildEnumField(
          'CollectionsExcludeDisputedTransactions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryInvoiceVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_INVOICE_VAT_NUM: fieldBuilder.buildEnumField(
          'MandatoryInvoiceVATNum',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link custUseBillingClassificationPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_USE_BILLING_CLASSIFICATION_PSN: fieldBuilder.buildEnumField(
          'CustUseBillingClassification_PSN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionAgencyTaxRateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_AGENCY_TAX_RATE_W: fieldBuilder.buildEdmTypeField(
          'CollectionAgencyTaxRate_W',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISC: fieldBuilder.buildEnumField(
          'AccountDisc',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link advanceInvoicePostingProfileW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_POSTING_PROFILE_W: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoicePostingProfile_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link coreSchemeBankSubmissionDaysFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORE_SCHEME_BANK_SUBMISSION_DAYS_FIRST: fieldBuilder.buildEdmTypeField(
          'CoreSchemeBankSubmissionDaysFirst',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link entryCertificateIssuingEnabledW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_ISSUING_ENABLED_W: fieldBuilder.buildEnumField(
          'EntryCertificateIssuingEnabled_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditNoteCashDiscountCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_CASH_DISCOUNT_CZ: fieldBuilder.buildEnumField(
          'CreditNoteCashDiscount_CZ',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advInvDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADV_INV_DATE_W: fieldBuilder.buildEnumField(
          'AdvInvDate_W',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link enableReturnPostingProfiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RETURN_POSTING_PROFILES: fieldBuilder.buildEnumField(
          'EnableReturnPostingProfiles',
          NoYes,
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
         * Static representation of the {@link collectionsGeneralSysEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_GENERAL_SYS_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'CollectionsGeneralSysEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceStopInvoicePostingOnFirstError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_STOP_INVOICE_POSTING_ON_FIRST_ERROR:
          fieldBuilder.buildEnumField(
            'FreeTextInvoiceStopInvoicePostingOnFirstError',
            NoYes,
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
         * Static representation of the {@link creditNoteReasonReq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_REASON_REQ: fieldBuilder.buildEnumField(
          'CreditNoteReasonReq',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancelPaymentReasonReq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCEL_PAYMENT_REASON_REQ: fieldBuilder.buildEnumField(
          'CancelPaymentReasonReq',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tamDeductionCustPaymSettleMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_CUST_PAYM_SETTLE_METHOD: fieldBuilder.buildEnumField(
          'TAMDeductionCustPaymSettleMethod',
          TamDeductionCustPaymSettleMethod,
          true
        ),
        /**
         * Static representation of the {@link spanBillingCodeAcrossInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPAN_BILLING_CODE_ACROSS_INVOICES: fieldBuilder.buildEnumField(
          'SpanBillingCodeAcrossInvoices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advanceInvoiceReversalCorrectionW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_REVERSAL_CORRECTION_W: fieldBuilder.buildEnumField(
          'AdvanceInvoiceReversalCorrection_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceReferenceNumberSequenceTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REFERENCE_NUMBER_SEQUENCE_TABLE: fieldBuilder.buildEdmTypeField(
          'InvoiceReferenceNumberSequenceTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceReferenceNumberFormulaFi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REFERENCE_NUMBER_FORMULA_FI: fieldBuilder.buildEnumField(
          'InvoiceReferenceNumberFormula_FI',
          InvoiceReferenceNumberFormulaTypeFi,
          true
        ),
        /**
         * Static representation of the {@link creditCardPostingBankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_POSTING_BANK_TRANSACTION_TYPE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardPostingBankTransactionType',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link custTableChangeProposalIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_CHANGE_PROPOSAL_IS_ENABLED: fieldBuilder.buildEnumField(
          'CustTableChangeProposalIsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxIntegrationSystemCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INTEGRATION_SYSTEM_CN: fieldBuilder.buildEnumField(
          'TaxIntegrationSystem_CN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prepaymentDateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_DATE_W: fieldBuilder.buildEnumField(
          'PrepaymentDate_W',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link settlePrepaymentVatTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_PREPAYMENT_VAT_TYPE_RU: fieldBuilder.buildEnumField(
          'SettlePrepaymentVATType_RU',
          CustSettlePrepaymentVatTypeRu,
          true
        ),
        /**
         * Static representation of the {@link collectionsOmTeam} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_OM_TEAM: fieldBuilder.buildEdmTypeField(
          'CollectionsOMTeam',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link entryCertificateManagementEnabledW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_MANAGEMENT_ENABLED_W: fieldBuilder.buildEnumField(
          'EntryCertificateManagementEnabled_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxAdjustmentInReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ADJUSTMENT_IN_RETURN: fieldBuilder.buildEnumField(
          'TaxAdjustmentInReturn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardAuthTransArchiveThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_AUTH_TRANS_ARCHIVE_THRESHOLD:
          fieldBuilder.buildEdmTypeField(
            'CreditCardAuthTransArchiveThreshold',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link enableSubstitutionProjectInvoicesTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SUBSTITUTION_PROJECT_INVOICES_TH: fieldBuilder.buildEnumField(
          'EnableSubstitutionProjectInvoices_TH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsWriteOffReasonTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_REASON_TABLE: fieldBuilder.buildEdmTypeField(
          'CollectionsWriteOffReasonTable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTableChangeProposalDataEntityBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_CHANGE_PROPOSAL_DATA_ENTITY_BEHAVIOR:
          fieldBuilder.buildEnumField(
            'CustTableChangeProposalDataEntityBehavior',
            CustTableChangeProposalDataEntityBehavior,
            true
          ),
        /**
         * Static representation of the {@link settlementUpdateCashDiscDateReduceDeadlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_UPDATE_CASH_DISC_DATE_REDUCE_DEADLOCK:
          fieldBuilder.buildEnumField(
            'SettlementUpdateCashDiscDateReduceDeadlock',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link tamDeductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_TYPE: fieldBuilder.buildEdmTypeField(
          'TAMDeductionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInvoiceZeroAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_ZERO_AMOUNT: fieldBuilder.buildEnumField(
          'IsInvoiceZeroAmount',
          NoYes,
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
         * Static representation of the {@link postingProfileBillsRemitDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usualExporterExemptionTaxGroupIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USUAL_EXPORTER_EXEMPTION_TAX_GROUP_IT: fieldBuilder.buildEdmTypeField(
          'UsualExporterExemptionTaxGroup_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceInvoiceTaxGroupW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_TAX_GROUP_W: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoiceTaxGroup_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditMaxCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_MAX_CHECK: fieldBuilder.buildEnumField(
          'CreditMaxCheck',
          TypeOfCreditmaxCheck,
          true
        ),
        /**
         * Static representation of the {@link dimSettlementCtrlTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_SETTLEMENT_CTRL_TYPE_RU: fieldBuilder.buildEnumField(
          'DimSettlementCtrlType_RU',
          DimSettlementCtrlTypeRu,
          true
        ),
        /**
         * Static representation of the {@link custTaxationRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAXATION_RU: fieldBuilder.buildEnumField(
          'CustTaxation_RU',
          CustTaxationRu,
          true
        ),
        /**
         * Static representation of the {@link enableReferToCollectionAgencyW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_REFER_TO_COLLECTION_AGENCY_W: fieldBuilder.buildEnumField(
          'EnableReferToCollectionAgency_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxIdValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID_VALIDATION: fieldBuilder.buildEnumField(
          'TaxIdValidation',
          TaxIdValidation,
          true
        ),
        /**
         * Static representation of the {@link due2Payment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_2_PAYMENT: fieldBuilder.buildEdmTypeField(
          'Due2Payment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableSingleLineTaxAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SINGLE_LINE_TAX_ADJUSTMENT: fieldBuilder.buildEnumField(
          'EnableSingleLineTaxAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultFilterForCustomerTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FILTER_FOR_CUSTOMER_TRANSACTIONS: fieldBuilder.buildEnumField(
          'DefaultFilterForCustomerTransactions',
          CustVendShowTransaction,
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
         * Static representation of the {@link cashDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC: fieldBuilder.buildEnumField(
          'CashDisc',
          UnspecificSpecific,
          true
        ),
        /**
         * Static representation of the {@link percentCustomersPerBatchTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_CUSTOMERS_PER_BATCH_TASK: fieldBuilder.buildEdmTypeField(
          'PercentCustomersPerBatchTask',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link collectionsWriteOffSeparateSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_SEPARATE_SALES_TAX: fieldBuilder.buildEnumField(
          'CollectionsWriteOffSeparateSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsStatementSysEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_STATEMENT_SYS_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'CollectionsStatementSysEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkForOverlapsAndGaps} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_FOR_OVERLAPS_AND_GAPS: fieldBuilder.buildEnumField(
          'CheckForOverlapsAndGaps',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsWriteOffLedgerJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_LEDGER_JOURNAL_NAME:
          fieldBuilder.buildEdmTypeField(
            'CollectionsWriteOffLedgerJournalName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link settlementWriteOffEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_ENABLED: fieldBuilder.buildEnumField(
          'SettlementWriteOffEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prepaymentLinkW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_LINK_W: fieldBuilder.buildEnumField(
          'PrepaymentLink_W',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link showAmountDebitCreditJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_AMOUNT_DEBIT_CREDIT_JP: fieldBuilder.buildEnumField(
          'ShowAmountDebitCredit_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceLinePriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_PRIORITY: fieldBuilder.buildEnumField(
          'InvoiceLinePriority',
          CustInvoiceLinePriority,
          true
        ),
        /**
         * Static representation of the {@link creditLimitCheckFreeInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_CHECK_FREE_INVOICE: fieldBuilder.buildEnumField(
          'CreditLimitCheckFreeInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesBookFactureProcessingTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BOOK_FACTURE_PROCESSING_TYPE_RU: fieldBuilder.buildEnumField(
          'SalesBookFactureProcessingType_RU',
          SalesBookFactureProcessingTypeRu,
          true
        ),
        /**
         * Static representation of the {@link enableSubstitutionInvoicesTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SUBSTITUTION_INVOICES_TH: fieldBuilder.buildEnumField(
          'EnableSubstitutionInvoices_TH',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLimitCheckSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LIMIT_CHECK_SALES: fieldBuilder.buildEnumField(
          'CreditLimitCheckSales',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reversePrepaymentW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_PREPAYMENT_W: fieldBuilder.buildEnumField(
          'ReversePrepayment_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_PROJECT: fieldBuilder.buildEnumField(
          'EnableProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableDateOfVatRegisterChangingCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_DATE_OF_VAT_REGISTER_CHANGING_CZ: fieldBuilder.buildEnumField(
          'EnableDateOfVATRegisterChanging_CZ',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxReimbursementExchangeRateTypeHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REIMBURSEMENT_EXCHANGE_RATE_TYPE_HU: fieldBuilder.buildEdmTypeField(
          'TaxReimbursementExchangeRateType_HU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxAllowEditingReturnCreditWithTaxAdj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ALLOW_EDITING_RETURN_CREDIT_WITH_TAX_ADJ:
          fieldBuilder.buildEnumField(
            'TaxAllowEditingReturnCreditWithTaxAdj',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link postingProfileBillsProtested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_PROTESTED: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsProtested',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionsWriteOffBaseAmountSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_WRITE_OFF_BASE_AMOUNT_SALES_TAX:
          fieldBuilder.buildEnumField(
            'CollectionsWriteOffBaseAmountSalesTax',
            DefaultNoYes,
            true
          ),
        /**
         * Static representation of the {@link automaticTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_TOTAL_DISCOUNT: fieldBuilder.buildEnumField(
          'AutomaticTotalDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoice2Due} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_2_DUE: fieldBuilder.buildEdmTypeField(
          'Invoice2Due',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditInvoicingReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_INVOICING_REPORT: fieldBuilder.buildEnumField(
          'CreditInvoicingReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryRelationBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_RELATION_BR: fieldBuilder.buildEnumField(
          'PrimaryRelation_BR',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link creditCardEstShippingChargeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_EST_SHIPPING_CHARGE_TYPE: fieldBuilder.buildEnumField(
          'CreditCardEstShippingChargeType',
          CreditCardEstShippingChargeType,
          true
        ),
        /**
         * Static representation of the {@link commissionTypeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_TYPE_IT: fieldBuilder.buildEnumField(
          'CommissionType_IT',
          CommissionTypeIt,
          true
        ),
        /**
         * Static representation of the {@link pkWiUCodeRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE_REQUIREMENT: fieldBuilder.buildEnumField(
          'PKWiUCodeRequirement',
          CustPkWiUErrorLevel,
          true
        ),
        /**
         * Static representation of the {@link advanceInvoiceTaxItemGroupW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_TAX_ITEM_GROUP_W: fieldBuilder.buildEdmTypeField(
          'AdvanceInvoiceTaxItemGroup_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrEnablePriceDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ENABLE_PRICE_DETAILS: fieldBuilder.buildEnumField(
          'MCREnablePriceDetails',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link b2BSchemeBankSubmissionDaysFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_2_B_SCHEME_BANK_SUBMISSION_DAYS_FIRST: fieldBuilder.buildEdmTypeField(
          'B2BSchemeBankSubmissionDaysFirst',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardPaymentBreakDownProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PAYMENT_BREAK_DOWN_PROCESS: fieldBuilder.buildEnumField(
          'CreditCardPaymentBreakDownProcess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link editCashDiscountsWhenDueDateChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDIT_CASH_DISCOUNTS_WHEN_DUE_DATE_CHANGED: fieldBuilder.buildEnumField(
          'EditCashDiscountsWhenDueDateChanged',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tamRebatePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_POSTING: fieldBuilder.buildEnumField(
          'TAMRebatePosting',
          McrItemCustCatalog,
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
         * Static representation of the {@link checkInvoiceW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_INVOICE_W: fieldBuilder.buildEnumField(
          'CheckInvoice_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custAgingSnapshotBatchLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_AGING_SNAPSHOT_BATCH_LIMIT: fieldBuilder.buildEdmTypeField(
          'CustAgingSnapshotBatchLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculateStatisticsForZeroBalanceCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_STATISTICS_FOR_ZERO_BALANCE_CUSTOMERS:
          fieldBuilder.buildEnumField(
            'CalculateStatisticsForZeroBalanceCustomers',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link collectionsStatRepInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_STAT_REP_INTERVAL: fieldBuilder.buildEdmTypeField(
          'CollectionsStatRepInterval',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionGracePeriodForDuesTransferW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_GRACE_PERIOD_FOR_DUES_TRANSFER_W:
          fieldBuilder.buildEdmTypeField(
            'CollectionGracePeriodForDuesTransfer_W',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link rTax25DebtModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_DEBT_MODEL: fieldBuilder.buildEdmTypeField(
          'RTax25DebtModel',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creditCardPostingAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_POSTING_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'CreditCardPostingAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link isTotalsCalculationAutomatic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTALS_CALCULATION_AUTOMATIC: fieldBuilder.buildEnumField(
          'IsTotalsCalculationAutomatic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrDefaultDimensionHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DEFAULT_DIMENSION_HIERARCHY: fieldBuilder.buildEnumField(
          'MCRDefaultDimensionHierarchy',
          McrItemCustCatalog,
          true
        ),
        /**
         * Static representation of the {@link allowCrossCompanyEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CROSS_COMPANY_EMPLOYEE: fieldBuilder.buildEnumField(
          'AllowCrossCompanyEmployee',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableChronologicalInvoiceNumberingW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CHRONOLOGICAL_INVOICE_NUMBERING_W: fieldBuilder.buildEnumField(
          'EnableChronologicalInvoiceNumbering_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxOnPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ON_PREPAYMENT: fieldBuilder.buildEnumField(
          'TaxOnPrepayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link packagingWeightOnInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGING_WEIGHT_ON_INVOICE: fieldBuilder.buildEnumField(
          'PackagingWeightOnInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advanceInvoiceCreditCorrectionW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_INVOICE_CREDIT_CORRECTION_W: fieldBuilder.buildEnumField(
          'AdvanceInvoiceCreditCorrection_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeTextInvoiceTimezonePreference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INVOICE_TIMEZONE_PREFERENCE: fieldBuilder.buildEnumField(
          'FreeTextInvoiceTimezonePreference',
          SalesDocumentTimezonePreference,
          true
        ),
        /**
         * Static representation of the {@link returnOrdersReasonReq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ORDERS_REASON_REQ: fieldBuilder.buildEnumField(
          'ReturnOrdersReasonReq',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rTax25DebtModelTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_DEBT_MODEL_TAX: fieldBuilder.buildEdmTypeField(
          'RTax25DebtModelTax',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tamDeductionRequireFullSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_DEDUCTION_REQUIRE_FULL_SETTLE: fieldBuilder.buildEnumField(
          'TAMDeductionRequireFullSettle',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transReversalReasonReq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REVERSAL_REASON_REQ: fieldBuilder.buildEnumField(
          'TransReversalReasonReq',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link usePriorityOnAutoSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PRIORITY_ON_AUTO_SETTLEMENT: fieldBuilder.buildEnumField(
          'UsePriorityOnAutoSettlement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardPreAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PRE_AUTHORIZATION: fieldBuilder.buildEnumField(
          'CreditCardPreAuthorization',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link budgetSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SETTLE: fieldBuilder.buildEdmTypeField(
          'BudgetSettle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billsJournalsValidations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLS_JOURNALS_VALIDATIONS: fieldBuilder.buildEnumField(
          'BillsJournalsValidations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_TAX_GROUP: fieldBuilder.buildEnumField(
          'MandatoryTaxGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceIdEditingW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID_EDITING_W: fieldBuilder.buildEnumField(
          'InvoiceIdEditing_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link doPrintTransportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_PRINT_TRANSPORTATION_DOCUMENT: fieldBuilder.buildEnumField(
          'DoPrintTransportationDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUST: fieldBuilder.buildEdmTypeField(
          'DefaultCust',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDimAdjustLineControlRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DIM_ADJUST_LINE_CONTROL_RU: fieldBuilder.buildEnumField(
          'ItemDimAdjustLineControl_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterIgnoreCreditTransactionCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_IGNORE_CREDIT_TRANSACTION_CODES:
          fieldBuilder.buildEnumField(
            'CollectionLetterIgnoreCreditTransactionCodes',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link reasonCodeCashDiscountCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_CASH_DISCOUNT_CZ: fieldBuilder.buildEdmTypeField(
          'ReasonCodeCashDiscount_CZ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumWaiveDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WAIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'MaximumWaiveDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link custInvoiceRefNumFi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_REF_NUM_FI: fieldBuilder.buildEnumField(
          'CustInvoiceRefNum_FI',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custInterestCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INTEREST_CALC: fieldBuilder.buildEnumField(
          'CustInterestCalc',
          CustInterestCalc,
          true
        ),
        /**
         * Static representation of the {@link matchedPackingSlipsInquiry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_PACKING_SLIPS_INQUIRY: fieldBuilder.buildEnumField(
          'MatchedPackingSlipsInquiry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link settlementWriteOffReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'SettlementWriteOffReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link suppressDepreciationOfPaymentSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPRESS_DEPRECIATION_OF_PAYMENT_SECTION: fieldBuilder.buildEnumField(
          'SuppressDepreciationOfPaymentSection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mandatoryItemTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_ITEM_TAX_GROUP: fieldBuilder.buildEnumField(
          'MandatoryItemTaxGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bypassValidationOfAccountingDistributions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BYPASS_VALIDATION_OF_ACCOUNTING_DISTRIBUTIONS:
          fieldBuilder.buildEnumField(
            'BypassValidationOfAccountingDistributions',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementCreditLineRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_CREDIT_LINE_RU: fieldBuilder.buildEnumField(
          'AgreementCreditLine_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterCodeUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_CODE_UPDATE: fieldBuilder.buildEnumField(
          'CollectionLetterCodeUpdate',
          CustPostedPrinted,
          true
        ),
        /**
         * Static representation of the {@link coreSchemeBankSubmissionDaysRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORE_SCHEME_BANK_SUBMISSION_DAYS_RECURRING:
          fieldBuilder.buildEdmTypeField(
            'CoreSchemeBankSubmissionDaysRecurring',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link creditCardEnableIdempotencyKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_ENABLE_IDEMPOTENCY_KEY: fieldBuilder.buildEnumField(
          'CreditCardEnableIdempotencyKey',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoicePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PERIOD: fieldBuilder.buildEdmTypeField(
          'InvoicePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardPreapprovalLastNoOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PREAPPROVAL_LAST_NO_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'CreditCardPreapprovalLastNoOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesBookAdditionalListFormatMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BOOK_ADDITIONAL_LIST_FORMAT_MAPPING_ID:
          fieldBuilder.buildEdmTypeField(
            'SalesBookAdditionalListFormatMappingID',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link useFiscalInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FISCAL_INVOICE_ACCOUNT: fieldBuilder.buildEnumField(
          'UseFiscalInvoiceAccount',
          UseFiscalInvoiceAccount,
          true
        ),
        /**
         * Static representation of the {@link automaticIntentLetterAssignmentIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_INTENT_LETTER_ASSIGNMENT_IT: fieldBuilder.buildEnumField(
          'AutomaticIntentLetterAssignment_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link collectionsSalespersonSysEmailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTIONS_SALESPERSON_SYS_EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'CollectionsSalespersonSysEmailId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardEstShippingChargeMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_EST_SHIPPING_CHARGE_MAX: fieldBuilder.buildEdmTypeField(
          'CreditCardEstShippingChargeMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'TaxGroup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_ERROR: fieldBuilder.buildEnumField('CreditError', NoYes, true),
        /**
         * Static representation of the {@link custTableCopyTaxRegistionNumAsTaxExemptNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TABLE_COPY_TAX_REGISTION_NUM_AS_TAX_EXEMPT_NUM:
          fieldBuilder.buildEnumField(
            'CustTableCopyTaxRegistionNumAsTaxExemptNum',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link maxMstDiff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MST_DIFF: fieldBuilder.buildEdmTypeField(
          'MaxMSTDiff',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link prepaymentFactureAutoCreateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_FACTURE_AUTO_CREATE_RU: fieldBuilder.buildEnumField(
          'PrepaymentFactureAutoCreate_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link markOpenInvoiceLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_OPEN_INVOICE_LINE: fieldBuilder.buildEnumField(
          'MarkOpenInvoiceLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cor1SchemeBankSubmissionDaysRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COR_1_SCHEME_BANK_SUBMISSION_DAYS_RECURRING:
          fieldBuilder.buildEdmTypeField(
            'Cor1SchemeBankSubmissionDaysRecurring',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link defaultFreeTextInvoicePostingTopPickBatchTasks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FREE_TEXT_INVOICE_POSTING_TOP_PICK_BATCH_TASKS:
          fieldBuilder.buildEdmTypeField(
            'DefaultFreeTextInvoicePostingTopPickBatchTasks',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link rTax25ProfitTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_PROFIT_TABLE: fieldBuilder.buildEdmTypeField(
          'RTax25ProfitTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settlementWriteOffJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_WRITE_OFF_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'SettlementWriteOffJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cor1SchemeBankSubmissionDaysFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COR_1_SCHEME_BANK_SUBMISSION_DAYS_FIRST: fieldBuilder.buildEdmTypeField(
          'Cor1SchemeBankSubmissionDaysFirst',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link autoSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_SETTLE: fieldBuilder.buildEnumField('AutoSettle', NoYes, true),
        /**
         * Static representation of the {@link custConsInvoiceJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CONS_INVOICE_JP: fieldBuilder.buildEnumField(
          'CustConsInvoice_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advInvAmountW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADV_INV_AMOUNT_W: fieldBuilder.buildEnumField(
          'AdvInvAmount_W',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link custNameFromVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_NAME_FROM_VAT_NUM: fieldBuilder.buildEnumField(
          'CustNameFromVATNum',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashDiscForCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_FOR_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'CashDiscForCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rTax25ReceiptPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_TAX_25_RECEIPT_PCT: fieldBuilder.buildEdmTypeField(
          'RTax25ReceiptPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankCustPaymIdTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CUST_PAYM_ID_TABLE: fieldBuilder.buildEdmTypeField(
          'BankCustPaymIdTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_POSITIONS: fieldBuilder.buildEdmTypeField(
          'AccountPositions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link postingProfileBillsEndorsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_ENDORSED: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsEndorsed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardCostCenterDimensionAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_COST_CENTER_DIMENSION_ATTRIBUTE:
          fieldBuilder.buildEdmTypeField(
            'CreditCardCostCenterDimensionAttribute',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link salesBookFormatMappingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BOOK_FORMAT_MAPPING_ID: fieldBuilder.buildEdmTypeField(
          'SalesBookFormatMappingID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_REVENUE: fieldBuilder.buildEnumField(
          'AccountRevenue',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link collectionLetterGenerationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_LETTER_GENERATION_LEVEL: fieldBuilder.buildEnumField(
          'CollectionLetterGenerationLevel',
          CustCollectionLetterGenerationLevel,
          true
        ),
        /**
         * Static representation of the {@link cashDiscVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_VAT: fieldBuilder.buildEnumField('CashDiscVAT', NoYes, true),
        /**
         * Static representation of the {@link postingProfileBillsRemitCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_BILLS_REMIT_COLLECTION: fieldBuilder.buildEdmTypeField(
          'PostingProfileBillsRemitCollection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mandateDefaultExpirationMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATE_DEFAULT_EXPIRATION_MONTHS: fieldBuilder.buildEdmTypeField(
          'MandateDefaultExpirationMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardCustPurgeThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CUST_PURGE_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CreditCardCustPurgeThreshold',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link b2BSchemeBankSubmissionDaysRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_2_B_SCHEME_BANK_SUBMISSION_DAYS_RECURRING:
          fieldBuilder.buildEdmTypeField(
            'B2BSchemeBankSubmissionDaysRecurring',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link prenotificationDaysFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRENOTIFICATION_DAYS_FIRST: fieldBuilder.buildEdmTypeField(
          'PrenotificationDaysFirst',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link adjustmentDateToUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_DATE_TO_USE: fieldBuilder.buildEnumField(
          'AdjustmentDateToUse',
          CustInterestAdjustmentDateToUse,
          true
        ),
        /**
         * Static representation of the {@link mixedPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIXED_PAYMENT: fieldBuilder.buildEnumField('MixedPayment', NoYes, true),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxMstOverUnder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MST_OVER_UNDER: fieldBuilder.buildEdmTypeField(
          'MaxMSTOverUnder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cashDiscForPartialPaym} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISC_FOR_PARTIAL_PAYM: fieldBuilder.buildEnumField(
          'CashDiscForPartialPaym',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useSettlementPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SETTLEMENT_PRIORITY: fieldBuilder.buildEnumField(
          'UseSettlementPriority',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditLineError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LINE_ERROR: fieldBuilder.buildEnumField(
          'CreditLineError',
          CreditLineErrorType,
          true
        ),
        /**
         * Static representation of the {@link accountConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CONSUMPTION: fieldBuilder.buildEnumField(
          'AccountConsumption',
          ItemCust,
          true
        ),
        /**
         * Static representation of the {@link mandatoryVatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_VAT_NUM: fieldBuilder.buildEnumField(
          'MandatoryVATNum',
          TaxVatNumCountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link dueToTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_TO_TRANS_DATE: fieldBuilder.buildEnumField(
          'DueToTransDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prepaymentHandlingLayoutW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_HANDLING_LAYOUT_W: fieldBuilder.buildEnumField(
          'PrepaymentHandlingLayout_W',
          PrepaymentHandlingLayoutW,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustParametersBiEntities)
      };
    }

    return this._schema;
  }
}
