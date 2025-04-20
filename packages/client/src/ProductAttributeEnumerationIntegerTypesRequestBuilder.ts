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
import { ProductAttributeEnumerationIntegerTypes } from './ProductAttributeEnumerationIntegerTypes';

/**
 * Request builder class for operations supported on the {@link ProductAttributeEnumerationIntegerTypes} entity.
 */
export class ProductAttributeEnumerationIntegerTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeEnumerationIntegerTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeEnumerationIntegerTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductAttributeEnumerationIntegerTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductAttributeEnumerationIntegerTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductAttributeEnumerationIntegerTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeEnumerationIntegerTypes`.
   */
  create(
    entity: ProductAttributeEnumerationIntegerTypes<T>
  ): CreateRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T> {
    return new CreateRequestBuilder<
      ProductAttributeEnumerationIntegerTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeEnumerationIntegerTypes` entity based on its keys.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationNameUniqueId}.
   * @param enumerationIntegerValue Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationIntegerValue}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeEnumerationIntegerTypes` entity based on its keys.
   */
  getByKey(
    enumerationName: DeserializedType<T, 'Edm.String'>,
    enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>,
    enumerationIntegerValue: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductAttributeEnumerationIntegerTypes<T>,
      T
    >(this.entityApi, {
      EnumerationName: enumerationName,
      EnumerationNameUniqueID: enumerationNameUniqueId,
      EnumerationIntegerValue: enumerationIntegerValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeEnumerationIntegerTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeEnumerationIntegerTypes`.
   */
  update(
    entity: ProductAttributeEnumerationIntegerTypes<T>
  ): UpdateRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T> {
    return new UpdateRequestBuilder<
      ProductAttributeEnumerationIntegerTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationIntegerTypes`.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationNameUniqueId}.
   * @param enumerationIntegerValue Key property. See {@link ProductAttributeEnumerationIntegerTypes.enumerationIntegerValue}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationIntegerTypes`.
   */
  delete(
    enumerationName: string,
    enumerationNameUniqueId: number,
    enumerationIntegerValue: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationIntegerTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationIntegerTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeEnumerationIntegerTypes<T>
  ): DeleteRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T>;
  delete(
    enumerationNameOrEntity: any,
    enumerationNameUniqueId?: number,
    enumerationIntegerValue?: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationIntegerTypes<T>, T> {
    return new DeleteRequestBuilder<
      ProductAttributeEnumerationIntegerTypes<T>,
      T
    >(
      this.entityApi,
      enumerationNameOrEntity instanceof ProductAttributeEnumerationIntegerTypes
        ? enumerationNameOrEntity
        : {
            EnumerationName: enumerationNameOrEntity!,
            EnumerationNameUniqueID: enumerationNameUniqueId!,
            EnumerationIntegerValue: enumerationIntegerValue!
          }
    );
  }
}
