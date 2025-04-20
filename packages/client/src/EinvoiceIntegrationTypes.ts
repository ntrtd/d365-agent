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
import type { EinvoiceIntegrationTypesApi } from './EinvoiceIntegrationTypesApi';

/**
 * This class represents the entity "EinvoiceIntegrationTypes" of service "d365_metadata".
 */
export class EinvoiceIntegrationTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EinvoiceIntegrationTypesType<T>
{
  /**
   * Technical entity name for EinvoiceIntegrationTypes.
   */
  static override _entityName = 'EinvoiceIntegrationTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EinvoiceIntegrationTypes entity.
   */
  static _keys = ['dataAreaId', 'TypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Id.
   */
  declare typeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EinvoiceIntegrationTypesApi<T>) {
    super(_entityApi);
  }
}

export interface EinvoiceIntegrationTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  typeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
