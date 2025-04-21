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
import type { RrgReportTable_RuApi } from './RrgReportTable_RuApi';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgCurrencyForCalcRu } from './LedgerRrgCurrencyForCalcRu';
import { LedgerRrgReportTypeRu } from './LedgerRrgReportTypeRu';

/**
 * This class represents the entity "RRGReportTable_RU" of service "d365_metadata".
 */
export class RrgReportTable_Ru<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RrgReportTable_RuType<T>
{
  /**
   * Technical entity name for RrgReportTable_Ru.
   */
  static override _entityName = 'RRGReportTable_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgReportTable_Ru entity.
   */
  static _keys = ['dataAreaId', 'RepCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rep Code.
   */
  declare repCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: LedgerRrgDataTypeRu | null;
  /**
   * Template.
   * @nullable
   */
  declare template?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type By Correct.
   * @nullable
   */
  declare typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  /**
   * Model Num.
   * @nullable
   */
  declare modelNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Hierarchy Hash Key.
   */
  declare dimensionHierarchyHashKey: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Scale.
   */
  declare scale: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Rrge Template Id.
   * @nullable
   */
  declare ledgerRrgeTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency For Calc.
   * @nullable
   */
  declare currencyForCalc?: LedgerRrgCurrencyForCalcRu | null;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: LedgerRrgReportTypeRu | null;
  /**
   * Ledger Period Code.
   * @nullable
   */
  declare ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Point Sign Num.
   */
  declare pointSignNum: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RrgReportTable_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgReportTable_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  repCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: LedgerRrgDataTypeRu | null;
  template?: DeserializedType<T, 'Edm.String'> | null;
  typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  modelNum?: DeserializedType<T, 'Edm.String'> | null;
  dimensionHierarchyHashKey: DeserializedType<T, 'Edm.Guid'>;
  scale: DeserializedType<T, 'Edm.Decimal'>;
  ledgerRrgeTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  currencyForCalc?: LedgerRrgCurrencyForCalcRu | null;
  reportType?: LedgerRrgReportTypeRu | null;
  ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  pointSignNum: DeserializedType<T, 'Edm.Int32'>;
}
