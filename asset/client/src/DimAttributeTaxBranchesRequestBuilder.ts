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
import { DimAttributeTaxBranches } from './DimAttributeTaxBranches';

/**
 * Request builder class for operations supported on the {@link DimAttributeTaxBranches} entity.
 */
export class DimAttributeTaxBranchesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeTaxBranches<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeTaxBranches` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeTaxBranches` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeTaxBranches<T>, T> {
    return new GetAllRequestBuilder<DimAttributeTaxBranches<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeTaxBranches` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeTaxBranches`.
   */
  create(
    entity: DimAttributeTaxBranches<T>
  ): CreateRequestBuilder<DimAttributeTaxBranches<T>, T> {
    return new CreateRequestBuilder<DimAttributeTaxBranches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeTaxBranches` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeTaxBranches.dataAreaId}.
   * @param value Key property. See {@link DimAttributeTaxBranches.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeTaxBranches` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeTaxBranches<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeTaxBranches<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeTaxBranches`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeTaxBranches`.
   */
  update(
    entity: DimAttributeTaxBranches<T>
  ): UpdateRequestBuilder<DimAttributeTaxBranches<T>, T> {
    return new UpdateRequestBuilder<DimAttributeTaxBranches<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeTaxBranches`.
   * @param dataAreaId Key property. See {@link DimAttributeTaxBranches.dataAreaId}.
   * @param value Key property. See {@link DimAttributeTaxBranches.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeTaxBranches`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeTaxBranches<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeTaxBranches`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeTaxBranches` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeTaxBranches<T>
  ): DeleteRequestBuilder<DimAttributeTaxBranches<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeTaxBranches<T>, T> {
    return new DeleteRequestBuilder<DimAttributeTaxBranches<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeTaxBranches
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
