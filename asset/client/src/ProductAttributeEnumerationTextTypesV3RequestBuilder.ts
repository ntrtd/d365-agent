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
import { ProductAttributeEnumerationTextTypesV3 } from './ProductAttributeEnumerationTextTypesV3';

/**
 * Request builder class for operations supported on the {@link ProductAttributeEnumerationTextTypesV3} entity.
 */
export class ProductAttributeEnumerationTextTypesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeEnumerationTextTypesV3` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeEnumerationTextTypesV3` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
    return new GetAllRequestBuilder<
      ProductAttributeEnumerationTextTypesV3<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductAttributeEnumerationTextTypesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeEnumerationTextTypesV3`.
   */
  create(
    entity: ProductAttributeEnumerationTextTypesV3<T>
  ): CreateRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
    return new CreateRequestBuilder<
      ProductAttributeEnumerationTextTypesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeEnumerationTextTypesV3` entity based on its keys.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypesV3.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypesV3.enumerationNameUniqueId}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeEnumerationTextTypesV3` entity based on its keys.
   */
  getByKey(
    enumerationName: DeserializedType<T, 'Edm.String'>,
    enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductAttributeEnumerationTextTypesV3<T>,
      T
    >(this.entityApi, {
      EnumerationName: enumerationName,
      EnumerationNameUniqueID: enumerationNameUniqueId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeEnumerationTextTypesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeEnumerationTextTypesV3`.
   */
  update(
    entity: ProductAttributeEnumerationTextTypesV3<T>
  ): UpdateRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
    return new UpdateRequestBuilder<
      ProductAttributeEnumerationTextTypesV3<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypesV3`.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypesV3.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypesV3.enumerationNameUniqueId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypesV3`.
   */
  delete(
    enumerationName: string,
    enumerationNameUniqueId: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypesV3` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeEnumerationTextTypesV3<T>
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T>;
  delete(
    enumerationNameOrEntity: any,
    enumerationNameUniqueId?: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV3<T>, T> {
    return new DeleteRequestBuilder<
      ProductAttributeEnumerationTextTypesV3<T>,
      T
    >(
      this.entityApi,
      enumerationNameOrEntity instanceof ProductAttributeEnumerationTextTypesV3
        ? enumerationNameOrEntity
        : {
            EnumerationName: enumerationNameOrEntity!,
            EnumerationNameUniqueID: enumerationNameUniqueId!
          }
    );
  }
}
