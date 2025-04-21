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
import { ProjectAllocationKeyDetails } from './ProjectAllocationKeyDetails';

/**
 * Request builder class for operations supported on the {@link ProjectAllocationKeyDetails} entity.
 */
export class ProjectAllocationKeyDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectAllocationKeyDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectAllocationKeyDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectAllocationKeyDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectAllocationKeyDetails<T>, T> {
    return new GetAllRequestBuilder<ProjectAllocationKeyDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectAllocationKeyDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectAllocationKeyDetails`.
   */
  create(
    entity: ProjectAllocationKeyDetails<T>
  ): CreateRequestBuilder<ProjectAllocationKeyDetails<T>, T> {
    return new CreateRequestBuilder<ProjectAllocationKeyDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectAllocationKeyDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectAllocationKeyDetails.dataAreaId}.
   * @param allocationKey Key property. See {@link ProjectAllocationKeyDetails.allocationKey}.
   * @param lineNumber Key property. See {@link ProjectAllocationKeyDetails.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjectAllocationKeyDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    allocationKey: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProjectAllocationKeyDetails<T>, T> {
    return new GetByKeyRequestBuilder<ProjectAllocationKeyDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AllocationKey: allocationKey,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectAllocationKeyDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectAllocationKeyDetails`.
   */
  update(
    entity: ProjectAllocationKeyDetails<T>
  ): UpdateRequestBuilder<ProjectAllocationKeyDetails<T>, T> {
    return new UpdateRequestBuilder<ProjectAllocationKeyDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectAllocationKeyDetails`.
   * @param dataAreaId Key property. See {@link ProjectAllocationKeyDetails.dataAreaId}.
   * @param allocationKey Key property. See {@link ProjectAllocationKeyDetails.allocationKey}.
   * @param lineNumber Key property. See {@link ProjectAllocationKeyDetails.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectAllocationKeyDetails`.
   */
  delete(
    dataAreaId: string,
    allocationKey: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ProjectAllocationKeyDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectAllocationKeyDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectAllocationKeyDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectAllocationKeyDetails<T>
  ): DeleteRequestBuilder<ProjectAllocationKeyDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    allocationKey?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ProjectAllocationKeyDetails<T>, T> {
    return new DeleteRequestBuilder<ProjectAllocationKeyDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectAllocationKeyDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AllocationKey: allocationKey!,
            LineNumber: lineNumber!
          }
    );
  }
}
