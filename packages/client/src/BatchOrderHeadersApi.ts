/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchOrderHeaders } from './BatchOrderHeaders';
import { BatchOrderHeadersRequestBuilder } from './BatchOrderHeadersRequestBuilder';
import { BatchOrderFormulaLinesApi } from './BatchOrderFormulaLinesApi';
import { BatchOrderByProductsApi } from './BatchOrderByProductsApi';
import { BatchOrderCoProductsApi } from './BatchOrderCoProductsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { BatchOrderByProductsV2Api } from './BatchOrderByProductsV2Api';
import { NoYes } from './NoYes';
import { CostProfitSet } from './CostProfitSet';
import { ProdReservation } from './ProdReservation';
import { ProdPostingType } from './ProdPostingType';
import { ProdStatus } from './ProdStatus';
import { ProdSchedStatus } from './ProdSchedStatus';
import { ProdBackStatus } from './ProdBackStatus';
import { SchedDirection } from './SchedDirection';
import { ProdWhsReleasePolicy } from './ProdWhsReleasePolicy';
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
export class BatchOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): BatchOrderHeadersApi<DeSerializersT> {
    return new BatchOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderFormulaLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_FORMULA_LINES: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderFormulaLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderByProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_BY_PRODUCTS: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderByProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderCoProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_CO_PRODUCTS: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderCoProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderByProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_BY_PRODUCTS_V_2: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderByProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BatchOrderFormulaLinesApi<DeSerializersT>,
      BatchOrderByProductsApi<DeSerializersT>,
      BatchOrderCoProductsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      BatchOrderByProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BATCH_ORDER_FORMULA_LINES: new OneToManyLink(
        'BatchOrderFormulaLines',
        this,
        linkedApis[0]
      ),
      BATCH_ORDER_BY_PRODUCTS: new OneToManyLink(
        'BatchOrderByProducts',
        this,
        linkedApis[1]
      ),
      BATCH_ORDER_CO_PRODUCTS: new OneToManyLink(
        'BatchOrderCoProducts',
        this,
        linkedApis[2]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[3]),
      BATCH_ORDER_BY_PRODUCTS_V_2: new OneToManyLink(
        'BatchOrderByProductsV2',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = BatchOrderHeaders;

  requestBuilder(): BatchOrderHeadersRequestBuilder<DeSerializersT> {
    return new BatchOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BatchOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BatchOrderHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BatchOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BatchOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_FORMULA_VERSION_VALIDITY_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_END_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BATCH_ORDER_ROUTE_OPERATION_VALID: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REWORK_BATCH_ORDER: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAINING_REPORT_AS_FINISHED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ORDER_PROFIT_SETTING_METHOD: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      CostProfitSet,
      true,
      true
    >;
    PRODUCTION_GROUP_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TIME: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AUTO_RESERVATION_MODE: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdReservation,
      true,
      true
    >;
    ENDED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_BATCH_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_SIZE_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_BULK_ORDER: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_ORDER_LEDGER_POSTING_RULE: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdPostingType,
      true,
      true
    >;
    REPORTED_AS_FINISHED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_CREATE_BATCH_ORDER_FORMULA_LINES: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNED_RECEIPT_WAREHOUSE_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_BATCH_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ORDER_STATUS: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdStatus,
      true,
      true
    >;
    BATCH_ORDER_NAME: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULING_METHOD: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdSchedStatus,
      true,
      true
    >;
    IS_TOTAL_COST_ALLOCATION_ENABLED: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_START_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ORDER_LEVEL: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULED_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SKIP_CREATE_BATCH_ORDER_ROUTE_OPERATIONS: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESTIMATED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATED_BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_ORDER_REMAINDER_STATUS: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    SOURCE_PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_SCHEDULING_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_POOL_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_BATCH_ORDER_SCHEDULING_LOCKED: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEMAND_BATCH_ORDER_HEADER_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_SCHEDULING_TIME: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_ORDER_PRIORITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_FORMULA_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_MASTER_PLAN_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_SCHEDULING_DATE_DIRECTION: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      SchedDirection,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_REPORT_AS_FINISHED_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_HEIGHT_CONVERSION_FACTOR: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_ROUTE_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_ROUTE_JOBS_GENERATED: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNED_RECEIPT_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdWhsReleasePolicy,
      true,
      true
    >;
    IS_CO_BY_PRODUCT_VARIATION_ALLOWED: EnumField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_START_TIME: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GANTT_CHART_COLOR_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STARTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_BATCH_ORDER_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_NUMBER: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      BatchOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderFormulaLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_FORMULA_LINES: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderFormulaLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderByProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_BY_PRODUCTS: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderByProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderCoProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_CO_PRODUCTS: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderCoProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchOrderByProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_ORDER_BY_PRODUCTS_V_2: OneToManyLink<
      BatchOrderHeaders<DeSerializersT>,
      DeSerializersT,
      BatchOrderByProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BatchOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link batchOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceFormulaVersionValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FORMULA_VERSION_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SourceFormulaVersionValidityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduledEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBatchOrderRouteOperationValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_ORDER_ROUTE_OPERATION_VALID: fieldBuilder.buildEnumField(
          'IsBatchOrderRouteOperationValid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isReworkBatchOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REWORK_BATCH_ORDER: fieldBuilder.buildEnumField(
          'IsReworkBatchOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remainingReportAsFinishedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_REPORT_AS_FINISHED_CATCH_WEIGHT_QUANTITY:
          fieldBuilder.buildEdmTypeField(
            'RemainingReportAsFinishedCatchWeightQuantity',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link subcontractingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractingPurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link batchOrderProfitSettingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_PROFIT_SETTING_METHOD: fieldBuilder.buildEnumField(
          'BatchOrderProfitSettingMethod',
          CostProfitSet,
          true
        ),
        /**
         * Static representation of the {@link productionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'DeliveryTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link autoReservationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RESERVATION_MODE: fieldBuilder.buildEnumField(
          'AutoReservationMode',
          ProdReservation,
          true
        ),
        /**
         * Static representation of the {@link endedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDED_DATE: fieldBuilder.buildEdmTypeField(
          'EndedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandBatchOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_BATCH_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandBatchOrderLineNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
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
         * Static representation of the {@link batchSizeCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_SIZE_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BatchSizeCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isBulkOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_ORDER: fieldBuilder.buildEnumField('IsBulkOrder', NoYes, true),
        /**
         * Static representation of the {@link batchOrderLedgerPostingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_LEDGER_POSTING_RULE: fieldBuilder.buildEnumField(
          'BatchOrderLedgerPostingRule',
          ProdPostingType,
          true
        ),
        /**
         * Static representation of the {@link reportedAsFinishedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_AS_FINISHED_DATE: fieldBuilder.buildEdmTypeField(
          'ReportedAsFinishedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skipCreateBatchOrderFormulaLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_BATCH_ORDER_FORMULA_LINES: fieldBuilder.buildEnumField(
          'SkipCreateBatchOrderFormulaLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plannedReceiptWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RECEIPT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'PlannedReceiptWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduledDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandTransferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandTransferOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandBatchOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_BATCH_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandBatchOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link demandSalesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandSalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link batchOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_STATUS: fieldBuilder.buildEnumField(
          'BatchOrderStatus',
          ProdStatus,
          true
        ),
        /**
         * Static representation of the {@link batchOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'BatchOrderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subcontractingPurchaseOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'SubcontractingPurchaseOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link startedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_DATE: fieldBuilder.buildEdmTypeField(
          'StartedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link schedulingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_METHOD: fieldBuilder.buildEnumField(
          'SchedulingMethod',
          ProdSchedStatus,
          true
        ),
        /**
         * Static representation of the {@link isTotalCostAllocationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTAL_COST_ALLOCATION_ENABLED: fieldBuilder.buildEnumField(
          'IsTotalCostAllocationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduledStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandInventoryJournalLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandInventoryJournalLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link batchOrderLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_LEVEL: fieldBuilder.buildEdmTypeField(
          'BatchOrderLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scheduledQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScheduledQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionDensityConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_DENSITY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'ConsumptionDensityConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link skipCreateBatchOrderRouteOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_BATCH_ORDER_ROUTE_OPERATIONS: fieldBuilder.buildEnumField(
          'SkipCreateBatchOrderRouteOperations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link estimatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandBatchOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_BATCH_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandBatchOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME_SCHEDULING_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'WorkingTimeSchedulingPropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidatedBatchOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATED_BATCH_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsolidatedBatchOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionDepthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_DEPTH_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'ConsumptionDepthConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link releasedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_DATE: fieldBuilder.buildEdmTypeField(
          'ReleasedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link batchOrderRemainderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_REMAINDER_STATUS: fieldBuilder.buildEnumField(
          'BatchOrderRemainderStatus',
          ProdBackStatus,
          true
        ),
        /**
         * Static representation of the {@link sourcePlannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourcePlannedOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastSchedulingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_DATE: fieldBuilder.buildEdmTypeField(
          'LastSchedulingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productionPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_POOL_ID: fieldBuilder.buildEdmTypeField(
          'ProductionPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandTransferOrderLineReceivingInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandTransferOrderLineReceivingInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link scheduledCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScheduledCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isBatchOrderSchedulingLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_ORDER_SCHEDULING_LOCKED: fieldBuilder.buildEnumField(
          'IsBatchOrderSchedulingLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link demandBatchOrderHeaderInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_BATCH_ORDER_HEADER_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandBatchOrderHeaderInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link lastSchedulingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_TIME: fieldBuilder.buildEdmTypeField(
          'LastSchedulingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link batchOrderPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_ORDER_PRIORITY: fieldBuilder.buildEdmTypeField(
          'BatchOrderPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link demandSalesOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandSalesOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sourceFormulaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FORMULA_ID: fieldBuilder.buildEdmTypeField(
          'SourceFormulaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceMasterPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_MASTER_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'SourceMasterPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastSchedulingDateDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_DATE_DIRECTION: fieldBuilder.buildEnumField(
          'LastSchedulingDateDirection',
          SchedDirection,
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingReportAsFinishedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_REPORT_AS_FINISHED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingReportAsFinishedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionHeightConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_HEIGHT_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'ConsumptionHeightConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'SourceRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areRouteJobsGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ROUTE_JOBS_GENERATED: fieldBuilder.buildEnumField(
          'AreRouteJobsGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link plannedReceiptWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RECEIPT_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PlannedReceiptWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseReleaseReservationRequirementRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE:
          fieldBuilder.buildEnumField(
            'WarehouseReleaseReservationRequirementRule',
            ProdWhsReleasePolicy,
            true
          ),
        /**
         * Static representation of the {@link isCoByProductVariationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_BY_PRODUCT_VARIATION_ALLOWED: fieldBuilder.buildEnumField(
          'IsCoByProductVariationAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduledStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduledEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ganttChartColorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GANTT_CHART_COLOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'GanttChartColorNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link consumptionWidthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_WIDTH_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'ConsumptionWidthConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link parentBatchOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_BATCH_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentBatchOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandInventoryJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandInventoryJournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BatchOrderHeaders)
      };
    }

    return this._schema;
  }
}
