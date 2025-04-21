/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransferOrderHeaders } from './TransferOrderHeaders';
import { TransferOrderHeadersRequestBuilder } from './TransferOrderHeadersRequestBuilder';
import { TransferOrderLinesV2Api } from './TransferOrderLinesV2Api';
import { TransferOrderLinesApi } from './TransferOrderLinesApi';
import { PlannedOrdersApi } from './PlannedOrdersApi';
import { NoYes } from './NoYes';
import { InventTransferStatus } from './InventTransferStatus';
import { Timezone } from './Timezone';
import { FreightSlipType } from './FreightSlipType';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TransferOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransferOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): TransferOrderHeadersApi<DeSerializersT> {
    return new TransferOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link transferOrderLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_LINE_V_2: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransferOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_LINE: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransferOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TransferOrderLinesV2Api<DeSerializersT>,
      TransferOrderLinesApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TRANSFER_ORDER_LINE_V_2: new OneToManyLink(
        'TransferOrderLineV2',
        this,
        linkedApis[0]
      ),
      TRANSFER_ORDER_LINE: new OneToManyLink(
        'TransferOrderLine',
        this,
        linkedApis[1]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = TransferOrderHeaders;

  requestBuilder(): TransferOrderHeadersRequestBuilder<DeSerializersT> {
    return new TransferOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransferOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransferOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransferOrderHeaders<DeSerializersT>,
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
    typeof TransferOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransferOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTRASTAT_SPECIAL_MOVEMENT_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTRASTAT_PORT_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_FREIGHT_ZONE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_STATE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_STREET: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SHIPPING_ADDRESS_PRIVATE: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIVING_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_POST_BOX: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_LINES_AUTOMATICALLY_RESERVED_BY_DEFAULT: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_LATITUDE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_STATUS: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      InventTransferStatus,
      true,
      true
    >;
    SHIPPING_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_BACKWARD_DEMAND_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUESTED_RECEIPT_DATE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_RECEIVING_ADDRESS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECEIVING_ADDRESS_PRIVATE: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIVING_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_FEFO_DATE_CONTROL: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_TRANSACTION_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_SHIPPING_ADDRESS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_DELAYED_SUPPLY_OFFSET_DAYS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECEIVING_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_CITY: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_LATITUDE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_TRANSPORT_MODE_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_TIME_ZONE: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    SHIPPING_ADDRESS_STREET: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_CFDI_PACKING_SLIP: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_MODE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_POST_BOX: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_NAME: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_SHIPPING_DATE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_FREIGHT_COMPANY: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      FreightSlipType,
      true,
      true
    >;
    SHIPPING_ADDRESS_STATE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_PROMISING_METHOD: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    SHIPPING_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_BACKWARD_SUPPLY_TIME_FENCE_DAYS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_CITY: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_SERVICE_GROUP_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_TIME_ZONE: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    INTRASTAT_STATISTICS_PROCEDURE_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSIT_WAREHOUSE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ATP_INCLUDING_PLANNED_ORDERS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SHIPPING_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATP_DELAYED_DEMAND_OFFSET_DAYS: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHIPPING_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_ADDRESS_NAME: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ORDER_IS_ENHANCED_STOCK_TRANSFER: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFER_ORDER_STOCK_TRANSFER_PRICE_TYPE: EnumField<
      TransferOrderHeaders<DeSerializers>,
      DeSerializersT,
      PriceTypeIn,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferOrderLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_LINE_V_2: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransferOrderLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link transferOrderLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_LINE: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      TransferOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      TransferOrderHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransferOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link intrastatPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PORT_ID: fieldBuilder.buildEdmTypeField(
          'IntrastatPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingFreightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'ShippingFreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceivingContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isShippingAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsShippingAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receivingAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ShippingAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areLinesAutomaticallyReservedByDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_LINES_AUTOMATICALLY_RESERVED_BY_DEFAULT:
          fieldBuilder.buildEnumField(
            'AreLinesAutomaticallyReservedByDefault',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ShippingAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_STATUS: fieldBuilder.buildEnumField(
          'TransferOrderStatus',
          InventTransferStatus,
          true
        ),
        /**
         * Static representation of the {@link shippingBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ShippingBuildingCompliment',
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
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedReceivingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_RECEIVING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedReceivingAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'ReceivingBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReceivingAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsReceivingAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receivingAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCountryRegionId',
          'Edm.String',
          true
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
         * Static representation of the {@link formattedShippingAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_SHIPPING_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedShippingAddress',
          'Edm.String',
          true
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
         * Static representation of the {@link receivingAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'ReceivingAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link shippingAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressLatitude',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link shippingAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'ShippingAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link shippingAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createCfdiPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_CFDI_PACKING_SLIP: fieldBuilder.buildEnumField(
          'CreateCFDIPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTermsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryTermsCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_MODE_ID: fieldBuilder.buildEdmTypeField(
          'TransportationModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ShippingAddressName',
          'Edm.String',
          true
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
         * Static representation of the {@link shippingFreightCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_FREIGHT_COMPANY: fieldBuilder.buildEnumField(
          'ShippingFreightCompany',
          FreightSlipType,
          true
        ),
        /**
         * Static representation of the {@link shippingAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'ShippingAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressStreetNumber',
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
         * Static representation of the {@link shippingAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'ShippingAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressDescription',
          'Edm.String',
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
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ShippingAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'ReceivingAddressTimeZone',
          Timezone,
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
         * Static representation of the {@link transitWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSIT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'TransitWarehouseId',
          'Edm.String',
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
         * Static representation of the {@link shippingAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ShippingAddressZipCode',
          'Edm.String',
          true
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
         * Static representation of the {@link shippingAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'ShippingAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ReceivingAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'ShippingAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link transferOrderIsEnhancedStockTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_IS_ENHANCED_STOCK_TRANSFER: fieldBuilder.buildEnumField(
          'TransferOrderIsEnhancedStockTransfer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transferOrderStockTransferPriceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_STOCK_TRANSFER_PRICE_TYPE: fieldBuilder.buildEnumField(
          'TransferOrderStockTransferPriceType',
          PriceTypeIn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransferOrderHeaders)
      };
    }

    return this._schema;
  }
}
