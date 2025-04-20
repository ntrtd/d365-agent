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
import type { TrvRequisitionTableBiEntitiesApi } from './TrvRequisitionTableBiEntitiesApi';
import { TrvRequisitionReconciliationStatus } from './TrvRequisitionReconciliationStatus';
import { TrvRequisitionApprovalStatus } from './TrvRequisitionApprovalStatus';

/**
 * This class represents the entity "TrvRequisitionTableBiEntities" of service "d365_metadata".
 */
export class TrvRequisitionTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvRequisitionTableBiEntitiesType<T>
{
  /**
   * Technical entity name for TrvRequisitionTableBiEntities.
   */
  static override _entityName = 'TrvRequisitionTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvRequisitionTableBiEntities entity.
   */
  static _keys = ['RequisitionNumber', 'LegalEntity'];
  /**
   * Requisition Number.
   */
  declare requisitionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Reconciliation Status.
   * @nullable
   */
  declare reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvRequisitionApprovalStatus | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Travel Purpose.
   * @nullable
   */
  declare travelPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Requisition Date.
   */
  declare requisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
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
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: TrvRequisitionTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TrvRequisitionTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requisitionNumber: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  reconciliationStatus?: TrvRequisitionReconciliationStatus | null;
  approvalStatus?: TrvRequisitionApprovalStatus | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  travelPurpose?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  requisitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  destination?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
