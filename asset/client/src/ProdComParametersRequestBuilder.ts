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
import { ProdComParameters } from './ProdComParameters';

/**
 * Request builder class for operations supported on the {@link ProdComParameters} entity.
 */
export class ProdComParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProdComParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ProdComParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ProdComParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ProdComParameters<T>, T> {
    return new GetAllRequestBuilder<ProdComParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProdComParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProdComParameters`.
   */
  create(
    entity: ProdComParameters<T>
  ): CreateRequestBuilder<ProdComParameters<T>, T> {
    return new CreateRequestBuilder<ProdComParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProdComParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProdComParameters.dataAreaId}.
   * @param id Key property. See {@link ProdComParameters.id}.
   * @returns A request builder for creating requests to retrieve one `ProdComParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProdComParameters<T>, T> {
    return new GetByKeyRequestBuilder<ProdComParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProdComParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProdComParameters`.
   */
  update(
    entity: ProdComParameters<T>
  ): UpdateRequestBuilder<ProdComParameters<T>, T> {
    return new UpdateRequestBuilder<ProdComParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProdComParameters`.
   * @param dataAreaId Key property. See {@link ProdComParameters.dataAreaId}.
   * @param id Key property. See {@link ProdComParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `ProdComParameters`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<ProdComParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProdComParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProdComParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ProdComParameters<T>
  ): DeleteRequestBuilder<ProdComParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<ProdComParameters<T>, T> {
    return new DeleteRequestBuilder<ProdComParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProdComParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
