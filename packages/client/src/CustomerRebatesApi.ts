/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerRebates } from './CustomerRebates';
import { CustomerRebatesRequestBuilder } from './CustomerRebatesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { PdsPaymtType } from './PdsPaymtType';
import { PdsRebateStatus } from './PdsRebateStatus';
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
export class CustomerRebatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerRebates<DeSerializersT>, DeSerializersT>
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
  ): CustomerRebatesApi<DeSerializersT> {
    return new CustomerRebatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link defaultExpenseLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_EXPENSE_LEDGER_DIMENSION: OneToOneLink<
      CustomerRebates<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultExpenseMainAccountId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_EXPENSE_MAIN_ACCOUNT_ID: OneToOneLink<
      CustomerRebates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_EXPENSE_LEDGER_DIMENSION: new OneToOneLink(
        'DefaultExpenseLedgerDimension',
        this,
        linkedApis[0]
      ),
      DEFAULT_EXPENSE_MAIN_ACCOUNT_ID: new OneToOneLink(
        'DefaultExpenseMainAccountId',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CustomerRebates;

  requestBuilder(): CustomerRebatesRequestBuilder<DeSerializersT> {
    return new CustomerRebatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerRebates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerRebates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomerRebates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomerRebates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerRebates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_REBATE_AGREEMENT_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AMOUNT_PER_PRODUCT_UNIT_SOLD: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STARTING_REBATE_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_INVOICE_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMERS_ORDER_REFERENCE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_INVOICE_DATE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_QUANTITY: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_REBATE_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_INVOICE_LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CORRECTED_REBATE_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_BALANCE_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ACCRUAL_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICED_SALES_QUANTITY: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REBATE_PERCENTAGE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_TYPE: EnumField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      PdsPaymtType,
      true,
      true
    >;
    REBATE_SALES_AMOUNT: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_CALCULATION_DATE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_EXPENSE_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_STATUS: EnumField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      PdsRebateStatus,
      true,
      true
    >;
    SALES_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_REBATE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CREDIT_REBATE: EnumField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_REBATE_PROGRAM_TYPE_ID: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_ADJUSTMENT_DATE: OrderableEdmTypeField<
      CustomerRebates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultExpenseLedgerDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_EXPENSE_LEDGER_DIMENSION: OneToOneLink<
      CustomerRebates<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultExpenseMainAccountId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_EXPENSE_MAIN_ACCOUNT_ID: OneToOneLink<
      CustomerRebates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerRebates<DeSerializers>>;
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
         * Static representation of the {@link rebateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_ID: fieldBuilder.buildEdmTypeField(
          'RebateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesRebateAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateAgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAmountPerProductUnitSold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AMOUNT_PER_PRODUCT_UNIT_SOLD: fieldBuilder.buildEdmTypeField(
          'RebateAmountPerProductUnitSold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startingRebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'StartingRebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customersOrderReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMERS_ORDER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'CustomersOrderReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultAccrualMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultAccrualMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link salesPriceQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedRebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedRebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesInvoiceLineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_LINE_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'SalesInvoiceLineCreationSequenceNumber',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link correctedRebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectedRebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InvoicedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateBalanceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_BALANCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateBalanceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tradeAllowanceAgreementMerchandisingEventId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADE_ALLOWANCE_AGREEMENT_MERCHANDISING_EVENT_ID:
          fieldBuilder.buildEdmTypeField(
            'TradeAllowanceAgreementMerchandisingEventId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultAccrualLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACCRUAL_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultAccrualLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoicedSalesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InvoicedSalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rebatePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RebatePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'PaymentType',
          PdsPaymtType,
          true
        ),
        /**
         * Static representation of the {@link rebateSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RebateSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateCalculationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_DATE: fieldBuilder.buildEdmTypeField(
          'RebateCalculationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultExpenseLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPENSE_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultExpenseLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultExpenseMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DefaultExpenseMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link rebateStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_STATUS: fieldBuilder.buildEnumField(
          'RebateStatus',
          PdsRebateStatus,
          true
        ),
        /**
         * Static representation of the {@link salesOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_LINE_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderLineInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesRebateCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCreditRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CREDIT_REBATE: fieldBuilder.buildEnumField(
          'IsCreditRebate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesRebateProgramTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PROGRAM_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProgramTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAdjustmentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_ADJUSTMENT_DATE: fieldBuilder.buildEdmTypeField(
          'RebateAdjustmentDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerRebates)
      };
    }

    return this._schema;
  }
}
