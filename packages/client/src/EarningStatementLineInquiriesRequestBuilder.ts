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
import { EarningStatementLineInquiries } from './EarningStatementLineInquiries';

/**
 * Request builder class for operations supported on the {@link EarningStatementLineInquiries} entity.
 */
export class EarningStatementLineInquiriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EarningStatementLineInquiries<T>, T> {
  /**
   * Returns a request builder for querying all `EarningStatementLineInquiries` entities.
   * @returns A request builder for creating requests to retrieve all `EarningStatementLineInquiries` entities.
   */
  getAll(): GetAllRequestBuilder<EarningStatementLineInquiries<T>, T> {
    return new GetAllRequestBuilder<EarningStatementLineInquiries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EarningStatementLineInquiries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EarningStatementLineInquiries`.
   */
  create(
    entity: EarningStatementLineInquiries<T>
  ): CreateRequestBuilder<EarningStatementLineInquiries<T>, T> {
    return new CreateRequestBuilder<EarningStatementLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EarningStatementLineInquiries` entity based on its keys.
   * @param dataAreaId Key property. See {@link EarningStatementLineInquiries.dataAreaId}.
   * @param documentNumber Key property. See {@link EarningStatementLineInquiries.documentNumber}.
   * @returns A request builder for creating requests to retrieve one `EarningStatementLineInquiries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EarningStatementLineInquiries<T>, T> {
    return new GetByKeyRequestBuilder<EarningStatementLineInquiries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentNumber: documentNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EarningStatementLineInquiries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EarningStatementLineInquiries`.
   */
  update(
    entity: EarningStatementLineInquiries<T>
  ): UpdateRequestBuilder<EarningStatementLineInquiries<T>, T> {
    return new UpdateRequestBuilder<EarningStatementLineInquiries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EarningStatementLineInquiries`.
   * @param dataAreaId Key property. See {@link EarningStatementLineInquiries.dataAreaId}.
   * @param documentNumber Key property. See {@link EarningStatementLineInquiries.documentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatementLineInquiries`.
   */
  delete(
    dataAreaId: string,
    documentNumber: string
  ): DeleteRequestBuilder<EarningStatementLineInquiries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EarningStatementLineInquiries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EarningStatementLineInquiries` by taking the entity as a parameter.
   */
  delete(
    entity: EarningStatementLineInquiries<T>
  ): DeleteRequestBuilder<EarningStatementLineInquiries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentNumber?: string
  ): DeleteRequestBuilder<EarningStatementLineInquiries<T>, T> {
    return new DeleteRequestBuilder<EarningStatementLineInquiries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EarningStatementLineInquiries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentNumber: documentNumber!
          }
    );
  }
}
