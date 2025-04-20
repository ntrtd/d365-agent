/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers } from './CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers';
import { CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersRequestBuilder } from './CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersRequestBuilder';
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
export class CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializersT>,
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
  ): CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi<DeSerializersT> {
    return new CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers;

  requestBuilder(): CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializersT>,
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
    typeof CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_ENTRY_SOURCE_IDENTIFIER: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_COST_OBJECT_DIMENSION_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_OBJECT_DIMENSION_MEMBER_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<DeSerializers>
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
         * Static representation of the {@link budgetEntrySourceIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_ENTRY_SOURCE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'BudgetEntrySourceIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataConnectorCostObjectDimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_CONNECTOR_COST_OBJECT_DIMENSION_NAME:
          fieldBuilder.buildEdmTypeField(
            'DataConnectorCostObjectDimensionName',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link costObjectDimensionMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionMemberName',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers
        )
      };
    }

    return this._schema;
  }
}
