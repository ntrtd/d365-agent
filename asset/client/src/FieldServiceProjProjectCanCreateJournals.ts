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
import type { FieldServiceProjProjectCanCreateJournalsApi } from './FieldServiceProjProjectCanCreateJournalsApi';
import { ProjStatus } from './ProjStatus';
import { ProjType } from './ProjType';

/**
 * This class represents the entity "FieldServiceProjProjectCanCreateJournals" of service "d365_metadata".
 */
export class FieldServiceProjProjectCanCreateJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FieldServiceProjProjectCanCreateJournalsType<T>
{
  /**
   * Technical entity name for FieldServiceProjProjectCanCreateJournals.
   */
  static override _entityName = 'FieldServiceProjProjectCanCreateJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FieldServiceProjProjectCanCreateJournals entity.
   */
  static _keys = ['dataAreaId', 'ProjId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: ProjStatus | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: ProjType | null;

  constructor(_entityApi: FieldServiceProjProjectCanCreateJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface FieldServiceProjProjectCanCreateJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  status?: ProjStatus | null;
  type?: ProjType | null;
}
