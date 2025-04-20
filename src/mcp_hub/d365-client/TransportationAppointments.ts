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
import type { TransportationAppointmentsApi } from './TransportationAppointmentsApi';
import { NoYes } from './NoYes';
import { TmsApptDirection } from './TmsApptDirection';
import { TmsApptStatus } from './TmsApptStatus';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "TransportationAppointments" of service "d365_metadata".
 */
export class TransportationAppointments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransportationAppointmentsType<T>
{
  /**
   * Technical entity name for TransportationAppointments.
   */
  static override _entityName = 'TransportationAppointments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationAppointments entity.
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
   * Shipping Container Id.
   * @nullable
   */
  declare shippingContainerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tractor Number.
   * @nullable
   */
  declare tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Customer Pickup Allowed.
   * @nullable
   */
  declare isCustomerPickupAllowed?: NoYes | null;
  /**
   * Planned Start Date Time.
   */
  declare plannedStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Order Number.
   * @nullable
   */
  declare salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Movement Direction Rule.
   * @nullable
   */
  declare productMovementDirectionRule?: TmsApptDirection | null;
  /**
   * Appointment Warehouse Location Id.
   * @nullable
   */
  declare appointmentWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trailer Number.
   * @nullable
   */
  declare trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Appointment Rule Id.
   * @nullable
   */
  declare transportationAppointmentRuleId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planned End Date Time.
   */
  declare plannedEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transportation Broker Id.
   * @nullable
   */
  declare transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Note.
   * @nullable
   */
  declare appointmentNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Status.
   * @nullable
   */
  declare appointmentStatus?: TmsApptStatus | null;
  /**
   * Purchase Order Number.
   * @nullable
   */
  declare purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Carrier Id.
   * @nullable
   */
  declare transportationCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Warehouse Id.
   * @nullable
   */
  declare appointmentWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Name.
   * @nullable
   */
  declare appointmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appointment Site Id.
   * @nullable
   */
  declare appointmentSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare customer?: CustomersV3<T> | null;

  constructor(_entityApi: TransportationAppointmentsApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationAppointmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  appointmentId: DeserializedType<T, 'Edm.String'>;
  shippingContainerId?: DeserializedType<T, 'Edm.String'> | null;
  tractorNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCustomerPickupAllowed?: NoYes | null;
  plannedStartDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productMovementDirectionRule?: TmsApptDirection | null;
  appointmentWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationAppointmentRuleId?: DeserializedType<T, 'Edm.String'> | null;
  plannedEndDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  appointmentNote?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  appointmentStatus?: TmsApptStatus | null;
  purchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  transportationCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  appointmentWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  appointmentName?: DeserializedType<T, 'Edm.String'> | null;
  appointmentSiteId?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: VendorsV2Type<T> | null;
  customer?: CustomersV3Type<T> | null;
}
