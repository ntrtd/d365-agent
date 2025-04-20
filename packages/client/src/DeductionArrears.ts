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
import type { DeductionArrearsApi } from './DeductionArrearsApi';
import { NoYes } from './NoYes';
import {
  PayStatementHeaders,
  PayStatementHeadersType
} from './PayStatementHeaders';
import { Benefits, BenefitsType } from './Benefits';

/**
 * This class represents the entity "DeductionArrears" of service "d365_metadata".
 */
export class DeductionArrears<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeductionArrearsType<T>
{
  /**
   * Technical entity name for DeductionArrears.
   */
  static override _entityName = 'DeductionArrears';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeductionArrears entity.
   */
  static _keys = ['dataAreaId', 'PayStatementNumber', 'BenefitId'];
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
   * Fully Recovered.
   * @nullable
   */
  declare fullyRecovered?: NoYes | null;
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

  constructor(_entityApi: DeductionArrearsApi<T>) {
    super(_entityApi);
  }
}

export interface DeductionArrearsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payStatementNumber: DeserializedType<T, 'Edm.String'>;
  benefitId: DeserializedType<T, 'Edm.String'>;
  fullyRecovered?: NoYes | null;
  amountInTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  payStatementHeader?: PayStatementHeadersType<T> | null;
  benefit?: BenefitsType<T> | null;
}
