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
import { ReleasedProductRebateAndDeductionsGroupAssignments } from './ReleasedProductRebateAndDeductionsGroupAssignments';

/**
 * Request builder class for operations supported on the {@link ReleasedProductRebateAndDeductionsGroupAssignments} entity.
 */
export class ReleasedProductRebateAndDeductionsGroupAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ReleasedProductRebateAndDeductionsGroupAssignments<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ReleasedProductRebateAndDeductionsGroupAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductRebateAndDeductionsGroupAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedProductRebateAndDeductionsGroupAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   */
  create(
    entity: ReleasedProductRebateAndDeductionsGroupAssignments<T>
  ): CreateRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new CreateRequestBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductRebateAndDeductionsGroupAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param productRebateAndDeductionsGroupId Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.productRebateAndDeductionsGroupId}.
   * @param itemNumber Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductRebateAndDeductionsGroupAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductRebateAndDeductionsGroupId: productRebateAndDeductionsGroupId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   */
  update(
    entity: ReleasedProductRebateAndDeductionsGroupAssignments<T>
  ): UpdateRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   * @param dataAreaId Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param productRebateAndDeductionsGroupId Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.productRebateAndDeductionsGroupId}.
   * @param itemNumber Key property. See {@link ReleasedProductRebateAndDeductionsGroupAssignments.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   */
  delete(
    dataAreaId: string,
    productRebateAndDeductionsGroupId: string,
    itemNumber: string
  ): DeleteRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductRebateAndDeductionsGroupAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductRebateAndDeductionsGroupAssignments<T>
  ): DeleteRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    productRebateAndDeductionsGroupId?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<
    ReleasedProductRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ReleasedProductRebateAndDeductionsGroupAssignments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ReleasedProductRebateAndDeductionsGroupAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductRebateAndDeductionsGroupId:
              productRebateAndDeductionsGroupId!,
            ItemNumber: itemNumber!
          }
    );
  }
}
