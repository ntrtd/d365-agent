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
import type { CurrencyRevaluationAccountsApi } from './CurrencyRevaluationAccountsApi';
import { CurrencyGainLossAccountType } from './CurrencyGainLossAccountType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Ledgers, LedgersType } from './Ledgers';

/**
 * This class represents the entity "CurrencyRevaluationAccounts" of service "d365_metadata".
 */
export class CurrencyRevaluationAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CurrencyRevaluationAccountsType<T>
{
  /**
   * Technical entity name for CurrencyRevaluationAccounts.
   */
  static override _entityName = 'CurrencyRevaluationAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyRevaluationAccounts entity.
   */
  static _keys = ['CurrencyCode', 'LegalEntityId', 'Posting'];
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting.
   * @nullable
   */
  declare posting?: CurrencyGainLossAccountType | null;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare ledger?: Ledgers<T> | null;

  constructor(_entityApi: CurrencyRevaluationAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyRevaluationAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  posting?: CurrencyGainLossAccountType | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  ledger?: LedgersType<T> | null;
}
