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
import { BenefitPeriodEmplLifeEvents } from './BenefitPeriodEmplLifeEvents';

/**
 * Request builder class for operations supported on the {@link BenefitPeriodEmplLifeEvents} entity.
 */
export class BenefitPeriodEmplLifeEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPeriodEmplLifeEvents` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPeriodEmplLifeEvents` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
    return new GetAllRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitPeriodEmplLifeEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPeriodEmplLifeEvents`.
   */
  create(
    entity: BenefitPeriodEmplLifeEvents<T>
  ): CreateRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
    return new CreateRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitPeriodEmplLifeEvents` entity based on its keys.
   * @param periodId Key property. See {@link BenefitPeriodEmplLifeEvents.periodId}.
   * @param personnelNumber Key property. See {@link BenefitPeriodEmplLifeEvents.personnelNumber}.
   * @param legalEntityId Key property. See {@link BenefitPeriodEmplLifeEvents.legalEntityId}.
   * @param lifeEventDate Key property. See {@link BenefitPeriodEmplLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitPeriodEmplLifeEvents` entity based on its keys.
   */
  getByKey(
    periodId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>(
      this.entityApi,
      {
        PeriodId: periodId,
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        LifeEventDate: lifeEventDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPeriodEmplLifeEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPeriodEmplLifeEvents`.
   */
  update(
    entity: BenefitPeriodEmplLifeEvents<T>
  ): UpdateRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
    return new UpdateRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmplLifeEvents`.
   * @param periodId Key property. See {@link BenefitPeriodEmplLifeEvents.periodId}.
   * @param personnelNumber Key property. See {@link BenefitPeriodEmplLifeEvents.personnelNumber}.
   * @param legalEntityId Key property. See {@link BenefitPeriodEmplLifeEvents.legalEntityId}.
   * @param lifeEventDate Key property. See {@link BenefitPeriodEmplLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmplLifeEvents`.
   */
  delete(
    periodId: string,
    personnelNumber: string,
    legalEntityId: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmplLifeEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmplLifeEvents` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitPeriodEmplLifeEvents<T>
  ): DeleteRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>;
  delete(
    periodIdOrEntity: any,
    personnelNumber?: string,
    legalEntityId?: string,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T> {
    return new DeleteRequestBuilder<BenefitPeriodEmplLifeEvents<T>, T>(
      this.entityApi,
      periodIdOrEntity instanceof BenefitPeriodEmplLifeEvents
        ? periodIdOrEntity
        : {
            PeriodId: periodIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LegalEntityId: legalEntityId!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
