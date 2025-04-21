/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryJournalTransBiEntities } from './InventoryJournalTransBiEntities';
import { InventoryJournalTransBiEntitiesRequestBuilder } from './InventoryJournalTransBiEntitiesRequestBuilder';
import { ExciseTypeIn } from './ExciseTypeIn';
import { InventJournalType } from './InventJournalType';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { NoYes } from './NoYes';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { CostProfitSet } from './CostProfitSet';
import { InventRefType } from './InventRefType';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class InventoryJournalTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryJournalTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventoryJournalTransBiEntitiesApi<DeSerializersT> {
    return new InventoryJournalTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryJournalTransBiEntities;

  requestBuilder(): InventoryJournalTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventoryJournalTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryJournalTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryJournalTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryJournalTransBiEntities<DeSerializersT>,
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
    typeof InventoryJournalTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryJournalTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_ON_HAND: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_TARIFF_CODES_IN: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_TYPE_IN: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseTypeIn,
      true,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      InventJournalType,
      true,
      true
    >;
    PDS_CW_INVENT_ON_HAND: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTING_REASON_CODE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_RECORD_TYPE_IN: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSA_IN: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_LOCATION_IN: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOM_LINE: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_INVENT_DIM_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TRANS_TYPE: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      AssetTransTypeJournal,
      true,
      true
    >;
    INVENT_TRANS_ID_FATHER: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_AMOUNT: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID_RETURN: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_COPY_BATCH_ATTRIB: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_REC_ID_ORIGINAL: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_SET: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      CostProfitSet,
      true,
      true
    >;
    TO_INVENT_TRANS_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_PO_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_DATE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INFORMATION_SUBCODE_ID_EX_2: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP_TYPE_ID_RU: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INFOCODE_ID_EX_2: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENT_ASSET_WORK_ORDER_LINE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_INVENT_QTY_COUNTED: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_TYPE: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    PROJ_SALES_CURRENCY_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_MARKUP: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_ADDRESS_IN: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTED: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORNO_RU: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_TRANSACTION_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITM_OVER_UNDER_TRANSFER: EnumField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_QTY: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_UNIT_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_BOOK_ID: OrderableEdmTypeField<
      InventoryJournalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryJournalTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link inventOnHand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_ON_HAND: fieldBuilder.buildEdmTypeField(
          'InventOnHand',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link exciseTariffCodesIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TARIFF_CODES_IN: fieldBuilder.buildEdmTypeField(
          'ExciseTariffCodes_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TYPE_IN: fieldBuilder.buildEnumField(
          'ExciseType_IN',
          ExciseTypeIn,
          true
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          InventJournalType,
          true
        ),
        /**
         * Static representation of the {@link pdsCwInventOnHand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_INVENT_ON_HAND: fieldBuilder.buildEdmTypeField(
          'PdsCWInventOnHand',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countingReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CountingReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseRecordTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_RECORD_TYPE_IN: fieldBuilder.buildEnumField(
          'ExciseRecordType_IN',
          ExciseRecordTypeIn,
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatFulfillmentDateHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FULFILLMENT_DATE_HU: fieldBuilder.buildEdmTypeField(
          'IntrastatFulfillmentDate_HU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_ID: fieldBuilder.buildEdmTypeField(
          'InventRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dsaIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_IN: fieldBuilder.buildEnumField('DSA_IN', NoYes, true),
        /**
         * Static representation of the {@link warehouseLocationIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_IN: fieldBuilder.buildEdmTypeField(
          'WarehouseLocation_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bomLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LINE: fieldBuilder.buildEnumField('BOMLine', NoYes, true),
        /**
         * Static representation of the {@link toInventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'ToInventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANS_TYPE: fieldBuilder.buildEnumField(
          'AssetTransType',
          AssetTransTypeJournal,
          true
        ),
        /**
         * Static representation of the {@link inventTransIdFather} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_FATHER: fieldBuilder.buildEdmTypeField(
          'InventTransIdFather',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'LedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventTransIdReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_RETURN: fieldBuilder.buildEdmTypeField(
          'InventTransIdReturn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetDatasource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetDatasource',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link pdsCopyBatchAttrib} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_COPY_BATCH_ATTRIB: fieldBuilder.buildEnumField(
          'PdsCopyBatchAttrib',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralRecIdOriginal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_REC_ID_ORIGINAL: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralRecIdOriginal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link profitSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_SET: fieldBuilder.buildEnumField(
          'ProfitSet',
          CostProfitSet,
          true
        ),
        /**
         * Static representation of the {@link toInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ToInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqPoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_PO_ID: fieldBuilder.buildEdmTypeField(
          'ReqPOId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_DATE: fieldBuilder.buildEdmTypeField(
          'ReleaseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailInformationSubcodeIdEx2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INFORMATION_SUBCODE_ID_EX_2: fieldBuilder.buildEdmTypeField(
          'RetailInformationSubcodeIdEx2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrapTypeIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_TYPE_ID_RU: fieldBuilder.buildEdmTypeField(
          'ScrapTypeId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailInfocodeIdEx2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INFOCODE_ID_EX_2: fieldBuilder.buildEdmTypeField(
          'RetailInfocodeIdEx2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entAssetWorkOrderLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_ASSET_WORK_ORDER_LINE: fieldBuilder.buildEdmTypeField(
          'EntAssetWorkOrderLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetPhysicalMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetPhysicalMeasure',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link pdsCwInventQtyCounted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_INVENT_QTY_COUNTED: fieldBuilder.buildEdmTypeField(
          'PdsCWInventQtyCounted',
          'Edm.Decimal',
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
         * Static representation of the {@link inventRefType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TYPE: fieldBuilder.buildEnumField(
          'InventRefType',
          InventRefType,
          true
        ),
        /**
         * Static representation of the {@link projSalesCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'ProjSalesCurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MARKUP: fieldBuilder.buildEdmTypeField(
          'CostMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link postalAddressIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_IN: fieldBuilder.buildEdmTypeField(
          'PostalAddress_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link counted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED: fieldBuilder.buildEdmTypeField(
          'Counted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stornoRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_RU: fieldBuilder.buildEnumField('Storno_RU', NoYes, true),
        /**
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventRefTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventRefTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryServiceTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryServiceTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
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
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.Int64', false),
        /**
         * Static representation of the {@link itmOverUnderTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_OVER_UNDER_TRANSFER: fieldBuilder.buildEnumField(
          'ITMOverUnderTransfer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'UnitQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link projUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProjUnitID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'AssetBookId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryJournalTransBiEntities)
      };
    }

    return this._schema;
  }
}
