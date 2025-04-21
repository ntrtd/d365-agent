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
import { BenefitPeriodEmplGroupLifeEvents } from './BenefitPeriodEmplGroupLifeEvents';

/**
 * Request builder class for operations supported on the {@link BenefitPeriodEmplGroupLifeEvents} entity.
 */
export class BenefitPeriodEmplGroupLifeEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPeriodEmplGroupLifeEvents` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPeriodEmplGroupLifeEvents` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
    return new GetAllRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitPeriodEmplGroupLifeEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   */
  create(
    entity: BenefitPeriodEmplGroupLifeEvents<T>
  ): CreateRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
    return new CreateRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitPeriodEmplGroupLifeEvents` entity based on its keys.
   * @param periodId Key property. See {@link BenefitPeriodEmplGroupLifeEvents.periodId}.
   * @param lifeEventDate Key property. See {@link BenefitPeriodEmplGroupLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitPeriodEmplGroupLifeEvents` entity based on its keys.
   */
  getByKey(
    periodId: DeserializedType<T, 'Edm.String'>,
    lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>(
      this.entityApi,
      {
        PeriodId: periodId,
        LifeEventDate: lifeEventDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   */
  update(
    entity: BenefitPeriodEmplGroupLifeEvents<T>
  ): UpdateRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
    return new UpdateRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   * @param periodId Key property. See {@link BenefitPeriodEmplGroupLifeEvents.periodId}.
   * @param lifeEventDate Key property. See {@link BenefitPeriodEmplGroupLifeEvents.lifeEventDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   */
  delete(
    periodId: string,
    lifeEventDate: Moment
  ): DeleteRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmplGroupLifeEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmplGroupLifeEvents` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitPeriodEmplGroupLifeEvents<T>
  ): DeleteRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>;
  delete(
    periodIdOrEntity: any,
    lifeEventDate?: Moment
  ): DeleteRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T> {
    return new DeleteRequestBuilder<BenefitPeriodEmplGroupLifeEvents<T>, T>(
      this.entityApi,
      periodIdOrEntity instanceof BenefitPeriodEmplGroupLifeEvents
        ? periodIdOrEntity
        : {
            PeriodId: periodIdOrEntity!,
            LifeEventDate: lifeEventDate!
          }
    );
  }
}
