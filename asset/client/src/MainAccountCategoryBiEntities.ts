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
import type { MainAccountCategoryBiEntitiesApi } from './MainAccountCategoryBiEntitiesApi';
import { DimensionLedgerAccCategoryAccountType } from './DimensionLedgerAccCategoryAccountType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MainAccountCategoryBiEntities" of service "d365_metadata".
 */
export class MainAccountCategoryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MainAccountCategoryBiEntitiesType<T>
{
  /**
   * Technical entity name for MainAccountCategoryBiEntities.
   */
  static override _entityName = 'MainAccountCategoryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MainAccountCategoryBiEntities entity.
   */
  static _keys = ['AccountCategoryRef'];
  /**
   * Account Category Ref.
   */
  declare accountCategoryRef: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: DimensionLedgerAccCategoryAccountType | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Category Display Order.
   */
  declare accountCategoryDisplayOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Category.
   * @nullable
   */
  declare accountCategory?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MainAccountCategoryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface MainAccountCategoryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountCategoryRef: DeserializedType<T, 'Edm.Int32'>;
  accountType?: DimensionLedgerAccCategoryAccountType | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  closed?: NoYes | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accountCategoryDisplayOrder: DeserializedType<T, 'Edm.Int32'>;
  accountCategory?: DeserializedType<T, 'Edm.String'> | null;
}
