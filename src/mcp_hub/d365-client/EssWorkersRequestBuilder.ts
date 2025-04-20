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
import { EssWorkers } from './EssWorkers';

/**
 * Request builder class for operations supported on the {@link EssWorkers} entity.
 */
export class EssWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `EssWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `EssWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<EssWorkers<T>, T> {
    return new GetAllRequestBuilder<EssWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssWorkers`.
   */
  create(entity: EssWorkers<T>): CreateRequestBuilder<EssWorkers<T>, T> {
    return new CreateRequestBuilder<EssWorkers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EssWorkers` entity based on its keys.
   * @param personnelNumber Key property. See {@link EssWorkers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `EssWorkers` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssWorkers<T>, T> {
    return new GetByKeyRequestBuilder<EssWorkers<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EssWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssWorkers`.
   */
  update(entity: EssWorkers<T>): UpdateRequestBuilder<EssWorkers<T>, T> {
    return new UpdateRequestBuilder<EssWorkers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EssWorkers`.
   * @param personnelNumber Key property. See {@link EssWorkers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkers`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<EssWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkers` by taking the entity as a parameter.
   */
  delete(entity: EssWorkers<T>): DeleteRequestBuilder<EssWorkers<T>, T>;
  delete(personnelNumberOrEntity: any): DeleteRequestBuilder<EssWorkers<T>, T> {
    return new DeleteRequestBuilder<EssWorkers<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EssWorkers
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
