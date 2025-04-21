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
import type { CashLedgersApi } from './CashLedgersApi';
import { RCashTableAll } from './RCashTableAll';

/**
 * This class represents the entity "CashLedgers" of service "d365_metadata".
 */
export class CashLedgers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashLedgersType<T>
{
  /**
   * Technical entity name for CashLedgers.
   */
  static override _entityName = 'CashLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashLedgers entity.
   */
  static _keys = [
    'dataAreaId',
    'CashPosting',
    'MainAccountIdDisplayValue',
    'Cash'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Posting.
   */
  declare cashPosting: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id Display Value.
   */
  declare mainAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash.
   */
  declare cash: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid For.
   * @nullable
   */
  declare validFor?: RCashTableAll | null;

  constructor(_entityApi: CashLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface CashLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cashPosting: DeserializedType<T, 'Edm.String'>;
  mainAccountIdDisplayValue: DeserializedType<T, 'Edm.String'>;
  cash: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validFor?: RCashTableAll | null;
}
