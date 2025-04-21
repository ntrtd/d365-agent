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
import type { PayStatementBenefitLinesApi } from './PayStatementBenefitLinesApi';
import { NoYes } from './NoYes';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "PayStatementBenefitLines" of service "d365_metadata".
 */
export class PayStatementBenefitLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementBenefitLinesType<T>
{
  /**
   * Technical entity name for PayStatementBenefitLines.
   */
  static override _entityName = 'PayStatementBenefitLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementBenefitLines entity.
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
   * Line Locked.
   * @nullable
   */
  declare lineLocked?: NoYes | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Premium Earning Amount.
   */
  declare premiumEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversed Pay Statement Line Num.
   */
  declare reversedPayStatementLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Id.
   * @nullable
   */
  declare benefitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversed Pay Statement Number.
   * @nullable
   */
  declare reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pay Statement Line Source.
   * @nullable
   */
  declare payStatementLineSource?: PayrollPayStatementLineSource | null;
  /**
   * Line To Remove.
   * @nullable
   */
  declare lineToRemove?: NoYes | null;
  /**
   * Premium Earning Hours.
   */
  declare premiumEarningHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Distribution Template Id.
   * @nullable
   */
  declare accountingDistributionTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Employer Contribution.
   * @nullable
   */
  declare employerContribution?: NoYes | null;
  /**
   * Base Earning Amount.
   */
  declare baseEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Overridden.
   * @nullable
   */
  declare lineOverridden?: NoYes | null;
  /**
   * Base Earning Hours.
   */
  declare baseEarningHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Distribution Legal Entity.
   * @nullable
   */
  declare accountingDistributionLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: PayStatementBenefitLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementBenefitLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineLocked?: NoYes | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  premiumEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  reversedPayStatementLineNum: DeserializedType<T, 'Edm.Decimal'>;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  benefitId?: DeserializedType<T, 'Edm.String'> | null;
  reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  payStatementLineSource?: PayrollPayStatementLineSource | null;
  lineToRemove?: NoYes | null;
  premiumEarningHours: DeserializedType<T, 'Edm.Decimal'>;
  accountingDistributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  employerContribution?: NoYes | null;
  baseEarningAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineOverridden?: NoYes | null;
  baseEarningHours: DeserializedType<T, 'Edm.Decimal'>;
  accountingDistributionLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  payStatementHeader?: PayStatementHeadersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
