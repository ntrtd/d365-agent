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
import type { CurrencyRevaluationAccountsV2Api } from './CurrencyRevaluationAccountsV2Api';
import { CurrencyGainLossAccountType } from './CurrencyGainLossAccountType';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "CurrencyRevaluationAccountsV2" of service "d365_metadata".
 */
export class CurrencyRevaluationAccountsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CurrencyRevaluationAccountsV2Type<T>
{
  /**
   * Technical entity name for CurrencyRevaluationAccountsV2.
   */
  static override _entityName = 'CurrencyRevaluationAccountsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyRevaluationAccountsV2 entity.
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
   * Realized Tax Main Account Id Display Value.
   * @nullable
   */
  declare realizedTaxMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exch Adj Taxable Type.
   * @nullable
   */
  declare exchAdjTaxableType?: ExchAdjTaxableTypeW | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currencies?: Currencies<T> | null;

  constructor(_entityApi: CurrencyRevaluationAccountsV2Api<T>) {
    super(_entityApi);
  }
}

export interface CurrencyRevaluationAccountsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  posting?: CurrencyGainLossAccountType | null;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  realizedTaxMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  exchAdjTaxableType?: ExchAdjTaxableTypeW | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  currencies?: CurrenciesType<T> | null;
}
