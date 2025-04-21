/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendPackingSlipTransBiEntities } from './VendPackingSlipTransBiEntities';
import { VendPackingSlipTransBiEntitiesRequestBuilder } from './VendPackingSlipTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class VendPackingSlipTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendPackingSlipTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendPackingSlipTransBiEntitiesApi<DeSerializersT> {
    return new VendPackingSlipTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendPackingSlipTransBiEntities;

  requestBuilder(): VendPackingSlipTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendPackingSlipTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendPackingSlipTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendPackingSlipTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendPackingSlipTransBiEntities<DeSerializersT>,
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
    typeof VendPackingSlipTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendPackingSlipTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_TRANS_REF_REC_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CURRENCY_CODE_W: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_PURCHASER: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXCISE_AMOUNT_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_MST: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_REMAIN: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NGP_CODES_TABLE_FR: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_AMOUNT_W: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEST_STATE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_VALUE_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_VALUE_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_AMOUNT_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_INVENT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_LINE_EXPECTED_DELIVERY_DATE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_QTY_IN: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DATE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCEPTED_QTY_IN: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VAT_AMOUNT_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_LINE_LINE_NUMBER: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FULLY_MATCHED: EnumField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEST_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_LEDGER_VOUCHER: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_PURCHID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ACTION_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEVIATION_QTY_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_PACKING_SLIP_JOUR: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_REF_TYPE: EnumField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    TAX_ITEM_GROUP_RU: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORDERED: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_ORDERED: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_DISPATCH_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEST_COUNTY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLED_QTY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTIC_VALUE_LT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REJECTED_QTY_IN: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_QTY: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      VendPackingSlipTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendPackingSlipTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'TaxGroup_RU',
          'Edm.String',
          true
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
         * Static representation of the {@link statProcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_PROC_ID: fieldBuilder.buildEdmTypeField(
          'StatProcId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceTransRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TRANS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceTransRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link currencyCodeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE_W: fieldBuilder.buildEdmTypeField(
          'CurrencyCode_W',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerPurchaser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PURCHASER: fieldBuilder.buildEdmTypeField(
          'WorkerPurchaser',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link exciseAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'ExciseAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OrigStateId',
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
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link valueMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MST: fieldBuilder.buildEdmTypeField(
          'ValueMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwRemain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_REMAIN: fieldBuilder.buildEdmTypeField(
          'PdsCWRemain',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ngpCodesTableFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODES_TABLE_FR: fieldBuilder.buildEdmTypeField(
          'NGPCodesTable_FR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link stockedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCKED_PRODUCT: fieldBuilder.buildEnumField(
          'StockedProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineAmountW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_W: fieldBuilder.buildEdmTypeField(
          'LineAmount_W',
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
         * Static representation of the {@link destState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_STATE: fieldBuilder.buildEdmTypeField(
          'DestState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProcurementCategory',
          'Edm.Int64',
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
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseValueRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_VALUE_RU: fieldBuilder.buildEdmTypeField(
          'ExciseValue_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatValueRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_VALUE_RU: fieldBuilder.buildEdmTypeField(
          'VatValue_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'TaxAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_INVENT: fieldBuilder.buildEdmTypeField(
          'RemainInvent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineExpectedDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_EXPECTED_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'PurchaseLineExpectedDeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivedQtyIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QTY_IN: fieldBuilder.buildEdmTypeField(
          'ReceivedQty_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DATE: fieldBuilder.buildEdmTypeField(
          'InventDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link acceptedQtyIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCEPTED_QTY_IN: fieldBuilder.buildEdmTypeField(
          'AcceptedQty_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN: fieldBuilder.buildEdmTypeField('Remain', 'Edm.Decimal', false),
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
         * Static representation of the {@link vatAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'VATAmount_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseLineLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fullyMatched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULLY_MATCHED: fieldBuilder.buildEnumField('FullyMatched', NoYes, true),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DestCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link costLedgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'CostLedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origPurchid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_PURCHID: fieldBuilder.buildEdmTypeField(
          'OrigPurchid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnActionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ACTION_ID: fieldBuilder.buildEdmTypeField(
          'ReturnActionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deviationQtyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVIATION_QTY_RU: fieldBuilder.buildEdmTypeField(
          'DeviationQty_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendPackingSlipJour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PACKING_SLIP_JOUR: fieldBuilder.buildEdmTypeField(
          'VendPackingSlipJour',
          'Edm.Int64',
          false
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
         * Static representation of the {@link taxItemGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup_RU',
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
         * Static representation of the {@link ordered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED: fieldBuilder.buildEdmTypeField(
          'Ordered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link pdsCwOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_ORDERED: fieldBuilder.buildEdmTypeField(
          'PdsCWOrdered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intrastatDispatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_DISPATCH_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatDispatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_COUNTY: fieldBuilder.buildEdmTypeField(
          'DestCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodity',
          'Edm.Int64',
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
         * Static representation of the {@link inventRefTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventRefTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancelledQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLED_QTY: fieldBuilder.buildEdmTypeField(
          'CancelledQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticValueLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTIC_VALUE_LT: fieldBuilder.buildEdmTypeField(
          'StatisticValue_LT',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link interCompanyInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rejectedQtyIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTED_QTY_IN: fieldBuilder.buildEdmTypeField(
          'RejectedQty_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_QTY: fieldBuilder.buildEdmTypeField(
          'InventQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendPackingSlipTransBiEntities)
      };
    }

    return this._schema;
  }
}
