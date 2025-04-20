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
import { BenefitsWaitingPeriods } from './BenefitsWaitingPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsWaitingPeriods} entity.
 */
export class BenefitsWaitingPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsWaitingPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsWaitingPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsWaitingPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsWaitingPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsWaitingPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsWaitingPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsWaitingPeriods`.
   */
  create(
    entity: BenefitsWaitingPeriods<T>
  ): CreateRequestBuilder<BenefitsWaitingPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsWaitingPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsWaitingPeriods` entity based on its keys.
   * @param waitingCode Key property. See {@link BenefitsWaitingPeriods.waitingCode}.
   * @returns A request builder for creating requests to retrieve one `BenefitsWaitingPeriods` entity based on its keys.
   */
  getByKey(
    waitingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsWaitingPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsWaitingPeriods<T>, T>(
      this.entityApi,
      { WaitingCode: waitingCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsWaitingPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsWaitingPeriods`.
   */
  update(
    entity: BenefitsWaitingPeriods<T>
  ): UpdateRequestBuilder<BenefitsWaitingPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsWaitingPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsWaitingPeriods`.
   * @param waitingCode Key property. See {@link BenefitsWaitingPeriods.waitingCode}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWaitingPeriods`.
   */
  delete(
    waitingCode: string
  ): DeleteRequestBuilder<BenefitsWaitingPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsWaitingPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWaitingPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsWaitingPeriods<T>
  ): DeleteRequestBuilder<BenefitsWaitingPeriods<T>, T>;
  delete(
    waitingCodeOrEntity: any
  ): DeleteRequestBuilder<BenefitsWaitingPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsWaitingPeriods<T>, T>(
      this.entityApi,
      waitingCodeOrEntity instanceof BenefitsWaitingPeriods
        ? waitingCodeOrEntity
        : { WaitingCode: waitingCodeOrEntity! }
    );
  }
}
