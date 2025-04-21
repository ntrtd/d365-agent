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
import type { CaseCategoryHierarchyDetailsApi } from './CaseCategoryHierarchyDetailsApi';
import { CaseCategoryType } from './CaseCategoryType';
import { SmmActivityCategory } from './SmmActivityCategory';
import { NoYes } from './NoYes';
import { SmmCreateActivity } from './SmmCreateActivity';
import { Departments, DepartmentsType } from './Departments';
import {
  ServiceLevelAgreements,
  ServiceLevelAgreementsType
} from './ServiceLevelAgreements';

/**
 * This class represents the entity "CaseCategoryHierarchyDetails" of service "d365_metadata".
 */
export class CaseCategoryHierarchyDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CaseCategoryHierarchyDetailsType<T>
{
  /**
   * Technical entity name for CaseCategoryHierarchyDetails.
   */
  static override _entityName = 'CaseCategoryHierarchyDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CaseCategoryHierarchyDetails entity.
   */
  static _keys = ['dataAreaId', 'CategoryType', 'CaseCategory'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Type.
   * @nullable
   */
  declare categoryType?: CaseCategoryType | null;
  /**
   * Case Category.
   */
  declare caseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Follow Up Category.
   * @nullable
   */
  declare defaultFollowUpCategory?: SmmActivityCategory | null;
  /**
   * Process.
   * @nullable
   */
  declare process?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Id.
   * @nullable
   */
  declare emailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Activity Phase.
   * @nullable
   */
  declare defaultActivityPhase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Case Category Name.
   * @nullable
   */
  declare parentCaseCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Follow Up Phase.
   * @nullable
   */
  declare defaultFollowUpPhase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Follow Up Type.
   * @nullable
   */
  declare defaultFollowUpType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Track Status.
   * @nullable
   */
  declare trackStatus?: NoYes | null;
  /**
   * Default Follow Up Purpose.
   * @nullable
   */
  declare defaultFollowUpPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Activity Category.
   * @nullable
   */
  declare defaultActivityCategory?: SmmActivityCategory | null;
  /**
   * Track Activities.
   * @nullable
   */
  declare trackActivities?: NoYes | null;
  /**
   * Track Stage.
   * @nullable
   */
  declare trackStage?: NoYes | null;
  /**
   * Create Activity For Follow Up.
   * @nullable
   */
  declare createActivityForFollowUp?: SmmCreateActivity | null;
  /**
   * Default Activity Type.
   * @nullable
   */
  declare defaultActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Activity For Case.
   * @nullable
   */
  declare createActivityForCase?: SmmCreateActivity | null;
  /**
   * Default Owner Worker Personnel Number.
   * @nullable
   */
  declare defaultOwnerWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Owner Department Number.
   * @nullable
   */
  declare defaultOwnerDepartmentNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Activity Purpose.
   * @nullable
   */
  declare defaultActivityPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Case Category Type.
   * @nullable
   */
  declare parentCaseCategoryType?: CaseCategoryType | null;
  /**
   * Questionnaire Id.
   * @nullable
   */
  declare questionnaireId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level Agreement Id.
   * @nullable
   */
  declare serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CaseCategoryHierarchyDetails} entity.
   */
  declare castCategoryHierarchyDetailParent?: CaseCategoryHierarchyDetails<T> | null;
  /**
   * One-to-many navigation property to the {@link CaseCategoryHierarchyDetails} entity.
   */
  declare castCategoryHierarchyDetailParents: CaseCategoryHierarchyDetails<T>[];
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare caseCategoryHierarchyDetailEntityDepartment?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceLevelAgreements} entity.
   */
  declare caseCategoryHierarchyDetailServiceLevelAgreement?: ServiceLevelAgreements<T> | null;

  constructor(_entityApi: CaseCategoryHierarchyDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface CaseCategoryHierarchyDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  categoryType?: CaseCategoryType | null;
  caseCategory: DeserializedType<T, 'Edm.String'>;
  defaultFollowUpCategory?: SmmActivityCategory | null;
  process?: DeserializedType<T, 'Edm.String'> | null;
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  defaultActivityPhase?: DeserializedType<T, 'Edm.String'> | null;
  parentCaseCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  defaultFollowUpPhase?: DeserializedType<T, 'Edm.String'> | null;
  defaultFollowUpType?: DeserializedType<T, 'Edm.String'> | null;
  trackStatus?: NoYes | null;
  defaultFollowUpPurpose?: DeserializedType<T, 'Edm.String'> | null;
  defaultActivityCategory?: SmmActivityCategory | null;
  trackActivities?: NoYes | null;
  trackStage?: NoYes | null;
  createActivityForFollowUp?: SmmCreateActivity | null;
  defaultActivityType?: DeserializedType<T, 'Edm.String'> | null;
  createActivityForCase?: SmmCreateActivity | null;
  defaultOwnerWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultOwnerDepartmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultActivityPurpose?: DeserializedType<T, 'Edm.String'> | null;
  parentCaseCategoryType?: CaseCategoryType | null;
  questionnaireId?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  castCategoryHierarchyDetailParent?: CaseCategoryHierarchyDetailsType<T> | null;
  castCategoryHierarchyDetailParents: CaseCategoryHierarchyDetailsType<T>[];
  caseCategoryHierarchyDetailEntityDepartment?: DepartmentsType<T> | null;
  caseCategoryHierarchyDetailServiceLevelAgreement?: ServiceLevelAgreementsType<T> | null;
}
