/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventSettlementBiEntities } from './InventSettlementBiEntities';
import { InventSettlementBiEntitiesRequestBuilder } from './InventSettlementBiEntitiesRequestBuilder';
import { InventSettleType } from './InventSettleType';
import { InventSettleModel } from './InventSettleModel';
import { LedgerPostingType } from './LedgerPostingType';
import { NoYes } from './NoYes';
import { InventTransCurrencyRu } from './InventTransCurrencyRu';
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
export class InventSettlementBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventSettlementBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventSettlementBiEntitiesApi<DeSerializersT> {
    return new InventSettlementBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventSettlementBiEntities;

  requestBuilder(): InventSettlementBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventSettlementBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventSettlementBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventSettlementBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventSettlementBiEntities<DeSerializersT>,
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
    typeof InventSettlementBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventSettlementBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANS_REC_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SETTLE_TYPE: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      InventSettleType,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_ID_MARKUP_RU: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_MODEL: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      InventSettleModel,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_ADJUSTMENT: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONS_POSTING: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY_SETTLED: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BALANCE_SHEET_POSTING: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    COST_AMOUNT_SETTLED: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_SETTLED: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_ACCOUNT_MARKUP_RU: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLED: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_BEGIN_TIME: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_TRANS_CURRENCY_RU: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      InventTransCurrencyRu,
      true,
      true
    >;
    SETTLE_TRANS_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_GROUP_ID: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARKUP_CODE_RU: OrderableEdmTypeField<
      InventSettlementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventSettlementBiEntities<DeSerializers>>;
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
         * Static representation of the {@link transRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'TransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link settleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TYPE: fieldBuilder.buildEnumField(
          'SettleType',
          InventSettleType,
          true
        ),
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link vendInvoiceIdMarkupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_ID_MARKUP_RU: fieldBuilder.buildEdmTypeField(
          'VendInvoiceIdMarkup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_MODEL: fieldBuilder.buildEnumField(
          'SettleModel',
          InventSettleModel,
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
         * Static representation of the {@link costAmountAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'CostAmountAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link operationsPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_POSTING: fieldBuilder.buildEnumField(
          'OperationsPosting',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link qtySettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SETTLED: fieldBuilder.buildEdmTypeField(
          'QtySettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link balanceSheetPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_SHEET_POSTING: fieldBuilder.buildEnumField(
          'BalanceSheetPosting',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link costAmountSettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SETTLED: fieldBuilder.buildEdmTypeField(
          'CostAmountSettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwSettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_SETTLED: fieldBuilder.buildEdmTypeField(
          'PdsCWSettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendAccountMarkupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_MARKUP_RU: fieldBuilder.buildEdmTypeField(
          'VendAccountMarkup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancelled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED: fieldBuilder.buildEnumField('Cancelled', NoYes, true),
        /**
         * Static representation of the {@link transBeginTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_BEGIN_TIME: fieldBuilder.buildEdmTypeField(
          'TransBeginTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventTransCurrencyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_CURRENCY_RU: fieldBuilder.buildEnumField(
          'InventTransCurrency_RU',
          InventTransCurrencyRu,
          true
        ),
        /**
         * Static representation of the {@link settleTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'SettleTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link markupCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE_RU: fieldBuilder.buildEdmTypeField(
          'MarkupCode_RU',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventSettlementBiEntities)
      };
    }

    return this._schema;
  }
}
