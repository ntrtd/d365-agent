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
import { HazardousMaterialStowages } from './HazardousMaterialStowages';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialStowages} entity.
 */
export class HazardousMaterialStowagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialStowages<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialStowages` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialStowages` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialStowages<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialStowages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialStowages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialStowages`.
   */
  create(
    entity: HazardousMaterialStowages<T>
  ): CreateRequestBuilder<HazardousMaterialStowages<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialStowages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialStowages` entity based on its keys.
   * @param stowageCode Key property. See {@link HazardousMaterialStowages.stowageCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialStowages` entity based on its keys.
   */
  getByKey(
    stowageCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialStowages<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialStowages<T>, T>(
      this.entityApi,
      { StowageCode: stowageCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialStowages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialStowages`.
   */
  update(
    entity: HazardousMaterialStowages<T>
  ): UpdateRequestBuilder<HazardousMaterialStowages<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialStowages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialStowages`.
   * @param stowageCode Key property. See {@link HazardousMaterialStowages.stowageCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialStowages`.
   */
  delete(
    stowageCode: string
  ): DeleteRequestBuilder<HazardousMaterialStowages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialStowages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialStowages` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialStowages<T>
  ): DeleteRequestBuilder<HazardousMaterialStowages<T>, T>;
  delete(
    stowageCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialStowages<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialStowages<T>, T>(
      this.entityApi,
      stowageCodeOrEntity instanceof HazardousMaterialStowages
        ? stowageCodeOrEntity
        : { StowageCode: stowageCodeOrEntity! }
    );
  }
}
