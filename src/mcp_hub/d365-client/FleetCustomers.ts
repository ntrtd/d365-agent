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
import type { FleetCustomersApi } from './FleetCustomersApi';
import { FleetRentals, FleetRentalsType } from './FleetRentals';

/**
 * This class represents the entity "FleetCustomers" of service "d365_metadata".
 */
export class FleetCustomers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FleetCustomersType<T>
{
  /**
   * Technical entity name for FleetCustomers.
   */
  static override _entityName = 'FleetCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FleetCustomers entity.
   */
  static _keys = ['FirstName', 'LastName', 'DriverLicense'];
  /**
   * First Name.
   */
  declare firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   */
  declare lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * Driver License.
   */
  declare driverLicense: DeserializedType<T, 'Edm.String'>;
  /**
   * Country.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   */
  declare zipCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Address Line 2.
   * @nullable
   */
  declare addressLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Line 1.
   * @nullable
   */
  declare addressLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cell Phone.
   * @nullable
   */
  declare cellPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FleetRentals} entity.
   */
  declare rental: FleetRentals<T>[];

  constructor(_entityApi: FleetCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface FleetCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  firstName: DeserializedType<T, 'Edm.String'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  driverLicense: DeserializedType<T, 'Edm.String'>;
  country?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  zipCode: DeserializedType<T, 'Edm.Int32'>;
  addressLine2?: DeserializedType<T, 'Edm.String'> | null;
  addressLine1?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  cellPhone?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  rental: FleetRentalsType<T>[];
}
