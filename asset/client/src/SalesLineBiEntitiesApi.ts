/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesLineBiEntities } from './SalesLineBiEntities';
import { SalesLineBiEntitiesRequestBuilder } from './SalesLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
import { LineDeliveryType } from './LineDeliveryType';
import { DomExceptionType } from './DomExceptionType';
import { DomProcessStatus } from './DomProcessStatus';
import { InterCompanyOrigin } from './InterCompanyOrigin';
import { SalesServiceLineTypeIt } from './SalesServiceLineTypeIt';
import { SoftReserveBlockLevel } from './SoftReserveBlockLevel';
import { SalesSalesOrderCreationMethod } from './SalesSalesOrderCreationMethod';
import { SalesType } from './SalesType';
import { SalesStatus } from './SalesStatus';
import { PriceDiscSystemSource } from './PriceDiscSystemSource';
import { BundleLineStatus } from './BundleLineStatus';
import { SubBillRevenueSplitAllocationMethod } from './SubBillRevenueSplitAllocationMethod';
import { ItemReservation } from './ItemReservation';
import { ReturnStatusLine } from './ReturnStatusLine';
import { MpsFullRunCtpStatus } from './MpsFullRunCtpStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { BundleLineType } from './BundleLineType';
import { TradeLineDlvType } from './TradeLineDlvType';
import { ShipCarrierDlvType } from './ShipCarrierDlvType';
import { InventRefType } from './InventRefType';
import { SalesSourcingOrigin } from './SalesSourcingOrigin';
import { TradeIntegrationType } from './TradeIntegrationType';
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
export class SalesLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesLineBiEntitiesApi<DeSerializersT> {
    return new SalesLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesLineBiEntities;

  requestBuilder(): SalesLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesLineBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesLineBiEntities<DeSerializersT>,
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
    typeof SalesLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SOFT_RESERVED_EXTERNALLY: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MPS_UPDATE_EXCLUDE_SALES_LINE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONFIRMED_DLV: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    SKIP_UPDATE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      InterCompanySkipUpdate,
      true,
      true
    >;
    PDS_BATCH_ATTRIB_AUTO_RES: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_DELIVERY_SCHEDULE_UPDATE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DELIVERY_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      LineDeliveryType,
      true,
      true
    >;
    INVENTORY_SERVICE_AUTO_OFFSET: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_GTD_ID_RU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ORDER_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_BUNDLE_RATIO: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCING_COMPANY_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOM_EXCEPTION_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      DomExceptionType,
      true,
      true
    >;
    SUB_BILL_TERM_SCHEDULE_LINE_REC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_LINE_REFERENCE_NO: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_INVENT_DELIVER_NOW: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOM_PROCESSED: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      DomProcessStatus,
      true,
      true
    >;
    REV_REC_CONTRACT_START_DATE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PDS_EXCLUDE_FROM_REBATE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_BUNDLE_NET_AMOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMS_DOCUMENT_TYPE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REF: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DLV_TERM: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTER_COMPANY_ORIGIN: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      InterCompanyOrigin,
      true,
      true
    >;
    SAT_UNIT_CODE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE_CREDIT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_OCCURRENCES: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATISTIC_VALUE_LT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_LINE_TYPE_IT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesServiceLineTypeIt,
      true,
      true
    >;
    PACKING_UNIT_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_REVENUE_SPLIT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_PROJ_PROPOSAL_INVENT_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAT_PRODUCT_CODE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERVICE_RESERVATION_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_SAME_LOT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_PARENT_LINE_REC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTRY_REGION_NAME_RU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_IS_TERM_SPLIT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_BUNDLE_PARENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_NAME_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_MATERIAL_TYPE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_CREATE_MARKUP: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_ALLOW_RESERVATION: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOFT_RESERVE_BLOCK_LEVEL: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SoftReserveBlockLevel,
      true,
      true
    >;
    PREPAYMENT_REC_ID_IT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_BY_PARM_ID_IT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_HEADER: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID_RU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_BUNDLE_QTY_ORDERED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_SALES_ORDER_CREATION_METHOD: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesSalesOrderCreationMethod,
      true,
      true
    >;
    CREDIT_NOTE_REASON_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXIM_PORTS_IN: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_PROFILE_RU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OVER_DELIVERY_PCT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SKIP_PRICE_DISC_CALC_IN_BULK_CREATION: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_ENTRY_CHANGE_POLICY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHORDER_FORM_NUM: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_BUNDLE_LINE_DISC: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_CARRIER_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAMPLES_MX: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_TAX_ITEM_GROUP_BR: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_BUNDLE_SALES_PRICE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_REVENUE_SCHEDULE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN_SALES_FINANCIAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_IS_SPLIT_BILLING: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDER_DELIVERY_PCT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BAR_CODE_TYPE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAT_CUSTOMS_QTY_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_ERROR_CORRECTION_METHODS: EdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    MCR_ORDER_LINE_2_PRICE_HISTORY_REF: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesType,
      true,
      true
    >;
    CUST_GROUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_UNIT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_CARRIER_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOM_REC_VERSION: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOM_IGNORE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_MARKUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DLV_MODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTOGENERATED: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_IS_REVENUE_SPLIT_CHILD: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GUP_FREE_ITEM_LINE_REC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_REF_TRANS_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNMENT_MX: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_LINE_NUM: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REV_REC_BUNDLE_SALES_STATUS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    PROJ_FUNDING_SOURCE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYSTEM_ENTRY_SOURCE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      PriceDiscSystemSource,
      true,
      true
    >;
    SOURCING_INVENT_SITE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_DELIVER_NOW: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_DEADLINE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CARRIER_ACCOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_TARIFF_FRACTION_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_CONTRACT_END_DATE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUNDLE_LINE_STATUS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      BundleLineStatus,
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFIER_CUSTOMS_DOCUMENT_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_PROJ_PROPOSAL_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REF_RETURN_INVOICE_TRANS_W: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_CONTRACT_LINE_NUM: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXIM_PRODUCT_GROUP_IN: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAM_REBATE_TRANS_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_DESCRIPTION_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_ALLOCATION_METHOD: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillRevenueSplitAllocationMethod,
      true,
      true
    >;
    REV_REC_BUNDLE_LINE_PERCENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESERVATION: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    PRICE_AGREEMENT_DATE_RU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SKIP_INTERCOMPANY_PURCH_ORDER_ACCOUNTING_DISTRIBUTION: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    E_INVOICE_ACCOUNT_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_ITEM_REBATE_GROUP_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_SAME_LOT_OVERRIDE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_BUNDLE_MAIN_PARENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_POSTAL_ADDRESS: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYNC_PURCH_LINE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_STATUS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      ReturnStatusLine,
      true,
      true
    >;
    DELIVERY_TAX_GROUP_BR: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_CLOSED_DATE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MATCHING_AGREEMENT_LINE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CASE_TAGGING: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MPS_FULL_RUN_CTP_STATUS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      MpsFullRunCtpStatus,
      true,
      true
    >;
    RETURN_ARRIVAL_DATE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_REVENUE_SPLIT_PARENT_AMOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SKIP_PRICE_DISC_CALC_ON_IMPORT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_MARGIN_UPDATED: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CARRIER_NAME: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_STATUS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_DATE_CONTROL_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    PDS_CW_REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KITTING_SKIP_UPDATE_HELPER: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ROUTE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAT_TRIANGULAR_DEAL: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STOCKED_PRODUCT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMS_DOC_NUMBER_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_PRICE_DISC_CALC: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_INVENT_TRANS_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCING_VEND_ACCOUNT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CATEGORY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REV_REC_BUNDLE_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_BUNDLE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUNDLE_LINE_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      BundleLineType,
      true,
      true
    >;
    SCRAP: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeLineDlvType,
      true,
      true
    >;
    IS_FREE_ITEM_LINE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCING_INVENT_LOCATION_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_DLV_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      ShipCarrierDlvType,
      true,
      true
    >;
    AGREEMENT_SKIP_AUTO_LINK: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_REF_TYPE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    PDS_CW_EXPECTED_RET_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAM_REBATE_EXCLUDE_REBATE_MANAGEMENT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOM_PROCESSED_DATE_TIME: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREDIT_NOTE_INTERNAL_REF_PL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MCR_MARGIN_PERCENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SKIP_ASSIGN_INVENT_TRANS_ID: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_REPLACED: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPECTED_RET_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAT_CUSTOM_UNIT_OF_MEASURE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PALLET_TAGGING: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_ENTRY_CHANGEPOLICY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REV_REC_IS_BUNDLE_COMPONENT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_DEFAULTING_SOURCING_VENDOR: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TAGGING: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_DETAIL_LINE_REC_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_BOM_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_BLOCK_QTY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPLETE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROPERTY_NUMBER_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_TH: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_CREATE_INTER_COMPANY_ORDERS: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_DELIVER_NOW: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYNC_INTERCOMPANY_PURCH_LINE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RECEIPT_DATE_CONFIRMED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_FOR_FREE_IT: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCING_ORIGIN: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesSourcingOrigin,
      true,
      true
    >;
    QTY_ORDERED: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOM_ITERATIONS: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_BUNDLE_REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_BUNDLE_REMAIN_SALES_PHYSICAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MPS_EXCLUDE_SALES_LINE: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_TRANS_ID_RETURN: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_SALES_PHYSICAL: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMS_DOC_DATE_MX: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTEGRATION: EnumField<
      SalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      TradeIntegrationType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
          'Edm.String',
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
         * Static representation of the {@link isSoftReservedExternally} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SOFT_RESERVED_EXTERNALLY: fieldBuilder.buildEnumField(
          'IsSoftReservedExternally',
          NoYes,
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
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link mpsUpdateExcludeSalesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPS_UPDATE_EXCLUDE_SALES_LINE: fieldBuilder.buildEnumField(
          'MpsUpdateExcludeSalesLine',
          NoYes,
          true
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
         * Static representation of the {@link packedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'PackedExtensions',
          'Edm.Binary',
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
         * Static representation of the {@link pdsBatchAttribAutoRes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_BATCH_ATTRIB_AUTO_RES: fieldBuilder.buildEnumField(
          'PdsBatchAttribAutoRes',
          NoYes,
          true
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
         * Static representation of the {@link lineDeliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'LineDeliveryType',
          LineDeliveryType,
          true
        ),
        /**
         * Static representation of the {@link inventoryServiceAutoOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_AUTO_OFFSET: fieldBuilder.buildEnumField(
          'InventoryServiceAutoOffset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceGtdIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_GTD_ID_RU: fieldBuilder.buildEdmTypeField(
          'InvoiceGTDId_RU',
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
         * Static representation of the {@link origStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OrigStateId',
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link serviceOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ServiceOrderId',
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
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecBundleRatio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_RATIO: fieldBuilder.buildEdmTypeField(
          'RevRecBundleRatio',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ID: fieldBuilder.buildEdmTypeField('TaxID', 'Edm.Int64', false),
        /**
         * Static representation of the {@link sourcingCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCING_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'SourcingCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link domExceptionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_EXCEPTION_TYPE: fieldBuilder.buildEnumField(
          'DOMExceptionType',
          DomExceptionType,
          true
        ),
        /**
         * Static representation of the {@link subBillTermScheduleLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_TERM_SCHEDULE_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillTermScheduleLineRecId',
          'Edm.Int64',
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
         * Static representation of the {@link orderLineReferenceNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_REFERENCE_NO: fieldBuilder.buildEdmTypeField(
          'OrderLineReference_NO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwInventDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_INVENT_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'PdsCWInventDeliverNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link domProcessed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_PROCESSED: fieldBuilder.buildEnumField(
          'DOMProcessed',
          DomProcessStatus,
          true
        ),
        /**
         * Static representation of the {@link revRecContractStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_START_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pdsExcludeFromRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_EXCLUDE_FROM_REBATE: fieldBuilder.buildEnumField(
          'PdsExcludeFromRebate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecBundleNetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RevRecBundleNetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customsDocumentTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOCUMENT_TYPE_MX: fieldBuilder.buildEdmTypeField(
          'CustomsDocumentType_MX',
          'Edm.String',
          true
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dlvTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_TERM: fieldBuilder.buildEdmTypeField('DlvTerm', 'Edm.String', true),
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
         * Static representation of the {@link satUnitCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_UNIT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATUnitCode_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_CREDIT: fieldBuilder.buildEnumField(
          'UnbilledRevenueCredit',
          NoYes,
          true
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
         * Static representation of the {@link revRecOccurrences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_OCCURRENCES: fieldBuilder.buildEdmTypeField(
          'RevRecOccurrences',
          'Edm.Int32',
          false
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
         * Static representation of the {@link statisticValueLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTIC_VALUE_LT: fieldBuilder.buildEdmTypeField(
          'StatisticValue_LT',
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
         * Static representation of the {@link serviceLineTypeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LINE_TYPE_IT: fieldBuilder.buildEnumField(
          'ServiceLineType_IT',
          SalesServiceLineTypeIt,
          true
        ),
        /**
         * Static representation of the {@link packingUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'PackingUnitQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillRevenueSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT: fieldBuilder.buildEnumField(
          'SubBillRevenueSplit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaProjProposalInventQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_PROJ_PROPOSAL_INVENT_QTY: fieldBuilder.buildEdmTypeField(
          'PSAProjProposalInventQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link satProductCodeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_PRODUCT_CODE_MX: fieldBuilder.buildEdmTypeField(
          'SATProductCode_MX',
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryServiceReservationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_RESERVATION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryServiceReservationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsSameLot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SAME_LOT: fieldBuilder.buildEnumField('PdsSameLot', NoYes, true),
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
         * Static representation of the {@link subBillRevenueSplitParentLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_PARENT_LINE_REC_ID:
          fieldBuilder.buildEdmTypeField(
            'SubBillRevenueSplitParentLineRecId',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link countryRegionNameRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_NAME_RU: fieldBuilder.buildEdmTypeField(
          'CountryRegionName_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillIsTermSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_IS_TERM_SPLIT: fieldBuilder.buildEnumField(
          'SubBillIsTermSplit',
          NoYes,
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
         * Static representation of the {@link revRecBundleParent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_PARENT: fieldBuilder.buildEdmTypeField(
          'RevRecBundleParent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link customsNameMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_NAME_MX: fieldBuilder.buildEdmTypeField(
          'CustomsName_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsMaterialTypeMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_MATERIAL_TYPE_MX: fieldBuilder.buildEdmTypeField(
          'CustomsMaterialType_MX',
          'Edm.String',
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
         * Static representation of the {@link returnAllowReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ALLOW_RESERVATION: fieldBuilder.buildEnumField(
          'ReturnAllowReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link softReserveBlockLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOFT_RESERVE_BLOCK_LEVEL: fieldBuilder.buildEnumField(
          'SoftReserveBlockLevel',
          SoftReserveBlockLevel,
          true
        ),
        /**
         * Static representation of the {@link prepaymentRecIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENT_REC_ID_IT: fieldBuilder.buildEdmTypeField(
          'PrepaymentRecId_IT',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link createdByParmIdIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_PARM_ID_IT: fieldBuilder.buildEdmTypeField(
          'CreatedByParmId_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED: fieldBuilder.buildEnumField('Blocked', NoYes, true),
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
         * Static representation of the {@link lineHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_HEADER: fieldBuilder.buildEdmTypeField(
          'LineHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID_RU: fieldBuilder.buildEdmTypeField(
          'AssetId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecBundleQtyOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_QTY_ORDERED: fieldBuilder.buildEdmTypeField(
          'RevRecBundleQtyOrdered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesSalesOrderCreationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SALES_ORDER_CREATION_METHOD: fieldBuilder.buildEnumField(
          'SalesSalesOrderCreationMethod',
          SalesSalesOrderCreationMethod,
          true
        ),
        /**
         * Static representation of the {@link creditNoteReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CreditNoteReasonCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'RetailVariantId',
          'Edm.String',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
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
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link postingProfileRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_RU: fieldBuilder.buildEdmTypeField(
          'PostingProfile_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
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
         * Static representation of the {@link skipPriceDiscCalcInBulkCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_PRICE_DISC_CALC_IN_BULK_CREATION: fieldBuilder.buildEnumField(
          'SkipPriceDiscCalcInBulkCreation',
          NoYes,
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
         * Static representation of the {@link purchorderFormNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHORDER_FORM_NUM: fieldBuilder.buildEdmTypeField(
          'PurchorderFormNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecBundleLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'RevRecBundleLineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierAccountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link samplesMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAMPLES_MX: fieldBuilder.buildEnumField('Samples_MX', NoYes, true),
        /**
         * Static representation of the {@link deliveryTaxItemGroupBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TAX_ITEM_GROUP_BR: fieldBuilder.buildEdmTypeField(
          'DeliveryTaxItemGroup_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecBundleSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'RevRecBundleSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecRevenueScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_REVENUE_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'RevRecRevenueScheduleID',
          'Edm.String',
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
         * Static representation of the {@link remainSalesFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_SALES_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'RemainSalesFinancial',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillIsSplitBilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_IS_SPLIT_BILLING: fieldBuilder.buildEnumField(
          'SubBillIsSplitBilling',
          NoYes,
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
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link barCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_TYPE: fieldBuilder.buildEdmTypeField(
          'BarCodeType',
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
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
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
         * Static representation of the {@link satCustomsQtyMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_CUSTOMS_QTY_MX: fieldBuilder.buildEdmTypeField(
          'SATCustomsQty_MX',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityErrorCorrectionMethods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ERROR_CORRECTION_METHODS: fieldBuilder.buildEdmTypeField(
          'QuantityErrorCorrectionMethods',
          'Edm.Binary',
          true
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
         * Static representation of the {@link salesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TYPE: fieldBuilder.buildEnumField('SalesType', SalesType, true),
        /**
         * Static representation of the {@link custGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_GROUP: fieldBuilder.buildEdmTypeField(
          'CustGroup',
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
         * Static representation of the {@link packingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_UNIT: fieldBuilder.buildEdmTypeField(
          'PackingUnit',
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
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
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
         * Static representation of the {@link shipCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShipCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link domRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'DOMRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link domIgnore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_IGNORE: fieldBuilder.buildEnumField('DOMIgnore', NoYes, true),
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
         * Static representation of the {@link salesMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MARKUP: fieldBuilder.buildEdmTypeField(
          'SalesMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dlvMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE: fieldBuilder.buildEdmTypeField('DlvMode', 'Edm.String', true),
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
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link subBillIsRevenueSplitChild} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_IS_REVENUE_SPLIT_CHILD: fieldBuilder.buildEnumField(
          'SubBillIsRevenueSplitChild',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link gupFreeItemLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUP_FREE_ITEM_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'GUPFreeItemLineRecId',
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
         * Static representation of the {@link consignmentMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_MX: fieldBuilder.buildEnumField(
          'Consignment_MX',
          NoYes,
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
         * Static representation of the {@link revRecBundleSalesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_SALES_STATUS: fieldBuilder.buildEnumField(
          'RevRecBundleSalesStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link projFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource',
          'Edm.Int64',
          false
        ),
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
         * Static representation of the {@link salesQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QTY: fieldBuilder.buildEdmTypeField(
          'SalesQty',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link sourcingInventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCING_INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'SourcingInventSiteId',
          'Edm.String',
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
         * Static representation of the {@link salesDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'SalesDeliverNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DEADLINE: fieldBuilder.buildEdmTypeField(
          'ReturnDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCarrierAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShipCarrierAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link satTariffFractionMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_TARIFF_FRACTION_MX: fieldBuilder.buildEdmTypeField(
          'SATTariffFraction_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecContractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'RevRecContractEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bundleLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_LINE_STATUS: fieldBuilder.buildEnumField(
          'BundleLineStatus',
          BundleLineStatus,
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
         * Static representation of the {@link identifierCustomsDocumentMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFIER_CUSTOMS_DOCUMENT_MX: fieldBuilder.buildEdmTypeField(
          'IdentifierCustomsDocument_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaProjProposalQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_PROJ_PROPOSAL_QTY: fieldBuilder.buildEdmTypeField(
          'PSAProjProposalQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link refReturnInvoiceTransW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_RETURN_INVOICE_TRANS_W: fieldBuilder.buildEdmTypeField(
          'RefReturnInvoiceTrans_W',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link psaContractLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_CONTRACT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'PSAContractLineNum',
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
         * Static representation of the {@link tamRebateTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'TAMRebateTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialDescriptionMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DESCRIPTION_MX: fieldBuilder.buildEdmTypeField(
          'MaterialDescription_MX',
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
         * Static representation of the {@link subBillRevenueSplitAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'SubBillRevenueSplitAllocationMethod',
          SubBillRevenueSplitAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link revRecBundleLinePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_LINE_PERCENT: fieldBuilder.buildEdmTypeField(
          'RevRecBundleLinePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION: fieldBuilder.buildEnumField(
          'Reservation',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link priceAgreementDateRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_AGREEMENT_DATE_RU: fieldBuilder.buildEdmTypeField(
          'PriceAgreementDate_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link skipIntercompanyPurchOrderAccountingDistribution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_INTERCOMPANY_PURCH_ORDER_ACCOUNTING_DISTRIBUTION:
          fieldBuilder.buildEnumField(
            'SkipIntercompanyPurchOrderAccountingDistribution',
            NoYes,
            true
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
         * Static representation of the {@link pdsItemRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_ITEM_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PdsItemRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsSameLotOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SAME_LOT_OVERRIDE: fieldBuilder.buildEnumField(
          'PdsSameLotOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecBundleMainParent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_MAIN_PARENT: fieldBuilder.buildEdmTypeField(
          'RevRecBundleMainParent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ShipCarrierPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link syncPurchLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNC_PURCH_LINE: fieldBuilder.buildEnumField(
          'SyncPurchLine',
          NoYes,
          true
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
         * Static representation of the {@link deliveryTaxGroupBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TAX_GROUP_BR: fieldBuilder.buildEdmTypeField(
          'DeliveryTaxGroup_BR',
          'Edm.String',
          true
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
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateRequested',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link caseTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_TAGGING: fieldBuilder.buildEnumField('CaseTagging', NoYes, true),
        /**
         * Static representation of the {@link mpsFullRunCtpStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPS_FULL_RUN_CTP_STATUS: fieldBuilder.buildEnumField(
          'MPSFullRunCTPStatus',
          MpsFullRunCtpStatus,
          true
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
         * Static representation of the {@link subBillRevenueSplitParentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_REVENUE_SPLIT_PARENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillRevenueSplitParentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link skipPriceDiscCalcOnImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_PRICE_DISC_CALC_ON_IMPORT: fieldBuilder.buildEnumField(
          'SkipPriceDiscCalcOnImport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mcrMarginUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MARGIN_UPDATED: fieldBuilder.buildEnumField(
          'McrMarginUpdated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipCarrierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_NAME: fieldBuilder.buildEdmTypeField(
          'ShipCarrierName',
          'Edm.String',
          true
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STATUS: fieldBuilder.buildEnumField(
          'SalesStatus',
          SalesStatus,
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
         * Static representation of the {@link deliveryDateControlType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_CONTROL_TYPE: fieldBuilder.buildEnumField(
          'DeliveryDateControlType',
          SalesDeliveryDateControlType,
          true
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
         * Static representation of the {@link kittingSkipUpdateHelper} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KITTING_SKIP_UPDATE_HELPER: fieldBuilder.buildEnumField(
          'KittingSkipUpdateHelper',
          NoYes,
          true
        ),
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
         * Static representation of the {@link statTriangularDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_TRIANGULAR_DEAL: fieldBuilder.buildEnumField(
          'StatTriangularDeal',
          NoYes,
          true
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
         * Static representation of the {@link customsDocNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOC_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'CustomsDocNumber_MX',
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
         * Static representation of the {@link interCompanyInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InterCompanyInventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourcingVendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCING_VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SourcingVendAccount',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link revRecBundleQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_QTY: fieldBuilder.buildEdmTypeField(
          'RevRecBundleQty',
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
         * Static representation of the {@link revRecBundle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE: fieldBuilder.buildEnumField(
          'RevRecBundle',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bundleLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUNDLE_LINE_TYPE: fieldBuilder.buildEnumField(
          'BundleLineType',
          BundleLineType,
          true
        ),
        /**
         * Static representation of the {@link scrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP: fieldBuilder.buildEnumField('Scrap', NoYes, true),
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
         * Static representation of the {@link deliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'DeliveryType',
          TradeLineDlvType,
          true
        ),
        /**
         * Static representation of the {@link isFreeItemLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FREE_ITEM_LINE: fieldBuilder.buildEnumField(
          'IsFreeItemLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourcingInventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCING_INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'SourcingInventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierDlvType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_DLV_TYPE: fieldBuilder.buildEnumField(
          'ShipCarrierDlvType',
          ShipCarrierDlvType,
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
         * Static representation of the {@link inventRefType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_TYPE: fieldBuilder.buildEnumField(
          'InventRefType',
          InventRefType,
          true
        ),
        /**
         * Static representation of the {@link pdsCwExpectedRetQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_EXPECTED_RET_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWExpectedRetQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tamRebateExcludeRebateManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_EXCLUDE_REBATE_MANAGEMENT: fieldBuilder.buildEnumField(
          'TAMRebateExcludeRebateManagement',
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
         * Static representation of the {@link domProcessedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_PROCESSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'DOMProcessedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link creditNoteInternalRefPl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_NOTE_INTERNAL_REF_PL: fieldBuilder.buildEdmTypeField(
          'CreditNoteInternalRef_PL',
          'Edm.Int64',
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
         * Static representation of the {@link mcrMarginPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_MARGIN_PERCENT: fieldBuilder.buildEdmTypeField(
          'McrMarginPercent',
          'Edm.Decimal',
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
         * Static representation of the {@link skipAssignInventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_ASSIGN_INVENT_TRANS_ID: fieldBuilder.buildEnumField(
          'SkipAssignInventTransId',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemReplaced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_REPLACED: fieldBuilder.buildEnumField('ItemReplaced', NoYes, true),
        /**
         * Static representation of the {@link expectedRetQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_RET_QTY: fieldBuilder.buildEdmTypeField(
          'ExpectedRetQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link satCustomUnitOfMeasureMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_CUSTOM_UNIT_OF_MEASURE_MX: fieldBuilder.buildEdmTypeField(
          'SATCustomUnitOfMeasure_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link palletTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PALLET_TAGGING: fieldBuilder.buildEnumField(
          'PalletTagging',
          NoYes,
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
         * Static representation of the {@link revRecIsBundleComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_IS_BUNDLE_COMPONENT: fieldBuilder.buildEnumField(
          'RevRecIsBundleComponent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipDefaultingSourcingVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_DEFAULTING_SOURCING_VENDOR: fieldBuilder.buildEnumField(
          'SkipDefaultingSourcingVendor',
          NoYes,
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
         * Static representation of the {@link itemTagging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TAGGING: fieldBuilder.buildEnumField('ItemTagging', NoYes, true),
        /**
         * Static representation of the {@link subBillDetailLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DETAIL_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillDetailLineRecId',
          'Edm.Int64',
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
         * Static representation of the {@link retailBlockQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_BLOCK_QTY: fieldBuilder.buildEdmTypeField(
          'RetailBlockQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link complete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE: fieldBuilder.buildEnumField('Complete', NoYes, true),
        /**
         * Static representation of the {@link propertyNumberMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_NUMBER_MX: fieldBuilder.buildEdmTypeField(
          'PropertyNumber_MX',
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
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoCreateInterCompanyOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CREATE_INTER_COMPANY_ORDERS: fieldBuilder.buildEnumField(
          'AutoCreateInterCompanyOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'InventDeliverNow',
          'Edm.Decimal',
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
         * Static representation of the {@link syncIntercompanyPurchLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYNC_INTERCOMPANY_PURCH_LINE: fieldBuilder.buildEnumField(
          'SyncIntercompanyPurchLine',
          NoYes,
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
         * Static representation of the {@link receiptDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateConfirmed',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link goodsForFreeIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_FOR_FREE_IT: fieldBuilder.buildEnumField(
          'GoodsForFree_IT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourcingOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCING_ORIGIN: fieldBuilder.buildEnumField(
          'SourcingOrigin',
          SalesSourcingOrigin,
          true
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
         * Static representation of the {@link domIterations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOM_ITERATIONS: fieldBuilder.buildEdmTypeField(
          'DOMIterations',
          'Edm.Int32',
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
         * Static representation of the {@link revRecBundleRemainInventPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_REMAIN_INVENT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RevRecBundleRemainInventPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecBundleRemainSalesPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_BUNDLE_REMAIN_SALES_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RevRecBundleRemainSalesPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mpsExcludeSalesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPS_EXCLUDE_SALES_LINE: fieldBuilder.buildEnumField(
          'MpsExcludeSalesLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
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
         * Static representation of the {@link inventTransIdReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_RETURN: fieldBuilder.buildEdmTypeField(
          'InventTransIdReturn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainSalesPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_SALES_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RemainSalesPhysical',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link customsDocDateMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DOC_DATE_MX: fieldBuilder.buildEdmTypeField(
          'CustomsDocDate_MX',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link isIntegration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTEGRATION: fieldBuilder.buildEnumField(
          'IsIntegration',
          TradeIntegrationType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesLineBiEntities)
      };
    }

    return this._schema;
  }
}
