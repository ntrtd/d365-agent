/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventTransferLineBiEntities } from './InventTransferLineBiEntities';
import { InventTransferLineBiEntitiesRequestBuilder } from './InventTransferLineBiEntitiesRequestBuilder';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { InventTransferRemainStatus } from './InventTransferRemainStatus';
import { NoYes } from './NoYes';
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
export class InventTransferLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventTransferLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventTransferLineBiEntitiesApi<DeSerializersT> {
    return new InventTransferLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventTransferLineBiEntities;

  requestBuilder(): InventTransferLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventTransferLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventTransferLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventTransferLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventTransferLineBiEntities<DeSerializersT>,
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
    typeof InventTransferLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventTransferLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATP_INCL_PLANNED_ORDERS: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    QTY_TRANSFER: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY_SHIP_NOW: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT_RU: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_REPLENISH_REF_REC_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_ITEM_GROUP_SHIPMENT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_APPLY_DEMAND_TIME_FENCE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATP_TIME_FENCE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PDS_CW_QTY_RECEIVE_NOW: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QTY_REMAIN_RECEIVE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HHT_TRANS_DATE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ATP_APPLY_SUPPLY_TIME_FENCE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_GROUP_RECEIPT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE_CONTROL_TYPE: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    ITM_STATUS_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_RECEIVED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY_SCRAPPED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAIN_STATUS: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      InventTransferRemainStatus,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PORT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_SCRAPPED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY_REMAIN_SHIP: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMBINED_TRANSFER_ORDER_LINE_DELIVERY: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_VALUE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID_TRANSIT_TO: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT_RU: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HHT_HANDHELD_USER_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY_RECEIVE_NOW: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX_SHIPMENT: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATP_BACKWARD_SUPPLY_TIME_FENCE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OVER_DELIVERY_PCT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID_TRANSIT_FROM: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_AREA_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INFORMATION_SUBCODE_ID_EX_2: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_SHIPPED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTO_RESERVATION: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QTY_RECEIVED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_RESERVATION_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_BACKWARD_DEMAND_TIME_FENCE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HHT_TRANS_TIME: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRICE_RU: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_QTY_REMAIN_RECEIVE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID_SCRAP: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX_RECEIPT: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_ARRIVAL_GROUP_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_VALUE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKED_EXTENSIONS: EdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TAX_ITEM_GROUP_RECEIPT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_REPLENISH_REF_TABLE_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENT_TRANS_ID_RECEIVE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INFOCODE_ID_EX_2: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_FULFILLMENT_DATE_HU: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QTY_SHIPPED: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_SPEC_MOVE_CZ: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDER_DELIVERY_PCT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_DATE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PDS_CW_QTY_TRANSFER: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_AUTO_OFFSET: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_GROUP_SHIPMENT: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_SHIP_NOW: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_OVERRIDE_FEFO: EnumField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIG_COUNTY_ID: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_QTY_REMAIN_SHIP: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIM_ID_TO_RU: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVE_DATE: OrderableEdmTypeField<
      InventTransferLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InventTransferLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link transferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ID: fieldBuilder.buildEdmTypeField(
          'TransferId',
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
         * Static representation of the {@link atpInclPlannedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_INCL_PLANNED_ORDERS: fieldBuilder.buildEdmTypeField(
          'ATPInclPlannedOrders',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link qtyTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_TRANSFER: fieldBuilder.buildEdmTypeField(
          'QtyTransfer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qtyShipNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SHIP_NOW: fieldBuilder.buildEdmTypeField(
          'QtyShipNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineAmountRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_RU: fieldBuilder.buildEdmTypeField(
          'LineAmount_RU',
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
         * Static representation of the {@link retailReplenishRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_REPLENISH_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RetailReplenishRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxItemGroupShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link atpApplyDemandTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_APPLY_DEMAND_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'ATPApplyDemandTimeFence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link atpTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'ATPTimeFence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQtyReceiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyReceiveNow',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link qtyRemainReceive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_REMAIN_RECEIVE: fieldBuilder.buildEdmTypeField(
          'QtyRemainReceive',
          'Edm.Decimal',
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
         * Static representation of the {@link hhtTransDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HHT_TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'HHTTransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link atpApplySupplyTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_APPLY_SUPPLY_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'ATPApplySupplyTimeFence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxGroupReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_RECEIPT: fieldBuilder.buildEdmTypeField(
          'TaxGroupReceipt',
          'Edm.String',
          true
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
         * Static representation of the {@link itmStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ITMStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwQtyReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_RECEIVED: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyReceived',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qtyScrapped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SCRAPPED: fieldBuilder.buildEdmTypeField(
          'QtyScrapped',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_STATUS: fieldBuilder.buildEnumField(
          'RemainStatus',
          InventTransferRemainStatus,
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
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
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwQtyScrapped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_SCRAPPED: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyScrapped',
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
         * Static representation of the {@link qtyRemainShip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_REMAIN_SHIP: fieldBuilder.buildEdmTypeField(
          'QtyRemainShip',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link combinedTransferOrderLineDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINED_TRANSFER_ORDER_LINE_DELIVERY: fieldBuilder.buildEdmTypeField(
          'CombinedTransferOrderLineDelivery',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_VALUE: fieldBuilder.buildEdmTypeField(
          'AmountValue',
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
         * Static representation of the {@link inventTransIdTransitTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_TRANSIT_TO: fieldBuilder.buildEdmTypeField(
          'InventTransIdTransitTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceUnitRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT_RU: fieldBuilder.buildEdmTypeField(
          'PriceUnit_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hhtHandheldUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HHT_HANDHELD_USER_ID: fieldBuilder.buildEdmTypeField(
          'HHTHandheldUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qtyReceiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'QtyReceiveNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideSalesTaxShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX_SHIPMENT: fieldBuilder.buildEnumField(
          'OverrideSalesTaxShipment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link atpBackwardSupplyTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_BACKWARD_SUPPLY_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'ATPBackwardSupplyTimeFence',
          'Edm.Int32',
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
         * Static representation of the {@link inventTransIdTransitFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_TRANSIT_FROM: fieldBuilder.buildEdmTypeField(
          'InventTransIdTransitFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_AREA_ID: fieldBuilder.buildEdmTypeField(
          'RetailAreaId',
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
         * Static representation of the {@link pdsCwQtyShipped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_SHIPPED: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyShipped',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link autoReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RESERVATION: fieldBuilder.buildEnumField(
          'AutoReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link qtyReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_RECEIVED: fieldBuilder.buildEdmTypeField(
          'QtyReceived',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link itmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_ID: fieldBuilder.buildEdmTypeField('ITMId', 'Edm.String', true),
        /**
         * Static representation of the {@link atpBackwardDemandTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_BACKWARD_DEMAND_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'ATPBackwardDemandTimeFence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hhtTransTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HHT_TRANS_TIME: fieldBuilder.buildEdmTypeField(
          'HHTTransTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priceRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_RU: fieldBuilder.buildEdmTypeField(
          'Price_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQtyRemainReceive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_REMAIN_RECEIVE: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyRemainReceive',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link inventTransIdScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_SCRAP: fieldBuilder.buildEdmTypeField(
          'InventTransIdScrap',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTaxReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX_RECEIPT: fieldBuilder.buildEnumField(
          'OverrideSalesTaxReceipt',
          NoYes,
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
         * Static representation of the {@link itmArrivalGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_ARRIVAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ITMArrivalGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_VALUE: fieldBuilder.buildEdmTypeField(
          'StatisticalValue',
          'Edm.Decimal',
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
         * Static representation of the {@link taxItemGroupReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_RECEIPT: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupReceipt',
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
         * Static representation of the {@link retailReplenishRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_REPLENISH_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RetailReplenishRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventTransIdReceive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID_RECEIVE: fieldBuilder.buildEdmTypeField(
          'InventTransIdReceive',
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
         * Static representation of the {@link intrastatFulfillmentDateHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_FULFILLMENT_DATE_HU: fieldBuilder.buildEdmTypeField(
          'IntrastatFulfillmentDate_HU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link qtyShipped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SHIPPED: fieldBuilder.buildEdmTypeField(
          'QtyShipped',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link intrastatSpecMoveCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SPEC_MOVE_CZ: fieldBuilder.buildEdmTypeField(
          'IntrastatSpecMove_CZ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
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
         * Static representation of the {@link shipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link pdsCwQtyTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_TRANSFER: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyTransfer',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxGroupShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'TaxGroupShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwQtyShipNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_SHIP_NOW: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyShipNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsOverrideFefo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_OVERRIDE_FEFO: fieldBuilder.buildEnumField(
          'PdsOverrideFEFO',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link origCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwQtyRemainShip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY_REMAIN_SHIP: fieldBuilder.buildEdmTypeField(
          'PdsCWQtyRemainShip',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimIdToRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID_TO_RU: fieldBuilder.buildEdmTypeField(
          'InventDimIdTo_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_DATE: fieldBuilder.buildEdmTypeField(
          'ReceiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventTransferLineBiEntities)
      };
    }

    return this._schema;
  }
}
