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
import type { HumanResourcesSharedParametersApi } from './HumanResourcesSharedParametersApi';
import { NoYes } from './NoYes';
import { HcmPositionAvailableForAssignment } from './HcmPositionAvailableForAssignment';
import {
  IdentificationTypes,
  IdentificationTypesType
} from './IdentificationTypes';

/**
 * This class represents the entity "HumanResourcesSharedParameters" of service "d365_metadata".
 */
export class HumanResourcesSharedParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HumanResourcesSharedParametersType<T>
{
  /**
   * Technical entity name for HumanResourcesSharedParameters.
   */
  static override _entityName = 'HumanResourcesSharedParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HumanResourcesSharedParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Allow Completed Position Action Deletion.
   * @nullable
   */
  declare allowCompletedPositionActionDeletion?: NoYes | null;
  /**
   * Check Department Usage Before Deleting.
   * @nullable
   */
  declare checkDepartmentUsageBeforeDeleting?: NoYes | null;
  /**
   * Personnel Action Worker.
   * @nullable
   */
  declare personnelActionWorker?: NoYes | null;
  /**
   * Track Ada.
   * @nullable
   */
  declare trackAda?: NoYes | null;
  /**
   * Personal Identification Type Id.
   * @nullable
   */
  declare personalIdentificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Allow Completed Worker Action Deletion.
   * @nullable
   */
  declare allowCompletedWorkerActionDeletion?: NoYes | null;
  /**
   * National Identification Type Id.
   * @nullable
   */
  declare nationalIdentificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Social Security Number Identification Type Id.
   * @nullable
   */
  declare socialSecurityNumberIdentificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Verify I 9 Empl Eligibility.
   * @nullable
   */
  declare verifyI9EmplEligibility?: NoYes | null;
  /**
   * Alien Identification Type Id.
   * @nullable
   */
  declare alienIdentificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Available For Assignment Default.
   * @nullable
   */
  declare positionAvailableForAssignmentDefault?: HcmPositionAvailableForAssignment | null;
  /**
   * Personnel Action Position.
   * @nullable
   */
  declare personnelActionPosition?: NoYes | null;
  /**
   * Department Mandatory For Position.
   * @nullable
   */
  declare departmentMandatoryForPosition?: NoYes | null;
  /**
   * Psn Job Description Lock On Position Forecast.
   * @nullable
   */
  declare psnJobDescriptionLockOnPositionForecast?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare personalIdentificationType?: IdentificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare socialSecurityNumberIdentificationType?: IdentificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare alienIdentificationType?: IdentificationTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationTypes} entity.
   */
  declare nationalIdentificationType?: IdentificationTypes<T> | null;

  constructor(_entityApi: HumanResourcesSharedParametersApi<T>) {
    super(_entityApi);
  }
}

export interface HumanResourcesSharedParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  allowCompletedPositionActionDeletion?: NoYes | null;
  checkDepartmentUsageBeforeDeleting?: NoYes | null;
  personnelActionWorker?: NoYes | null;
  trackAda?: NoYes | null;
  personalIdentificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  allowCompletedWorkerActionDeletion?: NoYes | null;
  nationalIdentificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  socialSecurityNumberIdentificationTypeId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  verifyI9EmplEligibility?: NoYes | null;
  alienIdentificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  positionAvailableForAssignmentDefault?: HcmPositionAvailableForAssignment | null;
  personnelActionPosition?: NoYes | null;
  departmentMandatoryForPosition?: NoYes | null;
  psnJobDescriptionLockOnPositionForecast?: NoYes | null;
  personalIdentificationType?: IdentificationTypesType<T> | null;
  socialSecurityNumberIdentificationType?: IdentificationTypesType<T> | null;
  alienIdentificationType?: IdentificationTypesType<T> | null;
  nationalIdentificationType?: IdentificationTypesType<T> | null;
}
