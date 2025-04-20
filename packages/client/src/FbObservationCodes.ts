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
import type { FbObservationCodesApi } from './FbObservationCodesApi';

/**
 * This class represents the entity "FBObservationCodes" of service "d365_metadata".
 */
export class FbObservationCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FbObservationCodesType<T>
{
  /**
   * Technical entity name for FbObservationCodes.
   */
  static override _entityName = 'FBObservationCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FbObservationCodes entity.
   */
  static _keys = ['ObservationCode'];
  /**
   * Observation Code.
   */
  declare observationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FbObservationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface FbObservationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  observationCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
