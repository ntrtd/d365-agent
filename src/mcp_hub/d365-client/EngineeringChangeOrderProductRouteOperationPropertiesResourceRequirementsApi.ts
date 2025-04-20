/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements';
import { EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsRequestBuilder } from './EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsRequestBuilder';
import { EngineeringChangeOrderProductRouteOperationPropertiesApi } from './EngineeringChangeOrderProductRouteOperationPropertiesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationPropertiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES:
        new OneToOneLink(
          'EngineeringChangeOrderProductRouteOperationProperties',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor =
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements;

  requestBuilder(): EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENT_RECORD_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RECORD_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderProductRouteHeaderProductionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_PRODUCTION_SITE_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteHeaderProductionSiteId',
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
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_CONFIGURATION_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ROUTE_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesRouteId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ITEM_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesItemNumber',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link routeOperationPropertiesResourceRequirementRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_PROPERTIES_RESOURCE_REQUIREMENT_RECORD_ID:
          fieldBuilder.buildEdmTypeField(
            'RouteOperationPropertiesResourceRequirementRecordId',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_RECORD_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesRecordId',
            'Edm.Int64',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteOperationPropertiesResourceRequirements
        )
      };
    }

    return this._schema;
  }
}
