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
import type { GstMinorCodesApi } from './GstMinorCodesApi';

/**
 * This class represents the entity "GSTMinorCodes" of service "d365_metadata".
 */
export class GstMinorCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GstMinorCodesType<T>
{
  /**
   * Technical entity name for GstMinorCodes.
   */
  static override _entityName = 'GSTMinorCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GstMinorCodes entity.
   */
  static _keys = ['dataAreaId', 'MinorCode', 'TaxComponent'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Minor Code.
   */
  declare minorCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Component.
   */
  declare taxComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GstMinorCodesApi<T>) {
    super(_entityApi);
  }
}

export interface GstMinorCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  minorCode: DeserializedType<T, 'Edm.String'>;
  taxComponent: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
