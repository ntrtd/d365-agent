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
import type { TrvExpTableBiEntitiesApi } from './TrvExpTableBiEntitiesApi';
import { TrvAppStatus } from './TrvAppStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TrvExpTableBiEntities" of service "d365_metadata".
 */
export class TrvExpTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpTableBiEntitiesType<T>
{
  /**
   * Technical entity name for TrvExpTableBiEntities.
   */
  static override _entityName = 'TrvExpTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpTableBiEntities entity.
   */
  static _keys = ['ExpNumber', 'LegalEntity'];
  /**
   * Exp Number.
   */
  declare expNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pre Approval Number.
   * @nullable
   */
  declare preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Status Id.
   * @nullable
   */
  declare projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Anti Corruption Approver Flag.
   * @nullable
   */
  declare antiCorruptionApproverFlag?: NoYes | null;
  /**
   * Sys Created Date Time.
   */
  declare sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Voucher.
   * @nullable
   */
  declare paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt 1.
   * @nullable
   */
  declare txt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt 2.
   * @nullable
   */
  declare txt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Final Approver.
   */
  declare finalApprover: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Anti Corruption Submitter Flag.
   * @nullable
   */
  declare antiCorruptionSubmitterFlag?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Destination.
   * @nullable
   */
  declare destination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: TrvExpTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expNumber: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  approvalStatus?: TrvAppStatus | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionApproverFlag?: NoYes | null;
  sysCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  txt1?: DeserializedType<T, 'Edm.String'> | null;
  txt2?: DeserializedType<T, 'Edm.String'> | null;
  finalApprover: DeserializedType<T, 'Edm.Int64'>;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionSubmitterFlag?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  destination?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
