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
import { ValueModelSetups } from './ValueModelSetups';

/**
 * Request builder class for operations supported on the {@link ValueModelSetups} entity.
 */
export class ValueModelSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueModelSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ValueModelSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ValueModelSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ValueModelSetups<T>, T> {
    return new GetAllRequestBuilder<ValueModelSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValueModelSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueModelSetups`.
   */
  create(
    entity: ValueModelSetups<T>
  ): CreateRequestBuilder<ValueModelSetups<T>, T> {
    return new CreateRequestBuilder<ValueModelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValueModelSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ValueModelSetups.dataAreaId}.
   * @param valueModelId Key property. See {@link ValueModelSetups.valueModelId}.
   * @returns A request builder for creating requests to retrieve one `ValueModelSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    valueModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValueModelSetups<T>, T> {
    return new GetByKeyRequestBuilder<ValueModelSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ValueModelId: valueModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValueModelSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueModelSetups`.
   */
  update(
    entity: ValueModelSetups<T>
  ): UpdateRequestBuilder<ValueModelSetups<T>, T> {
    return new UpdateRequestBuilder<ValueModelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueModelSetups`.
   * @param dataAreaId Key property. See {@link ValueModelSetups.dataAreaId}.
   * @param valueModelId Key property. See {@link ValueModelSetups.valueModelId}.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelSetups`.
   */
  delete(
    dataAreaId: string,
    valueModelId: string
  ): DeleteRequestBuilder<ValueModelSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueModelSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelSetups` by taking the entity as a parameter.
   */
  delete(
    entity: ValueModelSetups<T>
  ): DeleteRequestBuilder<ValueModelSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    valueModelId?: string
  ): DeleteRequestBuilder<ValueModelSetups<T>, T> {
    return new DeleteRequestBuilder<ValueModelSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ValueModelSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValueModelId: valueModelId!
          }
    );
  }
}
