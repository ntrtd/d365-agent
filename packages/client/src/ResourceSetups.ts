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
import type { ResourceSetupsApi } from './ResourceSetupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ResourceSetups" of service "d365_metadata".
 */
export class ResourceSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourceSetupsType<T>
{
  /**
   * Technical entity name for ResourceSetups.
   */
  static override _entityName = 'ResourceSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ResourceSetups entity.
   */
  static _keys = ['ResourceLegalEntityDataArea', 'ResourceId'];
  /**
   * Resource Legal Entity Data Area.
   */
  declare resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Id.
   * @nullable
   */
  declare periodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Resource Rate.
   */
  declare useResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Validate Resource Category.
   * @nullable
   */
  declare validateResourceCategory?: NoYes | null;
  /**
   * Require Start Stop Time.
   * @nullable
   */
  declare requireStartStopTime?: NoYes | null;
  /**
   * Max Hours Calendar Id.
   * @nullable
   */
  declare maxHoursCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Time Category Id.
   * @nullable
   */
  declare defaultTimeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validate Project Resource.
   * @nullable
   */
  declare validateProjectResource?: NoYes | null;
  /**
   * Resource Name.
   * @nullable
   */
  declare resourceName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ResourceSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ResourceSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  periodId?: DeserializedType<T, 'Edm.String'> | null;
  useResourceRate: DeserializedType<T, 'Edm.Boolean'>;
  validateResourceCategory?: NoYes | null;
  requireStartStopTime?: NoYes | null;
  maxHoursCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  defaultTimeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  validateProjectResource?: NoYes | null;
  resourceName?: DeserializedType<T, 'Edm.String'> | null;
}
