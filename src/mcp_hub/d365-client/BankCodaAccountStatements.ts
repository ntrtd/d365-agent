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
import type { BankCodaAccountStatementsApi } from './BankCodaAccountStatementsApi';
import { BankCodaTransType } from './BankCodaTransType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BankCodaAccountStatements" of service "d365_metadata".
 */
export class BankCodaAccountStatements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankCodaAccountStatementsType<T>
{
  /**
   * Technical entity name for BankCodaAccountStatements.
   */
  static override _entityName = 'BankCodaAccountStatements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankCodaAccountStatements entity.
   */
  static _keys = [
    'dataAreaId',
    'BankAccount',
    'BankStatementDate',
    'BankStatement'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account.
   */
  declare bankAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Statement Date.
   */
  declare bankStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Statement.
   */
  declare bankStatement: DeserializedType<T, 'Edm.String'>;
  /**
   * Ending Balance.
   */
  declare endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Amount.
   */
  declare totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Opening Balance.
   */
  declare openingBalance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: BankCodaTransType | null;
  /**
   * Reconciled.
   */
  declare reconciled: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Details.
   * @nullable
   */
  declare transferDetails?: NoYes | null;
  /**
   * Is Movement Lines Update Delayed.
   * @nullable
   */
  declare isMovementLinesUpdateDelayed?: NoYes | null;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: BankCodaAccountStatementsApi<T>) {
    super(_entityApi);
  }
}

export interface BankCodaAccountStatementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankAccount: DeserializedType<T, 'Edm.String'>;
  bankStatementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankStatement: DeserializedType<T, 'Edm.String'>;
  endingBalance: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  openingBalance: DeserializedType<T, 'Edm.Decimal'>;
  bankTransactionType?: BankCodaTransType | null;
  reconciled: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferDetails?: NoYes | null;
  isMovementLinesUpdateDelayed?: NoYes | null;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
