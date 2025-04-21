/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchLineBiEntities } from './PurchLineBiEntities';
import { PurchLineBiEntitiesRequestBuilder } from './PurchLineBiEntitiesRequestBuilder';
import { TradeLineDlvType } from './TradeLineDlvType';
import { PurchCovRef } from './PurchCovRef';
import { McrDropShipStatus } from './McrDropShipStatus';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { TradeWorkflowState } from './TradeWorkflowState';
import { NoYes } from './NoYes';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { ReturnStatusLine } from './ReturnStatusLine';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { PurchStatus } from './PurchStatus';
import { InventRefType } from './InventRefType';
import { GsthstTaxTypeCa } from './GsthstTaxTypeCa';
import { LineDeliveryType } from './LineDeliveryType';
import { PurchMatchingPolicyOption } from './PurchMatchingPolicyOption';
import { PurchaseType } from './PurchaseType';
import { PurchPurchaseOrderCreationMethod } from './PurchPurchaseOrderCreationMethod';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
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
export class PurchLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): PurchLineBiEntitiesApi<DeSerializersT> {
    return new PurchLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchLineBiEntities;

  requestBuilder(): PurchLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new PurchLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PurchLineBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchLineBiEntities<DeSerializersT>,
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
    typeof PurchLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_TYPE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeLineDlvType,
      true,
      true
    >;
    COV_REF: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchCovRef,
      true,
      true
    >;
    ITEM_ROUTE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_ATTENTION: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_DROP_SHIP_STATUS: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      McrDropShipStatus,
      true,
      true
    >;
    TAM_ITEM_VEND_REBATE_GROUP_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_LINE_NUM_EX_1: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGIN: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      InterCompanyOrigin,
      true,
      true
    >;
    BUDGET_RESERVATION_LINE_PSN: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PDS_CW_INVENT_RECEIVED_NOW: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WF_DELIVERY_DUE_STATE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    WF_INV_RECEIVED_STATE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    SYSTEM_ENTRY_CHANGE_POLICY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_FIXED_ASSET: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_TRANS_TYPE_PURCH: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      AssetTransTypePurch,
      true,
      true
    >;
    PDS_CW_REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN_PURCH_PHYSICAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MATCHING_AGREEMENT_LINE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBO_PACKAGE_LINE_NUM: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_STATE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINDER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_RECEIVED_NOW: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_PO_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_ORDER_LINE_2_PRICE_HISTORY_REF: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_ADDRESS: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_DROP_SHIP_COMMENT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DATE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QTY_ORDERED: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPRECIATION_START_DATE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INVOICE_MATCHED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_1099_REC_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_ENTRY_CHANGEPOLICY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXIM_PORTS_IN: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_ADDED_BY_CHANNEL: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDITED_VEND_INVOICE_TRANS: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_REQ_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_WORKER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OVER_DELIVERY_PCT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_TAX_WRITE_CODE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MODIFIED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_PURCHASE_ORDER_FORM_NUM: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_SALES_CURRENCY_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_STATUS: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      ReturnStatusLine,
      true,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_BOOK_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_DROP_SHIPMENT: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PWP: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_TEMP_VALUE_EX_2: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MARKUP: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_TAX_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_REFERENCE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_HEADER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SCRAP: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_RECEIVED_NOW: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_INVOICE_NOW: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_PACKAGE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BOM_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETURN_ACTION_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONFIRMED_DLV: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDITABLE_IN_WORKFLOW: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_SUPPLIER_AUX_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    STAT_TRIANGULAR_DEAL: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_SKIP_AUTO_LINK: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_TOTAL_RETAIN_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_PLAN_ID_SCHED: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXIM_PRODUCT_GROUP_IN: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CFOP_TABLE_BR: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDER_DELIVERY_PCT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_SALES_UNIT_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATISTIC_VALUE_LT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_STATUS: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    PSA_RETAIN_SCHEDULE_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_MODIFIED_FIELD: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_REF_TYPE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    PDS_CALCULATION_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GSTHST_TAX_TYPE_CA: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_BASE_CUR_TH: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DELIVERY_TYPE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      LineDeliveryType,
      true,
      true
    >;
    REMAIN_PURCH_FINANCIAL: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATCHING_POLICY: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOption,
      true,
      true
    >;
    PURCHASE_TYPE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    TAX_WITHHOLD_GROUP_TH: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINALIZED: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_QTY: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_CREATION_METHOD: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchPurchaseOrderCreationMethod,
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE_TYPE: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_ENTRY_SOURCE: EnumField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      PriceDiscSystemSource,
      true,
      true
    >;
    PURCH_COMMITMENT_LINE_PSN: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_REQ_LINE_REF_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PurchLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          false
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
         * Static representation of the {@link covRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COV_REF: fieldBuilder.buildEnumField('CovRef', PurchCovRef, true),
        /**
         * Static representation of the {@link itemRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ItemRouteId',
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
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchPrice',
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
         * Static representation of the {@link origStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OrigStateId',
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
         * Static representation of the {@link reqAttention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_ATTENTION: fieldBuilder.buildEdmTypeField(
          'ReqAttention',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrDropShipStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DROP_SHIP_STATUS: fieldBuilder.buildEnumField(
          'MCRDropShipStatus',
          McrDropShipStatus,
          true
        ),
        /**
         * Static representation of the {@link tamItemVendRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_ITEM_VEND_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TAMItemVendRebateGroupId',
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
         * Static representation of the {@link retailLineNumEx1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LINE_NUM_EX_1: fieldBuilder.buildEdmTypeField(
          'RetailLineNumEx1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_GROUP: fieldBuilder.buildEdmTypeField(
          'VendGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interCompanyOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_ORIGIN: fieldBuilder.buildEnumField(
          'InterCompanyOrigin',
          InterCompanyOrigin,
          true
        ),
        /**
         * Static representation of the {@link budgetReservationLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'BudgetReservationLine_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shippingDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ShippingDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pdsCwInventReceivedNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_INVENT_RECEIVED_NOW: fieldBuilder.buildEdmTypeField(
          'PdsCWInventReceivedNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wfDeliveryDueState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WF_DELIVERY_DUE_STATE: fieldBuilder.buildEnumField(
          'WfDeliveryDueState',
          TradeWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link wfInvReceivedState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WF_INV_RECEIVED_STATE: fieldBuilder.buildEnumField(
          'WfInvReceivedState',
          TradeWorkflowState,
          true
        ),
        /**
         * Static representation of the {@link systemEntryChangePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_ENTRY_CHANGE_POLICY: fieldBuilder.buildEdmTypeField(
          'SystemEntryChangePolicy',
          'Edm.Int64',
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
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createFixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_FIXED_ASSET: fieldBuilder.buildEnumField(
          'CreateFixedAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assetTransTypePurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANS_TYPE_PURCH: fieldBuilder.buildEnumField(
          'AssetTransTypePurch',
          AssetTransTypePurch,
          true
        ),
        /**
         * Static representation of the {@link pdsCwRemainInventPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_REMAIN_INVENT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'PdsCWRemainInventPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainPurchPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_PURCH_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RemainPurchPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link matchingAgreementLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_AGREEMENT_LINE: fieldBuilder.buildEdmTypeField(
          'MatchingAgreementLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link rboPackageLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_PACKAGE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'RBOPackageLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionValuesJson',
          'Edm.String',
          true
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
         * Static representation of the {@link workflowState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATE: fieldBuilder.buildEnumField(
          'WorkflowState',
          TradeWorkflowState,
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
         * Static representation of the {@link remainder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINDER: fieldBuilder.buildEdmTypeField(
          'Remainder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwRemainInventFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_REMAIN_INVENT_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'PdsCWRemainInventFinancial',
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
         * Static representation of the {@link purchReceivedNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_RECEIVED_NOW: fieldBuilder.buildEdmTypeField(
          'PurchReceivedNow',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link requester} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTER: fieldBuilder.buildEdmTypeField(
          'Requester',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mcrOrderLine2PriceHistoryRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_ORDER_LINE_2_PRICE_HISTORY_REF: fieldBuilder.buildEdmTypeField(
          'MCROrderLine2PriceHistoryRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ServiceAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEnumField('IsDeleted', NoYes, true),
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link complete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE: fieldBuilder.buildEnumField('Complete', NoYes, true),
        /**
         * Static representation of the {@link mcrDropShipComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DROP_SHIP_COMMENT: fieldBuilder.buildEdmTypeField(
          'MCRDropShipComment',
          'Edm.String',
          true
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DATE: fieldBuilder.buildEdmTypeField(
          'ServiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
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
         * Static representation of the {@link qtyOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_ORDERED: fieldBuilder.buildEdmTypeField(
          'QtyOrdered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link depreciationStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_START_DATE: fieldBuilder.buildEdmTypeField(
          'DepreciationStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isInvoiceMatched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVOICE_MATCHED: fieldBuilder.buildEnumField(
          'IsInvoiceMatched',
          NoYes,
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
         * Static representation of the {@link shippingDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ShippingDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tax1099RecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_REC_ID: fieldBuilder.buildEdmTypeField(
          'Tax1099RecId',
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
          true
        ),
        /**
         * Static representation of the {@link manualEntryChangepolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_ENTRY_CHANGEPOLICY: fieldBuilder.buildEdmTypeField(
          'ManualEntryChangepolicy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link eximPortsIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIM_PORTS_IN: fieldBuilder.buildEdmTypeField(
          'EximPorts_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isAddedByChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADDED_BY_CHANNEL: fieldBuilder.buildEnumField(
          'IsAddedByChannel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link remainInventFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_INVENT_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'RemainInventFinancial',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REF: fieldBuilder.buildEdmTypeField(
          'CustomerRef',
          'Edm.String',
          true
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
         * Static representation of the {@link creditedVendInvoiceTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITED_VEND_INVOICE_TRANS: fieldBuilder.buildEdmTypeField(
          'CreditedVendInvoiceTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchReqId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_ID: fieldBuilder.buildEdmTypeField(
          'PurchReqId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_WORKER: fieldBuilder.buildEdmTypeField(
          'ProjWorker',
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
         * Static representation of the {@link overDeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'OverDeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link confirmedTaxWriteCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_TAX_WRITE_CODE: fieldBuilder.buildEdmTypeField(
          'ConfirmedTaxWriteCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODIFIED: fieldBuilder.buildEnumField('IsModified', NoYes, true),
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
         * Static representation of the {@link custPurchaseOrderFormNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PURCHASE_ORDER_FORM_NUM: fieldBuilder.buildEdmTypeField(
          'CustPurchaseOrderFormNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED: fieldBuilder.buildEnumField('Blocked', NoYes, true),
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
         * Static representation of the {@link discAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_STATUS: fieldBuilder.buildEnumField(
          'ReturnStatus',
          ReturnStatusLine,
          true
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
         * Static representation of the {@link countyOrigDest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIG_DEST: fieldBuilder.buildEdmTypeField(
          'CountyOrigDest',
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
         * Static representation of the {@link assetBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'AssetBookId',
          'Edm.String',
          true
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
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
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
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link mcrDropShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_DROP_SHIPMENT: fieldBuilder.buildEnumField(
          'MCRDropShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPwp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PWP: fieldBuilder.buildEnumField('IsPwp', NoYes, true),
        /**
         * Static representation of the {@link retailTempValueEx2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TEMP_VALUE_EX_2: fieldBuilder.buildEdmTypeField(
          'RetailTempValueEx2',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link statProcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_PROC_ID: fieldBuilder.buildEdmTypeField(
          'StatProcId',
          'Edm.String',
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
         * Static representation of the {@link purchMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_MARKUP: fieldBuilder.buildEdmTypeField(
          'PurchMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link confirmedTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ConfirmedTaxAmount',
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
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PlanReference',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
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
         * Static representation of the {@link scrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP: fieldBuilder.buildEnumField('Scrap', NoYes, true),
        /**
         * Static representation of the {@link inventReceivedNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_RECEIVED_NOW: fieldBuilder.buildEdmTypeField(
          'InventReceivedNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link inventInvoiceNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_INVOICE_NOW: fieldBuilder.buildEdmTypeField(
          'InventInvoiceNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailPackageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'RetailPackageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BOM_ID: fieldBuilder.buildEdmTypeField(
          'ItemBOMId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
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
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
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
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link confirmedDlv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_DLV: fieldBuilder.buildEdmTypeField(
          'ConfirmedDlv',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link editableInWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDITABLE_IN_WORKFLOW: fieldBuilder.buildEnumField(
          'EditableInWorkflow',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchSupplierAuxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_SUPPLIER_AUX_ID: fieldBuilder.buildEdmTypeField(
          'PurchSupplierAuxId',
          'Edm.String',
          true
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.Int64',
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
         * Static representation of the {@link operationTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE_MX: fieldBuilder.buildEnumField(
          'OperationType_MX',
          VendorOperationTypeMx,
          true
        ),
        /**
         * Static representation of the {@link statTriangularDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_TRIANGULAR_DEAL: fieldBuilder.buildEnumField(
          'StatTriangularDeal',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementSkipAutoLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_SKIP_AUTO_LINK: fieldBuilder.buildEnumField(
          'AgreementSkipAutoLink',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link psaTotalRetainAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_TOTAL_RETAIN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PSATotalRetainAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reqPlanIdSched} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_PLAN_ID_SCHED: fieldBuilder.buildEdmTypeField(
          'ReqPlanIdSched',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eximProductGroupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIM_PRODUCT_GROUP_IN: fieldBuilder.buildEdmTypeField(
          'EximProductGroup_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cfopTableBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_TABLE_BR: fieldBuilder.buildEdmTypeField(
          'CFOPTable_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link variantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'VariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underDeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_DELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'UnderDeliveryPct',
          'Edm.Decimal',
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
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projSalesUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ProjSalesUnitId',
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link purchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_STATUS: fieldBuilder.buildEnumField(
          'PurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link psaRetainScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RETAIN_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'PSARetainScheduleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manualModifiedField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_MODIFIED_FIELD: fieldBuilder.buildEdmTypeField(
          'ManualModifiedField',
          'Edm.Int32',
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
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
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
         * Static representation of the {@link itemRefType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REF_TYPE: fieldBuilder.buildEnumField(
          'ItemRefType',
          InventRefType,
          true
        ),
        /**
         * Static representation of the {@link pdsCalculationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CALCULATION_ID: fieldBuilder.buildEdmTypeField(
          'PDSCalculationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gsthstTaxTypeCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTHST_TAX_TYPE_CA: fieldBuilder.buildEnumField(
          'GSTHSTTaxType_CA',
          GsthstTaxTypeCa,
          true
        ),
        /**
         * Static representation of the {@link remainInventPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_INVENT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RemainInventPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdBaseCurTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_BASE_CUR_TH: fieldBuilder.buildEdmTypeField(
          'TaxWithholdBaseCur_TH',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxServiceCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SERVICE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxServiceCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDeliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'LineDeliveryType',
          LineDeliveryType,
          true
        ),
        /**
         * Static representation of the {@link remainPurchFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_PURCH_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'RemainPurchFinancial',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyOption,
          true
        ),
        /**
         * Static representation of the {@link purchaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_TYPE: fieldBuilder.buildEnumField(
          'PurchaseType',
          PurchaseType,
          true
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
         * Static representation of the {@link isFinalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINALIZED: fieldBuilder.buildEnumField('IsFinalized', NoYes, true),
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
         * Static representation of the {@link purchQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_QTY: fieldBuilder.buildEdmTypeField(
          'PurchQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderLineCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_CREATION_METHOD: fieldBuilder.buildEnumField(
          'PurchaseOrderLineCreationMethod',
          PurchPurchaseOrderCreationMethod,
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
         * Static representation of the {@link barCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_TYPE: fieldBuilder.buildEdmTypeField(
          'BarCodeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemEntrySource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_ENTRY_SOURCE: fieldBuilder.buildEnumField(
          'SystemEntrySource',
          PriceDiscSystemSource,
          true
        ),
        /**
         * Static representation of the {@link purchCommitmentLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_COMMITMENT_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'PurchCommitmentLine_PSN',
          'Edm.Int64',
          false
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
         * Static representation of the {@link purchReqLineRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_LINE_REF_ID: fieldBuilder.buildEdmTypeField(
          'PurchReqLineRefId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchLineBiEntities)
      };
    }

    return this._schema;
  }
}
