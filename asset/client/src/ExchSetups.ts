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
import type { ExchSetupsApi } from './ExchSetupsApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * This class represents the entity "ExchSetups" of service "d365_metadata".
 */
export class ExchSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExchSetupsType<T>
{
  /**
   * Technical entity name for ExchSetups.
   */
  static override _entityName = 'ExchSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchSetups entity.
   */
  static _keys = ['dataAreaId', 'ExchangeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Code.
   */
  declare exchangeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Advance Account Ledger Dimension Display Value.
   * @nullable
   */
  declare advanceAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ExchSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ExchSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  exchangeCode: DeserializedType<T, 'Edm.String'>;
  accountType?: LedgerJournalAcType | null;
  advanceAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
