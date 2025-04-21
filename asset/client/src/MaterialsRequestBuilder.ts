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
import { Materials } from './Materials';

/**
 * Request builder class for operations supported on the {@link Materials} entity.
 */
export class MaterialsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Materials<T>, T> {
  /**
   * Returns a request builder for querying all `Materials` entities.
   * @returns A request builder for creating requests to retrieve all `Materials` entities.
   */
  getAll(): GetAllRequestBuilder<Materials<T>, T> {
    return new GetAllRequestBuilder<Materials<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Materials` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Materials`.
   */
  create(entity: Materials<T>): CreateRequestBuilder<Materials<T>, T> {
    return new CreateRequestBuilder<Materials<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Materials` entity based on its keys.
   * @param materialCode Key property. See {@link Materials.materialCode}.
   * @returns A request builder for creating requests to retrieve one `Materials` entity based on its keys.
   */
  getByKey(
    materialCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Materials<T>, T> {
    return new GetByKeyRequestBuilder<Materials<T>, T>(this.entityApi, {
      MaterialCode: materialCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Materials`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Materials`.
   */
  update(entity: Materials<T>): UpdateRequestBuilder<Materials<T>, T> {
    return new UpdateRequestBuilder<Materials<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Materials`.
   * @param materialCode Key property. See {@link Materials.materialCode}.
   * @returns A request builder for creating requests that delete an entity of type `Materials`.
   */
  delete(materialCode: string): DeleteRequestBuilder<Materials<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Materials`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Materials` by taking the entity as a parameter.
   */
  delete(entity: Materials<T>): DeleteRequestBuilder<Materials<T>, T>;
  delete(materialCodeOrEntity: any): DeleteRequestBuilder<Materials<T>, T> {
    return new DeleteRequestBuilder<Materials<T>, T>(
      this.entityApi,
      materialCodeOrEntity instanceof Materials
        ? materialCodeOrEntity
        : { MaterialCode: materialCodeOrEntity! }
    );
  }
}
