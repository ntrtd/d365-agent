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
import type { RetailReceiptMasksApi } from './RetailReceiptMasksApi';
import { RetailReceiptTransaction } from './RetailReceiptTransaction';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailReceiptMasks" of service "d365_metadata".
 */
export class RetailReceiptMasks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailReceiptMasksType<T>
{
  /**
   * Technical entity name for RetailReceiptMasks.
   */
  static override _entityName = 'RetailReceiptMasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailReceiptMasks entity.
   */
  static _keys = ['FunctionalityProfileId', 'ReceiptTransactionType'];
  /**
   * Functionality Profile Id.
   */
  declare functionalityProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receipt Transaction Type.
   * @nullable
   */
  declare receiptTransactionType?: RetailReceiptTransaction | null;
  /**
   * Is Independent.
   * @nullable
   */
  declare isIndependent?: NoYes | null;
  /**
   * Mask.
   * @nullable
   */
  declare mask?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailReceiptMasksApi<T>) {
    super(_entityApi);
  }
}

export interface RetailReceiptMasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  functionalityProfileId: DeserializedType<T, 'Edm.String'>;
  receiptTransactionType?: RetailReceiptTransaction | null;
  isIndependent?: NoYes | null;
  mask?: DeserializedType<T, 'Edm.String'> | null;
}
