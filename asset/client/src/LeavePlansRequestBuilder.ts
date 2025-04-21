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
import { LeavePlans } from './LeavePlans';

/**
 * Request builder class for operations supported on the {@link LeavePlans} entity.
 */
export class LeavePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeavePlans<T>, T> {
  /**
   * Returns a request builder for querying all `LeavePlans` entities.
   * @returns A request builder for creating requests to retrieve all `LeavePlans` entities.
   */
  getAll(): GetAllRequestBuilder<LeavePlans<T>, T> {
    return new GetAllRequestBuilder<LeavePlans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeavePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeavePlans`.
   */
  create(entity: LeavePlans<T>): CreateRequestBuilder<LeavePlans<T>, T> {
    return new CreateRequestBuilder<LeavePlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LeavePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeavePlans.dataAreaId}.
   * @param name Key property. See {@link LeavePlans.name}.
   * @returns A request builder for creating requests to retrieve one `LeavePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeavePlans<T>, T> {
    return new GetByKeyRequestBuilder<LeavePlans<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeavePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeavePlans`.
   */
  update(entity: LeavePlans<T>): UpdateRequestBuilder<LeavePlans<T>, T> {
    return new UpdateRequestBuilder<LeavePlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LeavePlans`.
   * @param dataAreaId Key property. See {@link LeavePlans.dataAreaId}.
   * @param name Key property. See {@link LeavePlans.name}.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlans`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<LeavePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeavePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlans` by taking the entity as a parameter.
   */
  delete(entity: LeavePlans<T>): DeleteRequestBuilder<LeavePlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<LeavePlans<T>, T> {
    return new DeleteRequestBuilder<LeavePlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeavePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
