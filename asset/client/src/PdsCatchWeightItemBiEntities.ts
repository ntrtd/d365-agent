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
import type { PdsCatchWeightItemBiEntitiesApi } from './PdsCatchWeightItemBiEntitiesApi';

/**
 * This class represents the entity "PdsCatchWeightItemBiEntities" of service "d365_metadata".
 */
export class PdsCatchWeightItemBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PdsCatchWeightItemBiEntitiesType<T>
{
  /**
   * Technical entity name for PdsCatchWeightItemBiEntities.
   */
  static override _entityName = 'PdsCatchWeightItemBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PdsCatchWeightItemBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ItemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Cw Min.
   */
  declare pdsCwMin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Unit Id.
   * @nullable
   */
  declare pdsCwUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Pds Cw Max.
   */
  declare pdsCwMax: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PdsCatchWeightItemBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PdsCatchWeightItemBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  pdsCwMin: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwUnitId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  pdsCwMax: DeserializedType<T, 'Edm.Decimal'>;
}
