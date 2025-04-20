/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderLineV2ExistAddrReadOnly } from './PurchaseOrderLineV2ExistAddrReadOnly';
import { PurchaseOrderLineV2ExistAddrReadOnlyRequestBuilder } from './PurchaseOrderLineV2ExistAddrReadOnlyRequestBuilder';
import { TradeLineDlvType } from './TradeLineDlvType';
import { PurchCovRef } from './PurchCovRef';
import { McrDropShipStatus } from './McrDropShipStatus';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { TradeWorkflowState } from './TradeWorkflowState';
import { NoYes } from './NoYes';
import { AssetTransTypePurch } from './AssetTransTypePurch';
import { ReturnStatusLine } from './ReturnStatusLine';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderLineV2ExistAddrReadOnlyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializersT>,
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
  ): PurchaseOrderLineV2ExistAddrReadOnlyApi<DeSerializersT> {
    return new PurchaseOrderLineV2ExistAddrReadOnlyApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchaseOrderLineV2ExistAddrReadOnly;

  requestBuilder(): PurchaseOrderLineV2ExistAddrReadOnlyRequestBuilder<DeSerializersT> {
    return new PurchaseOrderLineV2ExistAddrReadOnlyRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderLineV2ExistAddrReadOnly<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderLineV2ExistAddrReadOnly<DeSerializersT>,
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
    typeof PurchaseOrderLineV2ExistAddrReadOnly,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderLineV2ExistAddrReadOnly,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_VALID_FROM: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_TYPE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      TradeLineDlvType,
      true,
      true
    >;
    COV_REF: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PurchCovRef,
      true,
      true
    >;
    ITEM_ROUTE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISC_PERCENT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_ATTENTION: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_DROP_SHIP_STATUS: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      McrDropShipStatus,
      true,
      true
    >;
    TAM_ITEM_VEND_REBATE_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_LINE_NUM_EX_1: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_GROUP: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGIN: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      InterCompanyOrigin,
      true,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PDS_CW_INVENT_RECEIVED_NOW: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WF_DELIVERY_DUE_STATE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    WF_INV_RECEIVED_STATE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    SKIP_CREATE_MARKUP: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_FIXED_ASSET: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_TRANS_TYPE_PURCH: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      AssetTransTypePurch,
      true,
      true
    >;
    PDS_CW_REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN_PURCH_PHYSICAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBO_PACKAGE_LINE_NUM: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_STATE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      TradeWorkflowState,
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINDER: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_RECEIVED_NOW: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_PO_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_DROP_SHIP_COMMENT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DATE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QTY_ORDERED: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPRECIATION_START_DATE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INVOICE_MATCHED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKED_WHS_LINE: EdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    IS_ADDED_BY_CHANNEL: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_REQ_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_TAX_WRITE_CODE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_DELIVERY_PCT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MODIFIED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_PURCHASE_ORDER_FORM_NUM: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_SALES_CURRENCY_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_OSO_SOURCING_INVENT_SITE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISC_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_STATUS: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      ReturnStatusLine,
      true,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_BOOK_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_DROP_SHIPMENT: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PWP: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_TEMP_VALUE_EX_2: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_CALENDAR_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MARKUP: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_TAX_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_UPDATE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      InterCompanySkipUpdate,
      true,
      true
    >;
    LINE_HEADER: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    INVENT_RECEIVED_NOW: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_INVOICE_NOW: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_PACKAGE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SKIP_DELIVERY_SCHEDULE_UPDATE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_BOM_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETURN_ACTION_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONFIRMED_DLV: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDITABLE_IN_WORKFLOW: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_SUPPLIER_AUX_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_PRICE_DISC_CALC: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION_TYPE_MX: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      VendorOperationTypeMx,
      true,
      true
    >;
    STAT_TRIANGULAR_DEAL: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_SKIP_AUTO_LINK: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERCOMPANY_OSO_SOURCING_INVENT_LOCATION_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_TOTAL_RETAIN_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQ_PLAN_ID_SCHED: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDER_DELIVERY_PCT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_SALES_UNIT_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTIC_VALUE_LT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_STATUS: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    PSA_RETAIN_SCHEDULE_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUAL_MODIFIED_FIELD: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_REF_TYPE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    PDS_CALCULATION_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GSTHST_TAX_TYPE_CA: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      GsthstTaxTypeCa,
      true,
      true
    >;
    REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_WITHHOLD_BASE_CUR_TH: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DELIVERY_TYPE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      LineDeliveryType,
      true,
      true
    >;
    REMAIN_PURCH_FINANCIAL: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MATCHING_POLICY: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyOption,
      true,
      true
    >;
    PURCHASE_TYPE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PurchaseType,
      true,
      true
    >;
    TAX_WITHHOLD_GROUP_TH: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FINALIZED: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_QTY: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_CREATION_METHOD: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PurchPurchaseOrderCreationMethod,
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE_TYPE: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_ENTRY_SOURCE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      PriceDiscSystemSource,
      true,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYNC_INTERCOMPANY_SALES_LINE: EnumField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_REQ_LINE_REF_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    FORMATTED_DELIVERY_ADDRESS: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchaseOrderLineV2ExistAddrReadOnly<DeSerializers>>;
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
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'DeliveryValidFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link skipCreateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_MARKUP: fieldBuilder.buildEnumField(
          'SkipCreateMarkup',
          NoYes,
          true
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
         * Static representation of the {@link qtyOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_ORDERED: fieldBuilder.buildEdmTypeField(
          'QtyOrdered',
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
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
         * Static representation of the {@link shippingDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ShippingDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link packedWhsLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_WHS_LINE: fieldBuilder.buildEdmTypeField(
          'PackedWHSLine',
          'Edm.Binary',
          true
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
         * Static representation of the {@link purchReqId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_ID: fieldBuilder.buildEdmTypeField(
          'PurchReqId',
          'Edm.String',
          true
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
         * Static representation of the {@link overDeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'OverDeliveryPct',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link intercompanyOsoSourcingInventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_OSO_SOURCING_INVENT_SITE_ID:
          fieldBuilder.buildEdmTypeField(
            'IntercompanyOSOSourcingInventSiteId',
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
         * Static representation of the {@link shipCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'ShipCalendarId',
          'Edm.String',
          true
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
         * Static representation of the {@link skipUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_UPDATE: fieldBuilder.buildEnumField(
          'SkipUpdate',
          InterCompanySkipUpdate,
          true
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
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP: fieldBuilder.buildEnumField('Scrap', NoYes, true),
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
         * Static representation of the {@link skipDeliveryScheduleUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_DELIVERY_SCHEDULE_UPDATE: fieldBuilder.buildEnumField(
          'SkipDeliveryScheduleUpdate',
          NoYes,
          true
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
         * Static representation of the {@link skipPriceDiscCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_PRICE_DISC_CALC: fieldBuilder.buildEnumField(
          'SkipPriceDiscCalc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
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
         * Static representation of the {@link intercompanyOsoSourcingInventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_OSO_SOURCING_INVENT_LOCATION_ID:
          fieldBuilder.buildEdmTypeField(
            'IntercompanyOSOSourcingInventLocationId',
            'Edm.String',
            true
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
         * Static representation of the {@link multiLnDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLnDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link syncIntercompanySalesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNC_INTERCOMPANY_SALES_LINE: fieldBuilder.buildEnumField(
          'SyncIntercompanySalesLine',
          NoYes,
          true
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
         * Static representation of the {@link formattedDeliveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELIVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDeliveryAddress',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderLineV2ExistAddrReadOnly)
      };
    }

    return this._schema;
  }
}
