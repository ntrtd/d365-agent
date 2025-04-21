/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustInvoiceTransBiEntities } from './CustInvoiceTransBiEntities';
import { CustInvoiceTransBiEntitiesRequestBuilder } from './CustInvoiceTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
import { TradeLineDlvType } from './TradeLineDlvType';
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
export class CustInvoiceTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustInvoiceTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CustInvoiceTransBiEntitiesApi<DeSerializersT> {
    return new CustInvoiceTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustInvoiceTransBiEntities;

  requestBuilder(): CustInvoiceTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new CustInvoiceTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustInvoiceTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustInvoiceTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustInvoiceTransBiEntities<DeSerializersT>,
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
    typeof CustInvoiceTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustInvoiceTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED_REC_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_GROUP_TH: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_DLV_MODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISS_AMOUNT_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QTY_PHYSICAL: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_LINE_NUM: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETURN_CLOSED_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURN_ARRIVAL_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVERSE_CHARGE_SALES_LIST: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_INVOICE_LINE_ID_REF: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PERIOD_CHARGE_INVOICE_LINE_BASE_FROM_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_AMOUNT_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAT_LINE_AMOUNT_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_CATEGORY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ORIG_SALES_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NUMBER_SEQUENCE_GROUP: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_CATEGORY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUM_LINE_DISC_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_TAX_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_REMAIN: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NGP_CODES_TABLE_FR: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_MARKUP: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_OF_SHIPMENT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMISS_AMOUNT_CUR: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSE_CHARGE_W: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_PHYSICAL: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_BEFORE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_HEADER: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISS_CALC: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_OF_SHIPMENT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_FOR_FREE_IT: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PARENT_REC_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_MST: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_DELIVERY_NAME: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUM_LINE_DISC: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_REF_TYPE: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PART_DELIVERY: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_WRITE_CODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_DISPATCH_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OLAP_COST_VALUE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_TAX: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIOD_CHARGE_INVOICE_LINE_BASE_TO_DATE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_QTY: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_LINE_REFERENCE_NO: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TYPE: EnumField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      TradeLineDlvType,
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_BOOK_ID: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      CustInvoiceTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustInvoiceTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lineCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineCreationSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link reversedRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReversedRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdGroupTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup_TH',
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
         * Static representation of the {@link mcrDlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DLV_MODE: fieldBuilder.buildEdmTypeField(
          'MCRDlvMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISS_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'CommissAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdItemGroupHeadingTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeading_TH',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link qtyPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'QtyPhysical',
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
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link eInvoiceAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_INVOICE_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'EInvoiceAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerLineNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link returnClosedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link returnArrivalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ARRIVAL_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnArrivalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reverseChargeSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_SALES_LIST: fieldBuilder.buildEnumField(
          'ReverseChargeSalesList',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custInvoiceLineIdRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_LINE_ID_REF: fieldBuilder.buildEdmTypeField(
          'CustInvoiceLineIdRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link periodChargeInvoiceLineBaseFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CHARGE_INVOICE_LINE_BASE_FROM_DATE:
          fieldBuilder.buildEdmTypeField(
            'PeriodChargeInvoiceLineBaseFromDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link taxAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'TaxAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statLineAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_LINE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'StatLineAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link salesCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SalesCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link origSalesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SALES_ID: fieldBuilder.buildEdmTypeField(
          'OrigSalesId',
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
         * Static representation of the {@link numberSequenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'numberSequenceGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link retailCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'RetailCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sumLineDiscMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC_MST: fieldBuilder.buildEdmTypeField(
          'SumLineDiscMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmountTaxMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_TAX_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountTaxMST',
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
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MARKUP: fieldBuilder.buildEdmTypeField(
          'SalesMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_PERCENT: fieldBuilder.buildEdmTypeField(
          'DiscPercent',
          'Edm.Decimal',
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
         * Static representation of the {@link stateOfShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_OF_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'StateOfShipment',
          'Edm.String',
          true
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
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link origState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE: fieldBuilder.buildEdmTypeField(
          'OrigState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commissAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISS_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'CommissAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reverseChargeW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_W: fieldBuilder.buildEnumField(
          'ReverseCharge_W',
          NoYes,
          true
        ),
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
         * Static representation of the {@link pdsCwQtyPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyPhysical',
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
         * Static representation of the {@link remainBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE: fieldBuilder.buildEdmTypeField(
          'RemainBefore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link lineHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_HEADER: fieldBuilder.buildEdmTypeField(
          'LineHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISS_CALC: fieldBuilder.buildEnumField('CommissCalc', NoYes, true),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
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
         * Static representation of the {@link countryRegionOfShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_OF_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'CountryRegionOfShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsForFreeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_FOR_FREE_IT: fieldBuilder.buildEnumField(
          'GoodsForFree_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN: fieldBuilder.buildEdmTypeField('Remain', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link parentRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'ParentRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link linePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PERCENT: fieldBuilder.buildEdmTypeField(
          'LinePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscAmount',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link lineAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'LineAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mcrDeliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'MCRDeliveryName',
          'Edm.String',
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
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiLnDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLnDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sumLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'SumLineDisc',
          'Edm.Decimal',
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link partDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PART_DELIVERY: fieldBuilder.buildEnumField('PartDelivery', NoYes, true),
        /**
         * Static representation of the {@link taxWriteCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WRITE_CODE: fieldBuilder.buildEdmTypeField(
          'TaxWriteCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
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
         * Static representation of the {@link dlvDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_DATE: fieldBuilder.buildEdmTypeField(
          'DlvDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link olapCostValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OLAP_COST_VALUE: fieldBuilder.buildEdmTypeField(
          'OLAPCostValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLnPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_PERCENT: fieldBuilder.buildEdmTypeField(
          'MultiLnPercent',
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
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineAmountTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_TAX: fieldBuilder.buildEdmTypeField(
          'LineAmountTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
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
         * Static representation of the {@link interCompanyInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnDispositionCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DISPOSITION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnDispositionCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAutogenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTOGENERATED: fieldBuilder.buildEnumField(
          'TaxAutogenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link periodChargeInvoiceLineBaseToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_CHARGE_INVOICE_LINE_BASE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodChargeInvoiceLineBaseToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link orderLineReferenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_REFERENCE_NO: fieldBuilder.buildEdmTypeField(
          'OrderLineReference_NO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'DeliveryType',
          TradeLineDlvType,
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
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustInvoiceTransBiEntities)
      };
    }

    return this._schema;
  }
}
