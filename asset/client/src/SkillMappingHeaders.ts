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
import type { SkillMappingHeadersApi } from './SkillMappingHeadersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "SkillMappingHeaders" of service "d365_metadata".
 */
export class SkillMappingHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SkillMappingHeadersType<T>
{
  /**
   * Technical entity name for SkillMappingHeaders.
   */
  static override _entityName = 'SkillMappingHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SkillMappingHeaders entity.
   */
  static _keys = ['SkillMapping'];
  /**
   * Skill Mapping.
   */
  declare skillMapping: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact.
   * @nullable
   */
  declare contact?: NoYes | null;
  /**
   * Applicant.
   * @nullable
   */
  declare applicant?: NoYes | null;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SkillMappingHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface SkillMappingHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  skillMapping: DeserializedType<T, 'Edm.String'>;
  contact?: NoYes | null;
  applicant?: NoYes | null;
  worker?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
