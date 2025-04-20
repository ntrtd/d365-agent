/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableTaxLines } from './RetailTransactionAuditableTaxLines';
import { RetailTransactionAuditableTaxLinesRequestBuilder } from './RetailTransactionAuditableTaxLinesRequestBuilder';
import { RetailTransactionAuditableSalesLinesApi } from './RetailTransactionAuditableSalesLinesApi';
import { RetailTransactionsAuditableApi } from './RetailTransactionsAuditableApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { NoYes } from './NoYes';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionAuditableTaxLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
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
  ): RetailTransactionAuditableTaxLinesApi<DeSerializersT> {
    return new RetailTransactionAuditableTaxLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>,
      RetailTransactionsAuditableApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: new OneToOneLink(
        'RetailTransactionAuditableSalesLine',
        this,
        linkedApis[0]
      ),
      RETAIL_TRANSACTION_AUDITABLE: new OneToOneLink(
        'RetailTransactionAuditable',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailTransactionAuditableTaxLines;

  requestBuilder(): RetailTransactionAuditableTaxLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableTaxLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableTaxLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableTaxLines<DeSerializersT>,
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
    typeof RetailTransactionAuditableTaxLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableTaxLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_ASYNCHRONOUS_ORDER_STATUS: EnumField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    HEADER_TRANSACTION_TYPE: EnumField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    IS_EXEMPT: EnumField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INCLUDED_IN_PRICE: EnumField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_VALIDATION_STATUS: EnumField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableTaxLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableTaxLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactionAuditableTaxLines<DeSerializers>>;
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegisterNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
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
         * Static representation of the {@link salesLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesLineNumber',
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
         * Static representation of the {@link taxPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TaxPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerAsynchronousOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ASYNCHRONOUS_ORDER_STATUS: fieldBuilder.buildEnumField(
          'HeaderAsynchronousOrderStatus',
          RetailTransactionOrderStatusType,
          true
        ),
        /**
         * Static representation of the {@link headerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'HeaderTransactionType',
          RetailTransactionType,
          true
        ),
        /**
         * Static representation of the {@link isExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXEMPT: fieldBuilder.buildEnumField('IsExempt', NoYes, true),
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
         * Static representation of the {@link headerValidationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VALIDATION_STATUS: fieldBuilder.buildEnumField(
          'HeaderValidationStatus',
          RetailTransactionValidationStatus,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link headerStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderStoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderStatementNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionAuditableTaxLines)
      };
    }

    return this._schema;
  }
}
