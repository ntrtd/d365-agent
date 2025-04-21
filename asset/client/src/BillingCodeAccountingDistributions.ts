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
import type { BillingCodeAccountingDistributionsApi } from './BillingCodeAccountingDistributionsApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "BillingCodeAccountingDistributions" of service "d365_metadata".
 */
export class BillingCodeAccountingDistributions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillingCodeAccountingDistributionsType<T>
{
  /**
   * Technical entity name for BillingCodeAccountingDistributions.
   */
  static override _entityName = 'BillingCodeAccountingDistributions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingCodeAccountingDistributions entity.
   */
  static _keys = [
    'dataAreaId',
    'ValidTo',
    'ValidFrom',
    'BillingCode',
    'LedgerAccountDisplayValue'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Code.
   */
  declare billingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Account Display Value.
   */
  declare ledgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: BillingCodeAccountingDistributionsApi<T>) {
    super(_entityApi);
  }
}

export interface BillingCodeAccountingDistributionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingCode: DeserializedType<T, 'Edm.String'>;
  ledgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
