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
import type { LedgerTransFurtherPostingBiEntitiesApi } from './LedgerTransFurtherPostingBiEntitiesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "LedgerTransFurtherPostingBiEntities" of service "d365_metadata".
 */
export class LedgerTransFurtherPostingBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerTransFurtherPostingBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerTransFurtherPostingBiEntities.
   */
  static override _entityName = 'LedgerTransFurtherPostingBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerTransFurtherPostingBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Paym Spec.
   * @nullable
   */
  declare paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Paym Mode.
   * @nullable
   */
  declare paymMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;

  constructor(_entityApi: LedgerTransFurtherPostingBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerTransFurtherPostingBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  paymSpec?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  paymMode?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
}
