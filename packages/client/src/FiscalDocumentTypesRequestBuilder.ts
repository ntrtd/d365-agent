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
import { FiscalDocumentTypes } from './FiscalDocumentTypes';

/**
 * Request builder class for operations supported on the {@link FiscalDocumentTypes} entity.
 */
export class FiscalDocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalDocumentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalDocumentTypes<T>, T> {
    return new GetAllRequestBuilder<FiscalDocumentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalDocumentTypes`.
   */
  create(
    entity: FiscalDocumentTypes<T>
  ): CreateRequestBuilder<FiscalDocumentTypes<T>, T> {
    return new CreateRequestBuilder<FiscalDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalDocumentTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypes.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypes.fiscalEstablishmentId}.
   * @param fiscalDocumentType Key property. See {@link FiscalDocumentTypes.fiscalDocumentType}.
   * @returns A request builder for creating requests to retrieve one `FiscalDocumentTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalEstablishmentId: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalDocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<FiscalDocumentTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalEstablishmentId: fiscalEstablishmentId,
        FiscalDocumentType: fiscalDocumentType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalDocumentTypes`.
   */
  update(
    entity: FiscalDocumentTypes<T>
  ): UpdateRequestBuilder<FiscalDocumentTypes<T>, T> {
    return new UpdateRequestBuilder<FiscalDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypes`.
   * @param dataAreaId Key property. See {@link FiscalDocumentTypes.dataAreaId}.
   * @param fiscalEstablishmentId Key property. See {@link FiscalDocumentTypes.fiscalEstablishmentId}.
   * @param fiscalDocumentType Key property. See {@link FiscalDocumentTypes.fiscalDocumentType}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypes`.
   */
  delete(
    dataAreaId: string,
    fiscalEstablishmentId: string,
    fiscalDocumentType: string
  ): DeleteRequestBuilder<FiscalDocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalDocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalDocumentTypes<T>
  ): DeleteRequestBuilder<FiscalDocumentTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalEstablishmentId?: string,
    fiscalDocumentType?: string
  ): DeleteRequestBuilder<FiscalDocumentTypes<T>, T> {
    return new DeleteRequestBuilder<FiscalDocumentTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalDocumentTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalEstablishmentId: fiscalEstablishmentId!,
            FiscalDocumentType: fiscalDocumentType!
          }
    );
  }
}
