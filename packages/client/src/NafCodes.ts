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
import type { NafCodesApi } from './NafCodesApi';

/**
 * This class represents the entity "NAFCodes" of service "d365_metadata".
 */
export class NafCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NafCodesType<T>
{
  /**
   * Technical entity name for NafCodes.
   */
  static override _entityName = 'NAFCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NafCodes entity.
   */
  static _keys = ['dataAreaId', 'NAFCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Naf Code.
   */
  declare nafCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NafCodesApi<T>) {
    super(_entityApi);
  }
}

export interface NafCodesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  nafCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
