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
import type { UsTaxTransactionHistoryDetailsApi } from './UsTaxTransactionHistoryDetailsApi';
import { PayrollUsState } from './PayrollUsState';
import { PayrollTaxCodeType } from './PayrollTaxCodeType';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "USTaxTransactionHistoryDetails" of service "d365_metadata".
 */
export class UsTaxTransactionHistoryDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UsTaxTransactionHistoryDetailsType<T>
{
  /**
   * Technical entity name for UsTaxTransactionHistoryDetails.
   */
  static override _entityName = 'USTaxTransactionHistoryDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UsTaxTransactionHistoryDetails entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'TransDate',
    'PayStatementNumber',
    'Code'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Subject Wages.
   */
  declare grossSubjectWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prior State Wage Amount.
   */
  declare priorStateWageAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prior State.
   * @nullable
   */
  declare priorState?: PayrollUsState | null;
  /**
   * Subject Wages.
   */
  declare subjectWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wage Base.
   */
  declare wageBase: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Wages.
   */
  declare grossWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: PayrollTaxCodeType | null;
  /**
   * Calculated Tax Amount.
   */
  declare calculatedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excess Wages.
   */
  declare excessWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: UsTaxTransactionHistoryDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface UsTaxTransactionHistoryDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  grossSubjectWages: DeserializedType<T, 'Edm.Decimal'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  priorStateWageAmount: DeserializedType<T, 'Edm.Decimal'>;
  priorState?: PayrollUsState | null;
  subjectWages: DeserializedType<T, 'Edm.Decimal'>;
  wageBase: DeserializedType<T, 'Edm.Decimal'>;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  grossWages: DeserializedType<T, 'Edm.Decimal'>;
  type?: PayrollTaxCodeType | null;
  calculatedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  excessWages: DeserializedType<T, 'Edm.Decimal'>;
  worker?: DeserializedType<T, 'Edm.String'> | null;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
