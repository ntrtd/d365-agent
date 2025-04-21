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
import type { BankAccountTrapsApi } from './BankAccountTrapsApi';

/**
 * This class represents the entity "BankAccountTraps" of service "d365_metadata".
 */
export class BankAccountTraps<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankAccountTrapsType<T>
{
  /**
   * Technical entity name for BankAccountTraps.
   */
  static override _entityName = 'BankAccountTraps';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountTraps entity.
   */
  static _keys = ['dataAreaId', 'BankAccountNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account Number.
   */
  declare bankAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankAccountTrapsApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountTrapsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccountNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
