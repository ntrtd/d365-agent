/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteOperationProperties } from './EngineeringChangeOrderProductRouteOperationProperties';
import { EngineeringChangeOrderProductRouteOperationPropertiesRequestBuilder } from './EngineeringChangeOrderProductRouteOperationPropertiesRequestBuilder';
import { EngineeringChangeOrderProductRouteOperationsApi } from './EngineeringChangeOrderProductRouteOperationsApi';
import { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi';
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi';
import { RouteOprPriority } from './RouteOprPriority';
import { RouteOprType } from './RouteOprType';
import { RouteFormula } from './RouteFormula';
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
export class EngineeringChangeOrderProductRouteOperationPropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT
    >
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
  ): EngineeringChangeOrderProductRouteOperationPropertiesApi<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesResourceRequirements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi<DeSerializersT>,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION: new OneToOneLink(
        'EngineeringChangeOrderProductRouteOperation',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS:
        new OneToManyLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesDocuments',
          this,
          linkedApis[1]
        ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS:
        new OneToManyLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductRouteOperationProperties;

  requestBuilder(): EngineeringChangeOrderProductRouteOperationPropertiesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteOperationProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteOperationProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATIONS_TIME_TO_HOUR_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_COST_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PRIORITY: EnumField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    TRANSFER_BATCH_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUEUE_TIME_BEFORE: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSIT_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_COST_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUEUE_TIME_AFTER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COSTING_OPERATION_RESOURCE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      RouteOprType,
      true,
      true
    >;
    CONSUMPTION_CALCULATION_FORMULA: EnumField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      RouteFormula,
      true,
      true
    >;
    SETUP_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETUP_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesDocuments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesResourceRequirements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteOperationProperties<DeSerializers>
    >;
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteProductionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_PRODUCTION_SITE_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteProductionSiteId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationNumber',
            'Edm.Int32',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
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
         * Static representation of the {@link processCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProcessCostCategoryId',
          'Edm.String',
          true
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
         * Static representation of the {@link routeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RouteGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PRIORITY:
          fieldBuilder.buildEnumField(
            'EngineeringChangeOrderProductRouteOperationPriority',
            RouteOprPriority,
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
         * Static representation of the {@link queueTimeBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_TIME_BEFORE: fieldBuilder.buildEdmTypeField(
          'QueueTimeBefore',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link processTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TIME: fieldBuilder.buildEdmTypeField(
          'ProcessTime',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link quantityCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'QuantityCostCategoryId',
          'Edm.String',
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
         * Static representation of the {@link workingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME_SCHEDULING_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'WorkingTimeSchedulingPropertyId',
          'Edm.String',
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
         * Static representation of the {@link routeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_TYPE: fieldBuilder.buildEnumField(
          'RouteType',
          RouteOprType,
          true
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
         * Static representation of the {@link setupCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SetupCategoryId',
          'Edm.String',
          true
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
         * Static representation of the {@link setupTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_TIME: fieldBuilder.buildEdmTypeField(
          'SetupTime',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteOperationProperties
        )
      };
    }

    return this._schema;
  }
}
