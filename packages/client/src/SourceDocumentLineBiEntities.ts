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
import type { SourceDocumentLineBiEntitiesApi } from './SourceDocumentLineBiEntitiesApi';
import { SourceDocumentLineAccountingStatus } from './SourceDocumentLineAccountingStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SourceDocumentLineBiEntities" of service "d365_metadata".
 */
export class SourceDocumentLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceDocumentLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SourceDocumentLineBiEntities.
   */
  static override _entityName = 'SourceDocumentLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceDocumentLineBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
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
   * Draft Version.
   */
  declare draftVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Parent Source Document Line.
   */
  declare parentSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Term Quantity.
   */
  declare termQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Accounting Status.
   * @nullable
   */
  declare accountingStatus?: SourceDocumentLineAccountingStatus | null;
  /**
   * Source Relation Type.
   */
  declare sourceRelationType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Rate Date.
   */
  declare exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * State Container.
   * @nullable
   */
  declare stateContainer?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Type Enum Name.
   * @nullable
   */
  declare typeEnumName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Enum Value.
   */
  declare typeEnumValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Final.
   * @nullable
   */
  declare isFinal?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SourceDocumentLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceDocumentLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  draftVersion: DeserializedType<T, 'Edm.Int32'>;
  parentSourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  termQuantity: DeserializedType<T, 'Edm.Decimal'>;
  accountingStatus?: SourceDocumentLineAccountingStatus | null;
  sourceRelationType: DeserializedType<T, 'Edm.Int32'>;
  exchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stateContainer?: DeserializedType<T, 'Edm.Binary'> | null;
  typeEnumName?: DeserializedType<T, 'Edm.String'> | null;
  typeEnumValue: DeserializedType<T, 'Edm.Int32'>;
  isFinal?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
