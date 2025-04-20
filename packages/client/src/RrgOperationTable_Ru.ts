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
import type { RrgOperationTable_RuApi } from './RrgOperationTable_RuApi';
import { LedgerRrgBalanceDetailRu } from './LedgerRrgBalanceDetailRu';
import { LedgerRrgIntervalTypeRu } from './LedgerRrgIntervalTypeRu';
import { LedgerRrgFieldOperation } from './LedgerRrgFieldOperation';
import { LedgerRrgBalancePeriodTypeRu } from './LedgerRrgBalancePeriodTypeRu';
import { LedgerRrgDataTypeRu } from './LedgerRrgDataTypeRu';
import { LedgerRrgTypeByCorrectRu } from './LedgerRrgTypeByCorrectRu';
import { LedgerRrgOperationTypeRu } from './LedgerRrgOperationTypeRu';
import { Operator } from './Operator';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RRGOperationTable_RU" of service "d365_metadata".
 */
export class RrgOperationTable_Ru<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RrgOperationTable_RuType<T>
{
  /**
   * Technical entity name for RrgOperationTable_Ru.
   */
  static override _entityName = 'RRGOperationTable_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RrgOperationTable_Ru entity.
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
   * Query Base Date Field.
   */
  declare queryBaseDateField: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Constant Text.
   * @nullable
   */
  declare constantText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * R Tax 25 Field Id.
   */
  declare rTax25FieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Balance Detail.
   * @nullable
   */
  declare balanceDetail?: LedgerRrgBalanceDetailRu | null;
  /**
   * Offset Account Interval Type.
   * @nullable
   */
  declare offsetAccountIntervalType?: LedgerRrgIntervalTypeRu | null;
  /**
   * Query.
   * @nullable
   */
  declare query?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * R Tax 25 Register Id.
   * @nullable
   */
  declare rTax25RegisterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Line Id.
   * @nullable
   */
  declare refLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query Field Operation.
   * @nullable
   */
  declare queryFieldOperation?: LedgerRrgFieldOperation | null;
  /**
   * Constant Value.
   */
  declare constantValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Period Code.
   * @nullable
   */
  declare ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query Selected Field.
   */
  declare querySelectedField: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Balance Type.
   * @nullable
   */
  declare balanceType?: LedgerRrgBalancePeriodTypeRu | null;
  /**
   * Data Type.
   * @nullable
   */
  declare dataType?: LedgerRrgDataTypeRu | null;
  /**
   * Ref Table Name.
   * @nullable
   */
  declare refTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Interval Type.
   * @nullable
   */
  declare accountIntervalType?: LedgerRrgIntervalTypeRu | null;
  /**
   * Type By Correct.
   * @nullable
   */
  declare typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  /**
   * Ledger Rrge Properties W Property Id.
   * @nullable
   */
  declare ledgerRrgePropertiesWPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Operation.
   * @nullable
   */
  declare ledgerOperation?: LedgerRrgOperationTypeRu | null;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Model Num.
   * @nullable
   */
  declare modelNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num Mask.
   * @nullable
   */
  declare accountNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation.
   * @nullable
   */
  declare operation?: Operator | null;
  /**
   * Offset Account Num Mask.
   * @nullable
   */
  declare offsetAccountNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Query Select Report Date.
   * @nullable
   */
  declare querySelectReportDate?: NoYes | null;

  constructor(_entityApi: RrgOperationTable_RuApi<T>) {
    super(_entityApi);
  }
}

export interface RrgOperationTable_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineId: DeserializedType<T, 'Edm.Guid'>;
  queryBaseDateField: DeserializedType<T, 'Edm.Int32'>;
  constantText?: DeserializedType<T, 'Edm.String'> | null;
  rTax25FieldId: DeserializedType<T, 'Edm.Int32'>;
  balanceDetail?: LedgerRrgBalanceDetailRu | null;
  offsetAccountIntervalType?: LedgerRrgIntervalTypeRu | null;
  query?: DeserializedType<T, 'Edm.Binary'> | null;
  rTax25RegisterId?: DeserializedType<T, 'Edm.String'> | null;
  refLineId?: DeserializedType<T, 'Edm.String'> | null;
  queryFieldOperation?: LedgerRrgFieldOperation | null;
  constantValue: DeserializedType<T, 'Edm.Decimal'>;
  ledgerPeriodCode?: DeserializedType<T, 'Edm.String'> | null;
  querySelectedField: DeserializedType<T, 'Edm.Int32'>;
  balanceType?: LedgerRrgBalancePeriodTypeRu | null;
  dataType?: LedgerRrgDataTypeRu | null;
  refTableName?: DeserializedType<T, 'Edm.String'> | null;
  accountIntervalType?: LedgerRrgIntervalTypeRu | null;
  typeByCorrect?: LedgerRrgTypeByCorrectRu | null;
  ledgerRrgePropertiesWPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerOperation?: LedgerRrgOperationTypeRu | null;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  modelNum?: DeserializedType<T, 'Edm.String'> | null;
  accountNumMask?: DeserializedType<T, 'Edm.String'> | null;
  operation?: Operator | null;
  offsetAccountNumMask?: DeserializedType<T, 'Edm.String'> | null;
  querySelectReportDate?: NoYes | null;
}
