/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionRouteTransactions } from './ProductionRouteTransactions';
import { ProductionRouteTransactionsRequestBuilder } from './ProductionRouteTransactionsRequestBuilder';
import { RouteJobType } from './RouteJobType';
import { RouteOprPriority } from './RouteOprPriority';
import { NoYes } from './NoYes';
import { ProdErrorCause } from './ProdErrorCause';
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
export class ProductionRouteTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductionRouteTransactions<DeSerializersT>, DeSerializersT>
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
  ): ProductionRouteTransactionsApi<DeSerializersT> {
    return new ProductionRouteTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductionRouteTransactions;

  requestBuilder(): ProductionRouteTransactionsRequestBuilder<DeSerializersT> {
    return new ProductionRouteTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductionRouteTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductionRouteTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductionRouteTransactions<DeSerializersT>,
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
    typeof ProductionRouteTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionRouteTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ESTIMATED_ACCOUNTING_DATE: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_FROM_TIME: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOB_PROCESSING_PERCENTAGE: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_ACCOUNTING_VOUCHER_NUMBER: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY_COST_CATEGORY_UNIT_COST: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURLY_COST_CATEGORY_RATE: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REALIZED_ACCOUNTING_VOUCHER_NUMBER: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_GOOD_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_COST_CATEGORY_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_JOB_TYPE: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      RouteJobType,
      true,
      true
    >;
    OPERATION_PRIORITY: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONS_RESOURCE_GROUP_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATION_RESOURCE_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_UNIT_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_ACCOUNTING_DATE: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_OPERATION_COMPLETED: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REGISTERED_HOURS: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ERROR_CAUSE: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      ProdErrorCause,
      true,
      true
    >;
    IS_COST_ACCOUNTED: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTED_ERROR_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_JOB_ENDED: EnumField<
      ProductionRouteTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductionRouteTransactions<DeSerializers>>;
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
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
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
         * Static representation of the {@link estimatedAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedAccountingDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link jobProcessingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PROCESSING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'JobProcessingPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedAccountingVoucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_ACCOUNTING_VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EstimatedAccountingVoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
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
         * Static representation of the {@link quantityCostCategoryUnitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_COST_CATEGORY_UNIT_COST: fieldBuilder.buildEdmTypeField(
          'QuantityCostCategoryUnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hourlyCostCategoryRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURLY_COST_CATEGORY_RATE: fieldBuilder.buildEdmTypeField(
          'HourlyCostCategoryRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportedGoodCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link realizedAccountingVoucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_ACCOUNTING_VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RealizedAccountingVoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedGoodInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'RouteCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeJobType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_JOB_TYPE: fieldBuilder.buildEnumField(
          'RouteJobType',
          RouteJobType,
          true
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
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationsResourceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourceGroupId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportedErrorCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'OperationResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProductionUnitId',
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
         * Static representation of the {@link realizedAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'RealizedAccountingDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link registeredHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTERED_HOURS: fieldBuilder.buildEdmTypeField(
          'RegisteredHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link errorCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CAUSE: fieldBuilder.buildEnumField(
          'ErrorCause',
          ProdErrorCause,
          true
        ),
        /**
         * Static representation of the {@link isCostAccounted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COST_ACCOUNTED: fieldBuilder.buildEnumField(
          'IsCostAccounted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportedErrorInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isJobEnded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_ENDED: fieldBuilder.buildEnumField('IsJobEnded', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionRouteTransactions)
      };
    }

    return this._schema;
  }
}
