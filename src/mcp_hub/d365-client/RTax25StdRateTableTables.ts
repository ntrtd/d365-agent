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
import type { RTax25StdRateTableTablesApi } from './RTax25StdRateTableTablesApi';
import { RTax25StdRateCritMode } from './RTax25StdRateCritMode';

/**
 * This class represents the entity "RTax25StdRateTableTables" of service "d365_metadata".
 */
export class RTax25StdRateTableTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RTax25StdRateTableTablesType<T>
{
  /**
   * Technical entity name for RTax25StdRateTableTables.
   */
  static override _entityName = 'RTax25StdRateTableTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RTax25StdRateTableTables entity.
   */
  static _keys = ['dataAreaId', 'RateCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rate Code.
   */
  declare rateCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Method.
   * @nullable
   */
  declare calculationMethod?: RTax25StdRateCritMode | null;

  constructor(_entityApi: RTax25StdRateTableTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RTax25StdRateTableTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rateCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calculationMethod?: RTax25StdRateCritMode | null;
}
