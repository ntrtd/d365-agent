/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BenefitsPlanEmployeeLifeEventTransactionsV2 } from './BenefitsPlanEmployeeLifeEventTransactionsV2';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEmployeeLifeEventTransactionsV2} entity.
 */
export class BenefitsPlanEmployeeLifeEventTransactionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEmployeeLifeEventTransactionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEmployeeLifeEventTransactionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEmployeeLifeEventTransactionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   */
  create(
    entity: BenefitsPlanEmployeeLifeEventTransactionsV2<T>
  ): CreateRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T> {
    return new CreateRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEmployeeLifeEventTransactionsV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planPeriodId}.
   * @param planEmployeeBeforeLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventPlanId}.
   * @param planEmployeeBeforeLifeEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventCoverageOptionId}.
   * @param planEmployeeBeforeLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventValidFrom}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lifeEventTypeId}.
   * @param lifeEventDate Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lifeEventDate}.
   * @param planEmployeeAfterLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLifeEventPlanId}.
   * @param planEmployeeAfterLiveEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLiveEventCoverageOptionId}.
   * @param planEmployeeAfterLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLifeEventValidFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEmployeeLifeEventTransactionsV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planPeriodId: DeserializedType<T, 'Edm.String'>,
    planEmployeeBeforeLifeEventPlanId: DeserializedType<T, 'Edm.String'>,
    planEmployeeBeforeLifeEventCoverageOptionId: DeserializedType<
      T,
      'Edm.String'
    >,
    planEmployeeBeforeLifeEventValidFrom: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int32'>,
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    planEmployeeAfterLifeEventPlanId: DeserializedType<T, 'Edm.String'>,
    planEmployeeAfterLiveEventCoverageOptionId: DeserializedType<
      T,
      'Edm.String'
    >,
    planEmployeeAfterLifeEventValidFrom: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >
  ): GetByKeyRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
      T
    >(this.entityApi, {
      PersonnelNumber: personnelNumber,
      PlanPeriodId: planPeriodId,
      PlanEmployeeBeforeLifeEventPlanId: planEmployeeBeforeLifeEventPlanId,
      PlanEmployeeBeforeLifeEventCoverageOptionId:
        planEmployeeBeforeLifeEventCoverageOptionId,
      PlanEmployeeBeforeLifeEventValidFrom:
        planEmployeeBeforeLifeEventValidFrom,
      LegalEntityId: legalEntityId,
      LineNum: lineNum,
      LifeEventTypeId: lifeEventTypeId,
      LifeEventDate: lifeEventDate,
      PlanEmployeeAfterLifeEventPlanId: planEmployeeAfterLifeEventPlanId,
      PlanEmployeeAfterLiveEventCoverageOptionId:
        planEmployeeAfterLiveEventCoverageOptionId,
      PlanEmployeeAfterLifeEventValidFrom: planEmployeeAfterLifeEventValidFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   */
  update(
    entity: BenefitsPlanEmployeeLifeEventTransactionsV2<T>
  ): UpdateRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planPeriodId}.
   * @param planEmployeeBeforeLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventPlanId}.
   * @param planEmployeeBeforeLifeEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventCoverageOptionId}.
   * @param planEmployeeBeforeLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeBeforeLifeEventValidFrom}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lifeEventTypeId}.
   * @param lifeEventDate Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.lifeEventDate}.
   * @param planEmployeeAfterLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLifeEventPlanId}.
   * @param planEmployeeAfterLiveEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLiveEventCoverageOptionId}.
   * @param planEmployeeAfterLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactionsV2.planEmployeeAfterLifeEventValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   */
  delete(
    personnelNumber: string,
    planPeriodId: string,
    planEmployeeBeforeLifeEventPlanId: string,
    planEmployeeBeforeLifeEventCoverageOptionId: string,
    planEmployeeBeforeLifeEventValidFrom: Moment,
    legalEntityId: string,
    lineNum: number,
    lifeEventTypeId: string,
    lifeEventDate: Moment,
    planEmployeeAfterLifeEventPlanId: string,
    planEmployeeAfterLiveEventCoverageOptionId: string,
    planEmployeeAfterLifeEventValidFrom: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeLifeEventTransactionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEmployeeLifeEventTransactionsV2<T>
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    planPeriodId?: string,
    planEmployeeBeforeLifeEventPlanId?: string,
    planEmployeeBeforeLifeEventCoverageOptionId?: string,
    planEmployeeBeforeLifeEventValidFrom?: Moment,
    legalEntityId?: string,
    lineNum?: number,
    lifeEventTypeId?: string,
    lifeEventDate?: Moment,
    planEmployeeAfterLifeEventPlanId?: string,
    planEmployeeAfterLiveEventCoverageOptionId?: string,
    planEmployeeAfterLifeEventValidFrom?: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactionsV2<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<T>,
      T
    >(
      this.entityApi,
      personnelNumberOrEntity instanceof
      BenefitsPlanEmployeeLifeEventTransactionsV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            PlanPeriodId: planPeriodId!,
            PlanEmployeeBeforeLifeEventPlanId:
              planEmployeeBeforeLifeEventPlanId!,
            PlanEmployeeBeforeLifeEventCoverageOptionId:
              planEmployeeBeforeLifeEventCoverageOptionId!,
            PlanEmployeeBeforeLifeEventValidFrom:
              planEmployeeBeforeLifeEventValidFrom!,
            LegalEntityId: legalEntityId!,
            LineNum: lineNum!,
            LifeEventTypeId: lifeEventTypeId!,
            LifeEventDate: lifeEventDate!,
            PlanEmployeeAfterLifeEventPlanId: planEmployeeAfterLifeEventPlanId!,
            PlanEmployeeAfterLiveEventCoverageOptionId:
              planEmployeeAfterLiveEventCoverageOptionId!,
            PlanEmployeeAfterLifeEventValidFrom:
              planEmployeeAfterLifeEventValidFrom!
          }
    );
  }
}
