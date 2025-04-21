/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorBudgetModels } from './CostAccountingDataConnectorBudgetModels';
import { CostAccountingDataConnectorBudgetModelsRequestBuilder } from './CostAccountingDataConnectorBudgetModelsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CostAccountingDataConnectorBudgetModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorBudgetModels<DeSerializersT>,
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
  ): CostAccountingDataConnectorBudgetModelsApi<DeSerializersT> {
    return new CostAccountingDataConnectorBudgetModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostAccountingDataConnectorBudgetModels;

  requestBuilder(): CostAccountingDataConnectorBudgetModelsRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorBudgetModelsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorBudgetModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorBudgetModels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorBudgetModels<DeSerializersT>,
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
    typeof CostAccountingDataConnectorBudgetModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorBudgetModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_LEGAL_ENTITY_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorBudgetModels<DeSerializers>
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
         * Static representation of the {@link dataConnectorLegalEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_LEGAL_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'DataConnectorLegalEntityName',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostAccountingDataConnectorBudgetModels)
      };
    }

    return this._schema;
  }
}
