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
import type { BankAccountDisbursementsApi } from './BankAccountDisbursementsApi';
import { NoYes } from './NoYes';
import {
  WorkerBankAccounts,
  WorkerBankAccountsType
} from './WorkerBankAccounts';
import { Workers, WorkersType } from './Workers';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "BankAccountDisbursements" of service "d365_metadata".
 */
export class BankAccountDisbursements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountDisbursementsType<T>
{
  /**
   * Technical entity name for BankAccountDisbursements.
   */
  static override _entityName = 'BankAccountDisbursements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountDisbursements entity.
   */
  static _keys = ['PersonnelNumber', 'AccountIdentificationId', 'Company'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Identification Id.
   */
  declare accountIdentificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Remainder.
   * @nullable
   */
  declare remainder?: NoYes | null;
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
   * In Prenote Status.
   * @nullable
   */
  declare inPrenoteStatus?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link WorkerBankAccounts} entity.
   */
  declare workerBankAccount?: WorkerBankAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;

  constructor(_entityApi: BankAccountDisbursementsApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountDisbursementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  accountIdentificationId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  remainder?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  priority: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  inPrenoteStatus?: NoYes | null;
  workerBankAccount?: WorkerBankAccountsType<T> | null;
  worker?: WorkersType<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
}
