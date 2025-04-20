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
import type { ExpMobileReportApprovalsApi } from './ExpMobileReportApprovalsApi';
import { TrvAppStatus } from './TrvAppStatus';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ExpMobileReportApprovals" of service "d365_metadata".
 */
export class ExpMobileReportApprovals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileReportApprovalsType<T>
{
  /**
   * Technical entity name for ExpMobileReportApprovals.
   */
  static override _entityName = 'ExpMobileReportApprovals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileReportApprovals entity.
   */
  static _keys = ['ExpNumber', 'ReferenceDataAreaId', 'WorkItemRecId'];
  /**
   * Exp Number.
   */
  declare expNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference Data Area Id.
   */
  declare referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Item Rec Id.
   */
  declare workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Currency.
   * @nullable
   */
  declare amountCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pre Approval Number.
   * @nullable
   */
  declare preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action.
   * @nullable
   */
  declare action?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Name.
   * @nullable
   */
  declare projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Approver Justification.
   * @nullable
   */
  declare approverJustification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Status.
   * @nullable
   */
  declare approvalStatus?: TrvAppStatus | null;
  /**
   * Correlation Id.
   */
  declare correlationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Is Expense Report.
   * @nullable
   */
  declare isExpenseReport?: NoYes | null;
  /**
   * Total Amount.
   */
  declare totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assigned To.
   * @nullable
   */
  declare assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exp Table Rec Id.
   */
  declare expTableRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Comment.
   * @nullable
   */
  declare workflowComment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Anti Corruption Approver Flag.
   * @nullable
   */
  declare antiCorruptionApproverFlag?: NoYes | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created Date.
   */
  declare createdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Workflow Ref Table Name.
   * @nullable
   */
  declare workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Attached Expense Count.
   */
  declare attachedExpenseCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delegate User Id.
   * @nullable
   */
  declare delegateUserId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Creating User.
   * @nullable
   */
  declare creatingUser?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ExpMobileReportApprovalsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileReportApprovalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  expNumber: DeserializedType<T, 'Edm.String'>;
  referenceDataAreaId: DeserializedType<T, 'Edm.String'>;
  workItemRecId: DeserializedType<T, 'Edm.Int64'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountCurrency?: DeserializedType<T, 'Edm.String'> | null;
  preApprovalNumber?: DeserializedType<T, 'Edm.String'> | null;
  action?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  approverJustification?: DeserializedType<T, 'Edm.String'> | null;
  approvalStatus?: TrvAppStatus | null;
  correlationId: DeserializedType<T, 'Edm.Guid'>;
  isExpenseReport?: NoYes | null;
  totalAmount: DeserializedType<T, 'Edm.Decimal'>;
  assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  expTableRecId: DeserializedType<T, 'Edm.Int64'>;
  workflowComment?: DeserializedType<T, 'Edm.String'> | null;
  projStatusId?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  antiCorruptionApproverFlag?: NoYes | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  createdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentVoucher?: DeserializedType<T, 'Edm.String'> | null;
  workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  txt1?: DeserializedType<T, 'Edm.String'> | null;
  txt2?: DeserializedType<T, 'Edm.String'> | null;
  finalApprover: DeserializedType<T, 'Edm.Int64'>;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  attachedExpenseCount: DeserializedType<T, 'Edm.Int32'>;
  delegateUserId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanyLe?: DeserializedType<T, 'Edm.String'> | null;
  antiCorruptionSubmitterFlag?: NoYes | null;
  creatingUser?: DeserializedType<T, 'Edm.String'> | null;
  destination?: DeserializedType<T, 'Edm.String'> | null;
  postedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
