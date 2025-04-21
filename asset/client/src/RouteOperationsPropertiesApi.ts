/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteOperationsProperties } from './RouteOperationsProperties';
import { RouteOperationsPropertiesRequestBuilder } from './RouteOperationsPropertiesRequestBuilder';
import { RouteFormula } from './RouteFormula';
import { RouteOprType } from './RouteOprType';
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
export class RouteOperationsPropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RouteOperationsProperties<DeSerializersT>, DeSerializersT>
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
  ): RouteOperationsPropertiesApi<DeSerializersT> {
    return new RouteOperationsPropertiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RouteOperationsProperties;

  requestBuilder(): RouteOperationsPropertiesRequestBuilder<DeSerializersT> {
    return new RouteOperationsPropertiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RouteOperationsProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RouteOperationsProperties<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RouteOperationsProperties<DeSerializersT>,
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
    typeof RouteOperationsProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RouteOperationsProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_QUANTITY: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_COST_CATEGORY_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_GROUP_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_PERCENTAGE: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_QUANTITY: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATIONS_TIME_TO_HOUR_CONVERSION_FACTOR: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_TIME: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUEUE_TIME_BEFORE: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COSTING_OPERATION_RESOURCE_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_FACTOR: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_FORMULA: EnumField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      RouteFormula,
      true,
      true
    >;
    QUEUE_TIME_AFTER: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TIME: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_COST_CATEGORY_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_BATCH_QUANTITY: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_TYPE: EnumField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      RouteOprType,
      true,
      true
    >;
    TRANSIT_TIME: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_COST_CATEGORY_ID: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELAY_NOTIFICATION_THRESHOLD_PERCENT: OrderableEdmTypeField<
      RouteOperationsProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RouteOperationsProperties<DeSerializers>>;
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
         * Static representation of the {@link operationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'OperationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'RouteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
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
         * Static representation of the {@link queueTimeBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_TIME_BEFORE: fieldBuilder.buildEdmTypeField(
          'QueueTimeBefore',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link consumptionCalculationFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_FACTOR: fieldBuilder.buildEdmTypeField(
          'ConsumptionCalculationFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionCalculationFormula} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_CALCULATION_FORMULA: fieldBuilder.buildEnumField(
          'ConsumptionCalculationFormula',
          RouteFormula,
          true
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
         * Static representation of the {@link processTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'ProcessTime',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link delayNotificationThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELAY_NOTIFICATION_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'DelayNotificationThresholdPercent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RouteOperationsProperties)
      };
    }

    return this._schema;
  }
}
