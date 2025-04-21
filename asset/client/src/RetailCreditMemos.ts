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
import type { RetailCreditMemosApi } from './RetailCreditMemosApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailCreditMemos" of service "d365_metadata".
 */
export class RetailCreditMemos<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailCreditMemosType<T>
{
  /**
   * Technical entity name for RetailCreditMemos.
   */
  static override _entityName = 'RetailCreditMemos';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCreditMemos entity.
   */
  static _keys = ['dataAreaId', 'EntryId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Entry Id.
   */
  declare entryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voided.
   * @nullable
   */
  declare voided?: NoYes | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Applied.
   * @nullable
   */
  declare applied?: NoYes | null;
  /**
   * Applied Amount.
   */
  declare appliedAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailCreditMemosApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCreditMemosType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entryId: DeserializedType<T, 'Edm.String'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  voided?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  applied?: NoYes | null;
  appliedAmount: DeserializedType<T, 'Edm.Decimal'>;
}
