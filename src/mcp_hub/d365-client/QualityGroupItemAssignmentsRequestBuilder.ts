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
import { QualityGroupItemAssignments } from './QualityGroupItemAssignments';

/**
 * Request builder class for operations supported on the {@link QualityGroupItemAssignments} entity.
 */
export class QualityGroupItemAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QualityGroupItemAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `QualityGroupItemAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `QualityGroupItemAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<QualityGroupItemAssignments<T>, T> {
    return new GetAllRequestBuilder<QualityGroupItemAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `QualityGroupItemAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QualityGroupItemAssignments`.
   */
  create(
    entity: QualityGroupItemAssignments<T>
  ): CreateRequestBuilder<QualityGroupItemAssignments<T>, T> {
    return new CreateRequestBuilder<QualityGroupItemAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QualityGroupItemAssignments` entity based on its keys.
   * @param dataAreaId Key property. See {@link QualityGroupItemAssignments.dataAreaId}.
   * @param qualityGroupId Key property. See {@link QualityGroupItemAssignments.qualityGroupId}.
   * @param itemNumber Key property. See {@link QualityGroupItemAssignments.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `QualityGroupItemAssignments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    qualityGroupId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<QualityGroupItemAssignments<T>, T> {
    return new GetByKeyRequestBuilder<QualityGroupItemAssignments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QualityGroupId: qualityGroupId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QualityGroupItemAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QualityGroupItemAssignments`.
   */
  update(
    entity: QualityGroupItemAssignments<T>
  ): UpdateRequestBuilder<QualityGroupItemAssignments<T>, T> {
    return new UpdateRequestBuilder<QualityGroupItemAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QualityGroupItemAssignments`.
   * @param dataAreaId Key property. See {@link QualityGroupItemAssignments.dataAreaId}.
   * @param qualityGroupId Key property. See {@link QualityGroupItemAssignments.qualityGroupId}.
   * @param itemNumber Key property. See {@link QualityGroupItemAssignments.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `QualityGroupItemAssignments`.
   */
  delete(
    dataAreaId: string,
    qualityGroupId: string,
    itemNumber: string
  ): DeleteRequestBuilder<QualityGroupItemAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QualityGroupItemAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QualityGroupItemAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: QualityGroupItemAssignments<T>
  ): DeleteRequestBuilder<QualityGroupItemAssignments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    qualityGroupId?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<QualityGroupItemAssignments<T>, T> {
    return new DeleteRequestBuilder<QualityGroupItemAssignments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QualityGroupItemAssignments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QualityGroupId: qualityGroupId!,
            ItemNumber: itemNumber!
          }
    );
  }
}
