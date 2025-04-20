/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Expenses } from './Expenses';
import { ExpensesRequestBuilder } from './ExpensesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { TrvExpLineType } from './TrvExpLineType';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { ProjExpPolicyStatus } from './ProjExpPolicyStatus';
import { TrvExpType } from './TrvExpType';
import { TrvCostOwner } from './TrvCostOwner';
import { TrvExpSplitLineType } from './TrvExpSplitLineType';
import { TrvAppStatus } from './TrvAppStatus';
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
export class ExpensesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Expenses<DeSerializersT>, DeSerializersT>
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
  ): ExpensesApi<DeSerializersT> {
    return new ExpensesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Expenses<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Expenses;

  requestBuilder(): ExpensesRequestBuilder<DeSerializersT> {
    return new ExpensesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Expenses<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Expenses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Expenses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Expenses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Expenses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_TRANSACTION_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_REQUIRED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_LINE_TYPE: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      TrvExpLineType,
      true,
      true
    >;
    ADDRESS_ZIP_CODE_DETAILS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DINNER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIPTS_ATTACHED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BREAKFAST: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POST_OFFSET_ACCOUNT_TYPE: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    APPLY_ACTION: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLABLE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILEAGE_FROM_ADDRESS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_USED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERCOMPANY_BILLED: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyStatus,
      true,
      true
    >;
    TRANSACTION_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_AMOUNT_IN_COMPANY_CURRENCY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_REJECTED: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MERCHANT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILED: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEMIZED_LINE_TRANS_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_APPROVED: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_INCLUDED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATIONS_STATE_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_LOCAL_CURRENCY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_TYPE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_LEGAL_ENTITY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SPLIT_TO_PERSONAL: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PASSENGERS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTERCOMPANY_CURRENCY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_RECEIPTS_RECEIVED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATION_OF_ENTERTAINMENT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_TYPE: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OWNER: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      TrvCostOwner,
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRE_AUTHORIZED: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_ACCOUNT_IDENTIFICATION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_TRANSFER_CURRENCY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILEAGE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_SALES_TAX_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_SALES_PRICE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_CITY_NAME: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_ADVANCE_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_ROW_NUM: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_CATEGORY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PER_DIEM_TO_DATE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REIMBURSEMENT_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE_PER_MILE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHARED_SUB_CATEGORY_NAME: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_CREDIT_CARD: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_LOCAL_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_COST_PRICE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SPLIT_LINE_TYPE: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      TrvExpSplitLineType,
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_REPORT_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_NOTE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CATEGORY_COST_TYPE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATIONS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA_ID: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    EXPENSE_LINE_LEVEL_POSTING: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_PROJECT_CATEGORY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_DESCRIPTION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATIONS_LOCATION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LUNCH: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MOBILE_STATEMENT: EnumField<
      Expenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILEAGE_TO_ADDRESS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_ERRORS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_CLASS: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PER_DIEM_FROM_DATE: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MEAL_REDUCTION: OrderableEdmTypeField<
      Expenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Expenses<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Expenses<DeSerializers>>;
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
         * Static representation of the {@link expenseTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpenseTransactionNumber',
          'Edm.String',
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
         * Static representation of the {@link receiptRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REQUIRED: fieldBuilder.buildEnumField(
          'ReceiptRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LINE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseLineType',
          TrvExpLineType,
          true
        ),
        /**
         * Static representation of the {@link addressZipCodeDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE_DETAILS: fieldBuilder.buildEdmTypeField(
          'AddressZipCodeDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DINNER: fieldBuilder.buildEdmTypeField('Dinner', 'Edm.Int32', false),
        /**
         * Static representation of the {@link receiptsAttached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPTS_ATTACHED: fieldBuilder.buildEnumField(
          'ReceiptsAttached',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link breakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAKFAST: fieldBuilder.buildEdmTypeField(
          'Breakfast',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link postOffsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PostOffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link applyAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_ACTION: fieldBuilder.buildEnumField('ApplyAction', NoYes, true),
        /**
         * Static representation of the {@link billable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLABLE: fieldBuilder.buildEdmTypeField(
          'Billable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mileageFromAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_FROM_ADDRESS: fieldBuilder.buildEdmTypeField(
          'MileageFromAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_USED: fieldBuilder.buildEnumField('TicketUsed', NoYes, true),
        /**
         * Static representation of the {@link intercompanyBilled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_BILLED: fieldBuilder.buildEdmTypeField(
          'IntercompanyBilled',
          'Edm.Boolean',
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
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          ProjExpPolicyStatus,
          true
        ),
        /**
         * Static representation of the {@link transactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxAmountInCompanyCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT_IN_COMPANY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmountInCompanyCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateRejected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_REJECTED: fieldBuilder.buildEdmTypeField(
          'DateRejected',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link merchant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT: fieldBuilder.buildEdmTypeField(
          'Merchant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconciled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILED: fieldBuilder.buildEdmTypeField(
          'Reconciled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemizedLineTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMIZED_LINE_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemizedLineTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_APPROVED: fieldBuilder.buildEdmTypeField(
          'DateApproved',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_INCLUDED: fieldBuilder.buildEnumField('TaxIncluded', NoYes, true),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link locationsStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LocationsStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditCardLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CreditCardLocalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'TicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_TYPE: fieldBuilder.buildEdmTypeField(
          'VehicleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'IntercompanyLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netTransactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetTransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'AmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSplitToPersonal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SPLIT_TO_PERSONAL: fieldBuilder.buildEnumField(
          'IsSplitToPersonal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link additionalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_INFORMATION: fieldBuilder.buildEdmTypeField(
          'AdditionalInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployeePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfPassengers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PASSENGERS: fieldBuilder.buildEdmTypeField(
          'NumberOfPassengers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link intercompanyCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_CURRENCY: fieldBuilder.buildEdmTypeField(
          'IntercompanyCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalReceiptsReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RECEIPTS_RECEIVED: fieldBuilder.buildEnumField(
          'OriginalReceiptsReceived',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link locationOfEntertainment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_OF_ENTERTAINMENT: fieldBuilder.buildEdmTypeField(
          'LocationOfEntertainment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseType',
          TrvExpType,
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OWNER: fieldBuilder.buildEnumField(
          'CostOwner',
          TrvCostOwner,
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isPreAuthorized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRE_AUTHORIZED: fieldBuilder.buildEnumField(
          'IsPreAuthorized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postAccountIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_ACCOUNT_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'PostAccountIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyTransferCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_TRANSFER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'IntercompanyTransferCurrency',
          'Edm.String',
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
         * Static representation of the {@link mileage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE: fieldBuilder.buildEdmTypeField(
          'Mileage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actualSalesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ActualSalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intercompanySalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanySalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addressCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'AddressCityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashAdvanceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ADVANCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CashAdvanceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transRowNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ROW_NUM: fieldBuilder.buildEdmTypeField(
          'TransRowNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ExpenseCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link perDiemToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_DIEM_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PerDiemToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reimbursementAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REIMBURSEMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReimbursementAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ratePerMile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_PER_MILE: fieldBuilder.buildEdmTypeField(
          'RatePerMile',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sharedSubCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_SUB_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SharedSubCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importedCreditCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_CREDIT_CARD: fieldBuilder.buildEnumField(
          'ImportedCreditCard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardLocalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_LOCAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditCardLocalAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intercompanyCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'IntercompanyCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link splitLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_LINE_TYPE: fieldBuilder.buildEnumField(
          'SplitLineType',
          TrvExpSplitLineType,
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseReportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_REPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpenseReportNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_NOTE: fieldBuilder.buildEdmTypeField(
          'InternalNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subCategoryCostType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CATEGORY_COST_TYPE: fieldBuilder.buildEdmTypeField(
          'SubCategoryCostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationsCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'LocationsCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityDataAreaId',
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
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TrvAppStatus,
          true
        ),
        /**
         * Static representation of the {@link expenseLineLevelPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_LINE_LEVEL_POSTING: fieldBuilder.buildEnumField(
          'ExpenseLineLevelPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyProjectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_PROJECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'IntercompanyProjectCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CategoryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link locationsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATIONS_LOCATION: fieldBuilder.buildEdmTypeField(
          'LocationsLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUNCH: fieldBuilder.buildEdmTypeField('Lunch', 'Edm.Int32', false),
        /**
         * Static representation of the {@link mobileStatement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_STATEMENT: fieldBuilder.buildEnumField(
          'MobileStatement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mileageToAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILEAGE_TO_ADDRESS: fieldBuilder.buildEdmTypeField(
          'MileageToAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ERRORS: fieldBuilder.buildEdmTypeField(
          'PostingErrors',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ticketClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_CLASS: fieldBuilder.buildEdmTypeField(
          'TicketClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link perDiemFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PER_DIEM_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'PerDiemFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mealReduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEAL_REDUCTION: fieldBuilder.buildEdmTypeField(
          'MealReduction',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Expenses)
      };
    }

    return this._schema;
  }
}
