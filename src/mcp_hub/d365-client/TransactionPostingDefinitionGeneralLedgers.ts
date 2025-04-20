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
import type { TransactionPostingDefinitionGeneralLedgersApi } from './TransactionPostingDefinitionGeneralLedgersApi';
import { LedgerOpenCloseTransType } from './LedgerOpenCloseTransType';
import { FundClassValueAll } from './FundClassValueAll';

/**
 * This class represents the entity "TransactionPostingDefinitionGeneralLedgers" of service "d365_metadata".
 */
export class TransactionPostingDefinitionGeneralLedgers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionGeneralLedgersType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionGeneralLedgers.
   */
  static override _entityName = 'TransactionPostingDefinitionGeneralLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionGeneralLedgers entity.
   */
  static _keys = ['dataAreaId', 'LedgerTransactionType', 'FundClass'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Transaction Type.
   * @nullable
   */
  declare ledgerTransactionType?: LedgerOpenCloseTransType | null;
  /**
   * Fund Class.
   * @nullable
   */
  declare fundClass?: FundClassValueAll | null;
  /**
   * Posting Definition Id.
   * @nullable
   */
  declare postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionPostingDefinitionGeneralLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionGeneralLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ledgerTransactionType?: LedgerOpenCloseTransType | null;
  fundClass?: FundClassValueAll | null;
  postingDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
}
