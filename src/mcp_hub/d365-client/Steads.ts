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
import type { SteadsApi } from './SteadsApi';

/**
 * This class represents the entity "Steads" of service "d365_metadata".
 */
export class Steads<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SteadsType<T>
{
  /**
   * Technical entity name for Steads.
   */
  static override _entityName = 'Steads';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Steads entity.
   */
  static _keys = ['dataAreaId', 'SteadId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Stead Id.
   */
  declare steadId: DeserializedType<T, 'Edm.String'>;
  /**
   * Region Code.
   * @nullable
   */
  declare regionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ifnsfl.
   * @nullable
   */
  declare ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Div Type.
   * @nullable
   */
  declare divType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stead Guid.
   * @nullable
   */
  declare steadGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terr Ifnsfl.
   * @nullable
   */
  declare terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Guid.
   * @nullable
   */
  declare parentGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Okato.
   * @nullable
   */
  declare okato?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SteadsApi<T>) {
    super(_entityApi);
  }
}

export interface SteadsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  steadId: DeserializedType<T, 'Edm.String'>;
  regionCode?: DeserializedType<T, 'Edm.String'> | null;
  ifnsfl?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  divType?: DeserializedType<T, 'Edm.String'> | null;
  steadGuid?: DeserializedType<T, 'Edm.String'> | null;
  terrIfnsfl?: DeserializedType<T, 'Edm.String'> | null;
  number?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  parentGuid?: DeserializedType<T, 'Edm.String'> | null;
  okato?: DeserializedType<T, 'Edm.String'> | null;
}
