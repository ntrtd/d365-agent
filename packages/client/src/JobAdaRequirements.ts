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
import type { JobAdaRequirementsApi } from './JobAdaRequirementsApi';
import { HrmAdaFrequency } from './HrmAdaFrequency';
import { HcmAdaVisualAcuity } from './HcmAdaVisualAcuity';
import { HcmAdaPhysicalRequirement } from './HcmAdaPhysicalRequirement';
import { Jobs, JobsType } from './Jobs';

/**
 * This class represents the entity "JobADARequirements" of service "d365_metadata".
 */
export class JobAdaRequirements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JobAdaRequirementsType<T>
{
  /**
   * Technical entity name for JobAdaRequirements.
   */
  static override _entityName = 'JobADARequirements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JobAdaRequirements entity.
   */
  static _keys = ['JobId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Environment Outside.
   * @nullable
   */
  declare environmentOutside?: HrmAdaFrequency | null;
  /**
   * Noise.
   * @nullable
   */
  declare noise?: HrmAdaFrequency | null;
  /**
   * Feeling.
   * @nullable
   */
  declare feeling?: HrmAdaFrequency | null;
  /**
   * Narrow Aisles.
   * @nullable
   */
  declare narrowAisles?: HrmAdaFrequency | null;
  /**
   * Atmospheric Conditions.
   * @nullable
   */
  declare atmosphericConditions?: HrmAdaFrequency | null;
  /**
   * Environment Heat.
   * @nullable
   */
  declare environmentHeat?: HrmAdaFrequency | null;
  /**
   * Oils.
   * @nullable
   */
  declare oils?: HrmAdaFrequency | null;
  /**
   * Talking.
   * @nullable
   */
  declare talking?: HrmAdaFrequency | null;
  /**
   * Visual Acuity.
   * @nullable
   */
  declare visualAcuity?: HcmAdaVisualAcuity | null;
  /**
   * Kneeling.
   * @nullable
   */
  declare kneeling?: HrmAdaFrequency | null;
  /**
   * Standing.
   * @nullable
   */
  declare standing?: HrmAdaFrequency | null;
  /**
   * Adverse Conditions.
   * @nullable
   */
  declare adverseConditions?: HrmAdaFrequency | null;
  /**
   * Balancing.
   * @nullable
   */
  declare balancing?: HrmAdaFrequency | null;
  /**
   * Crouching.
   * @nullable
   */
  declare crouching?: HrmAdaFrequency | null;
  /**
   * Climbing.
   * @nullable
   */
  declare climbing?: HrmAdaFrequency | null;
  /**
   * Lifting.
   * @nullable
   */
  declare lifting?: HrmAdaFrequency | null;
  /**
   * Mental Patients.
   * @nullable
   */
  declare mentalPatients?: HrmAdaFrequency | null;
  /**
   * Hazards.
   * @nullable
   */
  declare hazards?: HrmAdaFrequency | null;
  /**
   * Vibration.
   * @nullable
   */
  declare vibration?: HrmAdaFrequency | null;
  /**
   * Repetitive Motions.
   * @nullable
   */
  declare repetitiveMotions?: HrmAdaFrequency | null;
  /**
   * Crawling.
   * @nullable
   */
  declare crawling?: HrmAdaFrequency | null;
  /**
   * Environment Cold.
   * @nullable
   */
  declare environmentCold?: HrmAdaFrequency | null;
  /**
   * Pulling.
   * @nullable
   */
  declare pulling?: HrmAdaFrequency | null;
  /**
   * Grasping.
   * @nullable
   */
  declare grasping?: HrmAdaFrequency | null;
  /**
   * Respirator.
   * @nullable
   */
  declare respirator?: HrmAdaFrequency | null;
  /**
   * Walking.
   * @nullable
   */
  declare walking?: HrmAdaFrequency | null;
  /**
   * Fingering.
   * @nullable
   */
  declare fingering?: HrmAdaFrequency | null;
  /**
   * Hearing.
   * @nullable
   */
  declare hearing?: HrmAdaFrequency | null;
  /**
   * Reaching.
   * @nullable
   */
  declare reaching?: HrmAdaFrequency | null;
  /**
   * Pushing.
   * @nullable
   */
  declare pushing?: HrmAdaFrequency | null;
  /**
   * Stooping.
   * @nullable
   */
  declare stooping?: HrmAdaFrequency | null;
  /**
   * Physical Requirement.
   * @nullable
   */
  declare physicalRequirement?: HcmAdaPhysicalRequirement | null;
  /**
   * Infectious Disease.
   * @nullable
   */
  declare infectiousDisease?: HrmAdaFrequency | null;
  /**
   * Environment Inside.
   * @nullable
   */
  declare environmentInside?: HrmAdaFrequency | null;
  /**
   * Close Quaters.
   * @nullable
   */
  declare closeQuaters?: HrmAdaFrequency | null;
  /**
   * Environment Both.
   * @nullable
   */
  declare environmentBoth?: HrmAdaFrequency | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;

  constructor(_entityApi: JobAdaRequirementsApi<T>) {
    super(_entityApi);
  }
}

export interface JobAdaRequirementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  environmentOutside?: HrmAdaFrequency | null;
  noise?: HrmAdaFrequency | null;
  feeling?: HrmAdaFrequency | null;
  narrowAisles?: HrmAdaFrequency | null;
  atmosphericConditions?: HrmAdaFrequency | null;
  environmentHeat?: HrmAdaFrequency | null;
  oils?: HrmAdaFrequency | null;
  talking?: HrmAdaFrequency | null;
  visualAcuity?: HcmAdaVisualAcuity | null;
  kneeling?: HrmAdaFrequency | null;
  standing?: HrmAdaFrequency | null;
  adverseConditions?: HrmAdaFrequency | null;
  balancing?: HrmAdaFrequency | null;
  crouching?: HrmAdaFrequency | null;
  climbing?: HrmAdaFrequency | null;
  lifting?: HrmAdaFrequency | null;
  mentalPatients?: HrmAdaFrequency | null;
  hazards?: HrmAdaFrequency | null;
  vibration?: HrmAdaFrequency | null;
  repetitiveMotions?: HrmAdaFrequency | null;
  crawling?: HrmAdaFrequency | null;
  environmentCold?: HrmAdaFrequency | null;
  pulling?: HrmAdaFrequency | null;
  grasping?: HrmAdaFrequency | null;
  respirator?: HrmAdaFrequency | null;
  walking?: HrmAdaFrequency | null;
  fingering?: HrmAdaFrequency | null;
  hearing?: HrmAdaFrequency | null;
  reaching?: HrmAdaFrequency | null;
  pushing?: HrmAdaFrequency | null;
  stooping?: HrmAdaFrequency | null;
  physicalRequirement?: HcmAdaPhysicalRequirement | null;
  infectiousDisease?: HrmAdaFrequency | null;
  environmentInside?: HrmAdaFrequency | null;
  closeQuaters?: HrmAdaFrequency | null;
  environmentBoth?: HrmAdaFrequency | null;
  job?: JobsType<T> | null;
}
