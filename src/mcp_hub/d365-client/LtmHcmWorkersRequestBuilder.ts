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
import { LtmHcmWorkers } from './LtmHcmWorkers';

/**
 * Request builder class for operations supported on the {@link LtmHcmWorkers} entity.
 */
export class LtmHcmWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmHcmWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `LtmHcmWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `LtmHcmWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<LtmHcmWorkers<T>, T> {
    return new GetAllRequestBuilder<LtmHcmWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmHcmWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmHcmWorkers`.
   */
  create(entity: LtmHcmWorkers<T>): CreateRequestBuilder<LtmHcmWorkers<T>, T> {
    return new CreateRequestBuilder<LtmHcmWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmHcmWorkers` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmHcmWorkers.dataAreaId}.
   * @param personnelNumber Key property. See {@link LtmHcmWorkers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `LtmHcmWorkers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmHcmWorkers<T>, T> {
    return new GetByKeyRequestBuilder<LtmHcmWorkers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmHcmWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmHcmWorkers`.
   */
  update(entity: LtmHcmWorkers<T>): UpdateRequestBuilder<LtmHcmWorkers<T>, T> {
    return new UpdateRequestBuilder<LtmHcmWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmHcmWorkers`.
   * @param dataAreaId Key property. See {@link LtmHcmWorkers.dataAreaId}.
   * @param personnelNumber Key property. See {@link LtmHcmWorkers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LtmHcmWorkers`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string
  ): DeleteRequestBuilder<LtmHcmWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmHcmWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmHcmWorkers` by taking the entity as a parameter.
   */
  delete(entity: LtmHcmWorkers<T>): DeleteRequestBuilder<LtmHcmWorkers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string
  ): DeleteRequestBuilder<LtmHcmWorkers<T>, T> {
    return new DeleteRequestBuilder<LtmHcmWorkers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmHcmWorkers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
