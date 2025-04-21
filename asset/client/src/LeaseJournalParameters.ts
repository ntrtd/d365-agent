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
import type { LeaseJournalParametersApi } from './LeaseJournalParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LeaseJournalParameters" of service "d365_metadata".
 */
export class LeaseJournalParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseJournalParametersType<T>
{
  /**
   * Technical entity name for LeaseJournalParameters.
   */
  static override _entityName = 'LeaseJournalParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseJournalParameters entity.
   */
  static _keys = ['dataAreaId', 'InitialRecognitionJournalName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Initial Recognition Journal Name.
   */
  declare initialRecognitionJournalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Monthly Journal Name.
   * @nullable
   */
  declare monthlyJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Type Mnth Jour Name Cn.
   * @nullable
   */
  declare voucherTypeMnthJourNameCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Lease Type.
   * @nullable
   */
  declare overrideLeaseType?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Type Inv Jour Name Cn.
   * @nullable
   */
  declare voucherTypeInvJourNameCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross Entity Batch.
   * @nullable
   */
  declare crossEntityBatch?: NoYes | null;
  /**
   * Allow Confirmed Lease Deletion.
   * @nullable
   */
  declare allowConfirmedLeaseDeletion?: NoYes | null;
  /**
   * Voucher Type Init Reco Name Cn.
   * @nullable
   */
  declare voucherTypeInitRecoNameCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Journal Name.
   * @nullable
   */
  declare invoiceJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modification Journal Name.
   * @nullable
   */
  declare modificationJournalName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaseJournalParametersApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseJournalParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  initialRecognitionJournalName: DeserializedType<T, 'Edm.String'>;
  monthlyJournalName?: DeserializedType<T, 'Edm.String'> | null;
  voucherTypeMnthJourNameCn?: DeserializedType<T, 'Edm.String'> | null;
  overrideLeaseType?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  voucherTypeInvJourNameCn?: DeserializedType<T, 'Edm.String'> | null;
  crossEntityBatch?: NoYes | null;
  allowConfirmedLeaseDeletion?: NoYes | null;
  voucherTypeInitRecoNameCn?: DeserializedType<T, 'Edm.String'> | null;
  invoiceJournalName?: DeserializedType<T, 'Edm.String'> | null;
  modificationJournalName?: DeserializedType<T, 'Edm.String'> | null;
}
