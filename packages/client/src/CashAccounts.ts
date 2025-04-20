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
import type { CashAccountsApi } from './CashAccountsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CashAccounts" of service "d365_metadata".
 */
export class CashAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashAccountsType<T>
{
  /**
   * Technical entity name for CashAccounts.
   */
  static override _entityName = 'CashAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashAccounts entity.
   */
  static _keys = ['dataAreaId', 'Cash'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash.
   */
  declare cash: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative Cash.
   * @nullable
   */
  declare negativeCash?: NoYes | null;
  /**
   * More Currencies.
   * @nullable
   */
  declare moreCurrencies?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CashAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface CashAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cash: DeserializedType<T, 'Edm.String'>;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  negativeCash?: NoYes | null;
  moreCurrencies?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
