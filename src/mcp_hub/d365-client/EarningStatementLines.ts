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
import type { EarningStatementLinesApi } from './EarningStatementLinesApi';
import { PayrollPaymentProcessingStatus } from './PayrollPaymentProcessingStatus';
import { NoYes } from './NoYes';
import { PayrollGenerationSource } from './PayrollGenerationSource';
import { EarningStatements, EarningStatementsType } from './EarningStatements';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "EarningStatementLines" of service "d365_metadata".
 */
export class EarningStatementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EarningStatementLinesType<T>
{
  /**
   * Technical entity name for EarningStatementLines.
   */
  static override _entityName = 'EarningStatementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EarningStatementLines entity.
   */
  static _keys = ['Company', 'EarningsStatementNumber', 'LineNumber'];
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Earnings Statement Number.
   */
  declare earningsStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Retroactive Rate.
   */
  declare originalRetroactiveRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker General Liability Insurance Benefit Id.
   * @nullable
   */
  declare workerGeneralLiabilityInsuranceBenefitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: PayrollPaymentProcessingStatus | null;
  /**
   * Earning Rate.
   */
  declare earningRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Tax Region Location Id.
   * @nullable
   */
  declare workerTaxRegionLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property.
   * @nullable
   */
  declare projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template.
   * @nullable
   */
  declare accountingDistributionTemplate?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Manual.
   * @nullable
   */
  declare isManual?: NoYes | null;
  /**
   * Earning Code Id.
   * @nullable
   */
  declare earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Originating Earning Statement Line Number.
   */
  declare originatingEarningStatementLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Earnings Date.
   */
  declare earningsDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Generation Source.
   * @nullable
   */
  declare generationSource?: PayrollGenerationSource | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Modified.
   * @nullable
   */
  declare lineModified?: NoYes | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Originating Earning Statement Number.
   * @nullable
   */
  declare originatingEarningStatementNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category.
   * @nullable
   */
  declare projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Compensation Benefit Id.
   * @nullable
   */
  declare workerCompensationBenefitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Premium Earning Code.
   * @nullable
   */
  declare premiumEarningCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EarningStatements} entity.
   */
  declare earningStatement?: EarningStatements<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: EarningStatementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface EarningStatementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  company: DeserializedType<T, 'Edm.String'>;
  earningsStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  originalRetroactiveRate: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  workerGeneralLiabilityInsuranceBenefitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  paymentStatus?: PayrollPaymentProcessingStatus | null;
  earningRate: DeserializedType<T, 'Edm.Decimal'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerTaxRegionLocationId?: DeserializedType<T, 'Edm.String'> | null;
  projectLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate?: DeserializedType<T, 'Edm.String'> | null;
  isManual?: NoYes | null;
  earningCodeId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  originatingEarningStatementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  earningsDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  generationSource?: PayrollGenerationSource | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  lineModified?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  originatingEarningStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectCategory?: DeserializedType<T, 'Edm.String'> | null;
  workerCompensationBenefitId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  premiumEarningCode?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  earningStatement?: EarningStatementsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
