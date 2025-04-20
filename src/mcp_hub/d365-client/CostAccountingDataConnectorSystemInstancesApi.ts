/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorSystemInstances } from './CostAccountingDataConnectorSystemInstances';
import { CostAccountingDataConnectorSystemInstancesRequestBuilder } from './CostAccountingDataConnectorSystemInstancesRequestBuilder';
import { CostAccountingDataConnectorSystemInstanceAXesApi } from './CostAccountingDataConnectorSystemInstanceAXesApi';
import { CostAccountingDataConnectorCostObjectDimensionsApi } from './CostAccountingDataConnectorCostObjectDimensionsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CostAccountingDataConnectorSystemInstancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
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
  ): CostAccountingDataConnectorSystemInstancesApi<DeSerializersT> {
    return new CostAccountingDataConnectorSystemInstancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceAxEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_AX_ENTITY: OneToOneLink<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstanceAXesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dataConnectorCostObjectDimensionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_COST_OBJECT_DIMENSION_ENTITY: OneToManyLink<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorCostObjectDimensionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CostAccountingDataConnectorSystemInstanceAXesApi<DeSerializersT>,
      CostAccountingDataConnectorCostObjectDimensionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DATA_CONNECTOR_SYSTEM_INSTANCE_AX_ENTITY: new OneToOneLink(
        'DataConnectorSystemInstanceAXEntity',
        this,
        linkedApis[0]
      ),
      DATA_CONNECTOR_COST_OBJECT_DIMENSION_ENTITY: new OneToManyLink(
        'DataConnectorCostObjectDimensionEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CostAccountingDataConnectorSystemInstances;

  requestBuilder(): CostAccountingDataConnectorSystemInstancesRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorSystemInstancesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorSystemInstances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorSystemInstances<DeSerializersT>,
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
    typeof CostAccountingDataConnectorSystemInstances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorSystemInstances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorSystemInstances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorSystemInstances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceAxEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_AX_ENTITY: OneToOneLink<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstanceAXesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dataConnectorCostObjectDimensionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_COST_OBJECT_DIMENSION_ENTITY: OneToManyLink<
      CostAccountingDataConnectorSystemInstances<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorCostObjectDimensionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorSystemInstances<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link surrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURROGATE_KEY: fieldBuilder.buildEdmTypeField(
          'SurrogateKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostAccountingDataConnectorSystemInstances
        )
      };
    }

    return this._schema;
  }
}
