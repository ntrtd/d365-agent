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
import type { ProjGrantMatchingsApi } from './ProjGrantMatchingsApi';

/**
 * This class represents the entity "ProjGrantMatchings" of service "d365_metadata".
 */
export class ProjGrantMatchings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjGrantMatchingsType<T>
{
  /**
   * Technical entity name for ProjGrantMatchings.
   */
  static override _entityName = 'ProjGrantMatchings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjGrantMatchings entity.
   */
  static _keys = ['dataAreaId', 'MatchingType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Matching Type.
   */
  declare matchingType: DeserializedType<T, 'Edm.String'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Percentage.
   */
  declare matchingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjGrantMatchingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjGrantMatchingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  matchingType: DeserializedType<T, 'Edm.String'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  matchingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
