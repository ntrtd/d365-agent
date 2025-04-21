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
import { ProductOwnerWorkers } from './ProductOwnerWorkers';

/**
 * Request builder class for operations supported on the {@link ProductOwnerWorkers} entity.
 */
export class ProductOwnerWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductOwnerWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `ProductOwnerWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `ProductOwnerWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<ProductOwnerWorkers<T>, T> {
    return new GetAllRequestBuilder<ProductOwnerWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductOwnerWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductOwnerWorkers`.
   */
  create(
    entity: ProductOwnerWorkers<T>
  ): CreateRequestBuilder<ProductOwnerWorkers<T>, T> {
    return new CreateRequestBuilder<ProductOwnerWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductOwnerWorkers` entity based on its keys.
   * @param productOwnerId Key property. See {@link ProductOwnerWorkers.productOwnerId}.
   * @param assignedPersonnelNumber Key property. See {@link ProductOwnerWorkers.assignedPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductOwnerWorkers` entity based on its keys.
   */
  getByKey(
    productOwnerId: DeserializedType<T, 'Edm.String'>,
    assignedPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductOwnerWorkers<T>, T> {
    return new GetByKeyRequestBuilder<ProductOwnerWorkers<T>, T>(
      this.entityApi,
      {
        ProductOwnerId: productOwnerId,
        AssignedPersonnelNumber: assignedPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductOwnerWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductOwnerWorkers`.
   */
  update(
    entity: ProductOwnerWorkers<T>
  ): UpdateRequestBuilder<ProductOwnerWorkers<T>, T> {
    return new UpdateRequestBuilder<ProductOwnerWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductOwnerWorkers`.
   * @param productOwnerId Key property. See {@link ProductOwnerWorkers.productOwnerId}.
   * @param assignedPersonnelNumber Key property. See {@link ProductOwnerWorkers.assignedPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductOwnerWorkers`.
   */
  delete(
    productOwnerId: string,
    assignedPersonnelNumber: string
  ): DeleteRequestBuilder<ProductOwnerWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductOwnerWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductOwnerWorkers` by taking the entity as a parameter.
   */
  delete(
    entity: ProductOwnerWorkers<T>
  ): DeleteRequestBuilder<ProductOwnerWorkers<T>, T>;
  delete(
    productOwnerIdOrEntity: any,
    assignedPersonnelNumber?: string
  ): DeleteRequestBuilder<ProductOwnerWorkers<T>, T> {
    return new DeleteRequestBuilder<ProductOwnerWorkers<T>, T>(
      this.entityApi,
      productOwnerIdOrEntity instanceof ProductOwnerWorkers
        ? productOwnerIdOrEntity
        : {
            ProductOwnerId: productOwnerIdOrEntity!,
            AssignedPersonnelNumber: assignedPersonnelNumber!
          }
    );
  }
}
