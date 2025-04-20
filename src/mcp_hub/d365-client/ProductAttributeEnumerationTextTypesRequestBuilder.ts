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
import { ProductAttributeEnumerationTextTypes } from './ProductAttributeEnumerationTextTypes';

/**
 * Request builder class for operations supported on the {@link ProductAttributeEnumerationTextTypes} entity.
 */
export class ProductAttributeEnumerationTextTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeEnumerationTextTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeEnumerationTextTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeEnumerationTextTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeEnumerationTextTypes`.
   */
  create(
    entity: ProductAttributeEnumerationTextTypes<T>
  ): CreateRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
    return new CreateRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeEnumerationTextTypes` entity based on its keys.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationNameUniqueId}.
   * @param enumerationValue Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationValue}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeEnumerationTextTypes` entity based on its keys.
   */
  getByKey(
    enumerationName: DeserializedType<T, 'Edm.String'>,
    enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>,
    enumerationValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductAttributeEnumerationTextTypes<T>,
      T
    >(this.entityApi, {
      EnumerationName: enumerationName,
      EnumerationNameUniqueID: enumerationNameUniqueId,
      EnumerationValue: enumerationValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeEnumerationTextTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeEnumerationTextTypes`.
   */
  update(
    entity: ProductAttributeEnumerationTextTypes<T>
  ): UpdateRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypes`.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationNameUniqueId}.
   * @param enumerationValue Key property. See {@link ProductAttributeEnumerationTextTypes.enumerationValue}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypes`.
   */
  delete(
    enumerationName: string,
    enumerationNameUniqueId: number,
    enumerationValue: string
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeEnumerationTextTypes<T>
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>;
  delete(
    enumerationNameOrEntity: any,
    enumerationNameUniqueId?: number,
    enumerationValue?: string
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeEnumerationTextTypes<T>, T>(
      this.entityApi,
      enumerationNameOrEntity instanceof ProductAttributeEnumerationTextTypes
        ? enumerationNameOrEntity
        : {
            EnumerationName: enumerationNameOrEntity!,
            EnumerationNameUniqueID: enumerationNameUniqueId!,
            EnumerationValue: enumerationValue!
          }
    );
  }
}
