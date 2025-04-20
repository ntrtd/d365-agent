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
import type { DeductionArrearRecoveriesApi } from './DeductionArrearRecoveriesApi';
import { PrlArrearOffsetType } from './PrlArrearOffsetType';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "DeductionArrearRecoveries" of service "d365_metadata".
 */
export class DeductionArrearRecoveries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeductionArrearRecoveriesType<T>
{
  /**
   * Technical entity name for DeductionArrearRecoveries.
   */
  static override _entityName = 'DeductionArrearRecoveries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeductionArrearRecoveries entity.
   */
  static _keys = [
    'dataAreaId',
    'PayStatementNumber',
    'BenefitId',
    'ArrearsChangeType',
    'RecoveryCreatedBy',
    'RecoveryCreatedDateTime'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Statement Number.
   */
  declare payStatementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Arrears Change Type.
   * @nullable
   */
  declare arrearsChangeType?: PrlArrearOffsetType | null;
  /**
   * Recovery Created By.
   */
  declare recoveryCreatedBy: DeserializedType<T, 'Edm.String'>;
  /**
   * Recovery Created Date Time.
   */
  declare recoveryCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount In Transaction Currency.
   */
  declare amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PayStatementHeaders} entity.
   */
  declare payStatementHeader?: PayStatementHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare benefit?: Benefits<T> | null;

  constructor(_entityApi: DeductionArrearRecoveriesApi<T>) {
    super(_entityApi);
  }
}

export interface DeductionArrearRecoveriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  benefitId: DeserializedType<T, 'Edm.String'>;
  arrearsChangeType?: PrlArrearOffsetType | null;
  recoveryCreatedBy: DeserializedType<T, 'Edm.String'>;
  recoveryCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
