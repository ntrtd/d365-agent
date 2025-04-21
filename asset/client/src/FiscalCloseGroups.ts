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
import type { FiscalCloseGroupsApi } from './FiscalCloseGroupsApi';

/**
 * This class represents the entity "FiscalCloseGroups" of service "d365_metadata".
 */
export class FiscalCloseGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalCloseGroupsType<T>
{
  /**
   * Technical entity name for FiscalCloseGroups.
   */
  static override _entityName = 'FiscalCloseGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalCloseGroups entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalCloseGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalCloseGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
}
