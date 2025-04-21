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
import type { LedgerLiquiditiesApi } from './LedgerLiquiditiesApi';

/**
 * This class represents the entity "LedgerLiquidities" of service "d365_metadata".
 */
export class LedgerLiquidities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerLiquiditiesType<T>
{
  /**
   * Technical entity name for LedgerLiquidities.
   */
  static override _entityName = 'LedgerLiquidities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerLiquidities entity.
   */
  static _keys = ['dataAreaId', 'MainAccountId', 'ChartOfAccountsName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts Name.
   */
  declare chartOfAccountsName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LedgerLiquiditiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerLiquiditiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccountsName: DeserializedType<T, 'Edm.String'>;
}
