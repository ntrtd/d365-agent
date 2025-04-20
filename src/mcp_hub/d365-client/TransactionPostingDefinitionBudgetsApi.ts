/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionBudgets } from './TransactionPostingDefinitionBudgets';
import { TransactionPostingDefinitionBudgetsRequestBuilder } from './TransactionPostingDefinitionBudgetsRequestBuilder';
import { BudgetTransactionType } from './BudgetTransactionType';
import { TableAll } from './TableAll';
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
export class TransactionPostingDefinitionBudgetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionPostingDefinitionBudgets<DeSerializersT>,
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
  ): TransactionPostingDefinitionBudgetsApi<DeSerializersT> {
    return new TransactionPostingDefinitionBudgetsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionBudgets;

  requestBuilder(): TransactionPostingDefinitionBudgetsRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionBudgetsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionBudgets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionBudgets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionBudgets<DeSerializersT>,
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
    typeof TransactionPostingDefinitionBudgets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionBudgets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_CODE_RELATION_NAME: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_TYPE: EnumField<
      TransactionPostingDefinitionBudgets<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    BUDGET_CODE_TABLE_ALL: EnumField<
      TransactionPostingDefinitionBudgets<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    POSTING_DEFINITION_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionBudgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransactionPostingDefinitionBudgets<DeSerializers>>;
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
         * Static representation of the {@link budgetCodeRelationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE_RELATION_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCodeRelationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link budgetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TYPE: fieldBuilder.buildEnumField(
          'BudgetType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link budgetCodeTableAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE_TABLE_ALL: fieldBuilder.buildEnumField(
          'BudgetCodeTableAll',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link postingDefinitionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DEFINITION_ID: fieldBuilder.buildEdmTypeField(
          'PostingDefinitionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionPostingDefinitionBudgets)
      };
    }

    return this._schema;
  }
}
