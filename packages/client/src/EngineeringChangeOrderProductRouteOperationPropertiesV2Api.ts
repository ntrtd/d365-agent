/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteOperationPropertiesV2 } from './EngineeringChangeOrderProductRouteOperationPropertiesV2';
import { EngineeringChangeOrderProductRouteOperationPropertiesV2RequestBuilder } from './EngineeringChangeOrderProductRouteOperationPropertiesV2RequestBuilder';
import { EngineeringChangeOrderProductRouteOperationsV2Api } from './EngineeringChangeOrderProductRouteOperationsV2Api';
import { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api';
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Api';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductRouteOperationPropertiesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesV2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesDocumentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductRouteOperationV2',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS_V_2:
        new OneToManyLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2',
          this,
          linkedApis[1]
        ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS_V_2:
        new OneToManyLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductRouteOperationPropertiesV2;

  requestBuilder(): EngineeringChangeOrderProductRouteOperationPropertiesV2RequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteOperationPropertiesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteOperationPropertiesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PRIORITY: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_CHANGE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_OPERATION_PROPERTIES_CHANGE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    PROCESS_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_COST_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATIONS_TIME_TO_HOUR_CONVERSION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUEUE_TIME_BEFORE: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COSTING_OPERATION_RESOURCE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_CALCULATION_FACTOR: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_CALCULATION_FORMULA: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      RouteFormula,
      true,
      true
    >;
    QUEUE_TIME_AFTER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER_BATCH_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      RouteOprType,
      true,
      true
    >;
    TRANSIT_TIME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SETUP_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_COST_CATEGORY_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesDocumentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_DOCUMENTS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENTS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteOperationPropertiesV2<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderProductRouteHeaderCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber',
            'Edm.Int32',
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
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationChangeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_CHANGE_TYPE:
          fieldBuilder.buildEnumField(
            'EngineeringChangeOrderProductRouteOperationChangeType',
            EngChgEcmChangeTypes,
            true
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
         * Static representation of the {@link routeOperationPropertiesChangeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_PROPERTIES_CHANGE_TYPE: fieldBuilder.buildEnumField(
          'RouteOperationPropertiesChangeType',
          EngChgEcmChangeTypes,
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
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
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
         * Static representation of the {@link setupCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SetupCategoryId',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteOperationPropertiesV2
        )
      };
    }

    return this._schema;
  }
}
