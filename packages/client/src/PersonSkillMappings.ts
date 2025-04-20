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
import type { PersonSkillMappingsApi } from './PersonSkillMappingsApi';
import { NoYes } from './NoYes';
import { Applicants, ApplicantsType } from './Applicants';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "PersonSkillMappings" of service "d365_metadata".
 */
export class PersonSkillMappings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonSkillMappingsType<T>
{
  /**
   * Technical entity name for PersonSkillMappings.
   */
  static override _entityName = 'PersonSkillMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonSkillMappings entity.
   */
  static _keys = ['PartyNumber'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Skill Mapping Enabled.
   * @nullable
   */
  declare isSkillMappingEnabled?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Applicants} entity.
   */
  declare applicant?: Applicants<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: PersonSkillMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface PersonSkillMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  isSkillMappingEnabled?: NoYes | null;
  applicant?: ApplicantsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
}
