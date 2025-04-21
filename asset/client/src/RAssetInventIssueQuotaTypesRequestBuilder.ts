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
import { RAssetInventIssueQuotaTypes } from './RAssetInventIssueQuotaTypes';

/**
 * Request builder class for operations supported on the {@link RAssetInventIssueQuotaTypes} entity.
 */
export class RAssetInventIssueQuotaTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetInventIssueQuotaTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetInventIssueQuotaTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
    return new GetAllRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RAssetInventIssueQuotaTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetInventIssueQuotaTypes`.
   */
  create(
    entity: RAssetInventIssueQuotaTypes<T>
  ): CreateRequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
    return new CreateRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetInventIssueQuotaTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetInventIssueQuotaTypes.dataAreaId}.
   * @param typeOfRate Key property. See {@link RAssetInventIssueQuotaTypes.typeOfRate}.
   * @returns A request builder for creating requests to retrieve one `RAssetInventIssueQuotaTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeOfRate: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
    return new GetByKeyRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeOfRate: typeOfRate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetInventIssueQuotaTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetInventIssueQuotaTypes`.
   */
  update(
    entity: RAssetInventIssueQuotaTypes<T>
  ): UpdateRequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
    return new UpdateRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetInventIssueQuotaTypes`.
   * @param dataAreaId Key property. See {@link RAssetInventIssueQuotaTypes.dataAreaId}.
   * @param typeOfRate Key property. See {@link RAssetInventIssueQuotaTypes.typeOfRate}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetInventIssueQuotaTypes`.
   */
  delete(
    dataAreaId: string,
    typeOfRate: string
  ): DeleteRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetInventIssueQuotaTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetInventIssueQuotaTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetInventIssueQuotaTypes<T>
  ): DeleteRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeOfRate?: string
  ): DeleteRequestBuilder<RAssetInventIssueQuotaTypes<T>, T> {
    return new DeleteRequestBuilder<RAssetInventIssueQuotaTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetInventIssueQuotaTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeOfRate: typeOfRate!
          }
    );
  }
}
