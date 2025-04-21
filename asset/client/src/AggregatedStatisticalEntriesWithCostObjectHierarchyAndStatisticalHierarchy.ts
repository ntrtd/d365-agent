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
import type { AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyApi } from './AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyApi';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
import { FiscalQuarter } from './FiscalQuarter';

/**
 * This class represents the entity "AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy" of service "d365_metadata".
 */
export class AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyType<T>
{
  /**
   * Technical entity name for AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy.
   */
  static override _entityName =
    'AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchy entity.
   */
  static _keys = [
    'CostControlUnitName',
    'CostAccountingLedgerName',
    'CostAccountingDate'
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
   * Magnitude.
   */
  declare magnitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Object Dimension Hierarchy Level 2.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Statistical Dimension Hierarchy Level 15.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel15?: DeserializedType<
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
   * Cost Object Dimension Hierarchy Level 13.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Version Identification Name.
   * @nullable
   */
  declare versionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Dimension Member Description.
   * @nullable
   */
  declare statisticalDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 11.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Object Dimension Member Name.
   * @nullable
   */
  declare costObjectDimensionMemberName?: DeserializedType<
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
   * Period Offset.
   */
  declare periodOffset: DeserializedType<T, 'Edm.Int32'>;
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
   * Period Name.
   * @nullable
   */
  declare periodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Dimension Hierarchy Name.
   * @nullable
   */
  declare statisticalDimensionHierarchyName?: DeserializedType<
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
   * Cost Object Dimension Hierarchy Level 5.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Month.
   * @nullable
   */
  declare month?: FiscalPeriodMonth | null;
  /**
   * Cost Object Dimension Hierarchy Level 1.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel1?: DeserializedType<
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
   * Statistical Dimension Hierarchy Level 14.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Year Name.
   * @nullable
   */
  declare yearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Object Dimension Hierarchy Name.
   * @nullable
   */
  declare costObjectDimensionHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Dimension Member Name.
   * @nullable
   */
  declare statisticalDimensionMemberName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quarter Offset.
   */
  declare quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Statistical Dimension Hierarchy Level 10.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quarter.
   * @nullable
   */
  declare quarter?: FiscalQuarter | null;
  /**
   * Cost Object Dimension Hierarchy Level 7.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 13.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 3.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 2.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 1.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 7.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 6.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 5.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 4.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 9.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Statistical Dimension Hierarchy Level 8.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel8?: DeserializedType<
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
   * Cost Object Dimension Hierarchy Level 3.
   * @nullable
   */
  declare costObjectDimensionHierarchyLevel3?: DeserializedType<
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
   * Version Type.
   * @nullable
   */
  declare versionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Dimension Hierarchy Level 12.
   * @nullable
   */
  declare statisticalDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AggregatedStatisticalEntriesWithCostObjectHierarchyAndStatisticalHierarchyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costControlUnitName: DeserializedType<T, 'Edm.String'>;
  costAccountingLedgerName: DeserializedType<T, 'Edm.String'>;
  costAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  magnitude: DeserializedType<T, 'Edm.Decimal'>;
  costObjectDimensionHierarchyLevel2?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel15?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
  costObjectDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  versionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel11?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionMemberName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel9?: DeserializedType<T, 'Edm.String'> | null;
  periodOffset: DeserializedType<T, 'Edm.Int32'>;
  yearOffset: DeserializedType<T, 'Edm.Int32'>;
  sourceVersionIdentificationName?: DeserializedType<T, 'Edm.String'> | null;
  periodName?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionMemberDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel5?: DeserializedType<T, 'Edm.String'> | null;
  month?: FiscalPeriodMonth | null;
  costObjectDimensionHierarchyLevel1?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel4?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionHierarchyLevel14?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  yearName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionMemberName?: DeserializedType<T, 'Edm.String'> | null;
  quarterOffset: DeserializedType<T, 'Edm.Int32'>;
  statisticalDimensionHierarchyLevel10?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  quarter?: FiscalQuarter | null;
  costObjectDimensionHierarchyLevel7?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionHierarchyLevel13?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel7?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel6?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel5?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel4?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel9?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  statisticalDimensionHierarchyLevel8?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  costObjectDimensionHierarchyLevel8?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel3?: DeserializedType<T, 'Edm.String'> | null;
  costObjectDimensionHierarchyLevel6?: DeserializedType<T, 'Edm.String'> | null;
  versionType?: DeserializedType<T, 'Edm.String'> | null;
  statisticalDimensionHierarchyLevel12?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
