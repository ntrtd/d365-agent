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
import type { ActionsApi } from './ActionsApi';
import { NoYes } from './NoYes';
import { EmActionType } from './EmActionType';
import { EmCompressionType } from './EmCompressionType';

/**
 * This class represents the entity "Actions" of service "d365_metadata".
 */
export class Actions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActionsType<T>
{
  /**
   * Technical entity name for Actions.
   */
  static override _entityName = 'Actions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Actions entity.
   */
  static _keys = ['dataAreaId', 'Action'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Split Er Output By Items.
   * @nullable
   */
  declare splitErOutputByItems?: NoYes | null;
  /**
   * Use Er Source.
   * @nullable
   */
  declare useErSource?: NoYes | null;
  /**
   * Attach To Source Document.
   * @nullable
   */
  declare attachToSourceDocument?: NoYes | null;
  /**
   * Filename To Process.
   * @nullable
   */
  declare filenameToProcess?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hide Action Class Parameters.
   * @nullable
   */
  declare hideActionClassParameters?: NoYes | null;
  /**
   * Message Item Type.
   * @nullable
   */
  declare messageItemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Executable Class.
   * @nullable
   */
  declare executableClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Type.
   * @nullable
   */
  declare actionType?: EmActionType | null;
  /**
   * Confirmation Text.
   * @nullable
   */
  declare confirmationText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filename.
   * @nullable
   */
  declare filename?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Populate Record.
   * @nullable
   */
  declare actionPopulateRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items Content Compression Type.
   * @nullable
   */
  declare itemsContentCompressionType?: EmCompressionType | null;
  /**
   * Er Show Dialog.
   * @nullable
   */
  declare erShowDialog?: NoYes | null;
  /**
   * Number Of Message Items Per Export.
   */
  declare numberOfMessageItemsPerExport: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Er Format Mapping Guid.
   */
  declare erFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Er Model Mapping Guid.
   */
  declare erModelMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Web Service.
   * @nullable
   */
  declare webService?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ActionsApi<T>) {
    super(_entityApi);
  }
}

export interface ActionsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.String'>;
  splitErOutputByItems?: NoYes | null;
  useErSource?: NoYes | null;
  attachToSourceDocument?: NoYes | null;
  filenameToProcess?: DeserializedType<T, 'Edm.String'> | null;
  hideActionClassParameters?: NoYes | null;
  messageItemType?: DeserializedType<T, 'Edm.String'> | null;
  executableClass?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  actionType?: EmActionType | null;
  confirmationText?: DeserializedType<T, 'Edm.String'> | null;
  filename?: DeserializedType<T, 'Edm.String'> | null;
  actionPopulateRecord?: DeserializedType<T, 'Edm.String'> | null;
  itemsContentCompressionType?: EmCompressionType | null;
  erShowDialog?: NoYes | null;
  numberOfMessageItemsPerExport: DeserializedType<T, 'Edm.Int32'>;
  erFormatMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  erModelMappingGuid: DeserializedType<T, 'Edm.Guid'>;
  webService?: DeserializedType<T, 'Edm.String'> | null;
}
