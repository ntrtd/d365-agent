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
import type { TrvReceiptsApi } from './TrvReceiptsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TrvReceipts" of service "d365_metadata".
 */
export class TrvReceipts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TrvReceiptsType<T>
{
  /**
   * Technical entity name for TrvReceipts.
   */
  static override _entityName = 'TrvReceipts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvReceipts entity.
   */
  static _keys = ['dataAreaId', 'DocumentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Id.
   */
  declare documentId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * File Name.
   * @nullable
   */
  declare fileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Docu Ref Id.
   */
  declare docuRefId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Credit Card Expense.
   * @nullable
   */
  declare isCreditCardExpense?: NoYes | null;
  /**
   * File Type.
   * @nullable
   */
  declare fileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Company Id.
   * @nullable
   */
  declare actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource.
   */
  declare resource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * File Contents.
   * @nullable
   */
  declare fileContents?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: TrvReceiptsApi<T>) {
    super(_entityApi);
  }
}

export interface TrvReceiptsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentId: DeserializedType<T, 'Edm.Guid'>;
  fileName?: DeserializedType<T, 'Edm.String'> | null;
  docuRefId: DeserializedType<T, 'Edm.Int64'>;
  isCreditCardExpense?: NoYes | null;
  fileType?: DeserializedType<T, 'Edm.String'> | null;
  actualCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  resource: DeserializedType<T, 'Edm.Int64'>;
  fileContents?: DeserializedType<T, 'Edm.Binary'> | null;
}
