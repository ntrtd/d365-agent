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
import type { ReleasedProductReadinessChecksApi } from './ReleasedProductReadinessChecksApi';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { NoYes } from './NoYes';
import { EngChgReadinessStatus } from './EngChgReadinessStatus';
import { KmQuestionAnswerInputType } from './KmQuestionAnswerInputType';
import { People, PeopleType } from './People';
import {
  ReleasedEngineeringProductVersions,
  ReleasedEngineeringProductVersionsType
} from './ReleasedEngineeringProductVersions';
import {
  ProductReadinessPolicyChecks,
  ProductReadinessPolicyChecksType
} from './ProductReadinessPolicyChecks';
import { TeamsV2, TeamsV2Type } from './TeamsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ReleasedProductReadinessChecks" of service "d365_metadata".
 */
export class ReleasedProductReadinessChecks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductReadinessChecksType<T>
{
  /**
   * Technical entity name for ReleasedProductReadinessChecks.
   */
  static override _entityName = 'ReleasedProductReadinessChecks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductReadinessChecks entity.
   */
  static _keys = ['dataAreaId', 'ProductReadinessCheckRecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Readiness Check Record Id.
   */
  declare productReadinessCheckRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Notes.
   * @nullable
   */
  declare checkNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Log.
   * @nullable
   */
  declare checkLog?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Questionnaire Question Text.
   * @nullable
   */
  declare questionnaireQuestionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Readiness Policy Check Legal Entity Id.
   * @nullable
   */
  declare productReadinessPolicyCheckLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Process Area.
   * @nullable
   */
  declare processArea?: EngChgReadinessModule | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Check Mandatory.
   * @nullable
   */
  declare isCheckMandatory?: NoYes | null;
  /**
   * Questionnaire Question Id.
   * @nullable
   */
  declare questionnaireQuestionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Status.
   * @nullable
   */
  declare checkStatus?: EngChgReadinessStatus | null;
  /**
   * Approved Date Time.
   */
  declare approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Readiness Policy Name.
   * @nullable
   */
  declare productReadinessPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Questionnaire Question Instruction.
   * @nullable
   */
  declare questionnaireQuestionInstruction?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Readiness Policy Check Process Area.
   * @nullable
   */
  declare productReadinessPolicyCheckProcessArea?: EngChgReadinessModule | null;
  /**
   * Product Readiness Policy Check Name.
   * @nullable
   */
  declare productReadinessPolicyCheckName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Engineering Product Version Id.
   * @nullable
   */
  declare engineeringProductVersionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Questionnaire Answer Comment.
   * @nullable
   */
  declare questionnaireAnswerComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owning Team Name.
   * @nullable
   */
  declare owningTeamName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Questionnaire Question Sequence Number.
   */
  declare questionnaireQuestionSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Questionnaire Answer Text.
   * @nullable
   */
  declare questionnaireAnswerText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approver Person Party Number.
   * @nullable
   */
  declare approverPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Product Number.
   * @nullable
   */
  declare engineeringProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Questionnaire Question Input Type.
   * @nullable
   */
  declare questionnaireQuestionInputType?: KmQuestionAnswerInputType | null;
  /**
   * Owning Person Party Number.
   * @nullable
   */
  declare owningPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare approverPerson?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedEngineeringProductVersions} entity.
   */
  declare releasedEngineeringProductVersion?: ReleasedEngineeringProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductReadinessPolicyChecks} entity.
   */
  declare productReadinessPolicyCheck?: ProductReadinessPolicyChecks<T> | null;
  /**
   * One-to-one navigation property to the {@link People} entity.
   */
  declare owningPerson?: People<T> | null;
  /**
   * One-to-one navigation property to the {@link TeamsV2} entity.
   */
  declare owningTeamV2?: TeamsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ReleasedProductReadinessChecksApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductReadinessChecksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productReadinessCheckRecordId: DeserializedType<T, 'Edm.Int64'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  checkNotes?: DeserializedType<T, 'Edm.String'> | null;
  checkLog?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireQuestionText?: DeserializedType<T, 'Edm.String'> | null;
  productReadinessPolicyCheckLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  processArea?: EngChgReadinessModule | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  isCheckMandatory?: NoYes | null;
  questionnaireQuestionId?: DeserializedType<T, 'Edm.String'> | null;
  checkStatus?: EngChgReadinessStatus | null;
  approvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productReadinessPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireQuestionInstruction?: DeserializedType<T, 'Edm.String'> | null;
  productReadinessPolicyCheckProcessArea?: EngChgReadinessModule | null;
  productReadinessPolicyCheckName?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireAnswerComment?: DeserializedType<T, 'Edm.String'> | null;
  owningTeamName?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireQuestionSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  questionnaireAnswerText?: DeserializedType<T, 'Edm.String'> | null;
  approverPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireQuestionInputType?: KmQuestionAnswerInputType | null;
  owningPersonPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  approverPerson?: PeopleType<T> | null;
  releasedEngineeringProductVersion?: ReleasedEngineeringProductVersionsType<T> | null;
  productReadinessPolicyCheck?: ProductReadinessPolicyChecksType<T> | null;
  owningPerson?: PeopleType<T> | null;
  owningTeamV2?: TeamsV2Type<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
}
