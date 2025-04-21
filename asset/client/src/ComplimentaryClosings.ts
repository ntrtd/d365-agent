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
import type { ComplimentaryClosingsApi } from './ComplimentaryClosingsApi';

/**
 * This class represents the entity "ComplimentaryClosings" of service "d365_metadata".
 */
export class ComplimentaryClosings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ComplimentaryClosingsType<T>
{
  /**
   * Technical entity name for ComplimentaryClosings.
   */
  static override _entityName = 'ComplimentaryClosings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ComplimentaryClosings entity.
   */
  static _keys = ['dataAreaId', 'ClosingPhrase'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Closing Phrase.
   */
  declare closingPhrase: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ComplimentaryClosingsApi<T>) {
    super(_entityApi);
  }
}

export interface ComplimentaryClosingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  closingPhrase: DeserializedType<T, 'Edm.String'>;
}
