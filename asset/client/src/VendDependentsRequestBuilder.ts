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
import { VendDependents } from './VendDependents';

/**
 * Request builder class for operations supported on the {@link VendDependents} entity.
 */
export class VendDependentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendDependents<T>, T> {
  /**
   * Returns a request builder for querying all `VendDependents` entities.
   * @returns A request builder for creating requests to retrieve all `VendDependents` entities.
   */
  getAll(): GetAllRequestBuilder<VendDependents<T>, T> {
    return new GetAllRequestBuilder<VendDependents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendDependents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendDependents`.
   */
  create(
    entity: VendDependents<T>
  ): CreateRequestBuilder<VendDependents<T>, T> {
    return new CreateRequestBuilder<VendDependents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendDependents` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendDependents.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendDependents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendDependents<T>, T> {
    return new GetByKeyRequestBuilder<VendDependents<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendDependents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendDependents`.
   */
  update(
    entity: VendDependents<T>
  ): UpdateRequestBuilder<VendDependents<T>, T> {
    return new UpdateRequestBuilder<VendDependents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendDependents`.
   * @param dataAreaId Key property. See {@link VendDependents.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendDependents`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<VendDependents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendDependents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendDependents` by taking the entity as a parameter.
   */
  delete(entity: VendDependents<T>): DeleteRequestBuilder<VendDependents<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<VendDependents<T>, T> {
    return new DeleteRequestBuilder<VendDependents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendDependents
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
