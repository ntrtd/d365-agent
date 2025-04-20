/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingScheduleLines } from './SubBillBillingScheduleLines';
import { SubBillBillingScheduleLinesRequestBuilder } from './SubBillBillingScheduleLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SubBillBillingScheduleTablesApi } from './SubBillBillingScheduleTablesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { SubBillMinMax } from './SubBillMinMax';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
import { SubBillFrequency } from './SubBillFrequency';
import { SubBillItemType } from './SubBillItemType';
import { SubBillCalculateUnitPriceFrequency } from './SubBillCalculateUnitPriceFrequency';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { SubBillPricingMethod } from './SubBillPricingMethod';
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
export class SubBillBillingScheduleLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillBillingScheduleLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillBillingScheduleLinesApi<DeSerializersT> {
    return new SubBillBillingScheduleLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillScheduleTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_SCHEDULE_TABLE_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      SubBillBillingScheduleTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      SubBillBillingScheduleTablesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION_ENTITY: new OneToOneLink(
        'DimensionCombinationEntity',
        this,
        linkedApis[0]
      ),
      SUB_BILL_SCHEDULE_TABLE_ENTITY: new OneToOneLink(
        'SubBillScheduleTableEntity',
        this,
        linkedApis[1]
      ),
      DIMENSION_SET_ENTITY: new OneToOneLink(
        'DimensionSetEntity',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SubBillBillingScheduleLines;

  requestBuilder(): SubBillBillingScheduleLinesRequestBuilder<DeSerializersT> {
    return new SubBillBillingScheduleLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingScheduleLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingScheduleLines<DeSerializersT>,
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
    typeof SubBillBillingScheduleLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingScheduleLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_PRICE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRORATE_PARTIAL_PERIOD: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNBILLED_DISCOUNT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STANDALONE_SELLING_PRICE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_SUPPORT_LEVEL: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALIGNMENT_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIN_MAX_TYPE: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillMinMax,
      true,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_BILLING_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    MEA_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_START_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_SALES_ITEM: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_FREQUENCY: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillFrequency,
      true,
      true
    >;
    AUTO_RENEW: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_TAX_GROUP: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TYPE: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillItemType,
      true,
      true
    >;
    DELIVERY_POSTAL_CODE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_CALCULATE_UNIT_PRICE_FREQUENCY: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillCalculateUnitPriceFrequency,
      true,
      true
    >;
    UPDATE_FROM_TRADE_AGREEMENT_ONLY_AT_RENEWAL: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_END_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUPPORT_LEVEL: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_SCHEDULE_TYPE: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    DEFERRED: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_ADDRESS_NAME: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_WEIGHTED_TRADE_AGREEMENT_PRICE: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNBILLED_DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSTOMER_SPLIT: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_REQUISITION: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_EVENT_TEMPLATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_SEPARATELY: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SITE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_STRAIGHT_LINE_TEMPLATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_QUANTITY: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_IDENTIFIER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_CONSUMPTION: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_NET_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVENUE_SPLIT: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTAL_ADDRESS: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DEFERRAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINES_TO_ADD_PER_RENEWAL: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_DELIVERY_ADDRESS: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_BILLING_QUANTITY: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE_ORIGIN: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillAllocStandaloneSellingPriceOrigin,
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_INTERVAL: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STUBBING_CUTOFF_DATE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTERNAL_LINE_NUMBER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_CITY: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_QUANTITY_RESET_NUMBER_OF_PERIODS: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_TEXT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIAL_READING: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESCALATION: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_BILLING_QUANTITY: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALIGN_TO_MONTH: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_ADDRESS_REC_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    UNBILLED_REVENUE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_READING_OPTION: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillUsageReadingOption,
      true,
      true
    >;
    RENEWAL_PERCENTAGE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIN_MAX_RESET_NUMBER_OF_PERIODS: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RENEWAL_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STREET: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_CONTRACT_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_BILLING_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_RENEWAL_AMOUNT: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_RENEWAL_PERCENTAGE: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICING_METHOD: EnumField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      SubBillPricingMethod,
      true,
      true
    >;
    ORIGINAL_SALES_ORDER: OrderableEdmTypeField<
      SubBillBillingScheduleLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombinationEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillScheduleTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_SCHEDULE_TABLE_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      SubBillBillingScheduleTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      SubBillBillingScheduleLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillBillingScheduleLines<DeSerializers>>;
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
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
         * Static representation of the {@link external} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL: fieldBuilder.buildEdmTypeField(
          'External',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_PRICE: fieldBuilder.buildEdmTypeField(
          'ContractPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proratePartialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_PARTIAL_PERIOD: fieldBuilder.buildEnumField(
          'ProratePartialPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unbilledDiscountOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE: fieldBuilder.buildEnumField(
          'UnbilledRevenue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link standaloneSellingPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDALONE_SELLING_PRICE: fieldBuilder.buildEdmTypeField(
          'StandaloneSellingPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalSupportLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SUPPORT_LEVEL: fieldBuilder.buildEdmTypeField(
          'OriginalSupportLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alignmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGNMENT_DATE: fieldBuilder.buildEdmTypeField(
          'AlignmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minMaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_MAX_TYPE: fieldBuilder.buildEnumField(
          'MinMaxType',
          SubBillMinMax,
          true
        ),
        /**
         * Static representation of the {@link deferralEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumBillingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BILLING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumBillingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          SubBillScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link meaNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEA_NUMBER: fieldBuilder.buildEdmTypeField(
          'MEANumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalSalesItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_ITEM: fieldBuilder.buildEdmTypeField(
          'OriginalSalesItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_FREQUENCY: fieldBuilder.buildEnumField(
          'BillingFrequency',
          SubBillFrequency,
          true
        ),
        /**
         * Static representation of the {@link autoRenew} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RENEW: fieldBuilder.buildEnumField('AutoRenew', NoYes, true),
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
         * Static representation of the {@link variantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'VariantId',
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATE: fieldBuilder.buildEdmTypeField(
          'DeliveryState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField(
          'ItemType',
          SubBillItemType,
          true
        ),
        /**
         * Static representation of the {@link deliveryPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillCalculateUnitPriceFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CALCULATE_UNIT_PRICE_FREQUENCY: fieldBuilder.buildEnumField(
          'SubBillCalculateUnitPriceFrequency',
          SubBillCalculateUnitPriceFrequency,
          true
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
         * Static representation of the {@link billingEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link supportLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_LEVEL: fieldBuilder.buildEdmTypeField(
          'SupportLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralScheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'DeferralScheduleType',
          SubBillDeferralScheduleType,
          true
        ),
        /**
         * Static representation of the {@link deferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED: fieldBuilder.buildEnumField('Deferred', NoYes, true),
        /**
         * Static representation of the {@link billingAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'BillingAddressName',
          'Edm.String',
          true
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
         * Static representation of the {@link unbilledDiscountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCustomerSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_SPLIT: fieldBuilder.buildEnumField(
          'IsCustomerSplit',
          NoYes,
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
         * Static representation of the {@link deferralEventTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_EVENT_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'DeferralEventTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SEPARATELY: fieldBuilder.buildEnumField(
          'InvoiceSeparately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ParentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link site} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE: fieldBuilder.buildEdmTypeField('Site', 'Edm.String', true),
        /**
         * Static representation of the {@link deferralStraightLineTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_STRAIGHT_LINE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'DeferralStraightLineTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FreeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link usageIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'UsageIdentifier',
          'Edm.String',
          true
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
         * Static representation of the {@link recognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RecognitionOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_CONSUMPTION: fieldBuilder.buildEdmTypeField(
          'EstimatedConsumption',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalNetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalNetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revenueSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SPLIT: fieldBuilder.buildEnumField('RevenueSplit', NoYes, true),
        /**
         * Static representation of the {@link postalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'PostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deferralRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferralRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linesToAddPerRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINES_TO_ADD_PER_RENEWAL: fieldBuilder.buildEdmTypeField(
          'LinesToAddPerRenewal',
          'Edm.Int32',
          false
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
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isOneTimeDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_DELIVERY_ADDRESS: fieldBuilder.buildEnumField(
          'IsOneTimeDeliveryAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minimumBillingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BILLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumBillingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standaloneSellingPriceOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDALONE_SELLING_PRICE_ORIGIN: fieldBuilder.buildEnumField(
          'StandaloneSellingPriceOrigin',
          SubBillAllocStandaloneSellingPriceOrigin,
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INTERVAL: fieldBuilder.buildEdmTypeField(
          'BillingInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stubbingCutoffDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STUBBING_CUTOFF_DATE: fieldBuilder.buildEdmTypeField(
          'StubbingCutoffDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link externalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeQuantityResetNumberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_QUANTITY_RESET_NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'FreeQuantityResetNumberOfPeriods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TEXT: fieldBuilder.buildEdmTypeField(
          'LineText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initialReading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_READING: fieldBuilder.buildEdmTypeField(
          'InitialReading',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link initialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InitialRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link escalation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESCALATION: fieldBuilder.buildEnumField('Escalation', NoYes, true),
        /**
         * Static representation of the {@link maximumBillingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BILLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumBillingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link alignToMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIGN_TO_MONTH: fieldBuilder.buildEnumField(
          'AlignToMonth',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingAddressRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_ADDRESS_REC_ID: fieldBuilder.buildEdmTypeField(
          'BillingAddressRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link unbilledRevenueOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueOffsetAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageReadingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_READING_OPTION: fieldBuilder.buildEnumField(
          'UsageReadingOption',
          SubBillUsageReadingOption,
          true
        ),
        /**
         * Static representation of the {@link renewalPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RenewalPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minMaxResetNumberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_MAX_RESET_NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'MinMaxResetNumberOfPeriods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link renewalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RenewalAmount',
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
         * Static representation of the {@link deliveryStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredContractRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_CONTRACT_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredContractRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumBillingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BILLING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumBillingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link originalRenewalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RENEWAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalRenewalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalRenewalPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RENEWAL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OriginalRenewalPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pricingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_METHOD: fieldBuilder.buildEnumField(
          'PricingMethod',
          SubBillPricingMethod,
          true
        ),
        /**
         * Static representation of the {@link originalSalesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'OriginalSalesOrder',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillBillingScheduleLines)
      };
    }

    return this._schema;
  }
}
