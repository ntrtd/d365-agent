/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RevRecRevRecDeferredLines } from './RevRecRevRecDeferredLines';
import { RevRecRevRecDeferredLinesRequestBuilder } from './RevRecRevRecDeferredLinesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RevRecRevRecDeferredLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RevRecRevRecDeferredLines<DeSerializersT>, DeSerializersT>
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
  ): RevRecRevRecDeferredLinesApi<DeSerializersT> {
    return new RevRecRevRecDeferredLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      RevRecRevRecDeferredLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET_ENTITY: new OneToOneLink(
        'DimensionSetEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RevRecRevRecDeferredLines;

  requestBuilder(): RevRecRevRecDeferredLinesRequestBuilder<DeSerializersT> {
    return new RevRecRevRecDeferredLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RevRecRevRecDeferredLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RevRecRevRecDeferredLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RevRecRevRecDeferredLines<DeSerializersT>,
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
    typeof RevRecRevRecDeferredLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RevRecRevRecDeferredLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIG_SALES_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVENUE_SCHEDULE_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REC_PERIOD_NUMBER: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LATEST_NEW_VALUES: EnumField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REALLOCATION_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REALLOCATION_REVERSAL: EnumField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECOGNIZED_COGS_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNIZED_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOGNIZE_NOW_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ON_HOLD: EnumField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_COGS_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOGNIZE_COST_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QTY: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_QTY: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_RATE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REV_ACCOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNIZE_PERCENT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVENUE_SCHEDULE_ID_DESCRIPTION: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLE_JOURNALS: EnumField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAINING_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESSED: EnumField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECOGNIZE_NOW_COGS_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_PERIOD_NAME: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_COGS_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOGNIZE_DATE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_FUNCTIONAL_CURRENCY: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPANY_CURRENCY_CODE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNIZE_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_DESCRIPTION: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNIZED_QTY: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOGNIZE_NOW_QTY: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_COGS_ACCOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_COGS_AMOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COGS_ACCOUNT: OrderableEdmTypeField<
      RevRecRevRecDeferredLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      RevRecRevRecDeferredLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RevRecRevRecDeferredLines<DeSerializers>>;
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
         * Static representation of the {@link origSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SALES_ID: fieldBuilder.buildEdmTypeField(
          'OrigSalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjID', 'Edm.String', false),
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link revenueScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'RevenueScheduleID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recPeriodNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_PERIOD_NUMBER: fieldBuilder.buildEdmTypeField(
          'RecPeriodNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link latestNewValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_NEW_VALUES: fieldBuilder.buildEnumField(
          'LatestNewValues',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reallocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALLOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ReallocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reallocationReversal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALLOCATION_REVERSAL: fieldBuilder.buildEnumField(
          'ReallocationReversal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recognizedCogsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZED_COGS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizedCOGSAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recognizeNowAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_NOW_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizeNowAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link onHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD: fieldBuilder.buildEnumField('OnHold', NoYes, true),
        /**
         * Static representation of the {@link lineCogsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_COGS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineCOGSAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recognizeCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizeCostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainingQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_QTY: fieldBuilder.buildEdmTypeField(
          'RemainingQty',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link totalQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_QTY: fieldBuilder.buildEdmTypeField(
          'TotalQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link revAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognizePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_PERCENT: fieldBuilder.buildEdmTypeField(
          'RecognizePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revenueScheduleIdDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SCHEDULE_ID_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RevenueScheduleIdDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multipleJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_JOURNALS: fieldBuilder.buildEnumField(
          'MultipleJournals',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remainingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link processed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSED: fieldBuilder.buildEnumField('Processed', NoYes, true),
        /**
         * Static representation of the {@link recognizeNowCogsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_NOW_COGS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizeNowCOGSAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'ExpectedPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingCogsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_COGS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainingCOGSAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recognizeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_DATE: fieldBuilder.buildEdmTypeField(
          'RecognizeDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInFunctionalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_FUNCTIONAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInFunctionalCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link companyCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link recognizeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognizedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZED_QTY: fieldBuilder.buildEdmTypeField(
          'RecognizedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recognizeNowQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_NOW_QTY: fieldBuilder.buildEdmTypeField(
          'RecognizeNowQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferredCogsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_COGS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredCOGSAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredCogsAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_COGS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredCOGSAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cogsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COGS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'COGSAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RevRecRevRecDeferredLines)
      };
    }

    return this._schema;
  }
}
