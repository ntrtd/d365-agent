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
import type { RrgCellTable_RuApi } from './RrgCellTable_RuApi';
import { NoYes } from './NoYes';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { SysAlignment } from './SysAlignment';

/**
 * This class represents the entity "RRGCellTable_RU" of service "d365_metadata".
 */
export class RrgCellTable_Ru<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RrgCellTable_RuType<T>
{
  /**
   * Technical entity name for RrgCellTable_Ru.
   */
  static override _entityName = 'RRGCellTable_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgCellTable_Ru entity.
   */
  static _keys = ['dataAreaId', 'LineId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Cell Code.
   * @nullable
   */
  declare cellCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Static.
   * @nullable
   */
  declare isStatic?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * R Tax 25 Register Id.
   * @nullable
   */
  declare rTax25RegisterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: LedgerRrgDataTypeRu | null;
  /**
   * Length.
   */
  declare length: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Type By Correct.
   * @nullable
   */
  declare typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  /**
   * Rep Code.
   * @nullable
   */
  declare repCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Num.
   * @nullable
   */
  declare modelNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alignment.
   * @nullable
   */
  declare alignment?: SysAlignment | null;
  /**
   * Ledger Period Code.
   * @nullable
   */
  declare ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Empty Char.
   * @nullable
   */
  declare emptyChar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Point Sign Num.
   */
  declare pointSignNum: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RrgCellTable_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgCellTable_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  cellCode?: DeserializedType<T, 'Edm.String'> | null;
  isStatic?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  rTax25RegisterId?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: LedgerRrgDataTypeRu | null;
  length: DeserializedType<T, 'Edm.Int32'>;
  typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  repCode?: DeserializedType<T, 'Edm.String'> | null;
  modelNum?: DeserializedType<T, 'Edm.String'> | null;
  alignment?: SysAlignment | null;
  ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  emptyChar?: DeserializedType<T, 'Edm.String'> | null;
  pointSignNum: DeserializedType<T, 'Edm.Int32'>;
}
