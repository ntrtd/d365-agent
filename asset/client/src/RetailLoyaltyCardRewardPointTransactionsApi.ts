/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyCardRewardPointTransactions } from './RetailLoyaltyCardRewardPointTransactions';
import { RetailLoyaltyCardRewardPointTransactionsRequestBuilder } from './RetailLoyaltyCardRewardPointTransactionsRequestBuilder';
import { RetailLoyaltyRewardPointEntryType } from './RetailLoyaltyRewardPointEntryType';
import { RetailLoyaltyTransactionType } from './RetailLoyaltyTransactionType';
import { RetailLoyaltyTenderTypeBase } from './RetailLoyaltyTenderTypeBase';
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
export class RetailLoyaltyCardRewardPointTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailLoyaltyCardRewardPointTransactions<DeSerializersT>,
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
  ): RetailLoyaltyCardRewardPointTransactionsApi<DeSerializersT> {
    return new RetailLoyaltyCardRewardPointTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyCardRewardPointTransactions;

  requestBuilder(): RetailLoyaltyCardRewardPointTransactionsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyCardRewardPointTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyCardRewardPointTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyCardRewardPointTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyCardRewardPointTransactions<DeSerializersT>,
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
    typeof RetailLoyaltyCardRewardPointTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyCardRewardPointTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TRANSACTION_COMPANY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADJUSTMENT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardPointEntryType,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_LINE_LINE_NUM: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_TRANSACTION_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyTransactionType,
      true,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NON_TRANSACTIONAL_ACTIVITY_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_COMPANY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATOR_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_TENDER_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyTenderTypeBase,
      true,
      true
    >;
    RETAIL_TRANSACTION_SALES_TRANS_LINE_NUM: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailLoyaltyCardRewardPointTransactions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltyTransactionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TRANSACTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyTransactionLineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTransactionCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TRANSACTION_COMPANY: fieldBuilder.buildEdmTypeField(
          'LoyaltyTransactionCompany',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link adjustmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_ID: fieldBuilder.buildEdmTypeField(
          'AdjustmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTierLoyaltyProgramName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_LOYALTY_PROGRAM_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierLoyaltyProgramName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TYPE: fieldBuilder.buildEnumField(
          'EntryType',
          RetailLoyaltyRewardPointEntryType,
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesLineLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'SalesLineLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rewardPointAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'RewardPointAmountQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'LoyaltyTransactionType',
          RetailLoyaltyTransactionType,
          true
        ),
        /**
         * Static representation of the {@link entryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TIME: fieldBuilder.buildEdmTypeField(
          'EntryTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nonTransactionalActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_TRANSACTIONAL_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'NonTransactionalActivityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_COMPANY: fieldBuilder.buildEdmTypeField(
          'CustomerAccountCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remaining} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING: fieldBuilder.buildEdmTypeField(
          'Remaining',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loyaltyProgramName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_PROGRAM_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyProgramName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATOR_ID: fieldBuilder.buildEdmTypeField(
          'OperatorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardTenderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TENDER_TYPE: fieldBuilder.buildEnumField(
          'CardTenderType',
          RetailLoyaltyTenderTypeBase,
          true
        ),
        /**
         * Static representation of the {@link retailTransactionSalesTransLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TRANSACTION_SALES_TRANS_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'RetailTransactionSalesTransLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rewardPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_ID: fieldBuilder.buildEdmTypeField(
          'RewardPointId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'EntryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyCardRewardPointTransactions)
      };
    }

    return this._schema;
  }
}
