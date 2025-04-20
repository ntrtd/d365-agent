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
import { CustomerRebateAndDeductionsGroupAssignments } from './CustomerRebateAndDeductionsGroupAssignments';

/**
 * Request builder class for operations supported on the {@link CustomerRebateAndDeductionsGroupAssignments} entity.
 */
export class CustomerRebateAndDeductionsGroupAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRebateAndDeductionsGroupAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRebateAndDeductionsGroupAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<
    CustomerRebateAndDeductionsGroupAssignments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CustomerRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerRebateAndDeductionsGroupAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   */
  create(
    entity: CustomerRebateAndDeductionsGroupAssignments<T>
  ): CreateRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T> {
    return new CreateRequestBuilder<
      CustomerRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomerRebateAndDeductionsGroupAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param customerRebateAndDeductionsGroupId Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.customerRebateAndDeductionsGroupId}.
   * @param customerAccountNumber Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.customerAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerRebateAndDeductionsGroupAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerRebateAndDeductionsGroupId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T> {
    return new GetByKeyRequestBuilder<
      CustomerRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerRebateAndDeductionsGroupId: customerRebateAndDeductionsGroupId,
      CustomerAccountNumber: customerAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   */
  update(
    entity: CustomerRebateAndDeductionsGroupAssignments<T>
  ): UpdateRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T> {
    return new UpdateRequestBuilder<
      CustomerRebateAndDeductionsGroupAssignments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   * @param dataAreaId Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.dataAreaId}.
   * @param customerRebateAndDeductionsGroupId Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.customerRebateAndDeductionsGroupId}.
   * @param customerAccountNumber Key property. See {@link CustomerRebateAndDeductionsGroupAssignments.customerAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   */
  delete(
    dataAreaId: string,
    customerRebateAndDeductionsGroupId: string,
    customerAccountNumber: string
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateAndDeductionsGroupAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateAndDeductionsGroupAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRebateAndDeductionsGroupAssignments<T>
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerRebateAndDeductionsGroupId?: string,
    customerAccountNumber?: string
  ): DeleteRequestBuilder<CustomerRebateAndDeductionsGroupAssignments<T>, T> {
    return new DeleteRequestBuilder<
      CustomerRebateAndDeductionsGroupAssignments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerRebateAndDeductionsGroupAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerRebateAndDeductionsGroupId:
              customerRebateAndDeductionsGroupId!,
            CustomerAccountNumber: customerAccountNumber!
          }
    );
  }
}
