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
import type { WithholdLedgerAccountGroupsApi } from './WithholdLedgerAccountGroupsApi';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "WithholdLedgerAccountGroups" of service "d365_metadata".
 */
export class WithholdLedgerAccountGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdLedgerAccountGroupsType<T>
{
  /**
   * Technical entity name for WithholdLedgerAccountGroups.
   */
  static override _entityName = 'WithholdLedgerAccountGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdLedgerAccountGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxWithholdAccountGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Account Group.
   */
  declare taxWithholdAccountGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Ledger Dimension Display Value.
   * @nullable
   */
  declare expenseLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Withhold Ledger Dimension Display Value.
   * @nullable
   */
  declare taxWithholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Withhodl Settlement Ledger Dimension Display Value.
   * @nullable
   */
  declare taxWithhodlSettlementLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Withhold Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare taxWithholdOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode: WithholdingTaxCodes<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: WithholdLedgerAccountGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdLedgerAccountGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdAccountGroup: DeserializedType<T, 'Edm.String'>;
  expenseLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  taxWithhodlSettlementLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  taxWithholdOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  withholdingTaxCode: WithholdingTaxCodesType<T>[];
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
