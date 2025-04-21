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
import { EngineeringProductCategoryDetails } from './EngineeringProductCategoryDetails';

/**
 * Request builder class for operations supported on the {@link EngineeringProductCategoryDetails} entity.
 */
export class EngineeringProductCategoryDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductCategoryDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductCategoryDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductCategoryDetails` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringProductCategoryDetails<T>, T> {
    return new GetAllRequestBuilder<EngineeringProductCategoryDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringProductCategoryDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductCategoryDetails`.
   */
  create(
    entity: EngineeringProductCategoryDetails<T>
  ): CreateRequestBuilder<EngineeringProductCategoryDetails<T>, T> {
    return new CreateRequestBuilder<EngineeringProductCategoryDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductCategoryDetails` entity based on its keys.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryDetails.engineeringProductCategoryName}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductCategoryDetails` entity based on its keys.
   */
  getByKey(
    engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductCategoryDetails<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringProductCategoryDetails<T>, T>(
      this.entityApi,
      { EngineeringProductCategoryName: engineeringProductCategoryName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductCategoryDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductCategoryDetails`.
   */
  update(
    entity: EngineeringProductCategoryDetails<T>
  ): UpdateRequestBuilder<EngineeringProductCategoryDetails<T>, T> {
    return new UpdateRequestBuilder<EngineeringProductCategoryDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryDetails`.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryDetails.engineeringProductCategoryName}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryDetails`.
   */
  delete(
    engineeringProductCategoryName: string
  ): DeleteRequestBuilder<EngineeringProductCategoryDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductCategoryDetails<T>
  ): DeleteRequestBuilder<EngineeringProductCategoryDetails<T>, T>;
  delete(
    engineeringProductCategoryNameOrEntity: any
  ): DeleteRequestBuilder<EngineeringProductCategoryDetails<T>, T> {
    return new DeleteRequestBuilder<EngineeringProductCategoryDetails<T>, T>(
      this.entityApi,
      engineeringProductCategoryNameOrEntity instanceof
      EngineeringProductCategoryDetails
        ? engineeringProductCategoryNameOrEntity
        : {
            EngineeringProductCategoryName:
              engineeringProductCategoryNameOrEntity!
          }
    );
  }
}
