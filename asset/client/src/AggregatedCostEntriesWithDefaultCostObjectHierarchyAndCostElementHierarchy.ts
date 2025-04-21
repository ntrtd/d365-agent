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
import type { AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyApi } from './AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyApi';
import { CamCostBehaviorClassificationType } from './CamCostBehaviorClassificationType';
import { FiscalQuarter } from './FiscalQuarter';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';

/**
 * This class represents the entity "AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy" of service "d365_metadata".
 */
export class AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyType<T>
{
  /**
   * Technical entity name for AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy.
   */
  static override _entityName =
    'AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchy entity.
   */
  static _keys = [
    'CostControlUnitName',
    'CostAccountingLedgerName',
    'CostAccountingDate',
    'CostElementDimensionMemberName',
    'CostObjectDimensionMemberName',
    'CostBehavior'
  ];
  /**
   * Cost Control Unit Name.
   */
  declare costControlUnitName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Accounting Ledger Name.
   */
  declare costAccountingLedgerName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Accounting Date.
   */
  declare costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Element Dimension Member Name.
   */
  declare costElementDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Object Dimension Member Name.
   */
  declare costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Behavior.
   * @nullable
   */
  declare costBehavior?: CamCostBehaviorClassificationType | null;
  /**
   * Cost Element Dimension Hierarchy Level 13.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 6.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 9.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: FiscalQuarter | null;
  /**
   * Cost Object Dimension Hierarchy Level 3.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 15.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Member Description.
   * @nullable
   */
  declare costObjectDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Version Type.
   * @nullable
   */
  declare versionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Element Dimension Hierarchy Level 10.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 5.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 8.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Accounting Currency Amount.
   */
  declare costAccountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year Name.
   * @nullable
   */
  declare yearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version Identification Name.
   * @nullable
   */
  declare versionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Object Dimension Hierarchy Level 14.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 15.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Version Identification Name.
   * @nullable
   */
  declare sourceVersionIdentificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 10.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 11.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 12.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Name.
   * @nullable
   */
  declare costElementDimensionHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 13.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 2.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 3.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Period Offset.
   */
  declare periodOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Element Dimension Hierarchy Level 1.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 2.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 6.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Period Name.
   * @nullable
   */
  declare periodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Element Dimension Hierarchy Level 7.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 12.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 4.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Month.
   * @nullable
   */
  declare month?: FiscalPeriodMonth | null;
  /**
   * Cost Object Dimension Hierarchy Level 7.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 5.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 11.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 4.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 8.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Hierarchy Level 9.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quarter Offset.
   */
  declare quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Element Dimension Hierarchy Level 14.
   * @nullable
   */
  declare costElementDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Hierarchy Level 1.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Element Dimension Member Description.
   * @nullable
   */
  declare costElementDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AggregatedCostEntriesWithDefaultCostObjectHierarchyAndCostElementHierarchyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costControlUnitName: DeserializedType<T, 'Edm.String'>;
  costAccountingLedgerName: DeserializedType<T, 'Edm.String'>;
  costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costElementDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  costBehavior?: CamCostBehaviorClassificationType | null;
  costElementDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel6?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel9?: DeserializedType<T, 'Edm.String'> | null;
  quarter?: FiscalQuarter | null;
  costObjectDimensionHierarchyLevel3?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  versionType?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel5?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel8?: DeserializedType<T, 'Edm.String'> | null;
  costAccountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  yearName?: DeserializedType<T, 'Edm.String'> | null;
  versionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  yearOffset: DeserializedType<T, 'Edm.Int32'>;
  sourceVersionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  periodOffset: DeserializedType<T, 'Edm.Int32'>;
  costElementDimensionHierarchyLevel1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel2?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  month?: FiscalPeriodMonth | null;
  costObjectDimensionHierarchyLevel7?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel4?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionHierarchyLevel8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costElementDimensionHierarchyLevel9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  costElementDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel1?: DeserializedType<T, 'Edm.String'> | null;
  costElementDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
