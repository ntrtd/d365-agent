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
import type { SourceSystemDispositionCodesApi } from './SourceSystemDispositionCodesApi';

/**
 * This class represents the entity "SourceSystemDispositionCodes" of service "d365_metadata".
 */
export class SourceSystemDispositionCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemDispositionCodesType<T>
{
  /**
   * Technical entity name for SourceSystemDispositionCodes.
   */
  static override _entityName = 'SourceSystemDispositionCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemDispositionCodes entity.
   */
  static _keys = ['dataAreaId', 'SourceSystemId', 'DispositionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Disposition Code.
   */
  declare dispositionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Disposition Code.
   * @nullable
   */
  declare sourceSystemDispositionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: SourceSystemDispositionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceSystemDispositionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  dispositionCode: DeserializedType<T, 'Edm.String'>;
  sourceSystemDispositionCode?: DeserializedType<T, 'Edm.String'> | null;
}
