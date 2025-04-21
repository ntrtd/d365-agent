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
import { Kitting_KitHeaders } from './Kitting_KitHeaders';

/**
 * Request builder class for operations supported on the {@link Kitting_KitHeaders} entity.
 */
export class Kitting_KitHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_KitHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_KitHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_KitHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_KitHeaders<T>, T> {
    return new GetAllRequestBuilder<Kitting_KitHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Kitting_KitHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_KitHeaders`.
   */
  create(
    entity: Kitting_KitHeaders<T>
  ): CreateRequestBuilder<Kitting_KitHeaders<T>, T> {
    return new CreateRequestBuilder<Kitting_KitHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_KitHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_KitHeaders.dataAreaId}.
   * @param kitId Key property. See {@link Kitting_KitHeaders.kitId}.
   * @returns A request builder for creating requests to retrieve one `Kitting_KitHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_KitHeaders<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_KitHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        KitId: kitId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_KitHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_KitHeaders`.
   */
  update(
    entity: Kitting_KitHeaders<T>
  ): UpdateRequestBuilder<Kitting_KitHeaders<T>, T> {
    return new UpdateRequestBuilder<Kitting_KitHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_KitHeaders`.
   * @param dataAreaId Key property. See {@link Kitting_KitHeaders.dataAreaId}.
   * @param kitId Key property. See {@link Kitting_KitHeaders.kitId}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_KitHeaders`.
   */
  delete(
    dataAreaId: string,
    kitId: string
  ): DeleteRequestBuilder<Kitting_KitHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_KitHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_KitHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_KitHeaders<T>
  ): DeleteRequestBuilder<Kitting_KitHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitId?: string
  ): DeleteRequestBuilder<Kitting_KitHeaders<T>, T> {
    return new DeleteRequestBuilder<Kitting_KitHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_KitHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitId: kitId!
          }
    );
  }
}
