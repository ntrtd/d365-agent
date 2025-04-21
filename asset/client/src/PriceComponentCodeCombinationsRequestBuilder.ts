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
import { PriceComponentCodeCombinations } from './PriceComponentCodeCombinations';

/**
 * Request builder class for operations supported on the {@link PriceComponentCodeCombinations} entity.
 */
export class PriceComponentCodeCombinationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceComponentCodeCombinations<T>, T> {
  /**
   * Returns a request builder for querying all `PriceComponentCodeCombinations` entities.
   * @returns A request builder for creating requests to retrieve all `PriceComponentCodeCombinations` entities.
   */
  getAll(): GetAllRequestBuilder<PriceComponentCodeCombinations<T>, T> {
    return new GetAllRequestBuilder<PriceComponentCodeCombinations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceComponentCodeCombinations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceComponentCodeCombinations`.
   */
  create(
    entity: PriceComponentCodeCombinations<T>
  ): CreateRequestBuilder<PriceComponentCodeCombinations<T>, T> {
    return new CreateRequestBuilder<PriceComponentCodeCombinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceComponentCodeCombinations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceComponentCodeCombinations.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodeCombinations.name}.
   * @param priceAttributeGroupCombinationName Key property. See {@link PriceComponentCodeCombinations.priceAttributeGroupCombinationName}.
   * @returns A request builder for creating requests to retrieve one `PriceComponentCodeCombinations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceComponentCodeCombinations<T>, T> {
    return new GetByKeyRequestBuilder<PriceComponentCodeCombinations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name,
        PriceAttributeGroupCombinationName: priceAttributeGroupCombinationName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceComponentCodeCombinations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceComponentCodeCombinations`.
   */
  update(
    entity: PriceComponentCodeCombinations<T>
  ): UpdateRequestBuilder<PriceComponentCodeCombinations<T>, T> {
    return new UpdateRequestBuilder<PriceComponentCodeCombinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodeCombinations`.
   * @param dataAreaId Key property. See {@link PriceComponentCodeCombinations.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodeCombinations.name}.
   * @param priceAttributeGroupCombinationName Key property. See {@link PriceComponentCodeCombinations.priceAttributeGroupCombinationName}.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodeCombinations`.
   */
  delete(
    dataAreaId: string,
    name: string,
    priceAttributeGroupCombinationName: string
  ): DeleteRequestBuilder<PriceComponentCodeCombinations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodeCombinations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodeCombinations` by taking the entity as a parameter.
   */
  delete(
    entity: PriceComponentCodeCombinations<T>
  ): DeleteRequestBuilder<PriceComponentCodeCombinations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    priceAttributeGroupCombinationName?: string
  ): DeleteRequestBuilder<PriceComponentCodeCombinations<T>, T> {
    return new DeleteRequestBuilder<PriceComponentCodeCombinations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceComponentCodeCombinations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            PriceAttributeGroupCombinationName:
              priceAttributeGroupCombinationName!
          }
    );
  }
}
