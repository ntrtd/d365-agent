/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEodStatementAggregations } from './RetailEodStatementAggregations';
import { RetailEodStatementAggregationsRequestBuilder } from './RetailEodStatementAggregationsRequestBuilder';
import { RetailEodTransactionPostingStatus } from './RetailEodTransactionPostingStatus';
import { RetailEodTransactionAggregationHeaderPostingStatus } from './RetailEodTransactionAggregationHeaderPostingStatus';
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
export class RetailEodStatementAggregationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEodStatementAggregations<DeSerializersT>, DeSerializersT>
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
  ): RetailEodStatementAggregationsApi<DeSerializersT> {
    return new RetailEodStatementAggregationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailEodStatementAggregations;

  requestBuilder(): RetailEodStatementAggregationsRequestBuilder<DeSerializersT> {
    return new RetailEodStatementAggregationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEodStatementAggregations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEodStatementAggregations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEodStatementAggregations<DeSerializersT>,
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
    typeof RetailEodStatementAggregations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEodStatementAggregations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGGREGATION: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATEMENT_STATUS: EnumField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      RetailEodTransactionPostingStatus,
      true,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_MESSAGE: OrderableEdmTypeField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGGREGATION_STATUS: EnumField<
      RetailEodStatementAggregations<DeSerializers>,
      DeSerializersT,
      RetailEodTransactionAggregationHeaderPostingStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailEodStatementAggregations<DeSerializers>>;
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
         * Static representation of the {@link aggregation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATION: fieldBuilder.buildEdmTypeField(
          'Aggregation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link statementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_STATUS: fieldBuilder.buildEnumField(
          'StatementStatus',
          RetailEodTransactionPostingStatus,
          true
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link errorMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_MESSAGE: fieldBuilder.buildEdmTypeField(
          'ErrorMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aggregationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATION_STATUS: fieldBuilder.buildEnumField(
          'AggregationStatus',
          RetailEodTransactionAggregationHeaderPostingStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEodStatementAggregations)
      };
    }

    return this._schema;
  }
}
