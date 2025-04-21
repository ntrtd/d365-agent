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
import type { LedgerAccountGroupsApi } from './LedgerAccountGroupsApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LedgerAccountGroups" of service "d365_metadata".
 */
export class LedgerAccountGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LedgerAccountGroupsType<T>
{
  /**
   * Technical entity name for LedgerAccountGroups.
   */
  static override _entityName = 'LedgerAccountGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerAccountGroups entity.
   */
  static _keys = ['dataAreaId', 'LedgerPostingGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Posting Group.
   */
  declare ledgerPostingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Dtl Display Value.
   * @nullable
   */
  declare dtlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dta Display Value.
   * @nullable
   */
  declare dtaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Writing Off Dtl Display Value.
   * @nullable
   */
  declare writingOffDtlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Writing Off Dta Display Value.
   * @nullable
   */
  declare writingOffDtaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account For Fa Taxes Display Value.
   * @nullable
   */
  declare accountForFaTaxesDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ctl Display Value.
   * @nullable
   */
  declare ctlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cta Display Value.
   * @nullable
   */
  declare ctaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: LedgerAccountGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerAccountGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ledgerPostingGroup: DeserializedType<T, 'Edm.String'>;
  dtlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dtaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  writingOffDtlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  writingOffDtaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  accountForFaTaxesDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ctlDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ctaDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
