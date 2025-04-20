/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationsResources } from './OperationsResources';
import { OperationsResourcesRequestBuilder } from './OperationsResourcesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { SensorOperationsResourceMappingsApi } from './SensorOperationsResourceMappingsApi';
import { CapacityUnit } from './CapacityUnit';
import { NoYes } from './NoYes';
import { WrkCtrType } from './WrkCtrType';
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
export class OperationsResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OperationsResources<DeSerializersT>, DeSerializersT>
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
  ): OperationsResourcesApi<DeSerializersT> {
    return new OperationsResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link wipValuationLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIP_VALUATION_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wipIssueLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIP_ISSUE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceIssueOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ISSUE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceIssueLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ISSUE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorOperationsResourceMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_OPERATIONS_RESOURCE_MAPPINGS: OneToManyLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      SensorOperationsResourceMappingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      SensorOperationsResourceMappingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WIP_VALUATION_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'WIPValuationLedgerDimensionCombination',
        this,
        linkedApis[0]
      ),
      WIP_ISSUE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'WIPIssueLedgerDimensionCombination',
        this,
        linkedApis[1]
      ),
      RESOURCE_ISSUE_OFFSET_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'ResourceIssueOffsetLedgerDimensionCombination',
        this,
        linkedApis[2]
      ),
      DEFAULT_DIMENSION_SET: new OneToOneLink(
        'DefaultDimensionSet',
        this,
        linkedApis[3]
      ),
      RESOURCE_ISSUE_LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'ResourceIssueLedgerDimensionCombination',
        this,
        linkedApis[4]
      ),
      SENSOR_OPERATIONS_RESOURCE_MAPPINGS: new OneToManyLink(
        'SensorOperationsResourceMappings',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = OperationsResources;

  requestBuilder(): OperationsResourcesRequestBuilder<DeSerializersT> {
    return new OperationsResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationsResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OperationsResources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OperationsResources<DeSerializersT>,
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
    typeof OperationsResources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationsResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAPACITY: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIP_ISSUE_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_VALUATION_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_NAME: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_COST_CATEGORY_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAPACITY_UNIT: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      CapacityUnit,
      true,
      true
    >;
    RESOURCE_ISSUE_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_GROUP_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BOTTLENECK_RESOURCE: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_OPERATION_TRANSIT_TIME: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFICIENCY_PERCENTAGE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_OPERATION_QUEUE_TIME_BEFORE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_ISSUE_OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OPERATION_SETUP_TIME: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_PROCESS_QUANTITY: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONS_RESOURCE_TYPE: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      WrkCtrType,
      true,
      true
    >;
    BATCH_TRANSFER_QUANTITY: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_OPERATION_TIME_TO_HOURS_CONVERSION_FACTOR: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_OPERATION_QUEUE_TIME_AFTER: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCRAP_PERCENTAGE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SCHEDULED_USING_FINITE_PROPERTY: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_CAPACITY: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RUNTIME_COST_CATEGORY_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_SCHEDULING_PERCENTAGE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETUP_COST_CATEGORY_ID: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXCLUSIVE_RESOURCE: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESOURCE_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_FINITE_SCHEDULING_CAPACITY: EnumField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OPERATION_RUN_TIME: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MACHINE_NOT_RESPONDING_THRESHOLD_MINS: OrderableEdmTypeField<
      OperationsResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wipValuationLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIP_VALUATION_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link wipIssueLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIP_ISSUE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceIssueOffsetLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ISSUE_OFFSET_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_SET: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceIssueLedgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_ISSUE_LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorOperationsResourceMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_OPERATIONS_RESOURCE_MAPPINGS: OneToManyLink<
      OperationsResources<DeSerializersT>,
      DeSerializersT,
      SensorOperationsResourceMappingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OperationsResources<DeSerializers>>;
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
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link capacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY: fieldBuilder.buildEdmTypeField(
          'Capacity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wipIssueLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_ISSUE_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WIPIssueLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link wipValuationLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_VALUATION_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WIPValuationLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link resourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceName',
          'Edm.String',
          true
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
         * Static representation of the {@link capacityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_UNIT: fieldBuilder.buildEnumField(
          'CapacityUnit',
          CapacityUnit,
          true
        ),
        /**
         * Static representation of the {@link resourceIssueLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ISSUE_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ResourceIssueLedgerDimensionDisplayValue',
            'Edm.String',
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
         * Static representation of the {@link isBottleneckResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BOTTLENECK_RESOURCE: fieldBuilder.buildEnumField(
          'IsBottleneckResource',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultOperationTransitTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_TRANSIT_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultOperationTransitTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link efficiencyPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFICIENCY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'EfficiencyPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultOperationQueueTimeBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_QUEUE_TIME_BEFORE: fieldBuilder.buildEdmTypeField(
          'DefaultOperationQueueTimeBefore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceIssueOffsetLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ISSUE_OFFSET_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ResourceIssueOffsetLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultOperationSetupTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_SETUP_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultOperationSetupTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultProcessQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROCESS_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DefaultProcessQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationsResourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_TYPE: fieldBuilder.buildEnumField(
          'OperationsResourceType',
          WrkCtrType,
          true
        ),
        /**
         * Static representation of the {@link batchTransferQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_TRANSFER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BatchTransferQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultOperationTimeToHoursConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_TIME_TO_HOURS_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'DefaultOperationTimeToHoursConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link defaultOperationQueueTimeAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_QUEUE_TIME_AFTER: fieldBuilder.buildEdmTypeField(
          'DefaultOperationQueueTimeAfter',
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
         * Static representation of the {@link isScheduledUsingFiniteProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCHEDULED_USING_FINITE_PROPERTY: fieldBuilder.buildEnumField(
          'IsScheduledUsingFiniteProperty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link batchCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_CAPACITY: fieldBuilder.buildEdmTypeField(
          'BatchCapacity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link runtimeCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUNTIME_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'RuntimeCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operationSchedulingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_SCHEDULING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OperationSchedulingPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
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
         * Static representation of the {@link isExclusiveResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUSIVE_RESOURCE: fieldBuilder.buildEnumField(
          'IsExclusiveResource',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link resourceWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResourceWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasFiniteSchedulingCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_FINITE_SCHEDULING_CAPACITY: fieldBuilder.buildEnumField(
          'HasFiniteSchedulingCapacity',
          NoYes,
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
         * Static representation of the {@link defaultOperationRunTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OPERATION_RUN_TIME: fieldBuilder.buildEdmTypeField(
          'DefaultOperationRunTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link machineNotRespondingThresholdMins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MACHINE_NOT_RESPONDING_THRESHOLD_MINS: fieldBuilder.buildEdmTypeField(
          'MachineNotRespondingThresholdMins',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationsResources)
      };
    }

    return this._schema;
  }
}
