/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileExpenses } from './MobileExpenses';
import { MobileExpensesRequestBuilder } from './MobileExpensesRequestBuilder';
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
export class MobileExpensesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MobileExpenses<DeSerializersT>, DeSerializersT>
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
  ): MobileExpensesApi<DeSerializersT> {
    return new MobileExpensesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      MobileExpenses<DeSerializersT>,
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

  entityConstructor = MobileExpenses;

  requestBuilder(): MobileExpensesRequestBuilder<DeSerializersT> {
    return new MobileExpensesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MobileExpenses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MobileExpenses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MobileExpenses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MobileExpenses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MobileExpenses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_TRANSACTION_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIPT_REQUIRED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REIMBURSE_AMT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KM_OWN_CAR: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSE_LINE_TYPE: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      TrvExpLineType,
      true,
      true
    >;
    ADDRESS_ZIP_CODE_DETAILS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPTS_ATTACHED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_OFFSET_ACCOUNT_TYPE: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    APPLY_ACTION: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILEAGE_FROM_ADDRESS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_USED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAY_METHOD: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_BILLED: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      ProjExpPolicyStatus,
      true,
      true
    >;
    SALES_TAX_AMOUNT_IN_COMPANY_CURRENCY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_REJECTED: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ACTIVITY_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILED: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEMIZED_LINE_TRANS_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_CODE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_APPROVED: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_INCLUDED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_AMT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CORRECTED_TAX_AMOUNT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATIONS_STATE_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CARD_LOCAL_CURRENCY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TICKET_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_TYPE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_TRANSACTION_AMOUNT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_MST: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTER_COMPANY_LE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SPLIT_TO_PERSONAL: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_CATEGORY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_INFORMATION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FROM: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_PASSENGERS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTERCOMPANY_CURRENCY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_RECEIPTS_RECEIVED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_OF_ENTERTAINMENT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_TYPE: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OWNER: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      TrvCostOwner,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRE_AUTHORIZED: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_ACCOUNT_IDENTIFICATION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_TRANSFER_CURRENCY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUKTION_LUNCH: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEDUKTION_BREAKFAST: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT_CURR: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_SALES_PRICE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_STATUS_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_NAME: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_ADVANCE_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_ROW_NUM: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEDUKTION_DINNER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHARED_SUB_CATEGORY_NAME: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_CREDIT_CARD: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_TO: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_CARD_LOCAL_AMOUNT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTERCOMPANY_COST_PRICE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SPLIT_LINE_TYPE: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      TrvExpSplitLineType,
      true,
      true
    >;
    KM_PRICE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSE_REPORT_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CATEGORY_COST_TYPE: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATIONS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      TrvAppStatus,
      true,
      true
    >;
    EXPENSE_LINE_LEVEL_POSTING: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_VIOLATION_COUNT: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOCATIONS_LOCATION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_STATEMENT: EnumField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MILEAGE_TO_ADDRESS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_ERRORS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_VIOLATIONS_LEVEL: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TICKET_CLASS: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEAL_REDUCTION: OrderableEdmTypeField<
      MobileExpenses<DeSerializers>,
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
      MobileExpenses<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MobileExpenses<DeSerializers>>;
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
         * Static representation of the {@link reimburseAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REIMBURSE_AMT: fieldBuilder.buildEdmTypeField(
          'ReimburseAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link kmOwnCar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_OWN_CAR: fieldBuilder.buildEdmTypeField(
          'KMOwnCar',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link receiptsAttached} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPTS_ATTACHED: fieldBuilder.buildEnumField(
          'ReceiptsAttached',
          NoYes,
          true
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
         * Static representation of the {@link payMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_METHOD: fieldBuilder.buildEdmTypeField(
          'PayMethod',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link projActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjActivityNumber',
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
         * Static representation of the {@link exchangeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_CODE: fieldBuilder.buildEdmTypeField(
          'ExchangeCode',
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link correctedTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTED_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CorrectedTaxAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link interCompanyLe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_LE: fieldBuilder.buildEdmTypeField(
          'InterCompanyLE',
          'Edm.String',
          true
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
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'InterCompanyCategory',
          'Edm.String',
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
         * Static representation of the {@link dateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FROM: fieldBuilder.buildEdmTypeField(
          'DateFrom',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'TransactionText',
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
         * Static representation of the {@link merchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'MerchantId',
          'Edm.String',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
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
         * Static representation of the {@link deduktionLunch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_LUNCH: fieldBuilder.buildEdmTypeField(
          'DeduktionLunch',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link deduktionBreakfast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_BREAKFAST: fieldBuilder.buildEdmTypeField(
          'DeduktionBreakfast',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amountCurr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CURR: fieldBuilder.buildEdmTypeField(
          'AmountCurr',
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
         * Static representation of the {@link projStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ProjStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link deduktionDinner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUKTION_DINNER: fieldBuilder.buildEdmTypeField(
          'DeduktionDinner',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
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
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO: fieldBuilder.buildEdmTypeField(
          'DateTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link kmPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KM_PRICE: fieldBuilder.buildEdmTypeField(
          'KMPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link policyViolationCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATION_COUNT: fieldBuilder.buildEdmTypeField(
          'PolicyViolationCount',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link postingErrors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ERRORS: fieldBuilder.buildEdmTypeField(
          'PostingErrors',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyViolationsLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_VIOLATIONS_LEVEL: fieldBuilder.buildEdmTypeField(
          'PolicyViolationsLevel',
          'Edm.Int64',
          false
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
        ALL_FIELDS: new AllFields('*', MobileExpenses)
      };
    }

    return this._schema;
  }
}
