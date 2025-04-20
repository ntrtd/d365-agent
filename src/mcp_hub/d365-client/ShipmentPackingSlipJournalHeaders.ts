/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ShippingCarrierServices,
  ShippingCarrierServicesType
} from './ShippingCarrierServices';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';
import {
  OutboundLoadHeaders,
  OutboundLoadHeadersType
} from './OutboundLoadHeaders';
import { ShippingCarriers, ShippingCarriersType } from './ShippingCarriers';
import {
  OutboundShipmentHeaders,
  OutboundShipmentHeadersType
} from './OutboundShipmentHeaders';
import {
  ShipmentPackingSlipJournalLines,
  ShipmentPackingSlipJournalLinesType
} from './ShipmentPackingSlipJournalLines';

/**
 * This class represents the entity "ShipmentPackingSlipJournalHeaders" of service "d365_metadata".
 */
export class ShipmentPackingSlipJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentPackingSlipJournalHeadersType<T>
{
  /**
   * Technical entity name for ShipmentPackingSlipJournalHeaders.
   */
  static override _entityName = 'ShipmentPackingSlipJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentPackingSlipJournalHeaders entity.
   */
  static _keys = ['dataAreaId', 'ShipmentPackingSlipVersionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Packing Slip Version Number.
   */
  declare shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiver Name.
   * @nullable
   */
  declare receiverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street.
   * @nullable
   */
  declare consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street In Kana.
   * @nullable
   */
  declare receiverStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City.
   * @nullable
   */
  declare consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver County.
   * @nullable
   */
  declare receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Country Region Id.
   * @nullable
   */
  declare consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street Number.
   * @nullable
   */
  declare consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Name.
   * @nullable
   */
  declare consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Zip Code.
   * @nullable
   */
  declare consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Country Region Id.
   * @nullable
   */
  declare receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship From Warehouse Id.
   * @nullable
   */
  declare shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver City.
   * @nullable
   */
  declare receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver State.
   * @nullable
   */
  declare receiverState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Time Zone.
   * @nullable
   */
  declare receiverTimeZone?: Timezone | null;
  /**
   * Consignee Post Box.
   * @nullable
   */
  declare consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street.
   * @nullable
   */
  declare receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee State.
   * @nullable
   */
  declare consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Account Number.
   * @nullable
   */
  declare consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Longitude.
   */
  declare consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipment Packing Slip Number.
   * @nullable
   */
  declare shipmentPackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Zip Code.
   * @nullable
   */
  declare receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee County.
   * @nullable
   */
  declare consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street In Kana.
   * @nullable
   */
  declare consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver District.
   */
  declare receiverDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consignee District.
   * @nullable
   */
  declare consigneeDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street Number.
   * @nullable
   */
  declare receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Latitude.
   */
  declare receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Time Zone.
   * @nullable
   */
  declare consigneeTimeZone?: Timezone | null;
  /**
   * Receiver Longitude.
   */
  declare receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiver Post Box.
   * @nullable
   */
  declare receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Building Complement.
   * @nullable
   */
  declare receiverBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Latitude.
   */
  declare consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Building Complement.
   * @nullable
   */
  declare consigneeBuildingComplement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receiver City In Kana.
   * @nullable
   */
  declare receiverCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City In Kana.
   * @nullable
   */
  declare consigneeCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare shippingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServices} entity.
   */
  declare shippingCarrierService?: ShippingCarrierServices<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;
  /**
   * One-to-one navigation property to the {@link OutboundLoadHeaders} entity.
   */
  declare load?: OutboundLoadHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarriers} entity.
   */
  declare shippingCarrier?: ShippingCarriers<T> | null;
  /**
   * One-to-one navigation property to the {@link OutboundShipmentHeaders} entity.
   */
  declare shipment?: OutboundShipmentHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalLines} entity.
   */
  declare shipmentPackingSlipJournalLines: ShipmentPackingSlipJournalLines<T>[];

  constructor(_entityApi: ShipmentPackingSlipJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentPackingSlipJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipmentPackingSlipVersionNumber: DeserializedType<T, 'Edm.String'>;
  receiverName?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  receiverState?: DeserializedType<T, 'Edm.String'> | null;
  receiverTimeZone?: Timezone | null;
  consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  shipmentPackingSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  receiverDistrict: DeserializedType<T, 'Edm.Int64'>;
  consigneeDistrict?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeTimeZone?: Timezone | null;
  receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  receiverBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiverCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTerms?: DeliveryTermsType<T> | null;
  shippingWarehouse?: WarehousesType<T> | null;
  shippingCarrierService?: ShippingCarrierServicesType<T> | null;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
  load?: OutboundLoadHeadersType<T> | null;
  shippingCarrier?: ShippingCarriersType<T> | null;
  shipment?: OutboundShipmentHeadersType<T> | null;
  shipmentPackingSlipJournalLines: ShipmentPackingSlipJournalLinesType<T>[];
}
