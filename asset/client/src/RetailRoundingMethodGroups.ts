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
import type { RetailRoundingMethodGroupsApi } from './RetailRoundingMethodGroupsApi';

/**
 * This class represents the entity "RetailRoundingMethodGroups" of service "d365_metadata".
 */
export class RetailRoundingMethodGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailRoundingMethodGroupsType<T>
{
  /**
   * Technical entity name for RetailRoundingMethodGroups.
   */
  static override _entityName = 'RetailRoundingMethodGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailRoundingMethodGroups entity.
   */
  static _keys = ['dataAreaId', 'RoundingMethodId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Method Id.
   */
  declare roundingMethodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailRoundingMethodGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailRoundingMethodGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  roundingMethodId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
