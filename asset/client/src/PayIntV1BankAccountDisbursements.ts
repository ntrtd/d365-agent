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
import type { PayIntV1BankAccountDisbursementsApi } from './PayIntV1BankAccountDisbursementsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1BankAccountDisbursements" of service "d365_metadata".
 */
export class PayIntV1BankAccountDisbursements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1BankAccountDisbursementsType<T>
{
  /**
   * Technical entity name for PayIntV1BankAccountDisbursements.
   */
  static override _entityName = 'PayIntV1BankAccountDisbursements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1BankAccountDisbursements entity.
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

  constructor(_entityApi: PayIntV1BankAccountDisbursementsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1BankAccountDisbursementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  accountIdentificationId: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  remainder?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  priority: DeserializedType<T, 'Edm.Decimal'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
}
