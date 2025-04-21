/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionOrderRouteOperations } from './ProductionOrderRouteOperations';
import { ProductionOrderRouteOperationsRequestBuilder } from './ProductionOrderRouteOperationsRequestBuilder';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProductionOrderRouteJobsApi } from './ProductionOrderRouteJobsApi';
import { RouteOprPriority } from './RouteOprPriority';
import { SchedJobLinkType } from './SchedJobLinkType';
import { NoYes } from './NoYes';
import { RouteOprType } from './RouteOprType';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import { ProdBackStatus } from './ProdBackStatus';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductionOrderRouteOperationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductionOrderRouteOperations<DeSerializersT>, DeSerializersT>
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
  ): ProductionOrderRouteOperationsApi<DeSerializersT> {
    return new ProductionOrderRouteOperationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrderRouteJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_JOBS: OneToManyLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteJobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductionOrderHeadersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProductionOrderRouteJobsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1]),
      PRODUCTION_ORDER_ROUTE_JOBS: new OneToManyLink(
        'ProductionOrderRouteJobs',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductionOrderRouteOperations;

  requestBuilder(): ProductionOrderRouteOperationsRequestBuilder<DeSerializersT> {
    return new ProductionOrderRouteOperationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductionOrderRouteOperations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductionOrderRouteOperations<DeSerializersT>,
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
    typeof ProductionOrderRouteOperations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionOrderRouteOperations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_PRIORITY: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    SCHEDULED_FROM_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROCESS_QUANTITY: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_COST_CATEGORY_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_PROCESS_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_PRODUCTION_JOB_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_OPERATION_NUMBER: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEXT_OPERATION_LINK_TYPE: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    ROUTE_GROUP_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_QUANTITY: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROCESS_PRODUCTION_JOB_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULED_FROM_DATE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPERATIONS_TIME_TO_HOUR_CONVERSION_FACTOR: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_OPERATION_SEQUENCE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OVERLAP_OPERATION_QUANTITY: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_COMPLETION_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_SETUP_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHEDULED_END_DATE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUEUE_TIME_BEFORE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_OPERATION_QUANTITY: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_CONSTANT_CONSUMPTION_RELEASED: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROCESS_COMPLETION_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_OPERATION_STARTED: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COSTING_OPERATION_RESOURCE_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCRAP_PERCENTAGE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUEUE_TIME_AFTER: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_OPERATION_COMPLETED: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SETUP_COST_CATEGORY_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_BATCH_QUANTITY: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_TYPE: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      RouteOprType,
      true,
      true
    >;
    ROUTE_OPERATION_RATE_METHOD: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      JmgJobPayTypeEnum,
      true,
      true
    >;
    TRANSIT_TIME: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_COST_CATEGORY_ID: OrderableEdmTypeField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_REMAINDER_STATUS: EnumField<
      ProductionOrderRouteOperations<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrderRouteJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_JOBS: OneToManyLink<
      ProductionOrderRouteOperations<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteJobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductionOrderRouteOperations<DeSerializers>>;
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
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link operationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_PRIORITY: fieldBuilder.buildEnumField(
          'OperationPriority',
          RouteOprPriority,
          true
        ),
        /**
         * Static representation of the {@link scheduledFromTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_FROM_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledFromTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link processQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProcessQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'QuantityCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedProcessTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'EstimatedProcessTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link setupProductionJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_PRODUCTION_JOB_ID: fieldBuilder.buildEdmTypeField(
          'SetupProductionJobId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextOperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nextOperationLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_LINK_TYPE: fieldBuilder.buildEnumField(
          'NextOperationLinkType',
          SchedJobLinkType,
          true
        ),
        /**
         * Static representation of the {@link routeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RouteGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LoadPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ResourceQuantity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link processProductionJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_PRODUCTION_JOB_ID: fieldBuilder.buildEdmTypeField(
          'ProcessProductionJobId',
          'Edm.String',
          true
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
         * Static representation of the {@link scheduledFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link operationsTimeToHourConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_TIME_TO_HOUR_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'OperationsTimeToHourConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link setupTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_TIME: fieldBuilder.buildEdmTypeField(
          'SetupTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeOperationSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'RouteOperationSequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link overlapOperationQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERLAP_OPERATION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OverlapOperationQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link setupCompletionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_COMPLETION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SetupCompletionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedSetupTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_SETUP_TIME: fieldBuilder.buildEdmTypeField(
          'EstimatedSetupTime',
          'Edm.Decimal',
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
         * Static representation of the {@link queueTimeBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_TIME_BEFORE: fieldBuilder.buildEdmTypeField(
          'QueueTimeBefore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedOperationQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_OPERATION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedOperationQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isConstantConsumptionReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSTANT_CONSUMPTION_RELEASED: fieldBuilder.buildEnumField(
          'IsConstantConsumptionReleased',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link processCompletionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_COMPLETION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ProcessCompletionPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isOperationStarted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPERATION_STARTED: fieldBuilder.buildEnumField(
          'IsOperationStarted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costingOperationResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_OPERATION_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'CostingOperationResourceId',
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
         * Static representation of the {@link accumulatedScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AccumulatedScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link queueTimeAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_TIME_AFTER: fieldBuilder.buildEdmTypeField(
          'QueueTimeAfter',
          'Edm.Decimal',
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
         * Static representation of the {@link operationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'OperationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'ProcessTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isOperationCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPERATION_COMPLETED: fieldBuilder.buildEnumField(
          'IsOperationCompleted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setupCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SetupCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferBatchQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_BATCH_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TransferBatchQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_TYPE: fieldBuilder.buildEnumField(
          'RouteType',
          RouteOprType,
          true
        ),
        /**
         * Static representation of the {@link routeOperationRateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_RATE_METHOD: fieldBuilder.buildEnumField(
          'RouteOperationRateMethod',
          JmgJobPayTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link transitTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSIT_TIME: fieldBuilder.buildEdmTypeField(
          'TransitTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link processCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProcessCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeOperationRemainderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_REMAINDER_STATUS: fieldBuilder.buildEnumField(
          'RouteOperationRemainderStatus',
          ProdBackStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionOrderRouteOperations)
      };
    }

    return this._schema;
  }
}
