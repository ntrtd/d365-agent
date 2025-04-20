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
import { CountingReasonCodeGroupRelations } from './CountingReasonCodeGroupRelations';

/**
 * Request builder class for operations supported on the {@link CountingReasonCodeGroupRelations} entity.
 */
export class CountingReasonCodeGroupRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
  /**
   * Returns a request builder for querying all `CountingReasonCodeGroupRelations` entities.
   * @returns A request builder for creating requests to retrieve all `CountingReasonCodeGroupRelations` entities.
   */
  getAll(): GetAllRequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
    return new GetAllRequestBuilder<CountingReasonCodeGroupRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CountingReasonCodeGroupRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CountingReasonCodeGroupRelations`.
   */
  create(
    entity: CountingReasonCodeGroupRelations<T>
  ): CreateRequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
    return new CreateRequestBuilder<CountingReasonCodeGroupRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CountingReasonCodeGroupRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link CountingReasonCodeGroupRelations.dataAreaId}.
   * @param reasonCode Key property. See {@link CountingReasonCodeGroupRelations.reasonCode}.
   * @param reasonCodeGroupName Key property. See {@link CountingReasonCodeGroupRelations.reasonCodeGroupName}.
   * @returns A request builder for creating requests to retrieve one `CountingReasonCodeGroupRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>,
    reasonCodeGroupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
    return new GetByKeyRequestBuilder<CountingReasonCodeGroupRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode,
        ReasonCodeGroupName: reasonCodeGroupName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CountingReasonCodeGroupRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CountingReasonCodeGroupRelations`.
   */
  update(
    entity: CountingReasonCodeGroupRelations<T>
  ): UpdateRequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
    return new UpdateRequestBuilder<CountingReasonCodeGroupRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CountingReasonCodeGroupRelations`.
   * @param dataAreaId Key property. See {@link CountingReasonCodeGroupRelations.dataAreaId}.
   * @param reasonCode Key property. See {@link CountingReasonCodeGroupRelations.reasonCode}.
   * @param reasonCodeGroupName Key property. See {@link CountingReasonCodeGroupRelations.reasonCodeGroupName}.
   * @returns A request builder for creating requests that delete an entity of type `CountingReasonCodeGroupRelations`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string,
    reasonCodeGroupName: string
  ): DeleteRequestBuilder<CountingReasonCodeGroupRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CountingReasonCodeGroupRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CountingReasonCodeGroupRelations` by taking the entity as a parameter.
   */
  delete(
    entity: CountingReasonCodeGroupRelations<T>
  ): DeleteRequestBuilder<CountingReasonCodeGroupRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string,
    reasonCodeGroupName?: string
  ): DeleteRequestBuilder<CountingReasonCodeGroupRelations<T>, T> {
    return new DeleteRequestBuilder<CountingReasonCodeGroupRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CountingReasonCodeGroupRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!,
            ReasonCodeGroupName: reasonCodeGroupName!
          }
    );
  }
}
