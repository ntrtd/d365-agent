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
import type { ExpMobileReportsApi } from './ExpMobileReportsApi';
import { TrvAppStatus } from './TrvAppStatus';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ExpMobileReports" of service "d365_metadata".
 */
export class ExpMobileReports<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpMobileReportsType<T>
{
  /**
   * Technical entity name for ExpMobileReports.
   */
  static override _entityName = 'ExpMobileReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileReports entity.
   */
  static _keys = ['ExpNumber', 'LegalEntity_DataArea'];
  /**
   * Exp Number.
   */
  declare expNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Data Area.
   */
  declare legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pre Approval Number.
   * @nullable
   */
  declare preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Action.
   * @nullable
   */
  declare workflowAction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Created Date Time.
   */
  declare reportCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Trv Hcm Worker Personnel Number.
   * @nullable
   */
  declare trvHcmWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violation Count.
   */
  declare policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Status Id.
   * @nullable
   */
  declare projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Total.
   */
  declare amountTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Anti Corruption Approver Flag.
   * @nullable
   */
  declare antiCorruptionApproverFlag?: NoYes | null;
  /**
   * Policy Violations Level.
   */
  declare policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Party Number.
   * @nullable
   */
  declare legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Violation Message.
   * @nullable
   */
  declare policyViolationMessage?: DeserializedType<T, 'Edm.String'> | null;
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
   * Dir Person Fk Party Number.
   * @nullable
   */
  declare dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Le.
   * @nullable
   */
  declare interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Anti Corruption Submitter Flag.
   * @nullable
   */
  declare antiCorruptionSubmitterFlag?: NoYes | null;
  /**
   * Destination.
   * @nullable
   */
  declare destination?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted Date.
   */
  declare postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Created Date Time.
   */
  declare documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpMobileReportsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  workflowAction?: DeserializedType<T, 'Edm.String'> | null;
  reportCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvalStatus?: TrvAppStatus | null;
  trvHcmWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationCount: DeserializedType<T, 'Edm.Int32'>;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  amountTotal: DeserializedType<T, 'Edm.Decimal'>;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionApproverFlag?: NoYes | null;
  policyViolationsLevel: DeserializedType<T, 'Edm.Int64'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  policyViolationMessage?: DeserializedType<T, 'Edm.String'> | null;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  dirPersonFkPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  txt1?: DeserializedType<T, 'Edm.String'> | null;
  txt2?: DeserializedType<T, 'Edm.String'> | null;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionSubmitterFlag?: NoYes | null;
  destination?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
