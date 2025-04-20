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
import { UbuyRequisitionWorkflowApprovers } from './UbuyRequisitionWorkflowApprovers';

/**
 * Request builder class for operations supported on the {@link UbuyRequisitionWorkflowApprovers} entity.
 */
export class UbuyRequisitionWorkflowApproversRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
  /**
   * Returns a request builder for querying all `UbuyRequisitionWorkflowApprovers` entities.
   * @returns A request builder for creating requests to retrieve all `UbuyRequisitionWorkflowApprovers` entities.
   */
  getAll(): GetAllRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
    return new GetAllRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UbuyRequisitionWorkflowApprovers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UbuyRequisitionWorkflowApprovers`.
   */
  create(
    entity: UbuyRequisitionWorkflowApprovers<T>
  ): CreateRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
    return new CreateRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UbuyRequisitionWorkflowApprovers` entity based on its keys.
   * @param requisitionNumber Key property. See {@link UbuyRequisitionWorkflowApprovers.requisitionNumber}.
   * @param userId Key property. See {@link UbuyRequisitionWorkflowApprovers.userId}.
   * @returns A request builder for creating requests to retrieve one `UbuyRequisitionWorkflowApprovers` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
    return new GetByKeyRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        UserId: userId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UbuyRequisitionWorkflowApprovers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UbuyRequisitionWorkflowApprovers`.
   */
  update(
    entity: UbuyRequisitionWorkflowApprovers<T>
  ): UpdateRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
    return new UpdateRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UbuyRequisitionWorkflowApprovers`.
   * @param requisitionNumber Key property. See {@link UbuyRequisitionWorkflowApprovers.requisitionNumber}.
   * @param userId Key property. See {@link UbuyRequisitionWorkflowApprovers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `UbuyRequisitionWorkflowApprovers`.
   */
  delete(
    requisitionNumber: string,
    userId: string
  ): DeleteRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UbuyRequisitionWorkflowApprovers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UbuyRequisitionWorkflowApprovers` by taking the entity as a parameter.
   */
  delete(
    entity: UbuyRequisitionWorkflowApprovers<T>
  ): DeleteRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    userId?: string
  ): DeleteRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T> {
    return new DeleteRequestBuilder<UbuyRequisitionWorkflowApprovers<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof UbuyRequisitionWorkflowApprovers
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            UserId: userId!
          }
    );
  }
}
