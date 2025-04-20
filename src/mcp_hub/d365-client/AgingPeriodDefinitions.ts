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
import type { AgingPeriodDefinitionsApi } from './AgingPeriodDefinitionsApi';
import { ForwardBackwardPrinting } from './ForwardBackwardPrinting';
import { PerDayWeekMthQtYr } from './PerDayWeekMthQtYr';
import { CustAgingIndicator } from './CustAgingIndicator';

/**
 * This class represents the entity "AgingPeriodDefinitions" of service "d365_metadata".
 */
export class AgingPeriodDefinitions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AgingPeriodDefinitionsType<T>
{
  /**
   * Technical entity name for AgingPeriodDefinitions.
   */
  static override _entityName = 'AgingPeriodDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AgingPeriodDefinitions entity.
   */
  static _keys = ['dataAreaId', 'AgingPeriodDefinition', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Aging Period Definition.
   */
  declare agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Direction.
   * @nullable
   */
  declare printDirection?: ForwardBackwardPrinting | null;
  /**
   * Period.
   * @nullable
   */
  declare period?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: PerDayWeekMthQtYr | null;
  /**
   * Aging Indicator.
   * @nullable
   */
  declare agingIndicator?: CustAgingIndicator | null;
  /**
   * Unit.
   */
  declare unit: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AgingPeriodDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface AgingPeriodDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agingPeriodDefinition: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  printDirection?: ForwardBackwardPrinting | null;
  period?: DeserializedType<T, 'Edm.String'> | null;
  interval?: PerDayWeekMthQtYr | null;
  agingIndicator?: CustAgingIndicator | null;
  unit: DeserializedType<T, 'Edm.Int32'>;
}
