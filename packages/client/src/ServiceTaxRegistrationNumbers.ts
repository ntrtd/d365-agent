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
import type { ServiceTaxRegistrationNumbersApi } from './ServiceTaxRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ServiceTaxRegistrationNumbers" of service "d365_metadata".
 */
export class ServiceTaxRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceTaxRegistrationNumbersType<T>
{
  /**
   * Technical entity name for ServiceTaxRegistrationNumbers.
   */
  static override _entityName = 'ServiceTaxRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceTaxRegistrationNumbers entity.
   */
  static _keys = ['RegistrationNumberType', 'RegistrationNumber'];
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: TaxRegistrationTypeIn | null;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceTaxRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceTaxRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumberType?: TaxRegistrationTypeIn | null;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  shared?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
