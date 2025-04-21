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
import type { LtmLedgerJournalNameCpdTypesApi } from './LtmLedgerJournalNameCpdTypesApi';
import { LtmcpdPaymentMediaType } from './LtmcpdPaymentMediaType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LTMLedgerJournalNameCPDTypes" of service "d365_metadata".
 */
export class LtmLedgerJournalNameCpdTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmLedgerJournalNameCpdTypesType<T>
{
  /**
   * Technical entity name for LtmLedgerJournalNameCpdTypes.
   */
  static override _entityName = 'LTMLedgerJournalNameCPDTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmLedgerJournalNameCpdTypes entity.
   */
  static _keys = ['dataAreaId', 'JournalName', 'CPDType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   */
  declare journalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cpd Type.
   * @nullable
   */
  declare cpdType?: LtmcpdPaymentMediaType | null;
  /**
   * Cpd Enable Action Exit.
   * @nullable
   */
  declare cpdEnableActionExit?: NoYes | null;
  /**
   * Cpd Enable Action Accrual.
   * @nullable
   */
  declare cpdEnableActionAccrual?: NoYes | null;
  /**
   * Cpd Enable Action Emission.
   * @nullable
   */
  declare cpdEnableActionEmission?: NoYes | null;
  /**
   * Cpd Enable Action Enter.
   * @nullable
   */
  declare cpdEnableActionEnter?: NoYes | null;
  /**
   * Cpd Enable Action Credit.
   * @nullable
   */
  declare cpdEnableActionCredit?: NoYes | null;
  /**
   * Cpd Enable Action Cancel.
   * @nullable
   */
  declare cpdEnableActionCancel?: NoYes | null;
  /**
   * Cpd Enable Action Re Entry.
   * @nullable
   */
  declare cpdEnableActionReEntry?: NoYes | null;
  /**
   * Cpd Default Type.
   * @nullable
   */
  declare cpdDefaultType?: NoYes | null;
  /**
   * Cpd Enable Action Debit.
   * @nullable
   */
  declare cpdEnableActionDebit?: NoYes | null;

  constructor(_entityApi: LtmLedgerJournalNameCpdTypesApi<T>) {
    super(_entityApi);
  }
}

export interface LtmLedgerJournalNameCpdTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalName: DeserializedType<T, 'Edm.String'>;
  cpdType?: LtmcpdPaymentMediaType | null;
  cpdEnableActionExit?: NoYes | null;
  cpdEnableActionAccrual?: NoYes | null;
  cpdEnableActionEmission?: NoYes | null;
  cpdEnableActionEnter?: NoYes | null;
  cpdEnableActionCredit?: NoYes | null;
  cpdEnableActionCancel?: NoYes | null;
  cpdEnableActionReEntry?: NoYes | null;
  cpdDefaultType?: NoYes | null;
  cpdEnableActionDebit?: NoYes | null;
}
