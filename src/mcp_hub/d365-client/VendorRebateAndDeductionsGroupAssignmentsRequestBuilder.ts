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
import { VendorRebateAndDeductionsGroupAssignments } from './VendorRebateAndDeductionsGroupAssignments';

/**
 * Request builder class for operations supported on the {@link VendorRebateAndDeductionsGroupAssignments} entity.
 */
export class VendorRebateAndDeductionsGroupAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAndDeductionsGroupAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAndDeductionsGroupAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<
    VendorRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      VendorRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorRebateAndDeductionsGroupAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   */
  create(
    entity: VendorRebateAndDeductionsGroupAssignments<T>
  ): CreateRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T> {
    return new CreateRequestBuilder<
      VendorRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAndDeductionsGroupAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param vendorRebateAndDeductionsGroupId Key property. See {@link VendorRebateAndDeductionsGroupAssignments.vendorRebateAndDeductionsGroupId}.
   * @param vendorAccountNumber Key property. See {@link VendorRebateAndDeductionsGroupAssignments.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAndDeductionsGroupAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorRebateAndDeductionsGroupId: vendorRebateAndDeductionsGroupId,
      VendorAccountNumber: vendorAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   */
  update(
    entity: VendorRebateAndDeductionsGroupAssignments<T>
  ): UpdateRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T> {
    return new UpdateRequestBuilder<
      VendorRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   * @param dataAreaId Key property. See {@link VendorRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param vendorRebateAndDeductionsGroupId Key property. See {@link VendorRebateAndDeductionsGroupAssignments.vendorRebateAndDeductionsGroupId}.
   * @param vendorAccountNumber Key property. See {@link VendorRebateAndDeductionsGroupAssignments.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   */
  delete(
    dataAreaId: string,
    vendorRebateAndDeductionsGroupId: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAndDeductionsGroupAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAndDeductionsGroupAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAndDeductionsGroupAssignments<T>
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorRebateAndDeductionsGroupId?: string,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<VendorRebateAndDeductionsGroupAssignments<T>, T> {
    return new DeleteRequestBuilder<
      VendorRebateAndDeductionsGroupAssignments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAndDeductionsGroupAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorRebateAndDeductionsGroupId: vendorRebateAndDeductionsGroupId!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
