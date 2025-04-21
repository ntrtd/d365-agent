/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDetailLineBiEntities } from './SubBillDetailLineBiEntities';
import { SubBillDetailLineBiEntitiesRequestBuilder } from './SubBillDetailLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillMarkdownType } from './SubBillMarkdownType';
import { SubBillCreditDeferralAdjMethod } from './SubBillCreditDeferralAdjMethod';
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
export class SubBillDetailLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDetailLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SubBillDetailLineBiEntitiesApi<DeSerializersT> {
    return new SubBillDetailLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDetailLineBiEntities;

  requestBuilder(): SubBillDetailLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubBillDetailLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDetailLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDetailLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDetailLineBiEntities<DeSerializersT>,
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
    typeof SubBillDetailLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDetailLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_SCHED_LINE_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_MARKDOWN_PERCENTAGE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_START_DATE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_TEXT_COMMENTS: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_PERIOD_REVENUE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_PROJ_PROPOSAL_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_MIN_MAX_COMMITTED: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_MARKDOWN_AMOUNT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_FREE_TEXT_LINE_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_CONSUMED_QTY: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_LINE_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_RESUME_HOLD_LINE: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_AUTO_RENEWAL_PARTIAL_LINE: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_ORIG_SUPPORT: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_END_DATE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_TERMINATION_CREDIT_LINE: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_FREE_TEXT_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_MEA_DEF_REV_AMOUNT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_ESTIMATED_QTY: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_CURRENT_READING: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_FREE_QTY: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_INVOICE_TRANS_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_COMMENTS: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_SYSTEM_CREATED: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_PROJ_INVOICE_ITEM_REC_ID: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_MARKDOWN_TYPE: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillMarkdownType,
      true,
      true
    >;
    SUB_BILL_UNBILLED_ADJUSTMENT_JOURNAL_NUM: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADE_AGREEMENT_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_LINE_AMOUNT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_BILLED: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_AGREEMENT_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_CREDIT_DEFERRAL_ADJ_METHOD: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillCreditDeferralAdjMethod,
      true,
      true
    >;
    SUB_BILL_BILLABLE_QTY: OrderableEdmTypeField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_PRORATE_TERMINATION_DAILY: EnumField<
      SubBillDetailLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDetailLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillSchedLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHED_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillSchedLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillMarkdownPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MARKDOWN_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SubBillMarkdownPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link subBillTextComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TEXT_COMMENTS: fieldBuilder.buildEdmTypeField(
          'SubBillTextComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillPeriodRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PERIOD_REVENUE: fieldBuilder.buildEdmTypeField(
          'SubBillPeriodRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillProjProposalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PROJ_PROPOSAL_ID: fieldBuilder.buildEdmTypeField(
          'SubBillProjProposalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillMinMaxCommitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MIN_MAX_COMMITTED: fieldBuilder.buildEdmTypeField(
          'SubBillMinMaxCommitted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillMarkdownAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MARKDOWN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillMarkdownAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillFreeTextLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREE_TEXT_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillFreeTextLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillConsumedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CONSUMED_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillConsumedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SalesLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillResumeHoldLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_RESUME_HOLD_LINE: fieldBuilder.buildEnumField(
          'SubBillResumeHoldLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillAutoRenewalPartialLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_AUTO_RENEWAL_PARTIAL_LINE: fieldBuilder.buildEnumField(
          'SubBillAutoRenewalPartialLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillOrigSupport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ORIG_SUPPORT: fieldBuilder.buildEnumField(
          'SubBillOrigSupport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillTerminationCreditLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERMINATION_CREDIT_LINE: fieldBuilder.buildEnumField(
          'SubBillTerminationCreditLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillFreeTextRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREE_TEXT_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillFreeTextRecId',
          'Edm.Int64',
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
         * Static representation of the {@link subBillMeaDefRevAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MEA_DEF_REV_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillMEADefRevAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillEstimatedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ESTIMATED_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillEstimatedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillCurrentReading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CURRENT_READING: fieldBuilder.buildEdmTypeField(
          'SubBillCurrentReading',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillFreeQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREE_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillFreeQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custInvoiceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'CustInvoiceTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_COMMENTS: fieldBuilder.buildEdmTypeField(
          'SubBillComments',
          'Edm.String',
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
         * Static representation of the {@link subBillSystemCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SYSTEM_CREATED: fieldBuilder.buildEnumField(
          'SubBillSystemCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillProjInvoiceItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PROJ_INVOICE_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillProjInvoiceItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillMarkdownType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MARKDOWN_TYPE: fieldBuilder.buildEnumField(
          'SubBillMarkdownType',
          SubBillMarkdownType,
          true
        ),
        /**
         * Static representation of the {@link subBillUnbilledAdjustmentJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_UNBILLED_ADJUSTMENT_JOURNAL_NUM:
          fieldBuilder.buildEdmTypeField(
            'SubBillUnbilledAdjustmentJournalNum',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link tradeAgreementDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_AGREEMENT_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TradeAgreementDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillBilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILLED: fieldBuilder.buildEnumField(
          'SubBillBilled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesAgreementDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesAgreementDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillCreditDeferralAdjMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CREDIT_DEFERRAL_ADJ_METHOD: fieldBuilder.buildEnumField(
          'SubBillCreditDeferralAdjMethod',
          SubBillCreditDeferralAdjMethod,
          true
        ),
        /**
         * Static representation of the {@link subBillBillableQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILLABLE_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillBillableQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillProrateTerminationDaily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PRORATE_TERMINATION_DAILY: fieldBuilder.buildEnumField(
          'SubBillProrateTerminationDaily',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDetailLineBiEntities)
      };
    }

    return this._schema;
  }
}
