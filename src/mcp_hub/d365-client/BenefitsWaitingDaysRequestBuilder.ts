/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { BenefitsWaitingDays } from './BenefitsWaitingDays';

/**
 * Request builder class for operations supported on the {@link BenefitsWaitingDays} entity.
 */
export class BenefitsWaitingDaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsWaitingDays<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsWaitingDays` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsWaitingDays` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsWaitingDays<T>, T> {
    return new GetAllRequestBuilder<BenefitsWaitingDays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsWaitingDays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsWaitingDays`.
   */
  create(
    entity: BenefitsWaitingDays<T>
  ): CreateRequestBuilder<BenefitsWaitingDays<T>, T> {
    return new CreateRequestBuilder<BenefitsWaitingDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsWaitingDays` entity based on its keys.
   * @param waitingDay Key property. See {@link BenefitsWaitingDays.waitingDay}.
   * @returns A request builder for creating requests to retrieve one `BenefitsWaitingDays` entity based on its keys.
   */
  getByKey(
    waitingDay: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsWaitingDays<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsWaitingDays<T>, T>(
      this.entityApi,
      { WaitingDay: waitingDay }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsWaitingDays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsWaitingDays`.
   */
  update(
    entity: BenefitsWaitingDays<T>
  ): UpdateRequestBuilder<BenefitsWaitingDays<T>, T> {
    return new UpdateRequestBuilder<BenefitsWaitingDays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsWaitingDays`.
   * @param waitingDay Key property. See {@link BenefitsWaitingDays.waitingDay}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWaitingDays`.
   */
  delete(waitingDay: string): DeleteRequestBuilder<BenefitsWaitingDays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsWaitingDays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWaitingDays` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsWaitingDays<T>
  ): DeleteRequestBuilder<BenefitsWaitingDays<T>, T>;
  delete(
    waitingDayOrEntity: any
  ): DeleteRequestBuilder<BenefitsWaitingDays<T>, T> {
    return new DeleteRequestBuilder<BenefitsWaitingDays<T>, T>(
      this.entityApi,
      waitingDayOrEntity instanceof BenefitsWaitingDays
        ? waitingDayOrEntity
        : { WaitingDay: waitingDayOrEntity! }
    );
  }
}
