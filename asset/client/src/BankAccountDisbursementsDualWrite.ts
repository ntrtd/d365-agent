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
import type { BankAccountDisbursementsDualWriteApi } from './BankAccountDisbursementsDualWriteApi';
import { NoYes } from './NoYes';
import {
  WorkerBankAccounts,
  WorkerBankAccountsType
} from './WorkerBankAccounts';

/**
 * This class represents the entity "BankAccountDisbursementsDualWrite" of service "d365_metadata".
 */
export class BankAccountDisbursementsDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountDisbursementsDualWriteType<T>
{
  /**
   * Technical entity name for BankAccountDisbursementsDualWrite.
   */
  static override _entityName = 'BankAccountDisbursementsDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountDisbursementsDualWrite entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'AccountIdentificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Identification Id.
   */
  declare accountIdentificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Remainder.
   * @nullable
   */
  declare remainder?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link WorkerBankAccounts} entity.
   */
  declare workerBankAccount?: WorkerBankAccounts<T> | null;

  constructor(_entityApi: BankAccountDisbursementsDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountDisbursementsDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  accountIdentificationId: DeserializedType<T, 'Edm.String'>;
  remainder?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  priority: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  workerBankAccount?: WorkerBankAccountsType<T> | null;
}
