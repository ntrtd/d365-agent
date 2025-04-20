/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionBanks } from './TransactionPostingDefinitionBanks';
import { TransactionPostingDefinitionBanksRequestBuilder } from './TransactionPostingDefinitionBanksRequestBuilder';
import { BankTransactionTypes } from './BankTransactionTypes';
import { TableGroupAll } from './TableGroupAll';
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
export class TransactionPostingDefinitionBanksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransactionPostingDefinitionBanks<DeSerializersT>, DeSerializersT>
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
  ): TransactionPostingDefinitionBanksApi<DeSerializersT> {
    return new TransactionPostingDefinitionBanksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionBanks;

  requestBuilder(): TransactionPostingDefinitionBanksRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionBanksRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionBanks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionBanks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionBanks<DeSerializersT>,
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
    typeof TransactionPostingDefinitionBanks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionBanks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_TRANSACTION_TYPE: EnumField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      BankTransactionTypes,
      true,
      true
    >;
    BANK_CODE_TABLE_GROUP_ALL: EnumField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    METHOD_OF_PAYMENT_TABLE_ALL: EnumField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      TableAll,
      true,
      true
    >;
    METHOD_OF_PAYMENT: OrderableEdmTypeField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_RELATION_GROUP: OrderableEdmTypeField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_RELATION_TABLE: OrderableEdmTypeField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_DEFINITION_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionBanks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransactionPostingDefinitionBanks<DeSerializers>>;
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
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BankTransactionType',
          BankTransactionTypes,
          true
        ),
        /**
         * Static representation of the {@link bankCodeTableGroupAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE_TABLE_GROUP_ALL: fieldBuilder.buildEnumField(
          'BankCodeTableGroupAll',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link methodOfPaymentTableAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT_TABLE_ALL: fieldBuilder.buildEnumField(
          'MethodOfPaymentTableAll',
          TableAll,
          true
        ),
        /**
         * Static representation of the {@link methodOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'MethodOfPayment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bankRelationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RELATION_GROUP: fieldBuilder.buildEdmTypeField(
          'BankRelationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bankRelationTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_RELATION_TABLE: fieldBuilder.buildEdmTypeField(
          'BankRelationTable',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', TransactionPostingDefinitionBanks)
      };
    }

    return this._schema;
  }
}
