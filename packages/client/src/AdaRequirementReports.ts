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
import type { AdaRequirementReportsApi } from './AdaRequirementReportsApi';
import { HrmAdaFrequency } from './HrmAdaFrequency';
import { HcmAdaVisualAcuity } from './HcmAdaVisualAcuity';
import { HcmAdaPhysicalRequirement } from './HcmAdaPhysicalRequirement';
import { Jobs, JobsType } from './Jobs';
import { JobTemplates, JobTemplatesType } from './JobTemplates';

/**
 * This class represents the entity "ADARequirementReports" of service "d365_metadata".
 */
export class AdaRequirementReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdaRequirementReportsType<T>
{
  /**
   * Technical entity name for AdaRequirementReports.
   */
  static override _entityName = 'ADARequirementReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdaRequirementReports entity.
   */
  static _keys = ['JobId', 'JobTemplateId'];
  /**
   * Job Id.
   */
  declare jobId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Template Id.
   */
  declare jobTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Atmospheric Conditions.
   * @nullable
   */
  declare atmosphericConditions?: HrmAdaFrequency | null;
  /**
   * Environment Inside Description.
   * @nullable
   */
  declare environmentInsideDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pulling.
   * @nullable
   */
  declare pulling?: HrmAdaFrequency | null;
  /**
   * Report Title.
   * @nullable
   */
  declare reportTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Activity Group.
   * @nullable
   */
  declare physicalActivityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Close Quaters Description.
   * @nullable
   */
  declare closeQuatersDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reaching Description.
   * @nullable
   */
  declare reachingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Requirement Group.
   * @nullable
   */
  declare physicalRequirementGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * @nullable
   */
  declare id?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balancing Description.
   * @nullable
   */
  declare balancingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adverse Conditions.
   * @nullable
   */
  declare adverseConditions?: HrmAdaFrequency | null;
  /**
   * Oils Description.
   * @nullable
   */
  declare oilsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Walking Description.
   * @nullable
   */
  declare walkingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lifting Description.
   * @nullable
   */
  declare liftingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Environment Cold Description.
   * @nullable
   */
  declare environmentColdDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vibration.
   * @nullable
   */
  declare vibration?: HrmAdaFrequency | null;
  /**
   * Respirator.
   * @nullable
   */
  declare respirator?: HrmAdaFrequency | null;
  /**
   * Environment Cold.
   * @nullable
   */
  declare environmentCold?: HrmAdaFrequency | null;
  /**
   * Hazards.
   * @nullable
   */
  declare hazards?: HrmAdaFrequency | null;
  /**
   * Repetitive Motions.
   * @nullable
   */
  declare repetitiveMotions?: HrmAdaFrequency | null;
  /**
   * Crouching Description.
   * @nullable
   */
  declare crouchingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grasping.
   * @nullable
   */
  declare grasping?: HrmAdaFrequency | null;
  /**
   * Standing.
   * @nullable
   */
  declare standing?: HrmAdaFrequency | null;
  /**
   * Environment Both Description.
   * @nullable
   */
  declare environmentBothDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Oils.
   * @nullable
   */
  declare oils?: HrmAdaFrequency | null;
  /**
   * Feeling.
   * @nullable
   */
  declare feeling?: HrmAdaFrequency | null;
  /**
   * Hearing Description.
   * @nullable
   */
  declare hearingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Infectious Disease.
   * @nullable
   */
  declare infectiousDisease?: HrmAdaFrequency | null;
  /**
   * Noise Description.
   * @nullable
   */
  declare noiseDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Condition Group.
   * @nullable
   */
  declare workConditionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pushing.
   * @nullable
   */
  declare pushing?: HrmAdaFrequency | null;
  /**
   * Environment Outside.
   * @nullable
   */
  declare environmentOutside?: HrmAdaFrequency | null;
  /**
   * Crouching.
   * @nullable
   */
  declare crouching?: HrmAdaFrequency | null;
  /**
   * Adverse Conditions Description.
   * @nullable
   */
  declare adverseConditionsDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Talking Description.
   * @nullable
   */
  declare talkingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Noise.
   * @nullable
   */
  declare noise?: HrmAdaFrequency | null;
  /**
   * Crawling.
   * @nullable
   */
  declare crawling?: HrmAdaFrequency | null;
  /**
   * Environment Outside Description.
   * @nullable
   */
  declare environmentOutsideDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Lifting.
   * @nullable
   */
  declare lifting?: HrmAdaFrequency | null;
  /**
   * Physical Requirement Description.
   * @nullable
   */
  declare physicalRequirementDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Stooping Description.
   * @nullable
   */
  declare stoopingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Feeling Description.
   * @nullable
   */
  declare feelingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pulling Description.
   * @nullable
   */
  declare pullingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Environment Both.
   * @nullable
   */
  declare environmentBoth?: HrmAdaFrequency | null;
  /**
   * Walking.
   * @nullable
   */
  declare walking?: HrmAdaFrequency | null;
  /**
   * Grasping Description.
   * @nullable
   */
  declare graspingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crawling Description.
   * @nullable
   */
  declare crawlingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Environment Heat Description.
   * @nullable
   */
  declare environmentHeatDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hearing.
   * @nullable
   */
  declare hearing?: HrmAdaFrequency | null;
  /**
   * Vistual Acutiy Description.
   * @nullable
   */
  declare vistualAcutiyDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reaching.
   * @nullable
   */
  declare reaching?: HrmAdaFrequency | null;
  /**
   * Visual Acuity Group.
   * @nullable
   */
  declare visualAcuityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Respirator Description.
   * @nullable
   */
  declare respiratorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stooping.
   * @nullable
   */
  declare stooping?: HrmAdaFrequency | null;
  /**
   * Narrow Aisles Description.
   * @nullable
   */
  declare narrowAislesDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vibration Description.
   * @nullable
   */
  declare vibrationDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Environment Heat.
   * @nullable
   */
  declare environmentHeat?: HrmAdaFrequency | null;
  /**
   * Visual Acuity.
   * @nullable
   */
  declare visualAcuity?: HcmAdaVisualAcuity | null;
  /**
   * Mental Patients Description.
   * @nullable
   */
  declare mentalPatientsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Infectious Disease Description.
   * @nullable
   */
  declare infectiousDiseaseDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Environment Inside.
   * @nullable
   */
  declare environmentInside?: HrmAdaFrequency | null;
  /**
   * Repetitive Motions Description.
   * @nullable
   */
  declare repetitiveMotionsDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Kneeling.
   * @nullable
   */
  declare kneeling?: HrmAdaFrequency | null;
  /**
   * Atmospheric Conditions Description.
   * @nullable
   */
  declare atmosphericConditionsDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mental Patients.
   * @nullable
   */
  declare mentalPatients?: HrmAdaFrequency | null;
  /**
   * Fingering.
   * @nullable
   */
  declare fingering?: HrmAdaFrequency | null;
  /**
   * Climbing Description.
   * @nullable
   */
  declare climbingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kneeling Description.
   * @nullable
   */
  declare kneelingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Requirement.
   * @nullable
   */
  declare physicalRequirement?: HcmAdaPhysicalRequirement | null;
  /**
   * Climbing.
   * @nullable
   */
  declare climbing?: HrmAdaFrequency | null;
  /**
   * Standing Description.
   * @nullable
   */
  declare standingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Close Quaters.
   * @nullable
   */
  declare closeQuaters?: HrmAdaFrequency | null;
  /**
   * Narrow Aisles.
   * @nullable
   */
  declare narrowAisles?: HrmAdaFrequency | null;
  /**
   * Talking.
   * @nullable
   */
  declare talking?: HrmAdaFrequency | null;
  /**
   * Pushing Description.
   * @nullable
   */
  declare pushingDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Balancing.
   * @nullable
   */
  declare balancing?: HrmAdaFrequency | null;
  /**
   * Fingering Description.
   * @nullable
   */
  declare fingeringDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hazards Description.
   * @nullable
   */
  declare hazardsDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link JobTemplates} entity.
   */
  declare jobTemplate?: JobTemplates<T> | null;

  constructor(_entityApi: AdaRequirementReportsApi<T>) {
    super(_entityApi);
  }
}

export interface AdaRequirementReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  jobId: DeserializedType<T, 'Edm.String'>;
  jobTemplateId: DeserializedType<T, 'Edm.String'>;
  atmosphericConditions?: HrmAdaFrequency | null;
  environmentInsideDescription?: DeserializedType<T, 'Edm.String'> | null;
  pulling?: HrmAdaFrequency | null;
  reportTitle?: DeserializedType<T, 'Edm.String'> | null;
  physicalActivityGroup?: DeserializedType<T, 'Edm.String'> | null;
  closeQuatersDescription?: DeserializedType<T, 'Edm.String'> | null;
  reachingDescription?: DeserializedType<T, 'Edm.String'> | null;
  physicalRequirementGroup?: DeserializedType<T, 'Edm.String'> | null;
  id?: DeserializedType<T, 'Edm.String'> | null;
  balancingDescription?: DeserializedType<T, 'Edm.String'> | null;
  adverseConditions?: HrmAdaFrequency | null;
  oilsDescription?: DeserializedType<T, 'Edm.String'> | null;
  walkingDescription?: DeserializedType<T, 'Edm.String'> | null;
  liftingDescription?: DeserializedType<T, 'Edm.String'> | null;
  environmentColdDescription?: DeserializedType<T, 'Edm.String'> | null;
  vibration?: HrmAdaFrequency | null;
  respirator?: HrmAdaFrequency | null;
  environmentCold?: HrmAdaFrequency | null;
  hazards?: HrmAdaFrequency | null;
  repetitiveMotions?: HrmAdaFrequency | null;
  crouchingDescription?: DeserializedType<T, 'Edm.String'> | null;
  grasping?: HrmAdaFrequency | null;
  standing?: HrmAdaFrequency | null;
  environmentBothDescription?: DeserializedType<T, 'Edm.String'> | null;
  oils?: HrmAdaFrequency | null;
  feeling?: HrmAdaFrequency | null;
  hearingDescription?: DeserializedType<T, 'Edm.String'> | null;
  infectiousDisease?: HrmAdaFrequency | null;
  noiseDescription?: DeserializedType<T, 'Edm.String'> | null;
  workConditionGroup?: DeserializedType<T, 'Edm.String'> | null;
  pushing?: HrmAdaFrequency | null;
  environmentOutside?: HrmAdaFrequency | null;
  crouching?: HrmAdaFrequency | null;
  adverseConditionsDescription?: DeserializedType<T, 'Edm.String'> | null;
  talkingDescription?: DeserializedType<T, 'Edm.String'> | null;
  noise?: HrmAdaFrequency | null;
  crawling?: HrmAdaFrequency | null;
  environmentOutsideDescription?: DeserializedType<T, 'Edm.String'> | null;
  lifting?: HrmAdaFrequency | null;
  physicalRequirementDescription?: DeserializedType<T, 'Edm.String'> | null;
  stoopingDescription?: DeserializedType<T, 'Edm.String'> | null;
  feelingDescription?: DeserializedType<T, 'Edm.String'> | null;
  pullingDescription?: DeserializedType<T, 'Edm.String'> | null;
  environmentBoth?: HrmAdaFrequency | null;
  walking?: HrmAdaFrequency | null;
  graspingDescription?: DeserializedType<T, 'Edm.String'> | null;
  crawlingDescription?: DeserializedType<T, 'Edm.String'> | null;
  environmentHeatDescription?: DeserializedType<T, 'Edm.String'> | null;
  hearing?: HrmAdaFrequency | null;
  vistualAcutiyDescription?: DeserializedType<T, 'Edm.String'> | null;
  reaching?: HrmAdaFrequency | null;
  visualAcuityGroup?: DeserializedType<T, 'Edm.String'> | null;
  respiratorDescription?: DeserializedType<T, 'Edm.String'> | null;
  stooping?: HrmAdaFrequency | null;
  narrowAislesDescription?: DeserializedType<T, 'Edm.String'> | null;
  vibrationDescription?: DeserializedType<T, 'Edm.String'> | null;
  environmentHeat?: HrmAdaFrequency | null;
  visualAcuity?: HcmAdaVisualAcuity | null;
  mentalPatientsDescription?: DeserializedType<T, 'Edm.String'> | null;
  infectiousDiseaseDescription?: DeserializedType<T, 'Edm.String'> | null;
  environmentInside?: HrmAdaFrequency | null;
  repetitiveMotionsDescription?: DeserializedType<T, 'Edm.String'> | null;
  kneeling?: HrmAdaFrequency | null;
  atmosphericConditionsDescription?: DeserializedType<T, 'Edm.String'> | null;
  mentalPatients?: HrmAdaFrequency | null;
  fingering?: HrmAdaFrequency | null;
  climbingDescription?: DeserializedType<T, 'Edm.String'> | null;
  kneelingDescription?: DeserializedType<T, 'Edm.String'> | null;
  physicalRequirement?: HcmAdaPhysicalRequirement | null;
  climbing?: HrmAdaFrequency | null;
  standingDescription?: DeserializedType<T, 'Edm.String'> | null;
  closeQuaters?: HrmAdaFrequency | null;
  narrowAisles?: HrmAdaFrequency | null;
  talking?: HrmAdaFrequency | null;
  pushingDescription?: DeserializedType<T, 'Edm.String'> | null;
  balancing?: HrmAdaFrequency | null;
  fingeringDescription?: DeserializedType<T, 'Edm.String'> | null;
  hazardsDescription?: DeserializedType<T, 'Edm.String'> | null;
  job?: JobsType<T> | null;
  jobTemplate?: JobTemplatesType<T> | null;
}
