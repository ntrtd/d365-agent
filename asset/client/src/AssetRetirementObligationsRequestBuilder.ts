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
import { AssetRetirementObligations } from './AssetRetirementObligations';

/**
 * Request builder class for operations supported on the {@link AssetRetirementObligations} entity.
 */
export class AssetRetirementObligationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetRetirementObligations<T>, T> {
  /**
   * Returns a request builder for querying all `AssetRetirementObligations` entities.
   * @returns A request builder for creating requests to retrieve all `AssetRetirementObligations` entities.
   */
  getAll(): GetAllRequestBuilder<AssetRetirementObligations<T>, T> {
    return new GetAllRequestBuilder<AssetRetirementObligations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetRetirementObligations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetRetirementObligations`.
   */
  create(
    entity: AssetRetirementObligations<T>
  ): CreateRequestBuilder<AssetRetirementObligations<T>, T> {
    return new CreateRequestBuilder<AssetRetirementObligations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetRetirementObligations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetRetirementObligations.dataAreaId}.
   * @param assetNumber Key property. See {@link AssetRetirementObligations.assetNumber}.
   * @param book Key property. See {@link AssetRetirementObligations.book}.
   * @param documentId Key property. See {@link AssetRetirementObligations.documentId}.
   * @returns A request builder for creating requests to retrieve one `AssetRetirementObligations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetNumber: DeserializedType<T, 'Edm.String'>,
    book: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetRetirementObligations<T>, T> {
    return new GetByKeyRequestBuilder<AssetRetirementObligations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssetNumber: assetNumber,
        Book: book,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetRetirementObligations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetRetirementObligations`.
   */
  update(
    entity: AssetRetirementObligations<T>
  ): UpdateRequestBuilder<AssetRetirementObligations<T>, T> {
    return new UpdateRequestBuilder<AssetRetirementObligations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetRetirementObligations`.
   * @param dataAreaId Key property. See {@link AssetRetirementObligations.dataAreaId}.
   * @param assetNumber Key property. See {@link AssetRetirementObligations.assetNumber}.
   * @param book Key property. See {@link AssetRetirementObligations.book}.
   * @param documentId Key property. See {@link AssetRetirementObligations.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirementObligations`.
   */
  delete(
    dataAreaId: string,
    assetNumber: string,
    book: string,
    documentId: string
  ): DeleteRequestBuilder<AssetRetirementObligations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetRetirementObligations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirementObligations` by taking the entity as a parameter.
   */
  delete(
    entity: AssetRetirementObligations<T>
  ): DeleteRequestBuilder<AssetRetirementObligations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetNumber?: string,
    book?: string,
    documentId?: string
  ): DeleteRequestBuilder<AssetRetirementObligations<T>, T> {
    return new DeleteRequestBuilder<AssetRetirementObligations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetRetirementObligations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetNumber: assetNumber!,
            Book: book!,
            DocumentId: documentId!
          }
    );
  }
}
