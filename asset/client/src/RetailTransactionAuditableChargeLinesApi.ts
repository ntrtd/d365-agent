/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionAuditableChargeLines } from './RetailTransactionAuditableChargeLines';
import { RetailTransactionAuditableChargeLinesRequestBuilder } from './RetailTransactionAuditableChargeLinesRequestBuilder';
import { RetailTransactionAuditableSalesLinesApi } from './RetailTransactionAuditableSalesLinesApi';
import { RetailTransactionsAuditableApi } from './RetailTransactionsAuditableApi';
import { RetailTransactionOrderStatusType } from './RetailTransactionOrderStatusType';
import { MarkupCategory } from './MarkupCategory';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailTransactionValidationStatus } from './RetailTransactionValidationStatus';
import { MarkupModuleType } from './MarkupModuleType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionAuditableChargeLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
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
  ): RetailTransactionAuditableChargeLinesApi<DeSerializersT> {
    return new RetailTransactionAuditableChargeLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
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

  entityConstructor = RetailTransactionAuditableChargeLines;

  requestBuilder(): RetailTransactionAuditableChargeLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionAuditableChargeLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionAuditableChargeLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionAuditableChargeLines<DeSerializersT>,
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
    typeof RetailTransactionAuditableChargeLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionAuditableChargeLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCLUSIVE_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_ASYNCHRONOUS_ORDER_STATUS: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionOrderStatusType,
      true,
      true
    >;
    CATEGORY_TYPE: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    HEADER_STATEMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUSIVE_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_TRANSACTION_TYPE: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionType,
      true,
      true
    >;
    HEADER_STORE_NUMBER: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_AMOUNT: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGES_CODE: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_VALIDATION_STATUS: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      RetailTransactionValidationStatus,
      true,
      true
    >;
    MODULE_TYPE: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      MarkupModuleType,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGES_VALUE: OrderableEdmTypeField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KEEP: EnumField<
      RetailTransactionAuditableChargeLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditableSalesLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE_SALES_LINE: OneToOneLink<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionAuditableSalesLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTransactionAuditable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TRANSACTION_AUDITABLE: OneToOneLink<
      RetailTransactionAuditableChargeLines<DeSerializersT>,
      DeSerializersT,
      RetailTransactionsAuditableApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactionAuditableChargeLines<DeSerializers>>;
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
         * Static representation of the {@link salesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exclusiveTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUSIVE_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExclusiveTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
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
         * Static representation of the {@link categoryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_TYPE: fieldBuilder.buildEnumField(
          'CategoryType',
          MarkupCategory,
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
         * Static representation of the {@link inclusiveTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUSIVE_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InclusiveTaxAmount',
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
         * Static representation of the {@link headerStoreNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderStoreNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveReductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveReductionAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link calculatedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link chargesCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_CODE: fieldBuilder.buildEdmTypeField(
          'ChargesCode',
          'Edm.String',
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
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          MarkupModuleType,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveOriginalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveOriginalPrice',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link chargesValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_VALUE: fieldBuilder.buildEdmTypeField(
          'ChargesValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link keep} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP: fieldBuilder.buildEnumField('Keep', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionAuditableChargeLines)
      };
    }

    return this._schema;
  }
}
