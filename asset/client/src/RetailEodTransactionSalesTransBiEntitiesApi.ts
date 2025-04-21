/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEodTransactionSalesTransBiEntities } from './RetailEodTransactionSalesTransBiEntities';
import { RetailEodTransactionSalesTransBiEntitiesRequestBuilder } from './RetailEodTransactionSalesTransBiEntitiesRequestBuilder';
import { RetailItemTransactionCode } from './RetailItemTransactionCode';
import { RetailInventStatusSales } from './RetailInventStatusSales';
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
export class RetailEodTransactionSalesTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailEodTransactionSalesTransBiEntities<DeSerializersT>,
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
  ): RetailEodTransactionSalesTransBiEntitiesApi<DeSerializersT> {
    return new RetailEodTransactionSalesTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEodTransactionSalesTransBiEntities;

  requestBuilder(): RetailEodTransactionSalesTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailEodTransactionSalesTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEodTransactionSalesTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEodTransactionSalesTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEodTransactionSalesTransBiEntities<DeSerializersT>,
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
    typeof RetailEodTransactionSalesTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEodTransactionSalesTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_TRANSACTION_SALES_TRANS: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_TRANSACTION_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: EnumField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailItemTransactionCode,
      true,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_SALES: EnumField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailInventStatusSales,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailEodTransactionSalesTransBiEntities<DeSerializers>
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
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link retailTransactionSalesTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TRANSACTION_SALES_TRANS: fieldBuilder.buildEdmTypeField(
          'RetailTransactionSalesTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link returnTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEnumField(
          'TransactionCode',
          RetailItemTransactionCode,
          true
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStatusSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_SALES: fieldBuilder.buildEnumField(
          'InventStatusSales',
          RetailInventStatusSales,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEodTransactionSalesTransBiEntities)
      };
    }

    return this._schema;
  }
}
