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
import { ProductBarcodeAssociations } from './ProductBarcodeAssociations';

/**
 * Request builder class for operations supported on the {@link ProductBarcodeAssociations} entity.
 */
export class ProductBarcodeAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductBarcodeAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductBarcodeAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductBarcodeAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductBarcodeAssociations<T>, T> {
    return new GetAllRequestBuilder<ProductBarcodeAssociations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductBarcodeAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductBarcodeAssociations`.
   */
  create(
    entity: ProductBarcodeAssociations<T>
  ): CreateRequestBuilder<ProductBarcodeAssociations<T>, T> {
    return new CreateRequestBuilder<ProductBarcodeAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductBarcodeAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductBarcodeAssociations.dataAreaId}.
   * @param associationId Key property. See {@link ProductBarcodeAssociations.associationId}.
   * @returns A request builder for creating requests to retrieve one `ProductBarcodeAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    associationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductBarcodeAssociations<T>, T> {
    return new GetByKeyRequestBuilder<ProductBarcodeAssociations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssociationId: associationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductBarcodeAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductBarcodeAssociations`.
   */
  update(
    entity: ProductBarcodeAssociations<T>
  ): UpdateRequestBuilder<ProductBarcodeAssociations<T>, T> {
    return new UpdateRequestBuilder<ProductBarcodeAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodeAssociations`.
   * @param dataAreaId Key property. See {@link ProductBarcodeAssociations.dataAreaId}.
   * @param associationId Key property. See {@link ProductBarcodeAssociations.associationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodeAssociations`.
   */
  delete(
    dataAreaId: string,
    associationId: string
  ): DeleteRequestBuilder<ProductBarcodeAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodeAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodeAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductBarcodeAssociations<T>
  ): DeleteRequestBuilder<ProductBarcodeAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    associationId?: string
  ): DeleteRequestBuilder<ProductBarcodeAssociations<T>, T> {
    return new DeleteRequestBuilder<ProductBarcodeAssociations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductBarcodeAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssociationId: associationId!
          }
    );
  }
}
