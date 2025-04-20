/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionLoyaltyRewardPointsLines } from './RetailTransactionLoyaltyRewardPointsLines';
import { RetailTransactionLoyaltyRewardPointsLinesRequestBuilder } from './RetailTransactionLoyaltyRewardPointsLinesRequestBuilder';
import { RetailLoyaltyRewardPointEntryType } from './RetailLoyaltyRewardPointEntryType';
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
export class RetailTransactionLoyaltyRewardPointsLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializersT>,
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
  ): RetailTransactionLoyaltyRewardPointsLinesApi<DeSerializersT> {
    return new RetailTransactionLoyaltyRewardPointsLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionLoyaltyRewardPointsLines;

  requestBuilder(): RetailTransactionLoyaltyRewardPointsLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionLoyaltyRewardPointsLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionLoyaltyRewardPointsLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionLoyaltyRewardPointsLines<DeSerializersT>,
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
    typeof RetailTransactionLoyaltyRewardPointsLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionLoyaltyRewardPointsLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_NAME: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINT_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: EnumField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardPointEntryType,
      true,
      true
    >;
    RETAIL_TRANSACTION_SALES_TRANS_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINTS: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOYALTY_CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionLoyaltyRewardPointsLines<DeSerializers>
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loyaltyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyName',
          'Edm.String',
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
         * Static representation of the {@link loyaltyTierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierId',
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
         * Static representation of the {@link entryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TYPE: fieldBuilder.buildEnumField(
          'EntryType',
          RetailLoyaltyRewardPointEntryType,
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
         * Static representation of the {@link receiptNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptNumber',
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
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rewardPoints} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINTS: fieldBuilder.buildEdmTypeField(
          'RewardPoints',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loyaltyCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyCardNumber',
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
          RetailTransactionLoyaltyRewardPointsLines
        )
      };
    }

    return this._schema;
  }
}
