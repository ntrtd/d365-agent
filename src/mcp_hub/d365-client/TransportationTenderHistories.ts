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
import type { TransportationTenderHistoriesApi } from './TransportationTenderHistoriesApi';
import { TmsTenderStatus } from './TmsTenderStatus';
import {
  TransportationTenders,
  TransportationTendersType
} from './TransportationTenders';

/**
 * This class represents the entity "TransportationTenderHistories" of service "d365_metadata".
 */
export class TransportationTenderHistories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationTenderHistoriesType<T>
{
  /**
   * Technical entity name for TransportationTenderHistories.
   */
  static override _entityName = 'TransportationTenderHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationTenderHistories entity.
   */
  static _keys = [
    'dataAreaId',
    'TransportationTenderId',
    'TransportationTenderHistoryEntryNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Tender Id.
   */
  declare transportationTenderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Tender History Entry Number.
   */
  declare transportationTenderHistoryEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Transportation Distance Miles.
   */
  declare transportationDistanceMiles: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Rate.
   */
  declare requestedRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Gross Weight.
   */
  declare calculatedGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tender Status.
   * @nullable
   */
  declare tenderStatus?: TmsTenderStatus | null;
  /**
   * Requested Pickup Date Time.
   */
  declare requestedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmed Pickup Date Time.
   */
  declare confirmedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Confirmed Rate.
   */
  declare confirmedRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transportation Equipment Code.
   * @nullable
   */
  declare transportationEquipmentCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link TransportationTenders} entity.
   */
  declare tmsTransportationTender?: TransportationTenders<T> | null;

  constructor(_entityApi: TransportationTenderHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationTenderHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transportationTenderId: DeserializedType<T, 'Edm.String'>;
  transportationTenderHistoryEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  transportationDistanceMiles: DeserializedType<T, 'Edm.Decimal'>;
  requestedRate: DeserializedType<T, 'Edm.Decimal'>;
  calculatedGrossWeight: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  tenderStatus?: TmsTenderStatus | null;
  requestedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmedPickupDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  confirmedRate: DeserializedType<T, 'Edm.Decimal'>;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationEquipmentCode?: DeserializedType<T, 'Edm.String'> | null;
  tmsTransportationTender?: TransportationTendersType<T> | null;
}
