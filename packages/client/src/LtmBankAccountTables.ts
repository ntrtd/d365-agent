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
import type { LtmBankAccountTablesApi } from './LtmBankAccountTablesApi';
import { LtmCounterPartBehavior } from './LtmCounterPartBehavior';

/**
 * This class represents the entity "LTMBankAccountTables" of service "d365_metadata".
 */
export class LtmBankAccountTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmBankAccountTablesType<T>
{
  /**
   * Technical entity name for LtmBankAccountTables.
   */
  static override _entityName = 'LTMBankAccountTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmBankAccountTables entity.
   */
  static _keys = ['dataAreaId', 'AccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Id.
   */
  declare accountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counterpart Behavior.
   * @nullable
   */
  declare counterpartBehavior?: LtmCounterPartBehavior | null;

  constructor(_entityApi: LtmBankAccountTablesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmBankAccountTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountId: DeserializedType<T, 'Edm.String'>;
  counterpartBehavior?: LtmCounterPartBehavior | null;
}
