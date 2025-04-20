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
import type { EmProcessingActionSequencesApi } from './EmProcessingActionSequencesApi';

/**
 * This class represents the entity "EMProcessingActionSequences" of service "d365_metadata".
 */
export class EmProcessingActionSequences<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmProcessingActionSequencesType<T>
{
  /**
   * Technical entity name for EmProcessingActionSequences.
   */
  static override _entityName = 'EMProcessingActionSequences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmProcessingActionSequences entity.
   */
  static _keys = ['dataAreaId', 'SequenceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Id.
   */
  declare sequenceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmProcessingActionSequencesApi<T>) {
    super(_entityApi);
  }
}

export interface EmProcessingActionSequencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sequenceId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
