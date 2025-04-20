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
import { EngineeringProductVersions } from './EngineeringProductVersions';

/**
 * Request builder class for operations supported on the {@link EngineeringProductVersions} entity.
 */
export class EngineeringProductVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductVersions<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductVersions` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductVersions` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringProductVersions<T>, T> {
    return new GetAllRequestBuilder<EngineeringProductVersions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringProductVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductVersions`.
   */
  create(
    entity: EngineeringProductVersions<T>
  ): CreateRequestBuilder<EngineeringProductVersions<T>, T> {
    return new CreateRequestBuilder<EngineeringProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductVersions` entity based on its keys.
   * @param productNumber Key property. See {@link EngineeringProductVersions.productNumber}.
   * @param engineeringVersionId Key property. See {@link EngineeringProductVersions.engineeringVersionId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductVersions` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    engineeringVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringProductVersions<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringProductVersions<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        EngineeringVersionId: engineeringVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductVersions`.
   */
  update(
    entity: EngineeringProductVersions<T>
  ): UpdateRequestBuilder<EngineeringProductVersions<T>, T> {
    return new UpdateRequestBuilder<EngineeringProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersions`.
   * @param productNumber Key property. See {@link EngineeringProductVersions.productNumber}.
   * @param engineeringVersionId Key property. See {@link EngineeringProductVersions.engineeringVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersions`.
   */
  delete(
    productNumber: string,
    engineeringVersionId: string
  ): DeleteRequestBuilder<EngineeringProductVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductVersions` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductVersions<T>
  ): DeleteRequestBuilder<EngineeringProductVersions<T>, T>;
  delete(
    productNumberOrEntity: any,
    engineeringVersionId?: string
  ): DeleteRequestBuilder<EngineeringProductVersions<T>, T> {
    return new DeleteRequestBuilder<EngineeringProductVersions<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof EngineeringProductVersions
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            EngineeringVersionId: engineeringVersionId!
          }
    );
  }
}
