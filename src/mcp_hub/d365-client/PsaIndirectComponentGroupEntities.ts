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
import type { PsaIndirectComponentGroupEntitiesApi } from './PsaIndirectComponentGroupEntitiesApi';

/**
 * This class represents the entity "PSAIndirectComponentGroupEntities" of service "d365_metadata".
 */
export class PsaIndirectComponentGroupEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PsaIndirectComponentGroupEntitiesType<T>
{
  /**
   * Technical entity name for PsaIndirectComponentGroupEntities.
   */
  static override _entityName = 'PSAIndirectComponentGroupEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PsaIndirectComponentGroupEntities entity.
   */
  static _keys = ['dataAreaId', 'IndirectCostComponentGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Indirect Cost Component Group.
   */
  declare indirectCostComponentGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Indirect Component Group Name.
   * @nullable
   */
  declare indirectComponentGroupName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PsaIndirectComponentGroupEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PsaIndirectComponentGroupEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  indirectCostComponentGroup: DeserializedType<T, 'Edm.String'>;
  indirectComponentGroupName?: DeserializedType<T, 'Edm.String'> | null;
}
