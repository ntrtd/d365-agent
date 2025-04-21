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
import type { RrgeQueries_WApi } from './RrgeQueries_WApi';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { NoYes } from './NoYes';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgCurrencyForCalcRu } from './LedgerRrgCurrencyForCalcRu';
import { LedgerRrgeQueryTypeW } from './LedgerRrgeQueryTypeW';

/**
 * This class represents the entity "RRGEQueries_W" of service "d365_metadata".
 */
export class RrgeQueries_W<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RrgeQueries_WType<T>
{
  /**
   * Technical entity name for RrgeQueries_W.
   */
  static override _entityName = 'RRGEQueries_W';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgeQueries_W entity.
   */
  static _keys = ['dataAreaId', 'QueryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Query Id.
   */
  declare queryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: LedgerRrgDataTypeRu | null;
  /**
   * Period.
   * @nullable
   */
  declare period?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Only.
   * @nullable
   */
  declare firstOnly?: NoYes | null;
  /**
   * Type By Correct.
   * @nullable
   */
  declare typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  /**
   * Model Num.
   * @nullable
   */
  declare modelNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Hierarchy Hash Key.
   */
  declare dimensionHierarchyHashKey: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Scale.
   */
  declare scale: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency For Calc.
   * @nullable
   */
  declare currencyForCalc?: LedgerRrgCurrencyForCalcRu | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LedgerRrgeQueryTypeW | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Point Sign Num.
   */
  declare pointSignNum: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RrgeQueries_WApi<T>) {
    super(_entityApi);
  }
}

export interface RrgeQueries_WType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  queryId: DeserializedType<T, 'Edm.String'>;
  dataType?: LedgerRrgDataTypeRu | null;
  period?: DeserializedType<T, 'Edm.String'> | null;
  firstOnly?: NoYes | null;
  typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  modelNum?: DeserializedType<T, 'Edm.String'> | null;
  dimensionHierarchyHashKey: DeserializedType<T, 'Edm.Guid'>;
  scale: DeserializedType<T, 'Edm.Decimal'>;
  currencyForCalc?: LedgerRrgCurrencyForCalcRu | null;
  type?: LedgerRrgeQueryTypeW | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  pointSignNum: DeserializedType<T, 'Edm.Int32'>;
}
