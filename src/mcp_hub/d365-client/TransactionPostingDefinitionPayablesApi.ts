/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionPayables } from './TransactionPostingDefinitionPayables';
import { TransactionPostingDefinitionPayablesRequestBuilder } from './TransactionPostingDefinitionPayablesRequestBuilder';
import { AccountsPayableTransactionType } from './AccountsPayableTransactionType';
import { TableGroupCategoryAll } from './TableGroupCategoryAll';
import { TableGroupAll } from './TableGroupAll';
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
export class TransactionPostingDefinitionPayablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionPostingDefinitionPayables<DeSerializersT>,
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
  ): TransactionPostingDefinitionPayablesApi<DeSerializersT> {
    return new TransactionPostingDefinitionPayablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionPayables;

  requestBuilder(): TransactionPostingDefinitionPayablesRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionPayablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionPayables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionPayables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionPayables<DeSerializersT>,
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
    typeof TransactionPostingDefinitionPayables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionPayables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNTS_PAYABLE_TRANSACTION_TYPE: EnumField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      AccountsPayableTransactionType,
      true,
      true
    >;
    ITEM_CODE_TABLE_GROUP_CATEGORY_ALL: EnumField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      TableGroupCategoryAll,
      true,
      true
    >;
    ACCOUNT_CODE_TABLE_GROUP_ALL: EnumField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_RELATION: OrderableEdmTypeField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_DEFINITION_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionPayables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransactionPostingDefinitionPayables<DeSerializers>>;
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
         * Static representation of the {@link accountsPayableTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_PAYABLE_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'AccountsPayableTransactionType',
          AccountsPayableTransactionType,
          true
        ),
        /**
         * Static representation of the {@link itemCodeTableGroupCategoryAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE_TABLE_GROUP_CATEGORY_ALL: fieldBuilder.buildEnumField(
          'ItemCodeTableGroupCategoryAll',
          TableGroupCategoryAll,
          true
        ),
        /**
         * Static representation of the {@link accountCodeTableGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE_TABLE_GROUP_ALL: fieldBuilder.buildEnumField(
          'AccountCodeTableGroupAll',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_RELATION: fieldBuilder.buildEdmTypeField(
          'CategoryRelation',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', TransactionPostingDefinitionPayables)
      };
    }

    return this._schema;
  }
}
