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
import type { TransportationAppointmentDriverLogsApi } from './TransportationAppointmentDriverLogsApi';
import { NoYes } from './NoYes';
import { TmsAppointmentAlert } from './TmsAppointmentAlert';

/**
 * This class represents the entity "TransportationAppointmentDriverLogs" of service "d365_metadata".
 */
export class TransportationAppointmentDriverLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationAppointmentDriverLogsType<T>
{
  /**
   * Technical entity name for TransportationAppointmentDriverLogs.
   */
  static override _entityName = 'TransportationAppointmentDriverLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationAppointmentDriverLogs entity.
   */
  static _keys = ['dataAreaId', 'AppointmentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Appointment Id.
   */
  declare appointmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Drop Trailer Allowed.
   * @nullable
   */
  declare isDropTrailerAllowed?: NoYes | null;
  /**
   * Actual Appointment End Date Time.
   */
  declare actualAppointmentEndDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Driver License.
   * @nullable
   */
  declare driverLicense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Appointment Alert Rule.
   * @nullable
   */
  declare transportationAppointmentAlertRule?: TmsAppointmentAlert | null;
  /**
   * Actual Appointment Start Date Time.
   */
  declare actualAppointmentStartDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Driver Name.
   * @nullable
   */
  declare driverName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransportationAppointmentDriverLogsApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationAppointmentDriverLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  appointmentId: DeserializedType<T, 'Edm.String'>;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isDropTrailerAllowed?: NoYes | null;
  actualAppointmentEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  driverLicense?: DeserializedType<T, 'Edm.String'> | null;
  transportationAppointmentAlertRule?: TmsAppointmentAlert | null;
  actualAppointmentStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  driverName?: DeserializedType<T, 'Edm.String'> | null;
}
