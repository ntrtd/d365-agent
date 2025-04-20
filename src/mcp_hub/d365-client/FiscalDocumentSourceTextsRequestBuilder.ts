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
import { FiscalDocumentSourceTexts } from './FiscalDocumentSourceTexts';

/**
 * Request builder class for operations supported on the {@link FiscalDocumentSourceTexts} entity.
 */
export class FiscalDocumentSourceTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalDocumentSourceTexts<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalDocumentSourceTexts` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocumentSourceTexts` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalDocumentSourceTexts<T>, T> {
    return new GetAllRequestBuilder<FiscalDocumentSourceTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalDocumentSourceTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocumentSourceTexts`.
   */
  create(
    entity: FiscalDocumentSourceTexts<T>
  ): CreateRequestBuilder<FiscalDocumentSourceTexts<T>, T> {
    return new CreateRequestBuilder<FiscalDocumentSourceTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocumentSourceTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocumentSourceTexts.dataAreaId}.
   * @param fiscalDocumentText Key property. See {@link FiscalDocumentSourceTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocumentSourceTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalDocumentSourceTexts<T>, T> {
    return new GetByKeyRequestBuilder<FiscalDocumentSourceTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalDocumentText: fiscalDocumentText
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocumentSourceTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocumentSourceTexts`.
   */
  update(
    entity: FiscalDocumentSourceTexts<T>
  ): UpdateRequestBuilder<FiscalDocumentSourceTexts<T>, T> {
    return new UpdateRequestBuilder<FiscalDocumentSourceTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentSourceTexts`.
   * @param dataAreaId Key property. See {@link FiscalDocumentSourceTexts.dataAreaId}.
   * @param fiscalDocumentText Key property. See {@link FiscalDocumentSourceTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentSourceTexts`.
   */
  delete(
    dataAreaId: string,
    fiscalDocumentText: string
  ): DeleteRequestBuilder<FiscalDocumentSourceTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentSourceTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentSourceTexts` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocumentSourceTexts<T>
  ): DeleteRequestBuilder<FiscalDocumentSourceTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalDocumentText?: string
  ): DeleteRequestBuilder<FiscalDocumentSourceTexts<T>, T> {
    return new DeleteRequestBuilder<FiscalDocumentSourceTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalDocumentSourceTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalDocumentText: fiscalDocumentText!
          }
    );
  }
}
