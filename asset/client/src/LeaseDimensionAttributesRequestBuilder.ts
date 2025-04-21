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
import { LeaseDimensionAttributes } from './LeaseDimensionAttributes';

/**
 * Request builder class for operations supported on the {@link LeaseDimensionAttributes} entity.
 */
export class LeaseDimensionAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseDimensionAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseDimensionAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseDimensionAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseDimensionAttributes<T>, T> {
    return new GetAllRequestBuilder<LeaseDimensionAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseDimensionAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseDimensionAttributes`.
   */
  create(
    entity: LeaseDimensionAttributes<T>
  ): CreateRequestBuilder<LeaseDimensionAttributes<T>, T> {
    return new CreateRequestBuilder<LeaseDimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseDimensionAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseDimensionAttributes.dataAreaId}.
   * @param value Key property. See {@link LeaseDimensionAttributes.value}.
   * @returns A request builder for creating requests to retrieve one `LeaseDimensionAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseDimensionAttributes<T>, T> {
    return new GetByKeyRequestBuilder<LeaseDimensionAttributes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseDimensionAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseDimensionAttributes`.
   */
  update(
    entity: LeaseDimensionAttributes<T>
  ): UpdateRequestBuilder<LeaseDimensionAttributes<T>, T> {
    return new UpdateRequestBuilder<LeaseDimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseDimensionAttributes`.
   * @param dataAreaId Key property. See {@link LeaseDimensionAttributes.dataAreaId}.
   * @param value Key property. See {@link LeaseDimensionAttributes.value}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDimensionAttributes`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<LeaseDimensionAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseDimensionAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDimensionAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseDimensionAttributes<T>
  ): DeleteRequestBuilder<LeaseDimensionAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<LeaseDimensionAttributes<T>, T> {
    return new DeleteRequestBuilder<LeaseDimensionAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseDimensionAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
