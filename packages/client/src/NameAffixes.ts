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
import type { NameAffixesApi } from './NameAffixesApi';
import { DirNameAffixType } from './DirNameAffixType';

/**
 * This class represents the entity "NameAffixes" of service "d365_metadata".
 */
export class NameAffixes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NameAffixesType<T>
{
  /**
   * Technical entity name for NameAffixes.
   */
  static override _entityName = 'NameAffixes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NameAffixes entity.
   */
  static _keys = ['Type', 'Affix'];
  /**
   * Type.
   * @nullable
   */
  declare type?: DirNameAffixType | null;
  /**
   * Affix.
   */
  declare affix: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: NameAffixesApi<T>) {
    super(_entityApi);
  }
}

export interface NameAffixesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  type?: DirNameAffixType | null;
  affix: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
