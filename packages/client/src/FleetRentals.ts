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
import type { FleetRentalsApi } from './FleetRentalsApi';
import { FmReservationState } from './FmReservationState';
import { FleetCustomers, FleetCustomersType } from './FleetCustomers';

/**
 * This class represents the entity "FleetRentals" of service "d365_metadata".
 */
export class FleetRentals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FleetRentalsType<T>
{
  /**
   * Technical entity name for FleetRentals.
   */
  static override _entityName = 'FleetRentals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FleetRentals entity.
   */
  static _keys = ['RentalId'];
  /**
   * Rental Id.
   */
  declare rentalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Mileage.
   */
  declare startMileage: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vehicle Rate Per Day.
   */
  declare vehicleRatePerDay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Driver License.
   * @nullable
   */
  declare customerDriverLicense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Rate Total.
   */
  declare vehicleRateTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vehicle Id.
   * @nullable
   */
  declare vehicleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Fuel Level.
   * @nullable
   */
  declare startFuelLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Last Name.
   * @nullable
   */
  declare customerLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Mileage.
   */
  declare endMileage: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vehicle Vin.
   * @nullable
   */
  declare vehicleVin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vehicle Rate Per Week.
   */
  declare vehicleRatePerWeek: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer First Name.
   * @nullable
   */
  declare customerFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: FmReservationState | null;
  /**
   * End Fuel Level.
   * @nullable
   */
  declare endFuelLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FleetCustomers} entity.
   */
  declare customerRole?: FleetCustomers<T> | null;

  constructor(_entityApi: FleetRentalsApi<T>) {
    super(_entityApi);
  }
}

export interface FleetRentalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  rentalId: DeserializedType<T, 'Edm.String'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  startMileage: DeserializedType<T, 'Edm.Int32'>;
  vehicleRatePerDay: DeserializedType<T, 'Edm.Decimal'>;
  customerDriverLicense?: DeserializedType<T, 'Edm.String'> | null;
  vehicleRateTotal: DeserializedType<T, 'Edm.Decimal'>;
  vehicleId?: DeserializedType<T, 'Edm.String'> | null;
  startFuelLevel?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerLastName?: DeserializedType<T, 'Edm.String'> | null;
  endMileage: DeserializedType<T, 'Edm.Int32'>;
  vehicleVin?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vehicleRatePerWeek: DeserializedType<T, 'Edm.Decimal'>;
  customerFirstName?: DeserializedType<T, 'Edm.String'> | null;
  state?: FmReservationState | null;
  endFuelLevel?: DeserializedType<T, 'Edm.String'> | null;
  customerRole?: FleetCustomersType<T> | null;
}
