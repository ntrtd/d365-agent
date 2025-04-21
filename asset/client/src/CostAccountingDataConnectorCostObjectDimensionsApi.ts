/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorCostObjectDimensions } from './CostAccountingDataConnectorCostObjectDimensions';
import { CostAccountingDataConnectorCostObjectDimensionsRequestBuilder } from './CostAccountingDataConnectorCostObjectDimensionsRequestBuilder';
import { CostAccountingDataConnectorSystemInstancesApi } from './CostAccountingDataConnectorSystemInstancesApi';
import { NoYes } from './NoYes';
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
export class CostAccountingDataConnectorCostObjectDimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
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
  ): CostAccountingDataConnectorCostObjectDimensionsApi<DeSerializersT> {
    return new CostAccountingDataConnectorCostObjectDimensionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: OneToOneLink<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: new OneToOneLink(
        'DataConnectorSystemInstanceEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CostAccountingDataConnectorCostObjectDimensions;

  requestBuilder(): CostAccountingDataConnectorCostObjectDimensionsRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorCostObjectDimensionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
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
    typeof CostAccountingDataConnectorCostObjectDimensions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorCostObjectDimensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MUST_TRANSFER_DIMENSION: EnumField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUST_TRANSFER_DIMENSION_MEMBERS: EnumField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dataConnectorSystemInstanceEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DATA_CONNECTOR_SYSTEM_INSTANCE_ENTITY: OneToOneLink<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializersT>,
      DeSerializersT,
      CostAccountingDataConnectorSystemInstancesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorCostObjectDimensions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataConnectorSystemInstanceSurrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorSystemInstanceSurrogateKey',
            'Edm.String',
            false
          ),
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
         * Static representation of the {@link mustTransferDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_TRANSFER_DIMENSION: fieldBuilder.buildEnumField(
          'MustTransferDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dataConnectorDataTransferSurrogateKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorDataTransferSurrogateKey',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link mustTransferDimensionMembers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_TRANSFER_DIMENSION_MEMBERS: fieldBuilder.buildEnumField(
          'MustTransferDimensionMembers',
          NoYes,
          true
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
          CostAccountingDataConnectorCostObjectDimensions
        )
      };
    }

    return this._schema;
  }
}
