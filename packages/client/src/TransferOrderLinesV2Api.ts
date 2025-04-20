/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransferOrderLinesV2 } from './TransferOrderLinesV2';
import { TransferOrderLinesV2RequestBuilder } from './TransferOrderLinesV2RequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { TransferOrderHeadersApi } from './TransferOrderHeadersApi';
import { NoYes } from './NoYes';
import { InventTransferRemainStatus } from './InventTransferRemainStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { WhsOutboundShipmentPolicy } from './WhsOutboundShipmentPolicy';
import { PriceTypeIn } from './PriceTypeIn';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TransferOrderLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransferOrderLinesV2<DeSerializersT>, DeSerializersT>
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
  ): TransferOrderLinesV2Api<DeSerializersT> {
    return new TransferOrderLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TransferOrderLinesV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transferOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_HEADER: OneToOneLink<
      TransferOrderLinesV2<DeSerializersT>,
      DeSerializersT,
      TransferOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      TransferOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      TRANSFER_ORDER_HEADER: new OneToOneLink(
        'TransferOrderHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TransferOrderLinesV2;

  requestBuilder(): TransferOrderLinesV2RequestBuilder<DeSerializersT> {
    return new TransferOrderLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransferOrderLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransferOrderLinesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransferOrderLinesV2<DeSerializersT>,
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
    typeof TransferOrderLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransferOrderLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_SPECIAL_MOVEMENT_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOWED_UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_PRODUCT_RECEIVING_CROSS_DOCK_PRODUCTS: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_STATUS: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      InventTransferRemainStatus,
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAPPED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGIN_STATE_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_COMMODITY_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE_RECEIPT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE_RECEIPT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE_SHIPMENT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAPPED_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_FEFO_DATE_CONTROL: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_COST_AMOUNT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTRASTAT_STATISTICAL_VALUE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_INVENT_PROFILE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_SHIPPED_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX_SHIPMENT: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAINING_RECEIVED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGIN_COUNTY_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP_INVENTORY_LOT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE_SHIPMENT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX_RECEIPT: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_PROMISING_METHOD: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    ALLOWED_OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_POLICY: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentPolicy,
      true,
      true
    >;
    ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIVING_TRANSIT_INVENTORY_LOT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_SHIPPED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTOMATICALLY_RESERVED: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ITEM_INVENT_PROFILE_TO: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_TRANSIT_INVENTORY_LOT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_RECEIVED_QUANTITY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSESSABLE_VALUE_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_RETENTION_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVNT_COST_PRICE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_TYPE: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      PriceTypeIn,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETENTION: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_PRICE_TYPE: EnumField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      PriceTypeIn,
      true,
      true
    >;
    MAXIMUM_RETAIL_PRICE: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_COST_PRICE_CALCULATED: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      TransferOrderLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      TransferOrderLinesV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transferOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_HEADER: OneToOneLink<
      TransferOrderLinesV2<DeSerializersT>,
      DeSerializersT,
      TransferOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransferOrderLinesV2<DeSerializers>>;
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
         * Static representation of the {@link transferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransferOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intrastatSpecialMovementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_SPECIAL_MOVEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatSpecialMovementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link atpTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowedUnderdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedUnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link willProductReceivingCrossDockProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PRODUCT_RECEIVING_CROSS_DOCK_PRODUCTS: fieldBuilder.buildEnumField(
          'WillProductReceivingCrossDockProducts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PORT_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TransferQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_STATUS: fieldBuilder.buildEnumField(
          'LineStatus',
          InventTransferRemainStatus,
          true
        ),
        /**
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrappedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAPPED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScrappedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OriginStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCodeReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE_RECEIPT: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCodeReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'ReceivingLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link atpBackwardDemandTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPBackwardDemandTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link requestedReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCodeReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE_RECEIPT: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCodeReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroupCodeShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCodeShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ShippingLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrappedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScrappedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overrideFefoDateControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_FEFO_DATE_CONTROL: fieldBuilder.buildEnumField(
          'OverrideFEFODateControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intrastatCostAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IntrastatCostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link atpDelayedSupplyOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_DELAYED_SUPPLY_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPDelayedSupplyOffsetDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link intrastatStatisticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICAL_VALUE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemInventProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_INVENT_PROFILE: fieldBuilder.buildEdmTypeField(
          'ItemInventProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ShippingInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingShippedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_SHIPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingShippedQuantity',
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
         * Static representation of the {@link remainingReceivedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_RECEIVED_CATCH_WEIGHT_QUANTITY:
          fieldBuilder.buildEdmTypeField(
            'RemainingReceivedCatchWeightQuantity',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link originCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'OriginCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatTransportModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_TRANSPORT_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatTransportModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrapInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ScrapInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxItemGroupCodeShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCodeShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transferCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TransferCatchWeightQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link requestedShippingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_SHIPPING_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedShippingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link originCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OriginCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferOrderPromisingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_PROMISING_METHOD: fieldBuilder.buildEnumField(
          'TransferOrderPromisingMethod',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link allowedOverdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllowedOverdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outboundShipmentPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_POLICY: fieldBuilder.buildEnumField(
          'OutboundShipmentPolicy',
          WhsOutboundShipmentPolicy,
          true
        ),
        /**
         * Static representation of the {@link atpBackwardSupplyTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPBackwardSupplyTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link receivingTransitInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_TRANSIT_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingTransitInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingShippedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_SHIPPED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingShippedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatStatisticsProcedureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICS_PROCEDURE_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatStatisticsProcedureCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutomaticallyReserved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATICALLY_RESERVED: fieldBuilder.buildEnumField(
          'IsAutomaticallyReserved',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAtpIncludingPlannedOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATP_INCLUDING_PLANNED_ORDERS: fieldBuilder.buildEdmTypeField(
          'IsATPIncludingPlannedOrders',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link itemInventProfileTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_INVENT_PROFILE_TO: fieldBuilder.buildEdmTypeField(
          'ItemInventProfileTo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingTransitInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_TRANSIT_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ShippingTransitInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingReceivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingReceivedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link atpDelayedDemandOffsetDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_DELAYED_DEMAND_OFFSET_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPDelayedDemandOffsetDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link assessableValueTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AssessableValueTransactionCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatRetentionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_RETENTION_CODE: fieldBuilder.buildEdmTypeField(
          'VATRetentionCode',
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
         * Static representation of the {@link invntCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVNT_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'InvntCostPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TYPE: fieldBuilder.buildEnumField('PriceType', PriceTypeIn, true),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link retention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION: fieldBuilder.buildEdmTypeField(
          'Retention',
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
         * Static representation of the {@link vatPriceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_PRICE_TYPE: fieldBuilder.buildEnumField(
          'VATPriceType',
          PriceTypeIn,
          true
        ),
        /**
         * Static representation of the {@link maximumRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventCostPriceCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_COST_PRICE_CALCULATED: fieldBuilder.buildEdmTypeField(
          'InventCostPriceCalculated',
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
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransferOrderLinesV2)
      };
    }

    return this._schema;
  }
}
