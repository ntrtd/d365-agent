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
import type { ProductReadinessPolicyChecksApi } from './ProductReadinessPolicyChecksApi';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { EngChgReadinessType } from './EngChgReadinessType';
import { NoYes } from './NoYes';
import { EngChgReadinessCheckType } from './EngChgReadinessCheckType';
import { EngChgReadinessExecute } from './EngChgReadinessExecute';
import {
  ReleasedProductReadinessChecks,
  ReleasedProductReadinessChecksType
} from './ReleasedProductReadinessChecks';
import {
  ProductReadinessPolicies,
  ProductReadinessPoliciesType
} from './ProductReadinessPolicies';
import { People, PeopleType } from './People';
import { TeamsV2, TeamsV2Type } from './TeamsV2';

/**
 * This class represents the entity "ProductReadinessPolicyChecks" of service "d365_metadata".
 */
export class ProductReadinessPolicyChecks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductReadinessPolicyChecksType<T>
{
  /**
   * Technical entity name for ProductReadinessPolicyChecks.
   */
  static override _entityName = 'ProductReadinessPolicyChecks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductReadinessPolicyChecks entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductReadinessPolicyName',
    'CheckName',
    'LegalEntityId',
    'ProcessArea'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Readiness Policy Name.
   */
  declare productReadinessPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Check Name.
   */
  declare checkName: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Area.
   * @nullable
   */
  declare processArea?: EngChgReadinessModule | null;
  /**
   * Check Type.
   * @nullable
   */
  declare checkType?: EngChgReadinessType | null;
  /**
   * Owning Team Name.
   * @nullable
   */
  declare owningTeamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check List Questionnaire Id.
   * @nullable
   */
  declare checkListQuestionnaireId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Description.
   * @nullable
   */
  declare checkDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Check Mandatory.
   * @nullable
   */
  declare isCheckMandatory?: NoYes | null;
  /**
   * Check Release Category.
   * @nullable
   */
  declare checkReleaseCategory?: EngChgReadinessCheckType | null;
  /**
   * Will Check Automatically Approve Result.
   * @nullable
   */
  declare willCheckAutomaticallyApproveResult?: NoYes | null;
  /**
   * Check Class Name.
   * @nullable
   */
  declare checkClassName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Execution Scope.
   * @nullable
   */
  declare executionScope?: EngChgReadinessExecute | null;
  /**
   * Owning Person Party Number.
   * @nullable
   */
  declare owningPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductReadinessChecks} entity.
   */
  declare releasedProductReadinessChecks: ReleasedProductReadinessChecks<T>[];
  /**
   * One-to-one navigation property to the {@link ProductReadinessPolicies} entity.
   */
  declare productReadinessPolicy?: ProductReadinessPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare owningPerson?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link TeamsV2} entity.
   */
  declare owningTeamV2?: TeamsV2<T> | null;

  constructor(_entityApi: ProductReadinessPolicyChecksApi<T>) {
    super(_entityApi);
  }
}

export interface ProductReadinessPolicyChecksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productReadinessPolicyName: DeserializedType<T, 'Edm.String'>;
  checkName: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  processArea?: EngChgReadinessModule | null;
  checkType?: EngChgReadinessType | null;
  owningTeamName?: DeserializedType<T, 'Edm.String'> | null;
  checkListQuestionnaireId?: DeserializedType<T, 'Edm.String'> | null;
  checkDescription?: DeserializedType<T, 'Edm.String'> | null;
  isCheckMandatory?: NoYes | null;
  checkReleaseCategory?: EngChgReadinessCheckType | null;
  willCheckAutomaticallyApproveResult?: NoYes | null;
  checkClassName?: DeserializedType<T, 'Edm.String'> | null;
  executionScope?: EngChgReadinessExecute | null;
  owningPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductReadinessChecks: ReleasedProductReadinessChecksType<T>[];
  productReadinessPolicy?: ProductReadinessPoliciesType<T> | null;
  owningPerson?: PeopleType<T> | null;
  owningTeamV2?: TeamsV2Type<T> | null;
}
