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
import type { ExpMobileReceiptAttachedToExpenseLinesApi } from './ExpMobileReceiptAttachedToExpenseLinesApi';
import { DocuRestriction } from './DocuRestriction';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileReceiptAttachedToExpenseLines" of service "d365_metadata".
 */
export class ExpMobileReceiptAttachedToExpenseLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobileReceiptAttachedToExpenseLinesType<T>
{
  /**
   * Technical entity name for ExpMobileReceiptAttachedToExpenseLines.
   */
  static override _entityName = 'ExpMobileReceiptAttachedToExpenseLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileReceiptAttachedToExpenseLines entity.
   */
  static _keys = ['EntRecId'];
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Smm E Mail Store Id.
   * @nullable
   */
  declare smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rec Version 1.
   */
  declare recVersion1: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Docu Ref Table Name.
   * @nullable
   */
  declare docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Assigned To.
   * @nullable
   */
  declare assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Author.
   */
  declare author: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Smm Table.
   */
  declare smmTable: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Smm E Mail Entry Id.
   * @nullable
   */
  declare smmEMailEntryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created By 1.
   * @nullable
   */
  declare createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time 1.
   */
  declare createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Modified Date Time 1.
   */
  declare modifiedDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Partition 1.
   */
  declare partition1: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Inter Company Skip Update.
   * @nullable
   */
  declare interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Modified By 1.
   * @nullable
   */
  declare modifiedBy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Line Attached To.
   * @nullable
   */
  declare expenseLineAttachedTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Captured Document.
   * @nullable
   */
  declare capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Justification.
   * @nullable
   */
  declare isJustification?: NoYes | null;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Workflow Ref Table Name.
   * @nullable
   */
  declare workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpMobileReceiptAttachedToExpenseLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileReceiptAttachedToExpenseLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  recVersion1: DeserializedType<T, 'Edm.Int32'>;
  docuRefTableName?: DeserializedType<T, 'Edm.String'> | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  assignedTo?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  smmTable: DeserializedType<T, 'Edm.Boolean'>;
  smmEMailEntryId?: DeserializedType<T, 'Edm.String'> | null;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  createdBy1?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  modifiedDateTime1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partition1: DeserializedType<T, 'Edm.Int64'>;
  interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  encyclopediaItemId?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  modifiedBy1?: DeserializedType<T, 'Edm.String'> | null;
  expenseLineAttachedTo?: DeserializedType<T, 'Edm.String'> | null;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  capturedDocument?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isJustification?: NoYes | null;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  workflowRefTableName?: DeserializedType<T, 'Edm.String'> | null;
}
