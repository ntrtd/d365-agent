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
import type { SiteGateEntryLinesApi } from './SiteGateEntryLinesApi';

/**
 * This class represents the entity "SiteGateEntryLines" of service "d365_metadata".
 */
export class SiteGateEntryLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SiteGateEntryLinesType<T>
{
  /**
   * Technical entity name for SiteGateEntryLines.
   */
  static override _entityName = 'SiteGateEntryLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SiteGateEntryLines entity.
   */
  static _keys = ['dataAreaId', 'GateEntry', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Gate Entry.
   */
  declare gateEntry: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Measuring Running Number.
   * @nullable
   */
  declare measuringRunningNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Challan Date.
   */
  declare challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Challan Qty.
   */
  declare challanQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Measuring Instrument Id.
   * @nullable
   */
  declare measuringInstrumentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tare Qty.
   */
  declare tareQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Unit.
   * @nullable
   */
  declare inventoryUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tare Weight Unit.
   * @nullable
   */
  declare tareWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Challan Number.
   * @nullable
   */
  declare challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measured Qty.
   */
  declare measuredQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measurement.
   * @nullable
   */
  declare unitOfMeasurement?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SiteGateEntryLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SiteGateEntryLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  gateEntry: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  measuringRunningNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  challanDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  challanQty: DeserializedType<T, 'Edm.Decimal'>;
  measuringInstrumentId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  tareQty: DeserializedType<T, 'Edm.Decimal'>;
  inventoryUnit?: DeserializedType<T, 'Edm.String'> | null;
  tareWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  challanNumber?: DeserializedType<T, 'Edm.String'> | null;
  measuredQty: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasurement?: DeserializedType<T, 'Edm.String'> | null;
}
