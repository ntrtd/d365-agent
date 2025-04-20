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
import type { DirNameAffixBiEntitiesApi } from './DirNameAffixBiEntitiesApi';
import { DirNameAffixType } from './DirNameAffixType';

/**
 * This class represents the entity "DirNameAffixBiEntities" of service "d365_metadata".
 */
export class DirNameAffixBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DirNameAffixBiEntitiesType<T>
{
  /**
   * Technical entity name for DirNameAffixBiEntities.
   */
  static override _entityName = 'DirNameAffixBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DirNameAffixBiEntities entity.
   */
  static _keys = ['AffixType', 'Affix'];
  /**
   * Affix Type.
   * @nullable
   */
  declare affixType?: DirNameAffixType | null;
  /**
   * Affix.
   */
  declare affix: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DirNameAffixBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DirNameAffixBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  affixType?: DirNameAffixType | null;
  affix: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
