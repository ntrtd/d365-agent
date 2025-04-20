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
import type { ExpMobileReceiptsApi } from './ExpMobileReceiptsApi';
import { DocuRestriction } from './DocuRestriction';
import { InterCompanySkipUpdate } from './InterCompanySkipUpdate';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ExpMobileReceipts" of service "d365_metadata".
 */
export class ExpMobileReceipts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpMobileReceiptsType<T>
{
  /**
   * Technical entity name for ExpMobileReceipts.
   */
  static override _entityName = 'ExpMobileReceipts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobileReceipts entity.
   */
  static _keys = ['RefRecId'];
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Smm E Mail Store Id.
   * @nullable
   */
  declare smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rec Id Copy 1.
   */
  declare recIdCopy1: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Rec Id.
   */
  declare valueRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Modified Date Time Copy 1.
   */
  declare modifiedDateTimeCopy1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
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
   * Docu Ref Rec Id.
   */
  declare docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Modified By Copy 1.
   * @nullable
   */
  declare modifiedByCopy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created Date Time Copy 1.
   */
  declare createdDateTimeCopy1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Captured Receipt.
   * @nullable
   */
  declare capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Id.
   * @nullable
   */
  declare typeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inter Company Skip Update.
   * @nullable
   */
  declare interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  /**
   * Is Attached To Expense.
   */
  declare isAttachedToExpense: DeserializedType<T, 'Edm.Int32'>;
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
   * Rec Version Copy 1.
   */
  declare recVersionCopy1: DeserializedType<T, 'Edm.Int32'>;
  /**
   * File Extension.
   * @nullable
   */
  declare fileExtension?: DeserializedType<T, 'Edm.String'> | null;
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
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Ref Company Id.
   * @nullable
   */
  declare refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By Copy 1.
   * @nullable
   */
  declare createdByCopy1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partition Copy 1.
   */
  declare partitionCopy1: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: ExpMobileReceiptsApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobileReceiptsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  refRecId: DeserializedType<T, 'Edm.Int64'>;
  smmEMailStoreId?: DeserializedType<T, 'Edm.String'> | null;
  recIdCopy1: DeserializedType<T, 'Edm.Int64'>;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  valueRecId: DeserializedType<T, 'Edm.Int64'>;
  modifiedDateTimeCopy1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  party: DeserializedType<T, 'Edm.Int64'>;
  restriction?: DocuRestriction | null;
  author: DeserializedType<T, 'Edm.Int64'>;
  docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
  smmTable: DeserializedType<T, 'Edm.Boolean'>;
  smmEMailEntryId?: DeserializedType<T, 'Edm.String'> | null;
  modifiedByCopy1?: DeserializedType<T, 'Edm.String'> | null;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  createdDateTimeCopy1: DeserializedType<T, 'Edm.DateTimeOffset'>;
  capturedReceipt?: DeserializedType<T, 'Edm.String'> | null;
  typeId?: DeserializedType<T, 'Edm.String'> | null;
  interCompanySkipUpdate?: InterCompanySkipUpdate | null;
  isAttachedToExpense: DeserializedType<T, 'Edm.Int32'>;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  encyclopediaItemId?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttachment?: NoYes | null;
  recVersionCopy1: DeserializedType<T, 'Edm.Int32'>;
  fileExtension?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  isJustification?: NoYes | null;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  refCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  createdByCopy1?: DeserializedType<T, 'Edm.String'> | null;
  partitionCopy1: DeserializedType<T, 'Edm.Int64'>;
}
