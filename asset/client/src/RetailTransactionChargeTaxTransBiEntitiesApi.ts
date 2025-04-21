/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionChargeTaxTransBiEntities } from './RetailTransactionChargeTaxTransBiEntities';
import { RetailTransactionChargeTaxTransBiEntitiesRequestBuilder } from './RetailTransactionChargeTaxTransBiEntitiesRequestBuilder';
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
export class RetailTransactionChargeTaxTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionChargeTaxTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionChargeTaxTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionChargeTaxTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionChargeTaxTransBiEntities;

  requestBuilder(): RetailTransactionChargeTaxTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionChargeTaxTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionChargeTaxTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionChargeTaxTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionChargeTaxTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionChargeTaxTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionChargeTaxTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALE_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKUP_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_INCLUDED_IN_PRICE: EnumField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_EXEMPT: EnumField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionChargeTaxTransBiEntities<DeSerializers>
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
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField(
          'StoreId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link saleLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'SaleLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markupLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'MarkupLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isIncludedInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCLUDED_IN_PRICE: fieldBuilder.buildEnumField(
          'IsIncludedInPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT: fieldBuilder.buildEnumField('IsExempt', NoYes, true),
        /**
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'ReplicationCounterFromOrigin',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailTransactionChargeTaxTransBiEntities
        )
      };
    }

    return this._schema;
  }
}
