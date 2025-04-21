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
import type { InboundShipmentOrderHeadersApi } from './InboundShipmentOrderHeadersApi';
import { WhsInboundShipmentType } from './WhsInboundShipmentType';
import { Timezone } from './Timezone';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  InboundShipmentOrderLines,
  InboundShipmentOrderLinesType
} from './InboundShipmentOrderLines';

/**
 * This class represents the entity "InboundShipmentOrderHeaders" of service "d365_metadata".
 */
export class InboundShipmentOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderHeadersType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderHeaders.
   */
  static override _entityName = 'InboundShipmentOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'InboundShipmentOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Number.
   */
  declare inboundShipmentOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Consigner Email.
   * @nullable
   */
  declare consignerEmail?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sender State.
   * @nullable
   */
  declare senderState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Shipment Type.
   * @nullable
   */
  declare inboundShipmentType?: WhsInboundShipmentType | null;
  /**
   * Order Origin.
   * @nullable
   */
  declare orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Name.
   * @nullable
   */
  declare senderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Contact Name.
   * @nullable
   */
  declare consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Post Box.
   * @nullable
   */
  declare senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
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
   * Order Channel.
   * @nullable
   */
  declare orderChannel?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sender Cityin Kana.
   * @nullable
   */
  declare senderCityinKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Planned Receipt Period Start.
   */
  declare plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Name.
   * @nullable
   */
  declare consignerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner City In Kana.
   * @nullable
   */
  declare consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Source System Order Type.
   * @nullable
   */
  declare sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;
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
   * Consigner Telephone.
   * @nullable
   */
  declare consignerTelephone?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sender Building Compliment.
   * @nullable
   */
  declare senderBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Order Number.
   * @nullable
   */
  declare sourceSystemOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street In Kana.
   * @nullable
   */
  declare senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Planned Receipt Period End.
   */
  declare plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Street In Kana.
   * @nullable
   */
  declare consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sender Zip Code.
   * @nullable
   */
  declare senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLines} entity.
   */
  declare inboundShipmentOrderLines: InboundShipmentOrderLines<T>[];

  constructor(_entityApi: InboundShipmentOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderNumber: DeserializedType<T, 'Edm.String'>;
  consignerEmail?: DeserializedType<T, 'Edm.String'> | null;
  consignerState?: DeserializedType<T, 'Edm.String'> | null;
  consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  senderState?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentType?: WhsInboundShipmentType | null;
  orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  senderName?: DeserializedType<T, 'Edm.String'> | null;
  consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  orderChannel?: DeserializedType<T, 'Edm.String'> | null;
  consignerBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  consignerDistrict: DeserializedType<T, 'Edm.Int64'>;
  senderCityinKana?: DeserializedType<T, 'Edm.String'> | null;
  consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerName?: DeserializedType<T, 'Edm.String'> | null;
  consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;
  senderCity?: DeserializedType<T, 'Edm.String'> | null;
  senderDistrict: DeserializedType<T, 'Edm.Int64'>;
  consignerTelephone?: DeserializedType<T, 'Edm.String'> | null;
  consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  senderBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderTimeZone?: Timezone | null;
  senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  consignerTimeZone?: Timezone | null;
  consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  inboundShipmentOrderLines: InboundShipmentOrderLinesType<T>[];
}
