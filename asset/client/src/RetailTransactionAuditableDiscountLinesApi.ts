/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableDiscountLines } from './RetailTransactionAuditableDiscountLines';
import { RetailTransactionAuditableDiscountLinesRequestBuilder } from './RetailTransactionAuditableDiscountLinesRequestBuilder';
import { RetailTransactionAuditableSalesLinesApi } from './RetailTransactionAuditableSalesLinesApi';
import { RetailTransactionsAuditableApi } from './RetailTransactionsAuditableApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailDiscountOriginType } from './RetailDiscountOriginType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { RetailCustomerDiscountType } from './RetailCustomerDiscountType';
import { RetailManualDiscountType } from './RetailManualDiscountType';
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
export class RetailTransactionAuditableDiscountLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
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
  ): RetailTransactionAuditableDiscountLinesApi<DeSerializersT> {
    return new RetailTransactionAuditableDiscountLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
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

  entityConstructor = RetailTransactionAuditableDiscountLines;

  requestBuilder(): RetailTransactionAuditableDiscountLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableDiscountLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableDiscountLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableDiscountLines<DeSerializersT>,
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
    typeof RetailTransactionAuditableDiscountLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableDiscountLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODIC_DISCOUNT_OFFER_ID: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_COST: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_ASYNCHRONOUS_ORDER_STATUS: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_TRANSACTION_TYPE: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    DISCOUNT_ORIGIN_TYPE: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailDiscountOriginType,
      true,
      true
    >;
    HEADER_VALIDATION_STATUS: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    CUSTOMER_DISCOUNT_TYPE: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailCustomerDiscountType,
      true,
      true
    >;
    BUNDLE_ID: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MANUAL_DISCOUNT_TYPE: EnumField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      RetailManualDiscountType,
      true,
      true
    >;
    HEADER_STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEAL_PRICE: OrderableEdmTypeField<
      RetailTransactionAuditableDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableDiscountLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionAuditableDiscountLines<DeSerializers>
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
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
         * Static representation of the {@link registerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegisterNumber',
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodicDiscountOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'PeriodicDiscountOfferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_COST: fieldBuilder.buildEdmTypeField(
          'DiscountCost',
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
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link discountOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_ORIGIN_TYPE: fieldBuilder.buildEnumField(
          'DiscountOriginType',
          RetailDiscountOriginType,
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
         * Static representation of the {@link customerDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'CustomerDiscountType',
          RetailCustomerDiscountType,
          true
        ),
        /**
         * Static representation of the {@link bundleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_ID: fieldBuilder.buildEdmTypeField(
          'BundleId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link manualDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'ManualDiscountType',
          RetailManualDiscountType,
          true
        ),
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
        /**
         * Static representation of the {@link dealPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEAL_PRICE: fieldBuilder.buildEdmTypeField(
          'DealPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionAuditableDiscountLines)
      };
    }

    return this._schema;
  }
}
