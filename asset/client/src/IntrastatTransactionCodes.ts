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
import type { IntrastatTransactionCodesApi } from './IntrastatTransactionCodesApi';
import { NoYes } from './NoYes';
import { TransferOrderAmountValueType } from './TransferOrderAmountValueType';
import { IntrastatAmountCalcMethod } from './IntrastatAmountCalcMethod';

/**
 * This class represents the entity "IntrastatTransactionCodes" of service "d365_metadata".
 */
export class IntrastatTransactionCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatTransactionCodesType<T>
{
  /**
   * Technical entity name for IntrastatTransactionCodes.
   */
  static override _entityName = 'IntrastatTransactionCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatTransactionCodes entity.
   */
  static _keys = ['dataAreaId', 'TransactionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Code.
   */
  declare transactionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Indirect Trade.
   * @nullable
   */
  declare indirectTrade?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Order Amount Value Type.
   * @nullable
   */
  declare transferOrderAmountValueType?: TransferOrderAmountValueType | null;
  /**
   * Statistical Amount.
   * @nullable
   */
  declare statisticalAmount?: TransferOrderAmountValueType | null;
  /**
   * Invoice Amount Calc Method.
   * @nullable
   */
  declare invoiceAmountCalcMethod?: IntrastatAmountCalcMethod | null;
  /**
   * Statistical Amount Calc Method.
   * @nullable
   */
  declare statisticalAmountCalcMethod?: IntrastatAmountCalcMethod | null;
  /**
   * Statical Value.
   * @nullable
   */
  declare staticalValue?: TransferOrderAmountValueType | null;

  constructor(_entityApi: IntrastatTransactionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatTransactionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionCode: DeserializedType<T, 'Edm.String'>;
  indirectTrade?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderAmountValueType?: TransferOrderAmountValueType | null;
  statisticalAmount?: TransferOrderAmountValueType | null;
  invoiceAmountCalcMethod?: IntrastatAmountCalcMethod | null;
  statisticalAmountCalcMethod?: IntrastatAmountCalcMethod | null;
  staticalValue?: TransferOrderAmountValueType | null;
}
