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
import { AssetParametersProposalJournalNames } from './AssetParametersProposalJournalNames';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * Request builder class for operations supported on the {@link AssetParametersProposalJournalNames} entity.
 */
export class AssetParametersProposalJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetParametersProposalJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `AssetParametersProposalJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `AssetParametersProposalJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<AssetParametersProposalJournalNames<T>, T> {
    return new GetAllRequestBuilder<AssetParametersProposalJournalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetParametersProposalJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetParametersProposalJournalNames`.
   */
  create(
    entity: AssetParametersProposalJournalNames<T>
  ): CreateRequestBuilder<AssetParametersProposalJournalNames<T>, T> {
    return new CreateRequestBuilder<AssetParametersProposalJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetParametersProposalJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetParametersProposalJournalNames.dataAreaId}.
   * @param assetParameters Key property. See {@link AssetParametersProposalJournalNames.assetParameters}.
   * @param postingType Key property. See {@link AssetParametersProposalJournalNames.postingType}.
   * @returns A request builder for creating requests to retrieve one `AssetParametersProposalJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetParameters: DeserializedType<T, 'Edm.Int32'>,
    postingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CurrentOperationsTax'
    >
  ): GetByKeyRequestBuilder<AssetParametersProposalJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetParametersProposalJournalNames<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AssetParameters: assetParameters,
      PostingType: postingType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetParametersProposalJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetParametersProposalJournalNames`.
   */
  update(
    entity: AssetParametersProposalJournalNames<T>
  ): UpdateRequestBuilder<AssetParametersProposalJournalNames<T>, T> {
    return new UpdateRequestBuilder<AssetParametersProposalJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetParametersProposalJournalNames`.
   * @param dataAreaId Key property. See {@link AssetParametersProposalJournalNames.dataAreaId}.
   * @param assetParameters Key property. See {@link AssetParametersProposalJournalNames.assetParameters}.
   * @param postingType Key property. See {@link AssetParametersProposalJournalNames.postingType}.
   * @returns A request builder for creating requests that delete an entity of type `AssetParametersProposalJournalNames`.
   */
  delete(
    dataAreaId: string,
    assetParameters: number,
    postingType: CurrentOperationsTax
  ): DeleteRequestBuilder<AssetParametersProposalJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetParametersProposalJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetParametersProposalJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: AssetParametersProposalJournalNames<T>
  ): DeleteRequestBuilder<AssetParametersProposalJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetParameters?: number,
    postingType?: CurrentOperationsTax
  ): DeleteRequestBuilder<AssetParametersProposalJournalNames<T>, T> {
    return new DeleteRequestBuilder<AssetParametersProposalJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetParametersProposalJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetParameters: assetParameters!,
            PostingType: postingType!
          }
    );
  }
}
