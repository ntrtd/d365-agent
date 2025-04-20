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
import type { ParametersApi } from './ParametersApi';
import { GbtOrgTypeCn } from './GbtOrgTypeCn';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "Parameters" of service "d365_metadata".
 */
export class Parameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ParametersType<T>
{
  /**
   * Technical entity name for Parameters.
   */
  static override _entityName = 'Parameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Parameters entity.
   */
  static _keys = ['dataAreaId', 'key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cash Flow Dimension.
   * @nullable
   */
  declare cashFlowDimension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Er Model Name.
   * @nullable
   */
  declare erModelName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry.
   * @nullable
   */
  declare industry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cashflow Additional.
   * @nullable
   */
  declare cashflowAdditional?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cashflow Major Sheet.
   * @nullable
   */
  declare cashflowMajorSheet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset Group Code Format.
   * @nullable
   */
  declare fixedAssetGroupCodeFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cashflow Code Format.
   * @nullable
   */
  declare cashflowCodeFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disposal Ledger Dimension Display Value.
   * @nullable
   */
  declare disposalLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Acquisition Ledger Dimension Display Value.
   * @nullable
   */
  declare acquisitionLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Org Number.
   * @nullable
   */
  declare orgNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changes Of Owners Equity.
   * @nullable
   */
  declare changesOfOwnersEquity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Org Type.
   * @nullable
   */
  declare orgType?: GbtOrgTypeCn | null;
  /**
   * Income Sheet.
   * @nullable
   */
  declare incomeSheet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balance Sheet.
   * @nullable
   */
  declare balanceSheet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation Ledger Dimension Display Value.
   * @nullable
   */
  declare depreciationLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  cashFlowDimension?: DeserializedType<T, 'Edm.String'> | null;
  erModelName?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.String'> | null;
  cashflowAdditional?: DeserializedType<T, 'Edm.String'> | null;
  cashflowMajorSheet?: DeserializedType<T, 'Edm.String'> | null;
  fixedAssetGroupCodeFormat?: DeserializedType<T, 'Edm.String'> | null;
  cashflowCodeFormat?: DeserializedType<T, 'Edm.String'> | null;
  disposalLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  acquisitionLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  orgNumber?: DeserializedType<T, 'Edm.String'> | null;
  changesOfOwnersEquity?: DeserializedType<T, 'Edm.String'> | null;
  orgType?: GbtOrgTypeCn | null;
  incomeSheet?: DeserializedType<T, 'Edm.String'> | null;
  balanceSheet?: DeserializedType<T, 'Edm.String'> | null;
  depreciationLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
