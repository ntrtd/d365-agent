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
import type { DeferallsLedgersApi } from './DeferallsLedgersApi';

/**
 * This class represents the entity "DeferallsLedgers" of service "d365_metadata".
 */
export class DeferallsLedgers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeferallsLedgersType<T>
{
  /**
   * Technical entity name for DeferallsLedgers.
   */
  static override _entityName = 'DeferallsLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeferallsLedgers entity.
   */
  static _keys = ['dataAreaId', 'PostingProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DeferallsLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface DeferallsLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
