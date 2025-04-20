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
import type { ExpMobileReceiptAttachedToExpenseLineForApprovalsApi } from './ExpMobileReceiptAttachedToExpenseLineForApprovalsApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';

/**
 * This class represents the entity "ExpMobileReceiptAttachedToExpenseLineForApprovals" of service "d365_metadata".
 */
export class ExpMobileReceiptAttachedToExpenseLineForApprovals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileReceiptAttachedToExpenseLineForApprovalsType<T>
{
  /**
   * Technical entity name for ExpMobileReceiptAttachedToExpenseLineForApprovals.
   */
  static override _entityName =
    'ExpMobileReceiptAttachedToExpenseLineForApprovals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileReceiptAttachedToExpenseLineForApprovals entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Encyclopedia Item Id.
   * @nullable
   */
  declare encyclopediaItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Attachment.
   * @nullable
   */
  declare defaultAttachment?: NoYes | null;
  /**
   * Assigned To.
   * @nullable
   */
  declare assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Is Justification.
   * @nullable
   */
  declare isJustification?: NoYes | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Smm Table.
   */
  declare smmTable: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Captured Document.
   * @nullable
   */
  declare capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Workflow Ref Table Name.
   * @nullable
   */
  declare workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By 1.
   * @nullable
   */
  declare createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Docu Ref Table Name.
   * @nullable
   */
  declare docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Line Attached To.
   * @nullable
   */
  declare expenseLineAttachedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Author.
   */
  declare author: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Skip Update.
   * @nullable
   */
  declare interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Smm E Mail Entry Id.
   * @nullable
   */
  declare smmEMailEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time 1.
   */
  declare createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Smm E Mail Store Id.
   * @nullable
   */
  declare smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;

  constructor(
    _entityApi: ExpMobileReceiptAttachedToExpenseLineForApprovalsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ExpMobileReceiptAttachedToExpenseLineForApprovalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  encyclopediaItemId?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  isJustification?: NoYes | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  smmTable: DeserializedType<T, 'Edm.Boolean'>;
  capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  expenseLineAttachedTo?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  smmEMailEntryId?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  documentId: DeserializedType<T, 'Edm.Guid'>;
}
