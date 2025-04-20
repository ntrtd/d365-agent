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
import type { CashControlConfigurationsApi } from './CashControlConfigurationsApi';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "CashControlConfigurations" of service "d365_metadata".
 */
export class CashControlConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashControlConfigurationsType<T>
{
  /**
   * Technical entity name for CashControlConfigurations.
   */
  static override _entityName = 'CashControlConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashControlConfigurations entity.
   */
  static _keys = [];
  /**
   * Cash Account Ledger Dimension Display Value.
   * @nullable
   */
  declare cashAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Participate In Cash Control.
   * @nullable
   */
  declare participateInCashControl?: NoYes | null;
  /**
   * Accounts Payable Account Ledger Dimension Display Value.
   * @nullable
   */
  declare accountsPayableAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Amount.
   */
  declare thresholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare apAccountDimension?: DimensionCombinations<T> | null;

  constructor(_entityApi: CashControlConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface CashControlConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cashAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  participateInCashControl?: NoYes | null;
  accountsPayableAccountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  thresholdAmount: DeserializedType<T, 'Edm.Decimal'>;
  apAccountDimension?: DimensionCombinationsType<T> | null;
}
