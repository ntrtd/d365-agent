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
import { PayIntV1BaseWorkers } from './PayIntV1BaseWorkers';

/**
 * Request builder class for operations supported on the {@link PayIntV1BaseWorkers} entity.
 */
export class PayIntV1BaseWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1BaseWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1BaseWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1BaseWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1BaseWorkers<T>, T> {
    return new GetAllRequestBuilder<PayIntV1BaseWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1BaseWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1BaseWorkers`.
   */
  create(
    entity: PayIntV1BaseWorkers<T>
  ): CreateRequestBuilder<PayIntV1BaseWorkers<T>, T> {
    return new CreateRequestBuilder<PayIntV1BaseWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1BaseWorkers` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1BaseWorkers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1BaseWorkers` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1BaseWorkers<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1BaseWorkers<T>, T>(
      this.entityApi,
      { PersonnelNumber: personnelNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1BaseWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1BaseWorkers`.
   */
  update(
    entity: PayIntV1BaseWorkers<T>
  ): UpdateRequestBuilder<PayIntV1BaseWorkers<T>, T> {
    return new UpdateRequestBuilder<PayIntV1BaseWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BaseWorkers`.
   * @param personnelNumber Key property. See {@link PayIntV1BaseWorkers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BaseWorkers`.
   */
  delete(
    personnelNumber: string
  ): DeleteRequestBuilder<PayIntV1BaseWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BaseWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BaseWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1BaseWorkers<T>
  ): DeleteRequestBuilder<PayIntV1BaseWorkers<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<PayIntV1BaseWorkers<T>, T> {
    return new DeleteRequestBuilder<PayIntV1BaseWorkers<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1BaseWorkers
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
