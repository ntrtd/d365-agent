/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionGeneralLedgers } from './TransactionPostingDefinitionGeneralLedgers';
import { TransactionPostingDefinitionGeneralLedgersRequestBuilder } from './TransactionPostingDefinitionGeneralLedgersRequestBuilder';
import { LedgerOpenCloseTransType } from './LedgerOpenCloseTransType';
import { FundClassValueAll } from './FundClassValueAll';
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
export class TransactionPostingDefinitionGeneralLedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionPostingDefinitionGeneralLedgers<DeSerializersT>,
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
  ): TransactionPostingDefinitionGeneralLedgersApi<DeSerializersT> {
    return new TransactionPostingDefinitionGeneralLedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionGeneralLedgers;

  requestBuilder(): TransactionPostingDefinitionGeneralLedgersRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionGeneralLedgersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionGeneralLedgers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionGeneralLedgers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionGeneralLedgers<DeSerializersT>,
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
    typeof TransactionPostingDefinitionGeneralLedgers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionGeneralLedgers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionGeneralLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_TRANSACTION_TYPE: EnumField<
      TransactionPostingDefinitionGeneralLedgers<DeSerializers>,
      DeSerializersT,
      LedgerOpenCloseTransType,
      true,
      true
    >;
    FUND_CLASS: EnumField<
      TransactionPostingDefinitionGeneralLedgers<DeSerializers>,
      DeSerializersT,
      FundClassValueAll,
      true,
      true
    >;
    POSTING_DEFINITION_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionGeneralLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TransactionPostingDefinitionGeneralLedgers<DeSerializers>
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
         * Static representation of the {@link ledgerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'LedgerTransactionType',
          LedgerOpenCloseTransType,
          true
        ),
        /**
         * Static representation of the {@link fundClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND_CLASS: fieldBuilder.buildEnumField(
          'FundClass',
          FundClassValueAll,
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
        ALL_FIELDS: new AllFields(
          '*',
          TransactionPostingDefinitionGeneralLedgers
        )
      };
    }

    return this._schema;
  }
}
