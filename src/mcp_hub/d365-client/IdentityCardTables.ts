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
import type { IdentityCardTablesApi } from './IdentityCardTablesApi';
import { IdentityCardTypePfRu } from './IdentityCardTypePfRu';

/**
 * This class represents the entity "IdentityCardTables" of service "d365_metadata".
 */
export class IdentityCardTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdentityCardTablesType<T>
{
  /**
   * Technical entity name for IdentityCardTables.
   */
  static override _entityName = 'IdentityCardTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdentityCardTables entity.
   */
  static _keys = ['dataAreaId', 'DocumentCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Code.
   */
  declare documentCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Identity Card Name Pf.
   * @nullable
   */
  declare identityCardNamePf?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Card Namemiddle.
   * @nullable
   */
  declare identityCardNamemiddle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Series Template.
   * @nullable
   */
  declare seriesTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Card Name Full.
   * @nullable
   */
  declare identityCardNameFull?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: IdentityCardTypePfRu | null;
  /**
   * Number Template.
   * @nullable
   */
  declare numberTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Card Name Short.
   * @nullable
   */
  declare identityCardNameShort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Age.
   */
  declare age: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: IdentityCardTablesApi<T>) {
    super(_entityApi);
  }
}

export interface IdentityCardTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentCode: DeserializedType<T, 'Edm.String'>;
  identityCardNamePf?: DeserializedType<T, 'Edm.String'> | null;
  identityCardNamemiddle?: DeserializedType<T, 'Edm.String'> | null;
  seriesTemplate?: DeserializedType<T, 'Edm.String'> | null;
  identityCardNameFull?: DeserializedType<T, 'Edm.String'> | null;
  type?: IdentityCardTypePfRu | null;
  numberTemplate?: DeserializedType<T, 'Edm.String'> | null;
  identityCardNameShort?: DeserializedType<T, 'Edm.String'> | null;
  age: DeserializedType<T, 'Edm.Int32'>;
}
