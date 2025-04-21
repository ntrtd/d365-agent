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
import type { CallCenterScriptsApi } from './CallCenterScriptsApi';
import { McrScriptUse } from './McrScriptUse';
import { McrMessageAssociationTypes } from './McrMessageAssociationTypes';

/**
 * This class represents the entity "CallCenterScripts" of service "d365_metadata".
 */
export class CallCenterScripts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CallCenterScriptsType<T>
{
  /**
   * Technical entity name for CallCenterScripts.
   */
  static override _entityName = 'CallCenterScripts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterScripts entity.
   */
  static _keys = ['dataAreaId', 'LanguageId', 'ScriptTitle'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Script Title.
   */
  declare scriptTitle: DeserializedType<T, 'Edm.String'>;
  /**
   * Script Use.
   * @nullable
   */
  declare scriptUse?: McrScriptUse | null;
  /**
   * Association Types.
   * @nullable
   */
  declare associationTypes?: McrMessageAssociationTypes | null;

  constructor(_entityApi: CallCenterScriptsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterScriptsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  scriptTitle: DeserializedType<T, 'Edm.String'>;
  scriptUse?: McrScriptUse | null;
  associationTypes?: McrMessageAssociationTypes | null;
}
