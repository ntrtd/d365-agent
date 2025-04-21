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
import type { RetailStoreCashDeclarationsApi } from './RetailStoreCashDeclarationsApi';
import { RetailCoinNote } from './RetailCoinNote';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailStoreCashDeclarations" of service "d365_metadata".
 */
export class RetailStoreCashDeclarations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailStoreCashDeclarationsType<T>
{
  /**
   * Technical entity name for RetailStoreCashDeclarations.
   */
  static override _entityName = 'RetailStoreCashDeclarations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailStoreCashDeclarations entity.
   */
  static _keys = [
    'dataAreaId',
    'Currency',
    'Amount',
    'OMOperatingUnitNumber',
    'Type'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailCoinNote | null;
  /**
   * Include In Quick Pay Shortcuts.
   * @nullable
   */
  declare includeInQuickPayShortcuts?: NoYes | null;

  constructor(_entityApi: RetailStoreCashDeclarationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailStoreCashDeclarationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  type?: RetailCoinNote | null;
  includeInQuickPayShortcuts?: NoYes | null;
}
