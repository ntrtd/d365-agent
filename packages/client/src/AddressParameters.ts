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
import type { AddressParametersApi } from './AddressParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AddressParameters" of service "d365_metadata".
 */
export class AddressParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressParametersType<T>
{
  /**
   * Technical entity name for AddressParameters.
   */
  static override _entityName = 'AddressParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Validate Zip Code.
   * @nullable
   */
  declare validateZipCode?: NoYes | null;
  /**
   * Disable County Validation.
   * @nullable
   */
  declare disableCountyValidation?: NoYes | null;
  /**
   * Validate District.
   * @nullable
   */
  declare validateDistrict?: NoYes | null;
  /**
   * Validate City.
   * @nullable
   */
  declare validateCity?: NoYes | null;

  constructor(_entityApi: AddressParametersApi<T>) {
    super(_entityApi);
  }
}

export interface AddressParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  validateZipCode?: NoYes | null;
  disableCountyValidation?: NoYes | null;
  validateDistrict?: NoYes | null;
  validateCity?: NoYes | null;
}
