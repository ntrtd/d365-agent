/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ArchiveMarkedRecords } from './ArchiveMarkedRecords';

/**
 * Request builder class for operations supported on the {@link ArchiveMarkedRecords} entity.
 */
export class ArchiveMarkedRecordsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ArchiveMarkedRecords<T>, T> {
  /**
   * Returns a request builder for querying all `ArchiveMarkedRecords` entities.
   * @returns A request builder for creating requests to retrieve all `ArchiveMarkedRecords` entities.
   */
  getAll(): GetAllRequestBuilder<ArchiveMarkedRecords<T>, T> {
    return new GetAllRequestBuilder<ArchiveMarkedRecords<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ArchiveMarkedRecords` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ArchiveMarkedRecords`.
   */
  create(
    entity: ArchiveMarkedRecords<T>
  ): CreateRequestBuilder<ArchiveMarkedRecords<T>, T> {
    return new CreateRequestBuilder<ArchiveMarkedRecords<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ArchiveMarkedRecords` entity based on its keys.
   * @param archiveRunId Key property. See {@link ArchiveMarkedRecords.archiveRunId}.
   * @param archiveBundleId Key property. See {@link ArchiveMarkedRecords.archiveBundleId}.
   * @param entityLogicalName Key property. See {@link ArchiveMarkedRecords.entityLogicalName}.
   * @param recordId Key property. See {@link ArchiveMarkedRecords.recordId}.
   * @returns A request builder for creating requests to retrieve one `ArchiveMarkedRecords` entity based on its keys.
   */
  getByKey(
    archiveRunId: DeserializedType<T, 'Edm.String'>,
    archiveBundleId: DeserializedType<T, 'Edm.String'>,
    entityLogicalName: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ArchiveMarkedRecords<T>, T> {
    return new GetByKeyRequestBuilder<ArchiveMarkedRecords<T>, T>(
      this.entityApi,
      {
        ArchiveRunId: archiveRunId,
        ArchiveBundleId: archiveBundleId,
        EntityLogicalName: entityLogicalName,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ArchiveMarkedRecords`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ArchiveMarkedRecords`.
   */
  update(
    entity: ArchiveMarkedRecords<T>
  ): UpdateRequestBuilder<ArchiveMarkedRecords<T>, T> {
    return new UpdateRequestBuilder<ArchiveMarkedRecords<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ArchiveMarkedRecords`.
   * @param archiveRunId Key property. See {@link ArchiveMarkedRecords.archiveRunId}.
   * @param archiveBundleId Key property. See {@link ArchiveMarkedRecords.archiveBundleId}.
   * @param entityLogicalName Key property. See {@link ArchiveMarkedRecords.entityLogicalName}.
   * @param recordId Key property. See {@link ArchiveMarkedRecords.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ArchiveMarkedRecords`.
   */
  delete(
    archiveRunId: string,
    archiveBundleId: string,
    entityLogicalName: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ArchiveMarkedRecords<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ArchiveMarkedRecords`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ArchiveMarkedRecords` by taking the entity as a parameter.
   */
  delete(
    entity: ArchiveMarkedRecords<T>
  ): DeleteRequestBuilder<ArchiveMarkedRecords<T>, T>;
  delete(
    archiveRunIdOrEntity: any,
    archiveBundleId?: string,
    entityLogicalName?: string,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ArchiveMarkedRecords<T>, T> {
    return new DeleteRequestBuilder<ArchiveMarkedRecords<T>, T>(
      this.entityApi,
      archiveRunIdOrEntity instanceof ArchiveMarkedRecords
        ? archiveRunIdOrEntity
        : {
            ArchiveRunId: archiveRunIdOrEntity!,
            ArchiveBundleId: archiveBundleId!,
            EntityLogicalName: entityLogicalName!,
            RecordId: recordId!
          }
    );
  }
}
