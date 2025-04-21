/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { MultiSourcePolicyAssignments } from './MultiSourcePolicyAssignments';

/**
 * Request builder class for operations supported on the {@link MultiSourcePolicyAssignments} entity.
 */
export class MultiSourcePolicyAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultiSourcePolicyAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `MultiSourcePolicyAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `MultiSourcePolicyAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<MultiSourcePolicyAssignments<T>, T> {
    return new GetAllRequestBuilder<MultiSourcePolicyAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultiSourcePolicyAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiSourcePolicyAssignments`.
   */
  create(
    entity: MultiSourcePolicyAssignments<T>
  ): CreateRequestBuilder<MultiSourcePolicyAssignments<T>, T> {
    return new CreateRequestBuilder<MultiSourcePolicyAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultiSourcePolicyAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultiSourcePolicyAssignments.dataAreaId}.
   * @param itemNumber Key property. See {@link MultiSourcePolicyAssignments.itemNumber}.
   * @param validFromDate Key property. See {@link MultiSourcePolicyAssignments.validFromDate}.
   * @returns A request builder for creating requests to retrieve one `MultiSourcePolicyAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<MultiSourcePolicyAssignments<T>, T> {
    return new GetByKeyRequestBuilder<MultiSourcePolicyAssignments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ValidFromDate: validFromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultiSourcePolicyAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiSourcePolicyAssignments`.
   */
  update(
    entity: MultiSourcePolicyAssignments<T>
  ): UpdateRequestBuilder<MultiSourcePolicyAssignments<T>, T> {
    return new UpdateRequestBuilder<MultiSourcePolicyAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicyAssignments`.
   * @param dataAreaId Key property. See {@link MultiSourcePolicyAssignments.dataAreaId}.
   * @param itemNumber Key property. See {@link MultiSourcePolicyAssignments.itemNumber}.
   * @param validFromDate Key property. See {@link MultiSourcePolicyAssignments.validFromDate}.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicyAssignments`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    validFromDate: Moment
  ): DeleteRequestBuilder<MultiSourcePolicyAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultiSourcePolicyAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourcePolicyAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: MultiSourcePolicyAssignments<T>
  ): DeleteRequestBuilder<MultiSourcePolicyAssignments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    validFromDate?: Moment
  ): DeleteRequestBuilder<MultiSourcePolicyAssignments<T>, T> {
    return new DeleteRequestBuilder<MultiSourcePolicyAssignments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultiSourcePolicyAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ValidFromDate: validFromDate!
          }
    );
  }
}
