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
import type { SalutationsApi } from './SalutationsApi';

/**
 * This class represents the entity "Salutations" of service "d365_metadata".
 */
export class Salutations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalutationsType<T>
{
  /**
   * Technical entity name for Salutations.
   */
  static override _entityName = 'Salutations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Salutations entity.
   */
  static _keys = ['dataAreaId', 'SalutationPhrase'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Salutation Phrase.
   */
  declare salutationPhrase: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: SalutationsApi<T>) {
    super(_entityApi);
  }
}

export interface SalutationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salutationPhrase: DeserializedType<T, 'Edm.String'>;
}
