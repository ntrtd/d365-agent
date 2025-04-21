/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableAggregations } from './RetailTransactionAuditableAggregations';
import { RetailTransactionAuditableAggregationsRequestBuilder } from './RetailTransactionAuditableAggregationsRequestBuilder';
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
export class RetailTransactionAuditableAggregationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableAggregations<DeSerializersT>,
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
  ): RetailTransactionAuditableAggregationsApi<DeSerializersT> {
    return new RetailTransactionAuditableAggregationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionAuditableAggregations;

  requestBuilder(): RetailTransactionAuditableAggregationsRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableAggregationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableAggregations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableAggregations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableAggregations<DeSerializersT>,
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
    typeof RetailTransactionAuditableAggregations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableAggregations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGGREGATION: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_DATE: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGGREGATION_STATUS: EnumField<
      RetailTransactionAuditableAggregations<DeSerializers>,
      DeSerializersT,
      RetailEodTransactionAggregationHeaderPostingStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionAuditableAggregations<DeSerializers>
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
         * Static representation of the {@link statementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'StatementNumber',
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link businessDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessDate',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', RetailTransactionAuditableAggregations)
      };
    }

    return this._schema;
  }
}
