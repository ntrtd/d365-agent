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
import type { EarningStatementsApi } from './EarningStatementsApi';
import {
  EarningStatementLines,
  EarningStatementLinesType
} from './EarningStatementLines';
import {
  EarningStatementLineInquiries,
  EarningStatementLineInquiriesType
} from './EarningStatementLineInquiries';

/**
 * This class represents the entity "EarningStatements" of service "d365_metadata".
 */
export class EarningStatements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EarningStatementsType<T>
{
  /**
   * Technical entity name for EarningStatements.
   */
  static override _entityName = 'EarningStatements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EarningStatements entity.
   */
  static _keys = ['Company', 'EarningsStatementNumber'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Earnings Statement Number.
   */
  declare earningsStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Cycle Id.
   * @nullable
   */
  declare payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Period End Date.
   */
  declare payPeriodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EarningStatementLines} entity.
   */
  declare earningStatementLine: EarningStatementLines<T>[];
  /**
   * One-to-many navigation property to the {@link EarningStatementLineInquiries} entity.
   */
  declare payrollEarningStatementLineInquiry: EarningStatementLineInquiries<T>[];

  constructor(_entityApi: EarningStatementsApi<T>) {
    super(_entityApi);
  }
}

export interface EarningStatementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  earningsStatementNumber: DeserializedType<T, 'Edm.String'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  payCycleId?: DeserializedType<T, 'Edm.String'> | null;
  payPeriodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  earningStatementLine: EarningStatementLinesType<T>[];
  payrollEarningStatementLineInquiry: EarningStatementLineInquiriesType<T>[];
}
