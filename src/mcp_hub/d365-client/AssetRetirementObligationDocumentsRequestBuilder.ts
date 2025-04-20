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
import { AssetRetirementObligationDocuments } from './AssetRetirementObligationDocuments';

/**
 * Request builder class for operations supported on the {@link AssetRetirementObligationDocuments} entity.
 */
export class AssetRetirementObligationDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetRetirementObligationDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `AssetRetirementObligationDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `AssetRetirementObligationDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<AssetRetirementObligationDocuments<T>, T> {
    return new GetAllRequestBuilder<AssetRetirementObligationDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetRetirementObligationDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetRetirementObligationDocuments`.
   */
  create(
    entity: AssetRetirementObligationDocuments<T>
  ): CreateRequestBuilder<AssetRetirementObligationDocuments<T>, T> {
    return new CreateRequestBuilder<AssetRetirementObligationDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetRetirementObligationDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetRetirementObligationDocuments.dataAreaId}.
   * @param documentId Key property. See {@link AssetRetirementObligationDocuments.documentId}.
   * @returns A request builder for creating requests to retrieve one `AssetRetirementObligationDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetRetirementObligationDocuments<T>, T> {
    return new GetByKeyRequestBuilder<AssetRetirementObligationDocuments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentId: documentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetRetirementObligationDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetRetirementObligationDocuments`.
   */
  update(
    entity: AssetRetirementObligationDocuments<T>
  ): UpdateRequestBuilder<AssetRetirementObligationDocuments<T>, T> {
    return new UpdateRequestBuilder<AssetRetirementObligationDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetRetirementObligationDocuments`.
   * @param dataAreaId Key property. See {@link AssetRetirementObligationDocuments.dataAreaId}.
   * @param documentId Key property. See {@link AssetRetirementObligationDocuments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirementObligationDocuments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<AssetRetirementObligationDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetRetirementObligationDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetRetirementObligationDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: AssetRetirementObligationDocuments<T>
  ): DeleteRequestBuilder<AssetRetirementObligationDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<AssetRetirementObligationDocuments<T>, T> {
    return new DeleteRequestBuilder<AssetRetirementObligationDocuments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetRetirementObligationDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
