/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionLoyaltyRewardPointTransBiEntities } from './RetailTransactionLoyaltyRewardPointTransBiEntities';
import { RetailTransactionLoyaltyRewardPointTransBiEntitiesRequestBuilder } from './RetailTransactionLoyaltyRewardPointTransBiEntitiesRequestBuilder';
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
export class RetailTransactionLoyaltyRewardPointTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionLoyaltyRewardPointTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionLoyaltyRewardPointTransBiEntitiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionLoyaltyRewardPointTransBiEntities;

  requestBuilder(): RetailTransactionLoyaltyRewardPointTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionLoyaltyRewardPointTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionLoyaltyRewardPointTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionLoyaltyRewardPointTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENTRY_TYPE: EnumField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyRewardPointEntryType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_TRANSACTION_SALES_TRANS_LINE_NUM: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionLoyaltyRewardPointTransBiEntities<DeSerializers>
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
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField(
          'storeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'terminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'transactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField('StaffId', 'Edm.String', true),
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
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'replicationCounterFromOrigin',
          'Edm.Int32',
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
         * Static representation of the {@link entryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'EntryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
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
          RetailTransactionLoyaltyRewardPointTransBiEntities
        )
      };
    }

    return this._schema;
  }
}
