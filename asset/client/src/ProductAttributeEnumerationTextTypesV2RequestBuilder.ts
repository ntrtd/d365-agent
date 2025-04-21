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
import { ProductAttributeEnumerationTextTypesV2 } from './ProductAttributeEnumerationTextTypesV2';

/**
 * Request builder class for operations supported on the {@link ProductAttributeEnumerationTextTypesV2} entity.
 */
export class ProductAttributeEnumerationTextTypesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeEnumerationTextTypesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeEnumerationTextTypesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
    return new GetAllRequestBuilder<
      ProductAttributeEnumerationTextTypesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductAttributeEnumerationTextTypesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeEnumerationTextTypesV2`.
   */
  create(
    entity: ProductAttributeEnumerationTextTypesV2<T>
  ): CreateRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
    return new CreateRequestBuilder<
      ProductAttributeEnumerationTextTypesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeEnumerationTextTypesV2` entity based on its keys.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypesV2.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypesV2.enumerationNameUniqueId}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeEnumerationTextTypesV2` entity based on its keys.
   */
  getByKey(
    enumerationName: DeserializedType<T, 'Edm.String'>,
    enumerationNameUniqueId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductAttributeEnumerationTextTypesV2<T>,
      T
    >(this.entityApi, {
      EnumerationName: enumerationName,
      EnumerationNameUniqueID: enumerationNameUniqueId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeEnumerationTextTypesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeEnumerationTextTypesV2`.
   */
  update(
    entity: ProductAttributeEnumerationTextTypesV2<T>
  ): UpdateRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
    return new UpdateRequestBuilder<
      ProductAttributeEnumerationTextTypesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypesV2`.
   * @param enumerationName Key property. See {@link ProductAttributeEnumerationTextTypesV2.enumerationName}.
   * @param enumerationNameUniqueId Key property. See {@link ProductAttributeEnumerationTextTypesV2.enumerationNameUniqueId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypesV2`.
   */
  delete(
    enumerationName: string,
    enumerationNameUniqueId: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeEnumerationTextTypesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeEnumerationTextTypesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeEnumerationTextTypesV2<T>
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T>;
  delete(
    enumerationNameOrEntity: any,
    enumerationNameUniqueId?: number
  ): DeleteRequestBuilder<ProductAttributeEnumerationTextTypesV2<T>, T> {
    return new DeleteRequestBuilder<
      ProductAttributeEnumerationTextTypesV2<T>,
      T
    >(
      this.entityApi,
      enumerationNameOrEntity instanceof ProductAttributeEnumerationTextTypesV2
        ? enumerationNameOrEntity
        : {
            EnumerationName: enumerationNameOrEntity!,
            EnumerationNameUniqueID: enumerationNameUniqueId!
          }
    );
  }
}
