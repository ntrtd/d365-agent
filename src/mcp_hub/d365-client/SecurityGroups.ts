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
import type { SecurityGroupsApi } from './SecurityGroupsApi';
import { Timezone } from './Timezone';
import { PreferredCalendar } from './PreferredCalendar';

/**
 * This class represents the entity "SecurityGroups" of service "d365_metadata".
 */
export class SecurityGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecurityGroupsType<T>
{
  /**
   * Technical entity name for SecurityGroups.
   */
  static override _entityName = 'SecurityGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityGroups entity.
   */
  static _keys = ['UserId'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Time Zone.
   * @nullable
   */
  declare preferredTimeZone?: Timezone | null;
  /**
   * Object Id.
   * @nullable
   */
  declare objectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Calendar.
   * @nullable
   */
  declare preferredCalendar?: PreferredCalendar | null;
  /**
   * Enabled.
   */
  declare enabled: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: SecurityGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  preferredTimeZone?: Timezone | null;
  objectId?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  preferredCalendar?: PreferredCalendar | null;
  enabled: DeserializedType<T, 'Edm.Boolean'>;
}
