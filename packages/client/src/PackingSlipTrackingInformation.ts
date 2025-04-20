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
import type { PackingSlipTrackingInformationApi } from './PackingSlipTrackingInformationApi';

/**
 * This class represents the entity "PackingSlipTrackingInformation" of service "d365_metadata".
 */
export class PackingSlipTrackingInformation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PackingSlipTrackingInformationType<T>
{
  /**
   * Technical entity name for PackingSlipTrackingInformation.
   */
  static override _entityName = 'PackingSlipTrackingInformation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PackingSlipTrackingInformation entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'PackingSlipNumber',
    'DeliveryDate',
    'TrackingNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Packing Slip Number.
   */
  declare packingSlipNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tracking Number.
   */
  declare trackingNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tracking Url.
   * @nullable
   */
  declare trackingUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PackingSlipTrackingInformationApi<T>) {
    super(_entityApi);
  }
}

export interface PackingSlipTrackingInformationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  packingSlipNumber: DeserializedType<T, 'Edm.String'>;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  trackingNumber: DeserializedType<T, 'Edm.String'>;
  trackingUrl?: DeserializedType<T, 'Edm.String'> | null;
}
