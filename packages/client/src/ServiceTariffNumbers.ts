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
import type { ServiceTariffNumbersApi } from './ServiceTariffNumbersApi';

/**
 * This class represents the entity "ServiceTariffNumbers" of service "d365_metadata".
 */
export class ServiceTariffNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceTariffNumbersType<T>
{
  /**
   * Technical entity name for ServiceTariffNumbers.
   */
  static override _entityName = 'ServiceTariffNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceTariffNumbers entity.
   */
  static _keys = ['dataAreaId', 'ServiceTariffNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Tariff Number.
   */
  declare serviceTariffNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Tariff Description.
   * @nullable
   */
  declare serviceTariffDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceTariffNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceTariffNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceTariffNumber: DeserializedType<T, 'Edm.String'>;
  serviceTariffDescription?: DeserializedType<T, 'Edm.String'> | null;
}
