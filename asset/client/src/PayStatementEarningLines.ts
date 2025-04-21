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
import type { PayStatementEarningLinesApi } from './PayStatementEarningLinesApi';
import { NoYes } from './NoYes';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { Workers, WorkersType } from './Workers';
import { WorkerTaxRegions, WorkerTaxRegionsType } from './WorkerTaxRegions';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "PayStatementEarningLines" of service "d365_metadata".
 */
export class PayStatementEarningLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementEarningLinesType<T>
{
  /**
   * Technical entity name for PayStatementEarningLines.
   */
  static override _entityName = 'PayStatementEarningLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementEarningLines entity.
   */
  static _keys = ['PayStatementNumber', 'LineNumber'];
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Employer Contribution.
   * @nullable
   */
  declare employerContribution?: NoYes | null;
  /**
   * Earnings Date.
   */
  declare earningsDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accounting Distribution Legal Entity.
   * @nullable
   */
  declare accountingDistributionLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Overridden.
   * @nullable
   */
  declare lineOverridden?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Benefit Id.
   * @nullable
   */
  declare compensationBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template Id.
   * @nullable
   */
  declare accountingDistributionTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Earning Code Id.
   * @nullable
   */
  declare earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Statement Line Source.
   * @nullable
   */
  declare payStatementLineSource?: PayrollPayStatementLineSource | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversed Pay Statement Number.
   * @nullable
   */
  declare reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line To Remove.
   * @nullable
   */
  declare lineToRemove?: NoYes | null;
  /**
   * Earning Rate.
   */
  declare earningRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * General Liability Insurance Benefit Id.
   * @nullable
   */
  declare generalLiabilityInsuranceBenefitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Worker Tax Region Location Id.
   * @nullable
   */
  declare workerTaxRegionLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reversed Pay Statement Line Num.
   */
  declare reversedPayStatementLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkerTaxRegions} entity.
   */
  declare workerTaxRegion?: WorkerTaxRegions<T> | null;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;

  constructor(_entityApi: PayStatementEarningLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementEarningLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  employerContribution?: NoYes | null;
  earningsDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingDistributionLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  lineOverridden?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  compensationBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payStatementLineSource?: PayrollPayStatementLineSource | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineToRemove?: NoYes | null;
  earningRate: DeserializedType<T, 'Edm.Decimal'>;
  generalLiabilityInsuranceBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  workerTaxRegionLocationId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  reversedPayStatementLineNum: DeserializedType<T, 'Edm.Decimal'>;
  positionV2?: PositionsV2Type<T> | null;
  worker?: WorkersType<T> | null;
  workerTaxRegion?: WorkerTaxRegionsType<T> | null;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
