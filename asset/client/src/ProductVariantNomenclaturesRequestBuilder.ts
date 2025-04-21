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
import { ProductVariantNomenclatures } from './ProductVariantNomenclatures';

/**
 * Request builder class for operations supported on the {@link ProductVariantNomenclatures} entity.
 */
export class ProductVariantNomenclaturesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductVariantNomenclatures<T>, T> {
  /**
   * Returns a request builder for querying all `ProductVariantNomenclatures` entities.
   * @returns A request builder for creating requests to retrieve all `ProductVariantNomenclatures` entities.
   */
  getAll(): GetAllRequestBuilder<ProductVariantNomenclatures<T>, T> {
    return new GetAllRequestBuilder<ProductVariantNomenclatures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductVariantNomenclatures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductVariantNomenclatures`.
   */
  create(
    entity: ProductVariantNomenclatures<T>
  ): CreateRequestBuilder<ProductVariantNomenclatures<T>, T> {
    return new CreateRequestBuilder<ProductVariantNomenclatures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductVariantNomenclatures` entity based on its keys.
   * @param nomenclatureName Key property. See {@link ProductVariantNomenclatures.nomenclatureName}.
   * @returns A request builder for creating requests to retrieve one `ProductVariantNomenclatures` entity based on its keys.
   */
  getByKey(
    nomenclatureName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductVariantNomenclatures<T>, T> {
    return new GetByKeyRequestBuilder<ProductVariantNomenclatures<T>, T>(
      this.entityApi,
      { NomenclatureName: nomenclatureName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductVariantNomenclatures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductVariantNomenclatures`.
   */
  update(
    entity: ProductVariantNomenclatures<T>
  ): UpdateRequestBuilder<ProductVariantNomenclatures<T>, T> {
    return new UpdateRequestBuilder<ProductVariantNomenclatures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductVariantNomenclatures`.
   * @param nomenclatureName Key property. See {@link ProductVariantNomenclatures.nomenclatureName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariantNomenclatures`.
   */
  delete(
    nomenclatureName: string
  ): DeleteRequestBuilder<ProductVariantNomenclatures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductVariantNomenclatures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductVariantNomenclatures` by taking the entity as a parameter.
   */
  delete(
    entity: ProductVariantNomenclatures<T>
  ): DeleteRequestBuilder<ProductVariantNomenclatures<T>, T>;
  delete(
    nomenclatureNameOrEntity: any
  ): DeleteRequestBuilder<ProductVariantNomenclatures<T>, T> {
    return new DeleteRequestBuilder<ProductVariantNomenclatures<T>, T>(
      this.entityApi,
      nomenclatureNameOrEntity instanceof ProductVariantNomenclatures
        ? nomenclatureNameOrEntity
        : { NomenclatureName: nomenclatureNameOrEntity! }
    );
  }
}
