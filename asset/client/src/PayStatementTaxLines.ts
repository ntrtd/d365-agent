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
import type { PayStatementTaxLinesApi } from './PayStatementTaxLinesApi';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
import { NoYes } from './NoYes';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';

/**
 * This class represents the entity "PayStatementTaxLines" of service "d365_metadata".
 */
export class PayStatementTaxLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayStatementTaxLinesType<T>
{
  /**
   * Technical entity name for PayStatementTaxLines.
   */
  static override _entityName = 'PayStatementTaxLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayStatementTaxLines entity.
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
   * Tax Code Country Region Id.
   * @nullable
   */
  declare taxCodeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Tax Code Id.
   * @nullable
   */
  declare taxCodeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Line Overridden.
   * @nullable
   */
  declare lineOverridden?: NoYes | null;
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

  constructor(_entityApi: PayStatementTaxLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PayStatementTaxLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  taxCodeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  company?: DeserializedType<T, 'Edm.String'> | null;
  reversedPayStatementLineNum: DeserializedType<T, 'Edm.Decimal'>;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  taxCodeId?: DeserializedType<T, 'Edm.String'> | null;
  reversedPayStatementNumber?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  payStatementLineSource?: PayrollPayStatementLineSource | null;
  lineToRemove?: NoYes | null;
  accountingDistributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  employerContribution?: NoYes | null;
  lineOverridden?: NoYes | null;
  accountingDistributionLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  payStatementHeader?: PayStatementHeadersType<T> | null;
}
