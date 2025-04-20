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
import { BenefitsPlanEmployeeLifeEventTransactions } from './BenefitsPlanEmployeeLifeEventTransactions';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEmployeeLifeEventTransactions} entity.
 */
export class BenefitsPlanEmployeeLifeEventTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEmployeeLifeEventTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEmployeeLifeEventTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<
    BenefitsPlanEmployeeLifeEventTransactions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEmployeeLifeEventTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   */
  create(
    entity: BenefitsPlanEmployeeLifeEventTransactions<T>
  ): CreateRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T> {
    return new CreateRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEmployeeLifeEventTransactions` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planPeriodId}.
   * @param planEmployeeBeforeLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventPlanId}.
   * @param planEmployeeBeforeLifeEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventCoverageOptionId}.
   * @param planEmployeeBeforeLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventValidFrom}.
   * @param planEmployeeBeforeLifeEventValidTo Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventValidTo}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lifeEventTypeId}.
   * @param lifeEventDate Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEmployeeLifeEventTransactions` entity based on its keys.
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
    planEmployeeBeforeLifeEventValidTo: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Int32'>,
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T> {
    return new GetByKeyRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, {
      PersonnelNumber: personnelNumber,
      PlanPeriodId: planPeriodId,
      PlanEmployeeBeforeLifeEventPlanId: planEmployeeBeforeLifeEventPlanId,
      PlanEmployeeBeforeLifeEventCoverageOptionId:
        planEmployeeBeforeLifeEventCoverageOptionId,
      PlanEmployeeBeforeLifeEventValidFrom:
        planEmployeeBeforeLifeEventValidFrom,
      PlanEmployeeBeforeLifeEventValidTo: planEmployeeBeforeLifeEventValidTo,
      LegalEntityId: legalEntityId,
      LineNum: lineNum,
      LifeEventTypeId: lifeEventTypeId,
      LifeEventDate: lifeEventDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   */
  update(
    entity: BenefitsPlanEmployeeLifeEventTransactions<T>
  ): UpdateRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T> {
    return new UpdateRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planPeriodId}.
   * @param planEmployeeBeforeLifeEventPlanId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventPlanId}.
   * @param planEmployeeBeforeLifeEventCoverageOptionId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventCoverageOptionId}.
   * @param planEmployeeBeforeLifeEventValidFrom Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventValidFrom}.
   * @param planEmployeeBeforeLifeEventValidTo Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.planEmployeeBeforeLifeEventValidTo}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.legalEntityId}.
   * @param lineNum Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lineNum}.
   * @param lifeEventTypeId Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lifeEventTypeId}.
   * @param lifeEventDate Key property. See {@link BenefitsPlanEmployeeLifeEventTransactions.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   */
  delete(
    personnelNumber: string,
    planPeriodId: string,
    planEmployeeBeforeLifeEventPlanId: string,
    planEmployeeBeforeLifeEventCoverageOptionId: string,
    planEmployeeBeforeLifeEventValidFrom: Moment,
    planEmployeeBeforeLifeEventValidTo: Moment,
    legalEntityId: string,
    lineNum: number,
    lifeEventTypeId: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeLifeEventTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeLifeEventTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEmployeeLifeEventTransactions<T>
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    planPeriodId?: string,
    planEmployeeBeforeLifeEventPlanId?: string,
    planEmployeeBeforeLifeEventCoverageOptionId?: string,
    planEmployeeBeforeLifeEventValidFrom?: Moment,
    planEmployeeBeforeLifeEventValidTo?: Moment,
    legalEntityId?: string,
    lineNum?: number,
    lifeEventTypeId?: string,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeLifeEventTransactions<T>, T> {
    return new DeleteRequestBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<T>,
      T
    >(
      this.entityApi,
      personnelNumberOrEntity instanceof
      BenefitsPlanEmployeeLifeEventTransactions
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
            PlanEmployeeBeforeLifeEventValidTo:
              planEmployeeBeforeLifeEventValidTo!,
            LegalEntityId: legalEntityId!,
            LineNum: lineNum!,
            LifeEventTypeId: lifeEventTypeId!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
