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
import type { InboundShipmentHeadersApi } from './InboundShipmentHeadersApi';
import {
  InboundLoadHeaders,
  InboundLoadHeadersType
} from './InboundLoadHeaders';
import {
  LicensePlateReceivingRegistrationsHistory,
  LicensePlateReceivingRegistrationsHistoryType
} from './LicensePlateReceivingRegistrationsHistory';
import {
  InboundLoadPackingStructures,
  InboundLoadPackingStructuresType
} from './InboundLoadPackingStructures';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';

/**
 * This class represents the entity "InboundShipmentHeaders" of service "d365_metadata".
 */
export class InboundShipmentHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentHeadersType<T>
{
  /**
   * Technical entity name for InboundShipmentHeaders.
   */
  static override _entityName = 'InboundShipmentHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentHeaders entity.
   */
  static _keys = ['dataAreaId', 'ShipmentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Id.
   */
  declare shipmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Address City In Kana.
   * @nullable
   */
  declare vendorAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Address Street.
   * @nullable
   */
  declare vendorAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Address Country Region Id.
   * @nullable
   */
  declare vendorAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Address Street In Kana.
   * @nullable
   */
  declare vendorAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Address Zip Code.
   * @nullable
   */
  declare vendorAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Packing Slip Document Date.
   */
  declare vendorPackingSlipDocumentDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Vendor Address City.
   * @nullable
   */
  declare vendorAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Packing Slip Id.
   * @nullable
   */
  declare vendorPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Address County Id.
   * @nullable
   */
  declare vendorAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Shipment Id.
   * @nullable
   */
  declare vendorShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Address State Id.
   * @nullable
   */
  declare vendorAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Load Id.
   * @nullable
   */
  declare inboundLoadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InboundLoadHeaders} entity.
   */
  declare inboundLoadHeader?: InboundLoadHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link LicensePlateReceivingRegistrationsHistory} entity.
   */
  declare inboundShipmentHeaders: LicensePlateReceivingRegistrationsHistory<T>[];
  /**
   * One-to-many navigation property to the {@link InboundLoadPackingStructures} entity.
   */
  declare shipmentPackingStructures: InboundLoadPackingStructures<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReciptJournalHeaders: ShipmentReceiptJournalHeaders<T>[];

  constructor(_entityApi: InboundShipmentHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipmentId: DeserializedType<T, 'Edm.String'>;
  vendorAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorPackingSlipDocumentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  vendorPackingSlipId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  vendorShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  inboundLoadId?: DeserializedType<T, 'Edm.String'> | null;
  inboundLoadHeader?: InboundLoadHeadersType<T> | null;
  inboundShipmentHeaders: LicensePlateReceivingRegistrationsHistoryType<T>[];
  shipmentPackingStructures: InboundLoadPackingStructuresType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
}
