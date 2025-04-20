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
import { ProductNumberIdentifiedReleasedProductVariantExternalCodes } from './ProductNumberIdentifiedReleasedProductVariantExternalCodes';

/**
 * Request builder class for operations supported on the {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes} entity.
 */
export class ProductNumberIdentifiedReleasedProductVariantExternalCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProductNumberIdentifiedReleasedProductVariantExternalCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductNumberIdentifiedReleasedProductVariantExternalCodes` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductNumberIdentifiedReleasedProductVariantExternalCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   */
  create(
    entity: ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>
  ): CreateRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductNumberIdentifiedReleasedProductVariantExternalCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.releasedProductVariantExternalCodeClassId}.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.productVariantNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductNumberIdentifiedReleasedProductVariantExternalCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    releasedProductVariantExternalCodeClassId: DeserializedType<
      T,
      'Edm.String'
    >,
    productVariantNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReleasedProductVariantExternalCodeClassId:
        releasedProductVariantExternalCodeClassId,
      ProductVariantNumber: productVariantNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   */
  update(
    entity: ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>
  ): UpdateRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.dataAreaId}.
   * @param releasedProductVariantExternalCodeClassId Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.releasedProductVariantExternalCodeClassId}.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes.productVariantNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   */
  delete(
    dataAreaId: string,
    releasedProductVariantExternalCodeClassId: string,
    productVariantNumber: string
  ): DeleteRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedReleasedProductVariantExternalCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>
  ): DeleteRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    releasedProductVariantExternalCodeClassId?: string,
    productVariantNumber?: string
  ): DeleteRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ProductNumberIdentifiedReleasedProductVariantExternalCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReleasedProductVariantExternalCodeClassId:
              releasedProductVariantExternalCodeClassId!,
            ProductVariantNumber: productVariantNumber!
          }
    );
  }
}
