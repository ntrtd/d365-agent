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
import type { UsTaxTransactionHistoriesApi } from './UsTaxTransactionHistoriesApi';
import { PayrollTaxResidency } from './PayrollTaxResidency';
import { PayrollUsState } from './PayrollUsState';
import { PrlTaxPayType } from './PrlTaxPayType';
import { Workers, WorkersType } from './Workers';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "USTaxTransactionHistories" of service "d365_metadata".
 */
export class UsTaxTransactionHistories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UsTaxTransactionHistoriesType<T>
{
  /**
   * Technical entity name for UsTaxTransactionHistories.
   */
  static override _entityName = 'USTaxTransactionHistories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UsTaxTransactionHistories entity.
   */
  static _keys = [
    'PersonnelNumber',
    'TaxCodeId',
    'TransDate',
    'CountryRegionId',
    'SequenceNumber'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Residency.
   * @nullable
   */
  declare residency?: PayrollTaxResidency | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Statement Number.
   * @nullable
   */
  declare payStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Political Sub Division Id.
   * @nullable
   */
  declare politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wage Base.
   */
  declare wageBase: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Pay Type.
   * @nullable
   */
  declare taxPayType?: PrlTaxPayType | null;
  /**
   * Unique Tax Id.
   * @nullable
   */
  declare uniqueTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Wages.
   */
  declare grossWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taxation State.
   * @nullable
   */
  declare taxationState?: PayrollUsState | null;
  /**
   * Calculated Tax Amount.
   */
  declare calculatedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excess Wages.
   */
  declare excessWages: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: UsTaxTransactionHistoriesApi<T>) {
    super(_entityApi);
  }
}

export interface UsTaxTransactionHistoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  residency?: PayrollTaxResidency | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  grossSubjectWages: DeserializedType<T, 'Edm.Decimal'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  priorStateWageAmount: DeserializedType<T, 'Edm.Decimal'>;
  priorState?: PayrollUsState | null;
  subjectWages: DeserializedType<T, 'Edm.Decimal'>;
  politicalSubDivisionId?: DeserializedType<T, 'Edm.String'> | null;
  wageBase: DeserializedType<T, 'Edm.Decimal'>;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  taxPayType?: PrlTaxPayType | null;
  uniqueTaxId?: DeserializedType<T, 'Edm.String'> | null;
  grossWages: DeserializedType<T, 'Edm.Decimal'>;
  taxationState?: PayrollUsState | null;
  calculatedTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  excessWages: DeserializedType<T, 'Edm.Decimal'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
