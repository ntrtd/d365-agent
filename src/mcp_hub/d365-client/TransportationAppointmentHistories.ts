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
import type { TransportationAppointmentHistoriesApi } from './TransportationAppointmentHistoriesApi';
import { NoYes } from './NoYes';
import { TmsApptDirection } from './TmsApptDirection';
import { TmsApptStatus } from './TmsApptStatus';

/**
 * This class represents the entity "TransportationAppointmentHistories" of service "d365_metadata".
 */
export class TransportationAppointmentHistories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationAppointmentHistoriesType<T>
{
  /**
   * Technical entity name for TransportationAppointmentHistories.
   */
  static override _entityName = 'TransportationAppointmentHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationAppointmentHistories entity.
   */
  static _keys = [
    'dataAreaId',
    'AppointmentId',
    'TransportationAppointmentHistoryEntryNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Appointment Id.
   */
  declare appointmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Appointment History Entry Number.
   */
  declare transportationAppointmentHistoryEntryNumber: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Is Customer Pickup Allowed.
   * @nullable
   */
  declare isCustomerPickupAllowed?: NoYes | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tractor Number.
   * @nullable
   */
  declare tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Note.
   * @nullable
   */
  declare appointmentNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Movement Direction Rule.
   * @nullable
   */
  declare productMovementDirectionRule?: TmsApptDirection | null;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Carrier Id.
   * @nullable
   */
  declare transportationCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Number.
   * @nullable
   */
  declare trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Status.
   * @nullable
   */
  declare appointmentStatus?: TmsApptStatus | null;
  /**
   * Transportation Broker Id.
   * @nullable
   */
  declare transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Appointment Rule Id.
   * @nullable
   */
  declare transportationAppointmentRuleId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Container Id.
   * @nullable
   */
  declare shippingContainerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Status Reason.
   * @nullable
   */
  declare appointmentStatusReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Start Date Time.
   */
  declare plannedStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planned End Date Time.
   */
  declare plannedEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: TransportationAppointmentHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationAppointmentHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  appointmentId: DeserializedType<T, 'Edm.String'>;
  transportationAppointmentHistoryEntryNumber: DeserializedType<T, 'Edm.Int64'>;
  isCustomerPickupAllowed?: NoYes | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  appointmentNote?: DeserializedType<T, 'Edm.String'> | null;
  productMovementDirectionRule?: TmsApptDirection | null;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  appointmentStatus?: TmsApptStatus | null;
  transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  transportationAppointmentRuleId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingContainerId?: DeserializedType<T, 'Edm.String'> | null;
  appointmentStatusReason?: DeserializedType<T, 'Edm.String'> | null;
  plannedStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  plannedEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
