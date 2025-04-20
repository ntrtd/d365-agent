/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillScheduleLineBiEntities } from './SubBillScheduleLineBiEntities';
import { SubBillScheduleLineBiEntitiesRequestBuilder } from './SubBillScheduleLineBiEntitiesRequestBuilder';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { NoYes } from './NoYes';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
import { SubBillItemType } from './SubBillItemType';
import { SubBillCpiIndexCalculation } from './SubBillCpiIndexCalculation';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillMinMax } from './SubBillMinMax';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillPricingMethod } from './SubBillPricingMethod';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
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
export class SubBillScheduleLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillScheduleLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SubBillScheduleLineBiEntitiesApi<DeSerializersT> {
    return new SubBillScheduleLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillScheduleLineBiEntities;

  requestBuilder(): SubBillScheduleLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubBillScheduleLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillScheduleLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillScheduleLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillScheduleLineBiEntities<DeSerializersT>,
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
    typeof SubBillScheduleLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillScheduleLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_AMOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_PARENT_LINE_REC_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_USAGE_READING_OPTION: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillUsageReadingOption,
      true,
      true
    >;
    SUB_BILL_ESTIMATED_COMPLETION_DATE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_SKIP_AUTO_LINK: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDERED_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_ALIGNMENT_DATE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_ALLOCATION_METHOD: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillRevenueSplitAllocationMethod,
      true,
      true
    >;
    CUSTOMER_LINE_NUM: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_ADDRESS: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_START_DATE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_FREE_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_ITEM_TYPE: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillItemType,
      true,
      true
    >;
    SUB_BILL_ADDRESS_NAME: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_ALIGN_TO_MONTH: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_AUTO_RENEW: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_SCHEDULE_LINE_FREE_TEXT_DESC: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRE_UNBILLED_JOURNAL_ENTRY_FOR_RENEWAL: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_MIN_AMOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILESTONE_ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_MILESTONE_HEADER_REC_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_MAX_AMOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_TERMINATION_DATE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_INTERVAL: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_WEIGHTED_TRADE_AGREEMENT_PRICE: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_CPI_INDEX_CALCULATION: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillCpiIndexCalculation,
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_USAGE_IDENTIFIER: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_MAX_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_MIN_MAX_RESET_NUM_OF_PERIODS: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_RENEWAL_LINES: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MATCHING_AGREEMENT_LINE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_PRORATE_PARTIAL_PERIOD: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILESTONE_COMPLETION_PERCENTAGE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_SCHEDULE_LINE_TEXT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_FREQUENCY: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillFrequency,
      true,
      true
    >;
    SUB_BILL_RESET_USED_FREE_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_ESTIMATED_CONSUMPTION: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_MAIN_ACCOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_MIN_MAX: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillMinMax,
      true,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_PARENT_AMOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_LINE_USED_FREE_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_TERMINATION_TYPE: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillTerminationType,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_FREE_QTY_RESET_NUM_OF_PERIODS: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_REVENUE_SPLIT: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_MIN_QTY: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MILESTONE_AUTO_RENEWED_PARENT_REC_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_ORIGINAL_SALES_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILESTONE_ORIG_AMOUNT: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_END_DATE: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_SPLIT: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_PRICING_METHOD: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillPricingMethod,
      true,
      true
    >;
    SUB_BILL_SCHEDULE_STATUS: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    SUB_BILL_ESCALATION: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_INITIAL_READING: OrderableEdmTypeField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_INVOICE_SEPARATELY: EnumField<
      SubBillScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillScheduleLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link subBillBillingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubBillBillingScheduleNumber',
          'Edm.String',
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
         * Static representation of the {@link subBillRevenueSplitParentLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_PARENT_LINE_REC_ID:
          fieldBuilder.buildEdmTypeField(
            'SubBillRevenueSplitParentLineRecId',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillUsageReadingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_USAGE_READING_OPTION: fieldBuilder.buildEnumField(
          'SubBillUsageReadingOption',
          SubBillUsageReadingOption,
          true
        ),
        /**
         * Static representation of the {@link subBillEstimatedCompletionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ESTIMATED_COMPLETION_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillEstimatedCompletionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillRetailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'SubBillRetailVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementSkipAutoLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_SKIP_AUTO_LINK: fieldBuilder.buildEnumField(
          'AgreementSkipAutoLink',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesOrderedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDERED_QTY: fieldBuilder.buildEdmTypeField(
          'SalesOrderedQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillAlignmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ALIGNMENT_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillAlignmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillRevenueSplitAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'SubBillRevenueSplitAllocationMethod',
          SubBillRevenueSplitAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link customerLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerLineNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subBillAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'SubBillAddress',
          'Edm.Int64',
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
         * Static representation of the {@link subBillFreeQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREE_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillFreeQTY',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ITEM_TYPE: fieldBuilder.buildEnumField(
          'SubBillItemType',
          SubBillItemType,
          true
        ),
        /**
         * Static representation of the {@link subBillAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'SubBillAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillAlignToMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ALIGN_TO_MONTH: fieldBuilder.buildEnumField(
          'SubBillAlignToMonth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillAutoRenew} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_AUTO_RENEW: fieldBuilder.buildEnumField(
          'SubBillAutoRenew',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillScheduleLineFreeTextDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_LINE_FREE_TEXT_DESC: fieldBuilder.buildEdmTypeField(
          'SubBillScheduleLineFreeTextDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link requireUnbilledJournalEntryForRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_UNBILLED_JOURNAL_ENTRY_FOR_RENEWAL: fieldBuilder.buildEnumField(
          'RequireUnbilledJournalEntryForRenewal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillMinAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillMinAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link updateFromTradeAgreementOnlyAtRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL:
          fieldBuilder.buildEnumField(
            'UpdateFromTradeAgreementOnlyAtRenewal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link milestoneAllocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MilestoneAllocationPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillMilestoneHeaderRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MILESTONE_HEADER_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillMilestoneHeaderRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillMaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillMaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillTerminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillTerminationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INTERVAL: fieldBuilder.buildEdmTypeField(
          'SubBillInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link useWeightedTradeAgreementPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_WEIGHTED_TRADE_AGREEMENT_PRICE: fieldBuilder.buildEnumField(
          'UseWeightedTradeAgreementPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillCpiIndexCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CPI_INDEX_CALCULATION: fieldBuilder.buildEnumField(
          'SubBillCPIIndexCalculation',
          SubBillCpiIndexCalculation,
          true
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
         * Static representation of the {@link subBillUsageIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_USAGE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SubBillUsageIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRequisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REQUISITION: fieldBuilder.buildEdmTypeField(
          'CustomerRequisition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillMaxQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MAX_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillMaxQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillMinMaxResetNumOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MIN_MAX_RESET_NUM_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'SubBillMinMaxResetNumOfPeriods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF: fieldBuilder.buildEdmTypeField(
          'CustomerRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillRenewalLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_RENEWAL_LINES: fieldBuilder.buildEdmTypeField(
          'SubBillRenewalLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link matchingAgreementLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_AGREEMENT_LINE: fieldBuilder.buildEdmTypeField(
          'MatchingAgreementLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillProratePartialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PRORATE_PARTIAL_PERIOD: fieldBuilder.buildEnumField(
          'SubBillProratePartialPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link milestoneCompletionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_COMPLETION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MilestoneCompletionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillScheduleLineText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_LINE_TEXT: fieldBuilder.buildEdmTypeField(
          'SubBillScheduleLineText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREQUENCY: fieldBuilder.buildEnumField(
          'SubBillFrequency',
          SubBillFrequency,
          true
        ),
        /**
         * Static representation of the {@link subBillResetUsedFreeQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_RESET_USED_FREE_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillResetUsedFreeQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillEstimatedConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ESTIMATED_CONSUMPTION: fieldBuilder.buildEdmTypeField(
          'SubBillEstimatedConsumption',
          'Edm.Decimal',
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
         * Static representation of the {@link subBillMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillMainAccount',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillMinMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MIN_MAX: fieldBuilder.buildEnumField(
          'SubBillMinMax',
          SubBillMinMax,
          true
        ),
        /**
         * Static representation of the {@link subBillRevenueSplitParentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_PARENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillRevenueSplitParentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillLineUsedFreeQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_LINE_USED_FREE_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillLineUsedFreeQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillTerminationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERMINATION_TYPE: fieldBuilder.buildEnumField(
          'SubBillTerminationType',
          SubBillTerminationType,
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
         * Static representation of the {@link subBillFreeQtyResetNumOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_FREE_QTY_RESET_NUM_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'SubBillFreeQTYResetNumOfPeriods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillRevenueSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT: fieldBuilder.buildEnumField(
          'SubBillRevenueSplit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillMinQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_MIN_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillMinQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link milestoneAutoRenewedParentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_AUTO_RENEWED_PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'MilestoneAutoRenewedParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillOriginalSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ORIGINAL_SALES_ID: fieldBuilder.buildEdmTypeField(
          'SubBillOriginalSalesId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link milestoneOrigAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_ORIG_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MilestoneOrigAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link customerSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_SPLIT: fieldBuilder.buildEnumField(
          'CustomerSplit',
          NoYes,
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
         * Static representation of the {@link subBillPricingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_PRICING_METHOD: fieldBuilder.buildEnumField(
          'SubBillPricingMethod',
          SubBillPricingMethod,
          true
        ),
        /**
         * Static representation of the {@link subBillScheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'SubBillScheduleStatus',
          SubBillScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link subBillEscalation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_ESCALATION: fieldBuilder.buildEnumField(
          'SubBillEscalation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillInitialReading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INITIAL_READING: fieldBuilder.buildEdmTypeField(
          'SubBillInitialReading',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillInvoiceSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_INVOICE_SEPARATELY: fieldBuilder.buildEnumField(
          'SubBillInvoiceSeparately',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillScheduleLineBiEntities)
      };
    }

    return this._schema;
  }
}
