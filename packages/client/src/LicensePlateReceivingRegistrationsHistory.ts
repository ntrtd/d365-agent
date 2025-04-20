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
import type { LicensePlateReceivingRegistrationsHistoryApi } from './LicensePlateReceivingRegistrationsHistoryApi';
import { NoYes } from './NoYes';
import { LicensePlates, LicensePlatesType } from './LicensePlates';
import {
  InboundShipmentHeaders,
  InboundShipmentHeadersType
} from './InboundShipmentHeaders';
import {
  InboundLoadHeaders,
  InboundLoadHeadersType
} from './InboundLoadHeaders';

/**
 * This class represents the entity "LicensePlateReceivingRegistrationsHistory" of service "d365_metadata".
 */
export class LicensePlateReceivingRegistrationsHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LicensePlateReceivingRegistrationsHistoryType<T>
{
  /**
   * Technical entity name for LicensePlateReceivingRegistrationsHistory.
   */
  static override _entityName = 'LicensePlateReceivingRegistrationsHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LicensePlateReceivingRegistrationsHistory entity.
   */
  static _keys = [
    'dataAreaId',
    'LicensePlateNumber',
    'InboundLoadId',
    'ShipmentId',
    'RegistrationDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Load Id.
   */
  declare inboundLoadId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Id.
   */
  declare shipmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Registration Date Time.
   */
  declare registrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Registering Warehouse Mobile Device User Id.
   * @nullable
   */
  declare registeringWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Was Work Created On Registration.
   * @nullable
   */
  declare wasWorkCreatedOnRegistration?: NoYes | null;
  /**
   * Parent License Plate Number.
   * @nullable
   */
  declare parentLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LicensePlates} entity.
   */
  declare licensePlates?: LicensePlates<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundShipmentHeaders} entity.
   */
  declare inboundShipmentHeader?: InboundShipmentHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link InboundLoadHeaders} entity.
   */
  declare inboundLoadHeader?: InboundLoadHeaders<T> | null;

  constructor(_entityApi: LicensePlateReceivingRegistrationsHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface LicensePlateReceivingRegistrationsHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  inboundLoadId: DeserializedType<T, 'Edm.String'>;
  shipmentId: DeserializedType<T, 'Edm.String'>;
  registrationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registeringWarehouseMobileDeviceUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  wasWorkCreatedOnRegistration?: NoYes | null;
  parentLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  licensePlates?: LicensePlatesType<T> | null;
  inboundShipmentHeader?: InboundShipmentHeadersType<T> | null;
  inboundLoadHeader?: InboundLoadHeadersType<T> | null;
}
