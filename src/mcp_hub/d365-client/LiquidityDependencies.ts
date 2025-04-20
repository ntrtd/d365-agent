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
import type { LiquidityDependenciesApi } from './LiquidityDependenciesApi';
import { TransBudget } from './TransBudget';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * This class represents the entity "LiquidityDependencies" of service "d365_metadata".
 */
export class LiquidityDependencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LiquidityDependenciesType<T>
{
  /**
   * Technical entity name for LiquidityDependencies.
   */
  static override _entityName = 'LiquidityDependencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LiquidityDependencies entity.
   */
  static _keys = [
    'ChartOfAccountsName',
    'TransactionOrBudget',
    'FromMainAccountId',
    'ToMainAccountId',
    'TermsOfPayment',
    'PostingType'
  ];
  /**
   * Chart Of Accounts Name.
   */
  declare chartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Or Budget.
   * @nullable
   */
  declare transactionOrBudget?: TransBudget | null;
  /**
   * From Main Account Id.
   */
  declare fromMainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * To Main Account Id.
   */
  declare toMainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Terms Of Payment.
   */
  declare termsOfPayment: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: LiquidityDependenciesApi<T>) {
    super(_entityApi);
  }
}

export interface LiquidityDependenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  chartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  transactionOrBudget?: TransBudget | null;
  fromMainAccountId: DeserializedType<T, 'Edm.String'>;
  toMainAccountId: DeserializedType<T, 'Edm.String'>;
  termsOfPayment: DeserializedType<T, 'Edm.String'>;
  postingType?: LedgerPostingType | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
}
