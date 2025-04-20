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
import { ValProjCategories } from './ValProjCategories';

/**
 * Request builder class for operations supported on the {@link ValProjCategories} entity.
 */
export class ValProjCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValProjCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ValProjCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ValProjCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ValProjCategories<T>, T> {
    return new GetAllRequestBuilder<ValProjCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValProjCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValProjCategories`.
   */
  create(
    entity: ValProjCategories<T>
  ): CreateRequestBuilder<ValProjCategories<T>, T> {
    return new CreateRequestBuilder<ValProjCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValProjCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ValProjCategories.dataAreaId}.
   * @param groupId Key property. See {@link ValProjCategories.groupId}.
   * @returns A request builder for creating requests to retrieve one `ValProjCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValProjCategories<T>, T> {
    return new GetByKeyRequestBuilder<ValProjCategories<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValProjCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValProjCategories`.
   */
  update(
    entity: ValProjCategories<T>
  ): UpdateRequestBuilder<ValProjCategories<T>, T> {
    return new UpdateRequestBuilder<ValProjCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValProjCategories`.
   * @param dataAreaId Key property. See {@link ValProjCategories.dataAreaId}.
   * @param groupId Key property. See {@link ValProjCategories.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ValProjCategories`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ValProjCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValProjCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValProjCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ValProjCategories<T>
  ): DeleteRequestBuilder<ValProjCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ValProjCategories<T>, T> {
    return new DeleteRequestBuilder<ValProjCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ValProjCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
