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
import { EngineeringChangeRequestProducts } from './EngineeringChangeRequestProducts';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeRequestProducts} entity.
 */
export class EngineeringChangeRequestProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeRequestProducts<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeRequestProducts` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeRequestProducts` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeRequestProducts<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeRequestProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeRequestProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeRequestProducts`.
   */
  create(
    entity: EngineeringChangeRequestProducts<T>
  ): CreateRequestBuilder<EngineeringChangeRequestProducts<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeRequestProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeRequestProducts` entity based on its keys.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestProducts.engineeringChangeRequestNumber}.
   * @param productNumber Key property. See {@link EngineeringChangeRequestProducts.productNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeRequestProducts` entity based on its keys.
   */
  getByKey(
    engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeRequestProducts<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeRequestProducts<T>, T>(
      this.entityApi,
      {
        EngineeringChangeRequestNumber: engineeringChangeRequestNumber,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeRequestProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeRequestProducts`.
   */
  update(
    entity: EngineeringChangeRequestProducts<T>
  ): UpdateRequestBuilder<EngineeringChangeRequestProducts<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeRequestProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestProducts`.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestProducts.engineeringChangeRequestNumber}.
   * @param productNumber Key property. See {@link EngineeringChangeRequestProducts.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestProducts`.
   */
  delete(
    engineeringChangeRequestNumber: string,
    productNumber: string
  ): DeleteRequestBuilder<EngineeringChangeRequestProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestProducts` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeRequestProducts<T>
  ): DeleteRequestBuilder<EngineeringChangeRequestProducts<T>, T>;
  delete(
    engineeringChangeRequestNumberOrEntity: any,
    productNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeRequestProducts<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeRequestProducts<T>, T>(
      this.entityApi,
      engineeringChangeRequestNumberOrEntity instanceof
      EngineeringChangeRequestProducts
        ? engineeringChangeRequestNumberOrEntity
        : {
            EngineeringChangeRequestNumber:
              engineeringChangeRequestNumberOrEntity!,
            ProductNumber: productNumber!
          }
    );
  }
}
