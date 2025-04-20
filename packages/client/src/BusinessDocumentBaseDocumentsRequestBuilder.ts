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
import { BusinessDocumentBaseDocuments } from './BusinessDocumentBaseDocuments';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentBaseDocuments} entity.
 */
export class BusinessDocumentBaseDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentBaseDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentBaseDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentBaseDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentBaseDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentBaseDocuments`.
   */
  create(
    entity: BusinessDocumentBaseDocuments<T>
  ): CreateRequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentBaseDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentBaseDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentBaseDocuments.dataAreaId}.
   * @param baseDocumentRecId Key property. See {@link BusinessDocumentBaseDocuments.baseDocumentRecId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentBaseDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    baseDocumentRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentBaseDocuments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BaseDocumentRecId: baseDocumentRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentBaseDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentBaseDocuments`.
   */
  update(
    entity: BusinessDocumentBaseDocuments<T>
  ): UpdateRequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentBaseDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentBaseDocuments`.
   * @param dataAreaId Key property. See {@link BusinessDocumentBaseDocuments.dataAreaId}.
   * @param baseDocumentRecId Key property. See {@link BusinessDocumentBaseDocuments.baseDocumentRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentBaseDocuments`.
   */
  delete(
    dataAreaId: string,
    baseDocumentRecId: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentBaseDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentBaseDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentBaseDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentBaseDocuments<T>
  ): DeleteRequestBuilder<BusinessDocumentBaseDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    baseDocumentRecId?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentBaseDocuments<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentBaseDocuments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentBaseDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BaseDocumentRecId: baseDocumentRecId!
          }
    );
  }
}
