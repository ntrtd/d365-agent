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
import type { AdvLinesApi } from './AdvLinesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AdvLines" of service "d365_metadata".
 */
export class AdvLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AdvLinesType<T>
{
  /**
   * Technical entity name for AdvLines.
   */
  static override _entityName = 'AdvLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvLines entity.
   */
  static _keys = ['dataAreaId', 'AdvanceId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Advance Id.
   */
  declare advanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disbursement Date.
   */
  declare disbursementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Over Rate.
   * @nullable
   */
  declare overRate?: NoYes | null;
  /**
   * Document Name.
   * @nullable
   */
  declare documentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Amount Of Advance Report.
   */
  declare confirmedAmountOfAdvanceReport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Main Account.
   * @nullable
   */
  declare mainAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AdvLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AdvLinesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  advanceId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  disbursementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  overRate?: NoYes | null;
  documentName?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  confirmedAmountOfAdvanceReport: DeserializedType<T, 'Edm.Decimal'>;
  mainAccount?: DeserializedType<T, 'Edm.String'> | null;
}
