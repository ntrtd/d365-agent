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
import { Branches } from './Branches';

/**
 * Request builder class for operations supported on the {@link Branches} entity.
 */
export class BranchesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Branches<T>, T> {
  /**
   * Returns a request builder for querying all `Branches` entities.
   * @returns A request builder for creating requests to retrieve all `Branches` entities.
   */
  getAll(): GetAllRequestBuilder<Branches<T>, T> {
    return new GetAllRequestBuilder<Branches<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Branches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Branches`.
   */
  create(entity: Branches<T>): CreateRequestBuilder<Branches<T>, T> {
    return new CreateRequestBuilder<Branches<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Branches` entity based on its keys.
   * @param dataAreaId Key property. See {@link Branches.dataAreaId}.
   * @param code Key property. See {@link Branches.code}.
   * @returns A request builder for creating requests to retrieve one `Branches` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Branches<T>, T> {
    return new GetByKeyRequestBuilder<Branches<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Branches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Branches`.
   */
  update(entity: Branches<T>): UpdateRequestBuilder<Branches<T>, T> {
    return new UpdateRequestBuilder<Branches<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Branches`.
   * @param dataAreaId Key property. See {@link Branches.dataAreaId}.
   * @param code Key property. See {@link Branches.code}.
   * @returns A request builder for creating requests that delete an entity of type `Branches`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<Branches<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Branches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Branches` by taking the entity as a parameter.
   */
  delete(entity: Branches<T>): DeleteRequestBuilder<Branches<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<Branches<T>, T> {
    return new DeleteRequestBuilder<Branches<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Branches
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
