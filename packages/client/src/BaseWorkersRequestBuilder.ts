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
import { BaseWorkers } from './BaseWorkers';

/**
 * Request builder class for operations supported on the {@link BaseWorkers} entity.
 */
export class BaseWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BaseWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `BaseWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `BaseWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<BaseWorkers<T>, T> {
    return new GetAllRequestBuilder<BaseWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BaseWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BaseWorkers`.
   */
  create(entity: BaseWorkers<T>): CreateRequestBuilder<BaseWorkers<T>, T> {
    return new CreateRequestBuilder<BaseWorkers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BaseWorkers` entity based on its keys.
   * @param personnelNumber Key property. See {@link BaseWorkers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `BaseWorkers` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BaseWorkers<T>, T> {
    return new GetByKeyRequestBuilder<BaseWorkers<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BaseWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BaseWorkers`.
   */
  update(entity: BaseWorkers<T>): UpdateRequestBuilder<BaseWorkers<T>, T> {
    return new UpdateRequestBuilder<BaseWorkers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BaseWorkers`.
   * @param personnelNumber Key property. See {@link BaseWorkers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BaseWorkers`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<BaseWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BaseWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BaseWorkers` by taking the entity as a parameter.
   */
  delete(entity: BaseWorkers<T>): DeleteRequestBuilder<BaseWorkers<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<BaseWorkers<T>, T> {
    return new DeleteRequestBuilder<BaseWorkers<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BaseWorkers
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
