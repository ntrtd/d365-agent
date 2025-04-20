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
import type { McrReturnSalesTableBiEntitiesApi } from './McrReturnSalesTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { McrAdvanceExchange } from './McrAdvanceExchange';

/**
 * This class represents the entity "MCRReturnSalesTableBiEntities" of service "d365_metadata".
 */
export class McrReturnSalesTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrReturnSalesTableBiEntitiesType<T>
{
  /**
   * Technical entity name for McrReturnSalesTableBiEntities.
   */
  static override _entityName = 'MCRReturnSalesTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrReturnSalesTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SalesTable'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Table.
   */
  declare salesTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Apply Credit To Exchange.
   * @nullable
   */
  declare applyCreditToExchange?: NoYes | null;
  /**
   * Advance Exchange.
   * @nullable
   */
  declare advanceExchange?: McrAdvanceExchange | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Exchange.
   * @nullable
   */
  declare isExchange?: NoYes | null;
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
   * Original Sales Id.
   * @nullable
   */
  declare originalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Credit.
   * @nullable
   */
  declare advanceCredit?: NoYes | null;

  constructor(_entityApi: McrReturnSalesTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrReturnSalesTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTable: DeserializedType<T, 'Edm.Int64'>;
  applyCreditToExchange?: NoYes | null;
  advanceExchange?: McrAdvanceExchange | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  isExchange?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  originalSalesId?: DeserializedType<T, 'Edm.String'> | null;
  advanceCredit?: NoYes | null;
}
