/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyCardRewardPointTransactionV2 } from './RetailLoyaltyCardRewardPointTransactionV2';
import { RetailLoyaltyCardRewardPointTransactionV2RequestBuilder } from './RetailLoyaltyCardRewardPointTransactionV2RequestBuilder';
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
export class RetailLoyaltyCardRewardPointTransactionV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializersT>,
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
  ): RetailLoyaltyCardRewardPointTransactionV2Api<DeSerializersT> {
    return new RetailLoyaltyCardRewardPointTransactionV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyCardRewardPointTransactionV2;

  requestBuilder(): RetailLoyaltyCardRewardPointTransactionV2RequestBuilder<DeSerializersT> {
    return new RetailLoyaltyCardRewardPointTransactionV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyCardRewardPointTransactionV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyCardRewardPointTransactionV2<DeSerializersT>,
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
    typeof RetailLoyaltyCardRewardPointTransactionV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyCardRewardPointTransactionV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TRANSACTION_COMPANY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ORDER_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADJUSTMENT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NON_TRANSACTIONAL_ACTIVITY_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOYALTY_TIER_LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardPointEntryType,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_LINE_LINE_NUM: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_TRANSACTION_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyTransactionType,
      true,
      true
    >;
    CUSTOMER_ACCOUNT_COMPANY: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATOR_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_TENDER_TYPE: EnumField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyTenderTypeBase,
      true,
      true
    >;
    RETAIL_TRANSACTION_SALES_TRANS_LINE_NUM: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINT_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailLoyaltyCardRewardPointTransactionV2<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField(
          'storeId',
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
         * Static representation of the {@link loyaltyTransactionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TRANSACTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyTransactionLineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link nonTransactionalActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_TRANSACTIONAL_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'NonTransactionalActivityId',
          'Edm.String',
          false
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
         * Static representation of the {@link entryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TIME: fieldBuilder.buildEdmTypeField(
          'EntryTime',
          'Edm.Int32',
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
        ALL_FIELDS: new AllFields(
          '*',
          RetailLoyaltyCardRewardPointTransactionV2
        )
      };
    }

    return this._schema;
  }
}
