/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers } from './CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers';
import { CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersRequestBuilder } from './CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersRequestBuilder';
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
export class CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializersT>,
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
  ): CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi<DeSerializersT> {
    return new CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers;

  requestBuilder(): CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializersT>,
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
    typeof CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERAL_LEDGER_ENTRY_SOURCE_IDENTIFIER: OrderableEdmTypeField<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_COST_OBJECT_DIMENSION_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_OBJECT_DIMENSION_MEMBER_NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<DeSerializers>
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
         * Static representation of the {@link generalLedgerEntrySourceIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_LEDGER_ENTRY_SOURCE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'GeneralLedgerEntrySourceIdentifier',
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
          CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers
        )
      };
    }

    return this._schema;
  }
}
