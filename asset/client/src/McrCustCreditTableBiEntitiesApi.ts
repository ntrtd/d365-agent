/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrCustCreditTableBiEntities } from './McrCustCreditTableBiEntities';
import { McrCustCreditTableBiEntitiesRequestBuilder } from './McrCustCreditTableBiEntitiesRequestBuilder';
import { McrCustPaymType } from './McrCustPaymType';
import { McrCustCreditStatus } from './McrCustCreditStatus';
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
export class McrCustCreditTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<McrCustCreditTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): McrCustCreditTableBiEntitiesApi<DeSerializersT> {
    return new McrCustCreditTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrCustCreditTableBiEntities;

  requestBuilder(): McrCustCreditTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new McrCustCreditTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrCustCreditTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrCustCreditTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrCustCreditTableBiEntities<DeSerializersT>,
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
    typeof McrCustCreditTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrCustCreditTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_QTY: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_CURRENCY: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_CREDIT: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_PAYM_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PARENT_CREDIT_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDITED_QTY: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_TYPE: EnumField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrCustPaymType,
      true,
      true
    >;
    RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_DESCRIPTION: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_SALES_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CC_SETTLEMENT_REC_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_CREDIT_STATUS: EnumField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrCustCreditStatus,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_ID: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_PRICE: OrderableEdmTypeField<
      McrCustCreditTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<McrCustCreditTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
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
         * Static representation of the {@link creditQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_QTY: fieldBuilder.buildEdmTypeField(
          'CreditQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'OrderCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link totalCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CREDIT: fieldBuilder.buildEdmTypeField(
          'TotalCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origPaymId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_PAYM_ID: fieldBuilder.buildEdmTypeField(
          'OrigPaymID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link parentCreditId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CREDIT_ID: fieldBuilder.buildEdmTypeField(
          'ParentCreditId',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link creditedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITED_QTY: fieldBuilder.buildEdmTypeField(
          'CreditedQty',
          'Edm.Decimal',
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
         * Static representation of the {@link creditType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_TYPE: fieldBuilder.buildEnumField(
          'creditType',
          McrCustPaymType,
          true
        ),
        /**
         * Static representation of the {@link retailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'RetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReasonCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SALES_ID: fieldBuilder.buildEdmTypeField(
          'OrigSalesID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ccSettlementRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CC_SETTLEMENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ccSettlementRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custCreditStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_CREDIT_STATUS: fieldBuilder.buildEnumField(
          'CustCreditStatus',
          McrCustCreditStatus,
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link creditId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_ID: fieldBuilder.buildEdmTypeField(
          'CreditID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRICE: fieldBuilder.buildEdmTypeField(
          'NewPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrCustCreditTableBiEntities)
      };
    }

    return this._schema;
  }
}
