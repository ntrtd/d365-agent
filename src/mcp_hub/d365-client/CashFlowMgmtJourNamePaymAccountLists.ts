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
import type { CashFlowMgmtJourNamePaymAccountListsApi } from './CashFlowMgmtJourNamePaymAccountListsApi';
import { CfmPaymentAccountType } from './CfmPaymentAccountType';

/**
 * This class represents the entity "CashFlowMgmtJourNamePaymAccountLists" of service "d365_metadata".
 */
export class CashFlowMgmtJourNamePaymAccountLists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNamePaymAccountListsType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNamePaymAccountLists.
   */
  static override _entityName = 'CashFlowMgmtJourNamePaymAccountLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNamePaymAccountLists entity.
   */
  static _keys = ['Name', 'AccountNumber', 'PaymentAccountType'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number.
   */
  declare accountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Account Type.
   * @nullable
   */
  declare paymentAccountType?: CfmPaymentAccountType | null;

  constructor(_entityApi: CashFlowMgmtJourNamePaymAccountListsApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNamePaymAccountListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  accountNumber: DeserializedType<T, 'Edm.String'>;
  paymentAccountType?: CfmPaymentAccountType | null;
}
