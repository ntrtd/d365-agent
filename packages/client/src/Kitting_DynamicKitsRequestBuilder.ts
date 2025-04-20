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
import { Kitting_DynamicKits } from './Kitting_DynamicKits';

/**
 * Request builder class for operations supported on the {@link Kitting_DynamicKits} entity.
 */
export class Kitting_DynamicKitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_DynamicKits<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_DynamicKits` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_DynamicKits` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_DynamicKits<T>, T> {
    return new GetAllRequestBuilder<Kitting_DynamicKits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Kitting_DynamicKits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_DynamicKits`.
   */
  create(
    entity: Kitting_DynamicKits<T>
  ): CreateRequestBuilder<Kitting_DynamicKits<T>, T> {
    return new CreateRequestBuilder<Kitting_DynamicKits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_DynamicKits` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKits.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKits.dynamicKitId}.
   * @returns A request builder for creating requests to retrieve one `Kitting_DynamicKits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dynamicKitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_DynamicKits<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_DynamicKits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DynamicKitId: dynamicKitId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_DynamicKits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_DynamicKits`.
   */
  update(
    entity: Kitting_DynamicKits<T>
  ): UpdateRequestBuilder<Kitting_DynamicKits<T>, T> {
    return new UpdateRequestBuilder<Kitting_DynamicKits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKits`.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKits.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKits.dynamicKitId}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKits`.
   */
  delete(
    dataAreaId: string,
    dynamicKitId: string
  ): DeleteRequestBuilder<Kitting_DynamicKits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKits` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_DynamicKits<T>
  ): DeleteRequestBuilder<Kitting_DynamicKits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dynamicKitId?: string
  ): DeleteRequestBuilder<Kitting_DynamicKits<T>, T> {
    return new DeleteRequestBuilder<Kitting_DynamicKits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_DynamicKits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DynamicKitId: dynamicKitId!
          }
    );
  }
}
