/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostAccountingDataConnectorLegalEntities } from './CostAccountingDataConnectorLegalEntities';
import { CostAccountingDataConnectorLegalEntitiesRequestBuilder } from './CostAccountingDataConnectorLegalEntitiesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CostAccountingDataConnectorLegalEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostAccountingDataConnectorLegalEntities<DeSerializersT>,
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
  ): CostAccountingDataConnectorLegalEntitiesApi<DeSerializersT> {
    return new CostAccountingDataConnectorLegalEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostAccountingDataConnectorLegalEntities;

  requestBuilder(): CostAccountingDataConnectorLegalEntitiesRequestBuilder<DeSerializersT> {
    return new CostAccountingDataConnectorLegalEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostAccountingDataConnectorLegalEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostAccountingDataConnectorLegalEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostAccountingDataConnectorLegalEntities<DeSerializersT>,
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
    typeof CostAccountingDataConnectorLegalEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostAccountingDataConnectorLegalEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_CONNECTOR_SYSTEM_INSTANCE_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_BUDGET_ENTRIES_FROM_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATA_CONNECTOR_DATA_TRANSFER_SURROGATE_KEY: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUST_TRANSFER_BUDGET_ENTRIES: EnumField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_BUDGET_ENTRIES_TO_DATE: OrderableEdmTypeField<
      CostAccountingDataConnectorLegalEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      CostAccountingDataConnectorLegalEntities<DeSerializers>
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
         * Static representation of the {@link transferBudgetEntriesFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_BUDGET_ENTRIES_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'TransferBudgetEntriesFromDate',
          'Edm.DateTimeOffset',
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
        /**
         * Static representation of the {@link mustTransferBudgetEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_TRANSFER_BUDGET_ENTRIES: fieldBuilder.buildEnumField(
          'MustTransferBudgetEntries',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link transferBudgetEntriesToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_BUDGET_ENTRIES_TO_DATE: fieldBuilder.buildEdmTypeField(
          'TransferBudgetEntriesToDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostAccountingDataConnectorLegalEntities)
      };
    }

    return this._schema;
  }
}
