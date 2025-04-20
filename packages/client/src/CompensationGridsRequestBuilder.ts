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
import { CompensationGrids } from './CompensationGrids';

/**
 * Request builder class for operations supported on the {@link CompensationGrids} entity.
 */
export class CompensationGridsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationGrids<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationGrids` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationGrids` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationGrids<T>, T> {
    return new GetAllRequestBuilder<CompensationGrids<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationGrids` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationGrids`.
   */
  create(
    entity: CompensationGrids<T>
  ): CreateRequestBuilder<CompensationGrids<T>, T> {
    return new CreateRequestBuilder<CompensationGrids<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationGrids` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationGrids.dataAreaId}.
   * @param gridId Key property. See {@link CompensationGrids.gridId}.
   * @returns A request builder for creating requests to retrieve one `CompensationGrids` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    gridId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationGrids<T>, T> {
    return new GetByKeyRequestBuilder<CompensationGrids<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GridId: gridId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationGrids`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationGrids`.
   */
  update(
    entity: CompensationGrids<T>
  ): UpdateRequestBuilder<CompensationGrids<T>, T> {
    return new UpdateRequestBuilder<CompensationGrids<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationGrids`.
   * @param dataAreaId Key property. See {@link CompensationGrids.dataAreaId}.
   * @param gridId Key property. See {@link CompensationGrids.gridId}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationGrids`.
   */
  delete(
    dataAreaId: string,
    gridId: string
  ): DeleteRequestBuilder<CompensationGrids<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationGrids`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationGrids` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationGrids<T>
  ): DeleteRequestBuilder<CompensationGrids<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    gridId?: string
  ): DeleteRequestBuilder<CompensationGrids<T>, T> {
    return new DeleteRequestBuilder<CompensationGrids<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationGrids
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GridId: gridId!
          }
    );
  }
}
