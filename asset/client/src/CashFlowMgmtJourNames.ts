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
import type { CashFlowMgmtJourNamesApi } from './CashFlowMgmtJourNamesApi';
import { CfmJournalType } from './CfmJournalType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CashFlowMgmtJourNames" of service "d365_metadata".
 */
export class CashFlowMgmtJourNames<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtJourNamesType<T>
{
  /**
   * Technical entity name for CashFlowMgmtJourNames.
   */
  static override _entityName = 'CashFlowMgmtJourNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtJourNames entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: CfmJournalType | null;
  /**
   * Payment On Cash Discount Date.
   * @nullable
   */
  declare paymentOnCashDiscountDate?: NoYes | null;
  /**
   * Overdue Payments.
   * @nullable
   */
  declare overduePayments?: NoYes | null;
  /**
   * Workflow Id.
   * @nullable
   */
  declare workflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Active.
   * @nullable
   */
  declare workflowActive?: NoYes | null;
  /**
   * Include Empty Payment Account.
   * @nullable
   */
  declare includeEmptyPaymentAccount?: NoYes | null;

  constructor(_entityApi: CashFlowMgmtJourNamesApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtJourNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  journalType?: CfmJournalType | null;
  paymentOnCashDiscountDate?: NoYes | null;
  overduePayments?: NoYes | null;
  workflowId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workflowActive?: NoYes | null;
  includeEmptyPaymentAccount?: NoYes | null;
}
