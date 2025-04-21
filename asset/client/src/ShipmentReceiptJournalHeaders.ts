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
import type { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { WhsShipmentJourPostingStatus } from './WhsShipmentJourPostingStatus';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import {
  ShipmentReceiptJournalLines,
  ShipmentReceiptJournalLinesType
} from './ShipmentReceiptJournalLines';
import { DeliveryTerms, DeliveryTermsType } from './DeliveryTerms';
import {
  ShippingCarrierServices,
  ShippingCarrierServicesType
} from './ShippingCarrierServices';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';
import {
  InboundLoadHeaders,
  InboundLoadHeadersType
} from './InboundLoadHeaders';
import { Warehouses, WarehousesType } from './Warehouses';
import { ShippingCarriers, ShippingCarriersType } from './ShippingCarriers';
import {
  InboundShipmentHeaders,
  InboundShipmentHeadersType
} from './InboundShipmentHeaders';

/**
 * This class represents the entity "ShipmentReceiptJournalHeaders" of service "d365_metadata".
 */
export class ShipmentReceiptJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShipmentReceiptJournalHeadersType<T>
{
  /**
   * Technical entity name for ShipmentReceiptJournalHeaders.
   */
  static override _entityName = 'ShipmentReceiptJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShipmentReceiptJournalHeaders entity.
   */
  static _keys = ['dataAreaId', 'ShipmentReceiptVersionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Receipt Version Number.
   */
  declare shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Consigner State.
   * @nullable
   */
  declare consignerState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Post Box.
   * @nullable
   */
  declare consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender State.
   * @nullable
   */
  declare senderState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City In Kana.
   * @nullable
   */
  declare senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Name.
   * @nullable
   */
  declare senderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Post Box.
   * @nullable
   */
  declare senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Longitude.
   */
  declare consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Street.
   * @nullable
   */
  declare consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Building Compliment.
   * @nullable
   */
  declare consignerBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consigner District.
   */
  declare consignerDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consigner Country Region Id.
   * @nullable
   */
  declare consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Zip Code.
   * @nullable
   */
  declare consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Account Number.
   * @nullable
   */
  declare consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street Number.
   * @nullable
   */
  declare senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Country Region Id.
   * @nullable
   */
  declare senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Latitude.
   */
  declare consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Completed Packing Slip Id.
   * @nullable
   */
  declare receivingCompletedPackingSlipId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Status.
   * @nullable
   */
  declare postingStatus?: WhsShipmentJourPostingStatus | null;
  /**
   * Consigner Name.
   * @nullable
   */
  declare consignerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner City In Kana.
   * @nullable
   */
  declare consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Receipt Number.
   * @nullable
   */
  declare shipmentReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street.
   * @nullable
   */
  declare senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender County.
   * @nullable
   */
  declare senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City.
   * @nullable
   */
  declare senderCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender District.
   */
  declare senderDistrict: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consigner Street Number.
   * @nullable
   */
  declare consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Longitude.
   */
  declare senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner County.
   * @nullable
   */
  declare consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Building Complement.
   * @nullable
   */
  declare senderBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street In Kana.
   * @nullable
   */
  declare senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Sender Time Zone.
   * @nullable
   */
  declare senderTimeZone?: Timezone | null;
  /**
   * Sender Latitude.
   */
  declare senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Street In Kana.
   * @nullable
   */
  declare consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Time Zone.
   * @nullable
   */
  declare consignerTimeZone?: Timezone | null;
  /**
   * Consigner City.
   * @nullable
   */
  declare consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date.
   */
  declare receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sender Zip Code.
   * @nullable
   */
  declare senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalLines} entity.
   */
  declare shipmentReceiptJournalLines: ShipmentReceiptJournalLines<T>[];
  /**
   * One-to-one navigation property to the {@link DeliveryTerms} entity.
   */
  declare deliveryTerms?: DeliveryTerms<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarrierServices} entity.
   */
  declare shippingCarrierService?: ShippingCarrierServices<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundLoadHeaders} entity.
   */
  declare load?: InboundLoadHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingCarriers} entity.
   */
  declare shippingCarrier?: ShippingCarriers<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentHeaders} entity.
   */
  declare shipment?: InboundShipmentHeaders<T> | null;

  constructor(_entityApi: ShipmentReceiptJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ShipmentReceiptJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipmentReceiptVersionNumber: DeserializedType<T, 'Edm.String'>;
  consignerState?: DeserializedType<T, 'Edm.String'> | null;
  consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  senderState?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderName?: DeserializedType<T, 'Edm.String'> | null;
  senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  consignerBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  consignerDistrict: DeserializedType<T, 'Edm.Int64'>;
  consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  receivingCompletedPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  postingStatus?: WhsShipmentJourPostingStatus | null;
  consignerName?: DeserializedType<T, 'Edm.String'> | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  shipmentReceiptNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  senderCity?: DeserializedType<T, 'Edm.String'> | null;
  senderDistrict: DeserializedType<T, 'Edm.Int64'>;
  consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  senderBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  senderTimeZone?: Timezone | null;
  senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  consignerTimeZone?: Timezone | null;
  consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  shipmentReceiptJournalLines: ShipmentReceiptJournalLinesType<T>[];
  deliveryTerms?: DeliveryTermsType<T> | null;
  shippingCarrierService?: ShippingCarrierServicesType<T> | null;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
  load?: InboundLoadHeadersType<T> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  shippingCarrier?: ShippingCarriersType<T> | null;
  shipment?: InboundShipmentHeadersType<T> | null;
}
