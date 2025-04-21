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
import type { ServiceCodesApi } from './ServiceCodesApi';

/**
 * This class represents the entity "ServiceCodes" of service "d365_metadata".
 */
export class ServiceCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceCodesType<T>
{
  /**
   * Technical entity name for ServiceCodes.
   */
  static override _entityName = 'ServiceCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceCodes entity.
   */
  static _keys = ['dataAreaId', 'ServiceCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Code.
   */
  declare serviceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Accounting Code.
   * @nullable
   */
  declare serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minor Head.
   * @nullable
   */
  declare minorHead?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServiceCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceCode: DeserializedType<T, 'Edm.String'>;
  serviceAccountingCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  minorHead?: DeserializedType<T, 'Edm.String'> | null;
}
