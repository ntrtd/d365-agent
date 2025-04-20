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
import type { LedgerChartOfAccountsBiEntitiesApi } from './LedgerChartOfAccountsBiEntitiesApi';

/**
 * This class represents the entity "LedgerChartOfAccountsBiEntities" of service "d365_metadata".
 */
export class LedgerChartOfAccountsBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerChartOfAccountsBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerChartOfAccountsBiEntities.
   */
  static override _entityName = 'LedgerChartOfAccountsBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerChartOfAccountsBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
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
   * Main Account Format Mask.
   * @nullable
   */
  declare mainAccountFormatMask?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerChartOfAccountsBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerChartOfAccountsBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  mainAccountFormatMask?: DeserializedType<T, 'Edm.String'> | null;
}
